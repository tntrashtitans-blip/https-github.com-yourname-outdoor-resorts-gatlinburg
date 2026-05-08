const listings = [
  {
    title: "Campfire Cove",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb"],
    view: "Sleeps 7 on Lot 103",
    details: ["Lot 103", "Full bath", "Sleeps 7"],
    description: "Stocked RV rental with a full-size bathroom, family sleeping space, and outdoor seating.",
    image: "Assets/listings/campfire-cove.jpg",
    url: "https://airbnb.com/h/campfirecove",
    calendarUrl: "https://www.airbnb.com/calendar/ical/810381394382742436.ics?t=e5e8e90d08874eb6a15eed8162fa20e1",
    calendarCacheUrl: "calendars/campfire-cove.ics",
    featuredCalendarRank: 1,
    cta: "Book on Airbnb"
  },
  {
    title: "Creekside Cove",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb", "creekside"],
    view: "Creekside RV on Lot 299",
    details: ["Lot 299", "Creekside", "Sleeps 8"],
    description: "Creekside RV rental with space for a larger group and an easy outdoor setup.",
    image: "Assets/listings/creekside-cove.jpg",
    url: "http://airbnb.com/h/creeksidecoveorg",
    calendarUrl: "https://www.airbnb.com/calendar/ical/1184548442935899278.ics?t=3e5d08bc88484f5ba12b1181510b64bd",
    calendarCacheUrl: "calendars/creekside-cove.ics",
    featuredCalendarRank: 2,
    cta: "Book on Airbnb"
  },
  {
    title: "Creekside Vibes",
    type: "Lot Rental, Bring your RV",
    platform: "Hipcamp",
    platformTag: "hipcamp",
    tags: ["rv-lot", "hipcamp", "creekside"],
    view: "Creekside RV lot",
    details: ["Lot 262", "Hookups", "Bring RV"],
    description: "Creekside RV lot with hookups for guests bringing their own RV or camper.",
    image: "Assets/listings/creekside-vibes.jpg",
    url: "https://www.hipcamp.com/en-US/land/tennessee-gatlinburg-vibes-rv-camping-r57h9eo8/sites/1124856?siteId=1124856&share_id=24c8h1bwxzz&utm_medium=share&utm_source=share_content&adults=1&children=0",
    calendarUrl: "",
    cta: "Book on Hipcamp"
  },
  {
    title: "Heaven on Earth Creekside Retreat",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb", "creekside", "owner-direct"],
    view: "Creekside park model",
    details: ["Lot 174", "Creekside", "Park model"],
    description: "Creekside park model with a mountain stream setting and comfortable indoor living space.",
    image: "Assets/listings/org-lot-174.jpg",
    url: "https://www.airbnb.com/h/heavenonearth-creekside-smoky-mountain-retreat",
    calendarUrl: "",
    cta: "Book on Airbnb"
  },
  {
    title: "Buck Wild",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb", "owner-direct"],
    view: "Two-bedroom park model",
    details: ["Lot 88", "Sleeps 4", "Updated"],
    description: "Updated two-bedroom park model with queen rooms, sleeper sofa, linens, and Airbnb booking.",
    image: "Assets/listings/org-lot-88.jpg",
    url: "https://abnb.me/zPrvNRDtozb",
    calendarUrl: "",
    cta: "Book on Airbnb"
  },
  {
    title: "Webb Creek Camper Lot",
    type: "Lot Rental, Bring your RV",
    platform: "VRBO",
    platformTag: "vrbo",
    tags: ["rv-lot", "vrbo", "airbnb", "hipcamp", "creekside", "owner-direct"],
    view: "Webb Creek RV lot",
    details: ["Lot 18", "Webb Creek", "Bring RV"],
    description: "Spacious RV lot above Webb Creek with deck seating and room for your camper setup.",
    image: "Assets/listings/org-lot-18.jpg",
    url: "https://www.vrbo.com/4412567?dateless=true",
    calendarUrl: "",
    cta: "View on VRBO"
  },
  {
    title: "Creekside Charm",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb", "creekside", "owner-direct"],
    view: "Updated camper interior",
    details: ["Creekside", "Small dog friendly", "Updated"],
    description: "Updated camper rental with a bright interior, creekside setting, and small-dog-friendly stay.",
    image: "Assets/listings/sleepy-bear-retreat-bedroom.png",
    url: "https://www.airbnb.com/rooms/1385825343795631780?source_impression_id=p3_1778211577_P34bt8yWTPpkf1ZJ",
    calendarUrl: "",
    cta: "Book on Airbnb"
  },
  {
    title: "The Bear Necessities",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb", "creekside", "owner-direct"],
    view: "Family-friendly park model",
    details: ["Lot 172", "King bed", "Kitchen"],
    description: "Park model with king bedroom, family sleeping space, full kitchen, grill, and streaming.",
    image: "Assets/listings/bear-necessities-exterior.png",
    url: "https://www.airbnb.com/rooms/560015244975806818?source_impression_id=p3_1778212535_P3VV1XuirhfPYnQw",
    calendarUrl: "",
    cta: "Book on Airbnb"
  },
  {
    title: "Owner Direct Lots 241 and 366",
    type: "RV Rental",
    platform: "Owner Direct",
    platformTag: "owner",
    tags: ["rv-rental", "owner-direct"],
    view: "Owner-direct park models",
    details: ["Lots 241/366", "Lake area", "Owner"],
    description: "Owner-direct furnished park models near the lake area and adult pool. Verify dates with owner.",
    image: "Assets/Entrance.png",
    url: "https://orgtn.org/private-owner-lot-rental",
    calendarUrl: "",
    cta: "View Owner Page",
    availabilityLabel: "Verify on owner page"
  },
  {
    title: "Vacant Lot 189",
    type: "Lot Rental, Bring your RV",
    platform: "Owner Direct",
    platformTag: "owner",
    tags: ["rv-lot", "owner-direct", "hipcamp"],
    view: "Large paved RV lot",
    details: ["Lot 189", "60 ft", "Hookups"],
    description: "Large paved RV lot with full hookups, slide-out room, green space, and mountain views.",
    image: "Assets/Rainbow over pond.jpg",
    url: "https://orgtn.org/private-owner-lot-rental",
    calendarUrl: "",
    cta: "View Owner Page",
    availabilityLabel: "Verify on owner page"
  },
  {
    title: "Lot 111",
    type: "Lot Rental, Bring your RV",
    platform: "Owner Direct",
    platformTag: "owner",
    tags: ["rv-lot", "owner-direct"],
    view: "Large RV lot",
    details: ["Lot 111", "40 ft+", "Fire pit"],
    description: "Large hill-side RV lot with two-vehicle parking, grill, fire pit, and room to settle in.",
    image: "Assets/Rainbow over pond.jpg",
    url: "https://orgtn.org/private-owner-lot-rental",
    calendarUrl: "",
    cta: "View Owner Page",
    availabilityLabel: "Verify on owner page"
  }
];

let currentFilter = "all";
const calendarState = new Map();

function getListingKey(listing) {
  return listing.title;
}

function getCalendarState(listing) {
  return calendarState.get(getListingKey(listing));
}

function parseIcalDate(value) {
  if (!value) return null;
  const cleanValue = value.trim();
  if (/^\d{8}$/.test(cleanValue)) {
    const year = Number(cleanValue.slice(0, 4));
    const month = Number(cleanValue.slice(4, 6)) - 1;
    const day = Number(cleanValue.slice(6, 8));
    return new Date(year, month, day);
  }

  const normalized = cleanValue.replace(
    /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z?$/,
    "$1-$2-$3T$4:$5:$6Z"
  );
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
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
    .filter((range) => range.start && range.end);
}

function rangesOverlap(startA, endA, startB, endB) {
  return startA < endB && endA > startB;
}

async function checkListingAvailability(listing, checkIn, checkOut) {
  if (!listing.calendarUrl) return null;

  try {
    const response = await fetchCalendar(listing);

    const busyRanges = parseBusyRanges(await response.text());
    const searchStart = new Date(`${checkIn}T00:00:00`);
    const searchEnd = new Date(`${checkOut}T00:00:00`);
    const isAvailable = !busyRanges.some((range) => rangesOverlap(searchStart, searchEnd, range.start, range.end));

    return { status: isAvailable ? "available" : "unavailable" };
  } catch {
    return { status: "unknown" };
  }
}

async function fetchCalendar(listing) {
  const calendarUrls = [listing.calendarUrl, listing.calendarCacheUrl].filter(Boolean);

  for (const url of calendarUrls) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch {
      // Try the next calendar source.
    }
  }

  throw new Error("Calendar unavailable");
}

function sortListingsForDisplay(listingsToSort) {
  return [...listingsToSort].sort((a, b) => {
    const stateA = getCalendarState(a)?.status;
    const stateB = getCalendarState(b)?.status;
    const availableA = stateA === "available" ? 0 : 1;
    const availableB = stateB === "available" ? 0 : 1;
    if (availableA !== availableB) return availableA - availableB;

    const rankA = a.featuredCalendarRank || 999;
    const rankB = b.featuredCalendarRank || 999;
    if (rankA !== rankB) return rankA - rankB;

    return listings.indexOf(a) - listings.indexOf(b);
  });
}

function buildListingCard(listing) {
  const details = listing.details.map((detail) => `<span>${detail}</span>`).join("");
  const state = getCalendarState(listing);
  const isAvailable = state?.status === "available";
  const availabilityBadge = isAvailable ? `<span class="availability-pill">Available</span>` : "";
  const cardClass = isAvailable ? " listing-card--available" : "";

  return `
    <article class="listing-card${cardClass}" data-tags="${listing.tags.join(" ")}">
      <div class="listing-card__image">
        <img src="${listing.image}" alt="${listing.title} at Outdoor Resorts Gatlinburg" loading="lazy" />
        <span class="badge badge--${listing.platformTag}">${listing.platform}</span>
        ${availabilityBadge}
      </div>
      <div class="listing-card__body">
        <p class="listing-card__meta">${listing.type}</p>
        <h3>${listing.title}</h3>
        <p class="listing-card__description">${listing.description}</p>
        <div class="listing-card__details">${details}</div>
        ${isAvailable ? `<p class="listing-card__calendar">Available for selected dates</p>` : ""}
        <a class="button button--primary listing-card__button" href="${listing.url}" target="_blank" rel="noopener">${listing.cta || `Book on ${listing.platform}`} ↗</a>
      </div>
    </article>
  `;
}

function getFilteredListings() {
  return currentFilter === "all"
    ? listings
    : listings.filter((listing) => listing.tags.includes(currentFilter));
}

function renderListings() {
  const grid = document.getElementById("listingGrid");
  const count = document.getElementById("listingCount");
  if (!grid) return;

  const filtered = sortListingsForDisplay(getFilteredListings());
  grid.innerHTML = filtered.map(buildListingCard).join("");

  if (count) {
    const noun = filtered.length === 1 ? "listing" : "listings";
    count.textContent = `${filtered.length} ${noun} shown`;
  }
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderListings();
  });
});

document.getElementById("availabilityBtn")?.addEventListener("click", async () => {
  const checkIn = document.getElementById("checkin")?.value;
  const checkOut = document.getElementById("checkout")?.value;
  const note = document.getElementById("availabilityNote");
  if (!note) return;

  if (!checkIn || !checkOut) {
    note.textContent = "Choose a check-in and check-out date to prepare an availability search.";
    return;
  }

  if (new Date(`${checkOut}T00:00:00`) <= new Date(`${checkIn}T00:00:00`)) {
    note.textContent = "Choose a check-out date after your check-in date.";
    return;
  }

  const connectedCount = listings.filter((listing) => listing.calendarUrl).length;
  if (connectedCount === 0) {
    note.textContent = "Owner iCal feeds are not connected yet. Use the booking buttons below for live Airbnb and Hipcamp availability.";
    return;
  }

  note.textContent = `Checking ${connectedCount} connected calendar feed${connectedCount === 1 ? "" : "s"}...`;

  const results = await Promise.all(
    listings
      .filter((listing) => listing.calendarUrl)
      .map(async (listing) => [getListingKey(listing), await checkListingAvailability(listing, checkIn, checkOut)])
  );

  results.forEach(([key, state]) => {
    if (state) calendarState.set(key, state);
  });

  const availableCount = results.filter(([, state]) => state?.status === "available").length;
  const unknownCount = results.filter(([, state]) => state?.status === "unknown").length;
  renderListings();

  if (unknownCount > 0) {
    note.textContent = `${availableCount} connected listing${availableCount === 1 ? "" : "s"} marked available. ${unknownCount} calendar feed${unknownCount === 1 ? "" : "s"} could not be checked in this browser.`;
    return;
  }

  note.textContent = `${availableCount} connected listing${availableCount === 1 ? "" : "s"} available for ${checkIn} through ${checkOut}. Available calendar-connected listings are shown first.`;
});

renderListings();
