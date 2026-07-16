# GSC Follow-Up Actions

Date checked: 2026-07-16

## Completed in Google Search Console

- Tested live URL for `https://outdoorresortsgatlinburg.com/blog/org-lot-map-buyers-guide.html`.
- Live URL test result: URL is available to Google.
- Page availability: Page can be indexed.
- Enhancement detected: Breadcrumbs, 1 valid item.
- Requested indexing again for the lot-map buyer guide.
- Search Console confirmation: URL was added to a priority crawl queue.
- Resubmitted `https://outdoorresortsgatlinburg.com/sitemap.xml`.
- Sitemap submission confirmation: Sitemap submitted successfully.
- Sitemap table after submission:
  - Submitted: Jul 16, 2026
  - Last read: Jun 8, 2026
  - Status: Success
  - Discovered pages: 16
  - Discovered videos: 0

## Page Indexing Review

- Redirect error: 0 affected pages.
- Discovered - currently not indexed: 0 affected pages, validation Passed.
- Crawled - currently not indexed: 0 affected pages.
- Page with redirect: 3 affected pages.
  - Examples are expected homepage protocol/host variants:
    - `http://www.outdoorresortsgatlinburg.com/`
    - `https://www.outdoorresortsgatlinburg.com/`
    - `http://outdoorresortsgatlinburg.com/`
  - Live checks confirmed these redirect to `https://outdoorresortsgatlinburg.com/`.
- Alternate page with proper canonical tag: 10 affected pages.
  - Examples are extensionless variants such as `/rentals`, `/stay-guide`, and extensionless blog URLs.
  - Live check showed `https://outdoorresortsgatlinburg.com/rentals` still returns 200, so validation was not started for this bucket.

## Local SEO Fixes Applied

- Updated `_redirects` to force extensionless URL variants to `.html` canonicals using `301!`.
- Added a contextual internal link from the HELOC/storage article to the ORG lot-map buyer guide.
- Added the lot-map guide to the HELOC/storage article's related-guides block.

## Performance Snapshot

Date range visible in GSC: last 3 months, May 9, 2026 to July 14, 2026

- Total clicks: 357
- Total impressions: 6,311
- Average CTR: 5.7%
- Average position: 13.7

Top query opportunities:

- `outdoor resorts at gatlinburg photos`: 3 clicks, 165 impressions, 1.8% CTR, position 5.9.
- `outdoor resorts at gatlinburg prices`: 1 click, 73 impressions, 1.4% CTR, position 10.4.
- `outdoor resorts`: 1 click, 87 impressions, 1.1% CTR, position 21.8.
- `rv campgrounds near gatlinburg tn`: 0 clicks, 83 impressions, 0% CTR, position 79.5.

Top page opportunities:

- `https://outdoorresortsgatlinburg.com/rentals.html`: 28 clicks, 386 impressions, 7.3% CTR, position 15.4.
- `https://outdoorresortsgatlinburg.com/stay-guide.html`: 10 clicks, 127 impressions, 7.9% CTR, position 10.5.
- `https://outdoorresortsgatlinburg.com/investing-units-for-sale.html`: 3 clicks, 371 impressions, 0.8% CTR, position 9.1.
- `https://outdoorresortsgatlinburg.com/rocky-top-sports-world.html`: 1 click, 133 impressions, 0.8% CTR, position 25.4.

Important canonical issue from Performance:

- Extensionless URLs are earning impressions with very weak CTR:
  - `/rentals`: 13 clicks, 1,428 impressions, 0.9% CTR, position 3.5.
  - `/stay-guide`: 3 clicks, 1,427 impressions, 0.2% CTR, position 3.4.
  - `/investing-units-for-sale`: 2 clicks, 1,412 impressions, 0.1% CTR, position 3.4.
  - `/list-your-rv`: 1 click, 1,391 impressions, 0.1% CTR, position 3.4.

## Next Actions After Deploy

1. Deploy the forced `_redirects` change.
2. Confirm extensionless URLs return `301` to their `.html` canonical URLs.
3. After confirmed, start validation for `Alternate page with proper canonical tag`.
4. Recheck URL Inspection for `/blog/org-lot-map-buyers-guide.html` after Google processes the sitemap and indexing request.
5. Improve CTR for photo/prices intent by adding clearer photo/pricing language to visible snippets and page sections.
6. Improve page-two pages, especially rentals, stay guide, investing, and Rocky Top Sports World, using query-specific title/meta and internal-link refinements.
