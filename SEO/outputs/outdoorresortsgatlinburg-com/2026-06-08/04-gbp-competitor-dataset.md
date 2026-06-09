# GBP and Competitor Dataset

Date: 2026-06-09

Status: Working benchmark dataset. Public website facts are populated; GBP owner access, exact Google review count, exact GBP category stack, review velocity, and photo velocity still require live Google Business Profile/Maps capture because those fields are not reliably exposed in static site crawls.

## Outdoor Resorts Gatlinburg GBP Access

| Field | Current Status | Next Action |
| --- | --- | --- |
| GBP owner access | Not confirmed in this audit session | Confirm whether `tntrashtitans@gmail.com` or the business owner account can edit the Outdoor Resorts Gatlinburg profile |
| GBP profile URL | Needs live Maps capture | Open the profile in Google Search/Maps while logged in and save the share URL |
| Primary category | Needs live Maps capture | Expected target: `RV park`, `Campground`, or `Resort hotel` depending on what Google allows |
| Secondary categories | Needs live Maps capture | Check for `Campground`, `Vacation home rental agency`, `RV campground`, `Lodging`, or nearby equivalents |
| Review count and rating | Needs live Maps capture | Record exact count, rating, most recent review date, and owner response pattern |
| Photo count and freshness | Needs live Maps capture | Record total photos and whether new guest/owner photos have appeared in the last 90 days |
| Website URL on GBP | Needs live Maps capture | Should point to `https://outdoorresortsgatlinburg.com/` or the strongest rental landing page |
| Phone/address consistency | Needs live Maps capture | Compare against site footer, contact forms, Facebook, and any directory listings |

## Target Competitor Set

| Priority | Competitor | Website | Likely GBP Category Target | Public Positioning / Amenities | Review Data Status | Local-Pack Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Outdoor Resorts Gatlinburg | `outdoorresortsgatlinburg.com` | RV park / campground / vacation rental | Owner-managed private lot rentals, iCal-backed availability, resort amenities, investor and owner listing content | Exact GBP review count pending dashboard/Maps capture | Baseline profile. Track for brand query, "Outdoor Resorts Gatlinburg rentals", "Gatlinburg RV lots for rent", and East Parkway RV resort queries |
| 2 | Smoky Bear Campground & RV Park | `smokybearcampground.com` | Campground / RV park | East Parkway campground with RV sites, cabins, tent sites, pool/hot tub, laundry, playground, and family camping positioning | Exact GBP review count pending Maps capture | Strong East Parkway/Cosby corridor competitor; compare against "RV camping Gatlinburg TN", "Gatlinburg campground East Parkway", and family campground terms |
| 3 | Greenbrier Campground | `greenbriercampground.com` | Campground / RV park | Greenbrier/Little Pigeon River campground positioning with RV, tent, and rental accommodations in prior public listings | Exact GBP review count pending Maps capture | High local relevance for Greenbrier entrance and river camping terms. Important flag: `greenbriercampground.com` redirected to an expired-domain page during this audit, so verify the active GBP website URL |
| 4 | Twin Creek RV Resort | `twincreekrvresort.com` | RV park / campground | Gatlinburg RV resort with park model/rental positioning near East Parkway | Exact GBP review count pending Maps capture | Direct "RV resort Gatlinburg" competitor. Watch for category mix and whether GBP uses RV park, campground, resort, or lodging language |
| 5 | Camp LeConte Luxury Outdoor Resort | `campleconte.com` | Campground / resort hotel | Luxury outdoor resort/glamping competitor with camping-adjacent lodging such as RV sites, safari/glamping, treehouses, and premium amenity positioning | Exact GBP review count pending Maps capture | Competes more on resort/glamping intent than owner-managed RV lots; useful benchmark for trust copy, photos, and premium positioning |
| 6 | Arrow Creek Campground | `arrowcreekcamp.com` | Campground / RV park | East Parkway campground near Gatlinburg with RV/cabin/camping positioning; public listing history shows 4721 East Parkway | Exact GBP review count pending Maps capture | Close geography competitor for East Parkway searches. Compare category, review volume, and GBP photo coverage |
| 7 | Birds Creek Campground | `birdscreekcampground.com` | Campground / RV park | Birds Creek / Arts & Crafts corridor campground with RV sites and cabin/rental language; positioned near Gatlinburg, Pigeon Forge, and Sevierville | Exact GBP review count pending Maps capture | Good overlap for Arts & Crafts/community-area searches and year-round campground language |
| 8 | The Appalachian RV Resort | `theappalachianrvresort.com` | RV park / resort hotel | Regional luxury RV resort competitor near Pigeon Forge/Dollywood/Gatlinburg; public snippets reference on-site Airbnb RV rentals | Exact GBP review count pending Maps capture | Broader Sevier County resort competitor. Track for Dollywood/Pigeon Forge spillover and luxury RV resort positioning |
| 9 | Buddy Bear in the Smokies | `buddybearinthesmokies.com` | Campground / RV park | Sevierville/Pigeon Forge/Gatlinburg family campground with RV sites, cabins, Dollywood, and Great Smoky Mountains proximity | Exact GBP review count pending Maps capture | Useful family-campground benchmark; may outrank on broader "campground near Dollywood" and "family RV park" searches |

## Local-Pack Capture Template

Use this template during the next live Maps pass. Capture desktop and mobile if possible.

| Query | ORG Rank | Competitors Appearing | Map Radius / Location | Notes |
| --- | --- | --- | --- | --- |
| `Outdoor Resorts Gatlinburg rentals` | TBD | TBD | Gatlinburg, TN | Brand/rental intent; ORG should dominate if GBP and site entity signals are aligned |
| `Gatlinburg RV rentals` | TBD | TBD | Gatlinburg, TN | Mixed intent: RV rentals, sites, and vacation rentals |
| `RV camping Gatlinburg TN` | TBD | TBD | Gatlinburg, TN | Core campground/RV park pack |
| `RV resort Gatlinburg` | TBD | TBD | Gatlinburg, TN | Most important non-brand local-pack query for ORG positioning |
| `Gatlinburg campground East Parkway` | TBD | TBD | East Parkway / Gatlinburg | Likely Smoky Bear, Arrow Creek, Greenbrier, Twin Creek overlap |
| `RV camping near Rocky Top Sports World` | TBD | TBD | Gatlinburg / Rocky Top Sports World | Support youth sports lodging content |
| `Gatlinburg RV lots for rent` | TBD | TBD | Gatlinburg, TN | ORG-specific private lot rental language |
| `Outdoor Resorts Gatlinburg lots for sale` | TBD | TBD | Gatlinburg, TN | Investor/ownership intent; may show real estate results instead of campgrounds |

## Data Collection Rules

- Capture exact GBP review counts and ratings from Google Maps/Search, not third-party aggregators.
- Record the primary GBP category exactly as shown; do not infer it from the website.
- Mark owner responses as `active`, `sporadic`, or `none visible`.
- Record the website URL shown on each GBP because wrong/expired profile URLs are competitive opportunities.
- Save a local-pack note for whether each result highlights amenities, price, availability, reviews, photos, or booking links.
- Trim the active watchlist to the 5-8 competitors that repeatedly appear across the highest-value local queries.

## Source URLs Checked

- `https://outdoorresortsgatlinburg.com/`
- `https://www.smokybearcampground.com/`
- `https://www.birdscreekcampground.com/`
- `https://arrowcreekcamp.com/`
- `https://www.greenbriercampground.com/`
- `https://www.rvparx.com/parks/greenbrier-campground-gatlinburg-tn.html`
- `https://www.rvparx.com/parks/twin-creek-rv-resort-gatlinburg-tn.html`
- `https://www.campleconte.com/`
- `https://www.theappalachianrvresort.com/`
- `https://www.buddybearinthesmokies.com/`

## Immediate GBP Recommendations

1. Confirm ownership access to the Outdoor Resorts Gatlinburg GBP.
2. Update or confirm GBP website URL, category, service area, business description, amenities, and booking/contact links.
3. Add GBP photos that match the site experience: private lots, resort amenities, pool/common areas, RV pads, and nearby Gatlinburg context.
4. Start a review-response rhythm for every new review and several recent unanswered reviews.
5. Re-run the local-pack capture after Google has processed the June 2026 site and sitemap changes.
