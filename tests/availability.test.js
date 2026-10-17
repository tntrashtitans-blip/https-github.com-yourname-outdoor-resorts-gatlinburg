const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { _test } = require("../netlify/functions/availability.js");

const calendar = `BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261020
DTEND;VALUE=DATE:20261024
END:VEVENT
END:VCALENDAR`;

test("marks an overlapping stay unavailable", () => {
  const status = _test.getStatus(
    calendar,
    Date.parse("2026-10-21T00:00:00Z"),
    Date.parse("2026-10-23T00:00:00Z")
  );
  assert.equal(status, "unavailable");
});

test("reports an open calendar for a same-day turnover after checkout", () => {
  const status = _test.getStatus(
    calendar,
    Date.parse("2026-10-24T00:00:00Z"),
    Date.parse("2026-10-26T00:00:00Z")
  );
  assert.equal(status, "open");
});

test("rejects invalid date ranges before fetching calendars", async () => {
  const response = await require("../netlify/functions/availability.js").handler({
    queryStringParameters: { checkIn: "2026-10-24", checkOut: "2026-10-24" }
  });
  assert.equal(response.statusCode, 400);
});

test("live endpoint covers every connected HTTP calendar", () => {
  const listingsText = fs.readFileSync(path.join(__dirname, "..", "listings.js"), "utf8");
  const connectedTitles = listingsText
    .split(/\n\s*\{\n\s*title:\s*/)
    .slice(1)
    .map((block) => ({
      title: block.match(/^"([^"]+)"/)?.[1],
      calendarUrl: block.match(/calendarUrl:\s*"([^"]*)"/)?.[1]
    }))
    .filter((listing) => listing.calendarUrl?.startsWith("http"))
    .map((listing) => listing.title);

  assert.deepEqual(connectedTitles.sort(), Object.keys(_test.CALENDAR_FEEDS).sort());
});
