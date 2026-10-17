const CALENDAR_FEEDS = {
  "Campfire Cove": "https://www.airbnb.com/calendar/ical/810381394382742436.ics?t=e5e8e90d08874eb6a15eed8162fa20e1",
  "Creekside Cove": "https://www.airbnb.com/calendar/ical/1184548442935899278.ics?t=3e5d08bc88484f5ba12b1181510b64bd",
  "Creekside Vibes": "https://www.hipcamp.com/en-US/bookings/4a7def50-dbd2-4def-9900-3ff14240e190/agenda.ics?cal=95259&s=1124856",
  "Miss Daisy's Lodge": "https://www.airbnb.com/calendar/ical/52899716.ics?t=8c13003dd29a4807bdc7692d8d72298e",
  "Miss Daisy's Place": "https://www.airbnb.com/calendar/ical/800058674372062313.ics?t=51476c8861644e3d9161a3281be200ad",
  "Miss Daisy's Retreat": "https://www.airbnb.com/calendar/ical/760019252335716213.ics?t=8a6b80bbbe1c48a580efb47b96aa3a4c",
  "Starry Nights": "https://www.airbnb.com/calendar/ical/1102477496700476874.ics?t=4906104de79f4b699986287e15f36d8e",
  "Webb Creek Camper Lot": "https://www.airbnb.com/calendar/ical/1346346061076566342.ics?t=615f14fbf8ad41c1b722a7aba846e8ca&locale=en",
  "Bearfoot Retreat": "https://www.vrbo.com/icalendar/e68783eefd844135ac91eaf22a68679a.ics?nonTentative",
  "Lot 122": "https://www.airbnb.com/calendar/ical/1598026294668799597.ics?t=473dfb38636a4d65831984c269d07c1d&locale=en",
  "Lot 206": "https://www.airbnb.com/calendar/ical/1132852757064853578.ics?t=aded50794110470a9cf9312396e035ff&locale=en",
  "Lot 9": "https://www.airbnb.com/calendar/ical/1326811340471025338.ics?t=b64e39c065f643ecbc8158de3c90e8d7&locale=en",
  "Crow's Landing RV Site": "https://www.hipcamp.com/en-US/bookings/433d2c41-55db-401c-bdd9-e71f6b1298f5/agenda.ics?cal=95319&s=636197"
};

function parseIcalDate(value) {
  if (!value) return null;
  const cleanValue = value.trim();
  if (/^\d{8}$/.test(cleanValue)) {
    return Date.UTC(
      Number(cleanValue.slice(0, 4)),
      Number(cleanValue.slice(4, 6)) - 1,
      Number(cleanValue.slice(6, 8))
    );
  }

  const normalized = cleanValue.replace(
    /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z?$/,
    "$1-$2-$3T$4:$5:$6Z"
  );
  const timestamp = Date.parse(normalized);
  return Number.isNaN(timestamp) ? null : timestamp;
}

function parseBusyRanges(icalText) {
  return icalText
    .split("BEGIN:VEVENT")
    .slice(1)
    .map((eventText) => {
      const startMatch = eventText.match(/DTSTART(?:;[^:\r\n]+)?:([^\r\n]+)/);
      const endMatch = eventText.match(/DTEND(?:;[^:\r\n]+)?:([^\r\n]+)/);
      return {
        start: parseIcalDate(startMatch?.[1]),
        end: parseIcalDate(endMatch?.[1])
      };
    })
    .filter((range) => range.start !== null && range.end !== null);
}

function isValidCalendarText(text) {
  return Boolean(text && text.includes("BEGIN:VCALENDAR") && text.includes("END:VCALENDAR"));
}

function getStatus(icalText, searchStart, searchEnd) {
  const hasConflict = parseBusyRanges(icalText).some(
    (range) => searchStart < range.end && searchEnd > range.start
  );
  return hasConflict ? "unavailable" : "open";
}

async function checkFeed(url, searchStart, searchEnd) {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "OutdoorResortsGatlinburg.com availability checker" }
    });
    if (!response.ok) return { status: "unknown" };

    const text = await response.text();
    if (!isValidCalendarText(text)) return { status: "unknown" };
    return { status: getStatus(text, searchStart, searchEnd) };
  } catch {
    return { status: "unknown" };
  }
}

exports.handler = async (event) => {
  const checkIn = event.queryStringParameters?.checkIn || "";
  const checkOut = event.queryStringParameters?.checkOut || "";
  const validDate = /^\d{4}-\d{2}-\d{2}$/;

  if (!validDate.test(checkIn) || !validDate.test(checkOut)) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ error: "Valid check-in and check-out dates are required." })
    };
  }

  const searchStart = Date.parse(`${checkIn}T00:00:00Z`);
  const searchEnd = Date.parse(`${checkOut}T00:00:00Z`);
  if (searchEnd <= searchStart) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ error: "Check-out must be after check-in." })
    };
  }

  const entries = await Promise.all(
    Object.entries(CALENDAR_FEEDS).map(async ([title, url]) => [
      title,
      await checkFeed(url, searchStart, searchEnd)
    ])
  );

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify({ checkedAt: new Date().toISOString(), results: Object.fromEntries(entries) })
  };
};

exports._test = { CALENDAR_FEEDS, getStatus, parseBusyRanges, parseIcalDate };
