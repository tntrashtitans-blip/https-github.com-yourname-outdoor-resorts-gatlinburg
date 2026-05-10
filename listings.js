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
    map: { lot: "103", x: 16.2, y: 69.7 },
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
    map: { lot: "299", x: 25.8, y: 32.7 },
    cta: "Book on Airbnb"
  },
  {
    title: "Eagle's Nest Getaway",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb"],
    view: "RV rental on Lot 48",
    details: ["Lot 48", "36 ft camper", "Fire pit"],
    description: "36 ft camper on a landscaped lot with a queen bedroom, farmhouse kitchen, outdoor seating, and fire pit.",
    image: "Assets/listings/eagles-nest-getaway-lot-48.jpg",
    url: "https://www.airbnb.com/rooms/1249139824465679896?source_impression_id=p3_1778345688_P3LfesmmduvbXNfU",
    calendarUrl: "",
    map: { lot: "48" },
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
    map: { lot: "262", x: 40.2, y: 71.7 },
    cta: "Book on Hipcamp"
  },
  {
    title: "Cozy Creekside Camping",
    type: "Lot Rental, Bring your RV",
    platform: "Hipcamp",
    platformTag: "hipcamp",
    tags: ["rv-lot", "hipcamp", "creekside"],
    view: "Creekside RV lot",
    details: ["Lot 294", "Creekside", "Bring RV"],
    description: "Creekside lot rental for guests bringing their own RV, with a quiet spot inside Outdoor Resorts Gatlinburg.",
    image: "Assets/listings/cozy-creekside-camping-lot-294.jpg",
    url: "https://www.hipcamp.com/en-US/land/tennessee-cozy-creekside-camping-6p0hxwmj?share_id=enwf9z7l8q&utm_medium=share&utm_source=share_content&adults=1&children=0",
    calendarUrl: "",
    map: { lot: "294", x: 22.9, y: 27.6 },
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
    map: { lot: "174", x: 93.2, y: 77.2 },
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
    map: { lot: "88", x: 18.6, y: 62.7 },
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
    map: { lot: "18", x: 31.3, y: 89.8 },
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
    map: { lot: "172", x: 94.8, y: 75.3 },
    cta: "Book on Airbnb"
  },
  {
    title: "Bearfoot Retreat",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb"],
    view: "Private bath camper",
    details: ["1 bedroom", "2 beds", "Private bath"],
    description: "Camper rental with a private bath, one-bedroom layout, and space for a small family stay.",
    image: "Assets/listings/bearfoot-retreat.jpg",
    url: "https://www.airbnb.com/rooms/1029992439856067881?unique_share_id=6f64e933-dbeb-43fd-8efd-e57a1c09de53&viralityEntryPoint=1&s=76&source_impression_id=p3_1778244511_P3U1uR0GZTA70pnX",
    calendarUrl: "https://www.vrbo.com/icalendar/e68783eefd844135ac91eaf22a68679a.ics?nonTentative",
    calendarCacheUrl: "calendars/vrbo-e68783eefd844135ac91eaf22a68679a.ics",
    featuredCalendarRank: 3,
    map: { lot: "140" },
    cta: "Book on Airbnb"
  },
  {
    title: "Smokey Mtn RV in Gatlinburg",
    type: "Lot Rental, Bring your RV",
    platform: "Hipcamp",
    platformTag: "hipcamp",
    tags: ["rv-lot", "hipcamp"],
    view: "Upgraded RV site",
    details: ["Lot 108", "RV site", "Near park"],
    description: "Upgraded RV site inside Outdoor Resorts Gatlinburg, close to downtown and the national park entrance.",
    image: "Assets/listings/smokey-mtn-rv-hipcamp.jpg",
    url: "https://www.hipcamp.com/en-US/land/tennessee-smokey-mtn-rv-in-gatlinburg-pw1h6d26?adults=1&children=0",
    calendarUrl: "",
    map: { lot: "108" },
    cta: "Book on Hipcamp"
  },
  {
    title: "Crow's Landing RV Site",
    type: "Lot Rental, Bring your RV",
    platform: "Hipcamp",
    platformTag: "hipcamp",
    tags: ["rv-lot", "hipcamp"],
    view: "Full-hookup RV site",
    details: ["Lot 113", "Full hookups", "Bring RV"],
    description: "Clean RV site with full hookups, a nearby bath house, and access to the resort amenities.",
    image: "Assets/listings/crows-landing-lot-113.jpg",
    url: "https://www.hipcamp.com/en-US/land/tennessee-crow-s-landing-rv-site-gatlinburg-7rvhydxv?adults=1&children=0",
    calendarUrl: "",
    map: { lot: "113" },
    cta: "Book on Hipcamp"
  },
  {
    title: "Jolene",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb"],
    view: "One-bedroom rental",
    details: ["Lot 190", "3 beds", "Private bath"],
    description: "One-bedroom stay with three beds, a private bath, and a cabin-style setup near the Smokies.",
    image: "Assets/listings/jolene-airbnb.jpeg",
    url: "https://www.airbnb.com/rooms/984789698823930011?unique_share_id=b3c0d855-bb59-462c-b453-fb2b33e537c8&viralityEntryPoint=1&s=76&source_impression_id=p3_1778244549_P3xs_F7EWD0e7qYm",
    calendarUrl: "",
    map: { lot: "190" },
    cta: "Book on Airbnb"
  },
  {
    title: "Dog Friendly Glamping",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb"],
    view: "Dog-friendly camper",
    details: ["Lot 150", "Dog friendly", "Private bath"],
    description: "Dog-friendly camper rental with a private bath, cozy one-bedroom setup, and easy resort access.",
    image: "Assets/listings/dog-friendly-glamping.jpeg",
    url: "https://www.airbnb.com/rooms/952397626997597257?source_impression_id=p3_1778247365_P3qxQPFuM5yvpbpe",
    calendarUrl: "",
    map: { lot: "150" },
    cta: "Book on Airbnb"
  },
  {
    title: "Gatlinburg Glamper",
    type: "RV Rental",
    platform: "Airbnb",
    platformTag: "airbnb",
    tags: ["rv-rental", "airbnb"],
    view: "Pets ok camper",
    details: ["Lot 5", "1 bedroom", "Private bath"],
    description: "Pet-friendly camper rental near the Smokies with a private bath and cozy one-bedroom setup.",
    image: "Assets/listings/gatlinburg-glamper.jpeg",
    url: "https://www.airbnb.com/rooms/1569744269891595719?source_impression_id=p3_1778249263_P39T5Iz1-iPaU3c1",
    calendarUrl: "",
    map: { lot: "5" },
    cta: "Book on Airbnb"
  },
  {
    title: "Lot 241",
    type: "RV Rental",
    platform: "Owner Direct",
    platformTag: "owner",
    tags: ["rv-rental", "owner-direct"],
    view: "Furnished park model",
    details: ["Lot 241", "Queen bed", "Lake area"],
    description: "Fully furnished 40 ft park model with linens, two TVs with cable, outdoor furniture, and a spot close to the adult pool and lake.",
    image: "Assets/listings/lot-241-owner-direct.png",
    url: "https://orgtn.org/private-owner-lot-rental",
    calendarUrl: "",
    map: { lot: "241", x: 82, y: 66.9 },
    cta: "View Owner Page",
    availabilityLabel: "Verify on owner page"
  },
  {
    title: "Lot 366",
    type: "RV Rental",
    platform: "Owner Direct",
    platformTag: "owner",
    tags: ["rv-rental", "owner-direct"],
    view: "Lakefront park model",
    details: ["Lot 366", "Sleeps 5", "Lakefront"],
    description: "Fully furnished 40 ft park model on the lake with linens, cable TVs, outdoor furniture, fire pit, and propane grill.",
    image: "Assets/listings/lot-366-owner-direct.png",
    url: "https://orgtn.org/private-owner-lot-rental",
    calendarUrl: "",
    map: { lot: "366", x: 75.8, y: 62.9 },
    cta: "View Owner Page",
    availabilityLabel: "Verify on owner page"
  },
  {
    title: "Gatlinburg RV Campsite",
    type: "Lot Rental, Bring your RV",
    platform: "Hipcamp",
    platformTag: "hipcamp",
    tags: ["rv-lot", "hipcamp"],
    view: "Lot 189 RV campsite",
    details: ["Lot 189", "60 ft", "Hookups"],
    description: "Lot 189 RV campsite with full hookups, slide-out room, green space, and mountain views.",
    image: "Assets/listings/gatlinburg-rv-campsite-lot-189.jpg",
    url: "https://www.hipcamp.com/en-US/land/tennessee-gatlinburg-rv-campsite-ozxhz2p8?adults=1&children=0",
    calendarUrl: "",
    map: { lot: "189" },
    cta: "Book on Hipcamp"
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
    map: { lot: "111", x: 20.6, y: 85.3 },
    cta: "View Owner Page",
    availabilityLabel: "Verify on owner page"
  }
];

let currentFilter = "all";
const calendarState = new Map();
const lotColorByNumber = {
  "5": "green",
  "18": "red",
  "48": "red",
  "88": "green",
  "103": "red",
  "108": "red",
  "111": "red",
  "113": "red",
  "140": "yellow",
  "150": "yellow",
  "172": "orange",
  "174": "orange",
  "189": "orange",
  "190": "orange",
  "241": "blue",
  "262": "yellow",
  "294": "yellow",
  "299": "yellow",
  "366": "blue"
};

function getListingKey(listing) {
  return listing.title;
}

function getListingId(listing) {
  return `listing-${listing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
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
  const hasAvailabilitySearch = calendarState.size > 0;

  return [...listingsToSort].sort((a, b) => {
    if (hasAvailabilitySearch) {
      const stateA = getCalendarState(a)?.status;
      const stateB = getCalendarState(b)?.status;
      const availableA = stateA === "available" ? 0 : 1;
      const availableB = stateB === "available" ? 0 : 1;
      if (availableA !== availableB) return availableA - availableB;
    }

    if (currentFilter !== "rv-lot") {
      const lotA = a.tags.includes("rv-lot") ? 1 : 0;
      const lotB = b.tags.includes("rv-lot") ? 1 : 0;
      if (lotA !== lotB) return lotA - lotB;
    }

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
  const lotBadge = listing.map?.lot
    ? `<span class="listing-lot-badge listing-lot-badge--${lotColorByNumber[listing.map.lot] || "neutral"}">Lot ${listing.map.lot}</span>`
    : "";

  return `
    <article class="listing-card${cardClass}" data-tags="${listing.tags.join(" ")}">
      <div class="listing-card__image">
        <img src="${listing.image}" alt="${listing.title} at Outdoor Resorts Gatlinburg" loading="lazy" />
        <span class="badge badge--${listing.platformTag}">${listing.platform}</span>
        ${availabilityBadge}
        ${lotBadge}
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
