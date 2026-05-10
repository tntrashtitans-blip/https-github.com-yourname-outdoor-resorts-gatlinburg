# SEO Context — outdoorresortsgatlinburg-com

## Site Identity

- Site key: `outdoorresortsgatlinburg-com`
- Brand/business name: Outdoor Resorts Gatlinburg
- Primary domain: `https://outdoorresortsgatlinburg.com`
- Canonical domain (www/non-www): non-www (`www` 301s to non-www)
- Primary location address: 4229 East Parkway, Gatlinburg, TN 37738
- Phone: (865) 436-5861 (resort office reference shown on map assets)
- Contact email: `Laramy.Gregory@icloud.com` (owner contact used for forms)
- Primary CTA(s):
  - Browse Rentals
  - Stay Guide
  - List Your RV
  - Investing / Units for Sale

## Business Model

- Core offerings/services:
  - Guest-facing: RV rentals + lot rentals (bring-your-own RV/camper) at ORG
  - Owner-facing: list-your-rental intake
  - Investor-facing: ORG lot buying/investor content + lead form
- Primary audience segments:
  - Families planning Gatlinburg/Smokies stays
  - Rocky Top Sports World tournament groups
  - Owner hosts with RV/lot listings in ORG
  - Buyers researching ORG lots for sale
- Revenue goals from SEO:
  - More qualified booking clicks to owner listings
  - More owner listing submissions (with iCal links)
  - More investor inquiry form submissions
- High-conversion pages today:
  - `/rentals.html`
  - `/list-your-rv.html`
  - `/investing-units-for-sale.html`

## Local SEO Footprint

- Service area(s):
  - Gatlinburg / East Parkway / Pittman Center
  - Greenbrier side of GSMNP
  - Nearby Pigeon Forge / Dollywood intent
- Nearby landmarks/regions to mention:
  - Rocky Top Sports World
  - Greenbrier
  - Downtown Gatlinburg
  - Great Smoky Mountains National Park regions
- Seasonal patterns:
  - Pool season generally Memorial Day weekend through Labor Day weekend
  - Peak tourism in summer/fall, shoulder-season variability
- Compliance/policy constraints:
  - Do not imply tent camping is offered
  - Distinguish owner-managed listings from resort office bookings
  - Keep owner/internal operational notes off public cards

## Core Keyword Direction

- Primary keyword clusters:
  - Outdoor Resorts Gatlinburg rentals
  - RV rentals in Gatlinburg
  - ORG lot rentals / bring your own RV
  - lodging near Rocky Top Sports World
- Secondary/support clusters:
  - things to do near East Parkway Gatlinburg
  - dining near Outdoor Resorts Gatlinburg
  - ORG lots for sale / investor research
- Brand + non-brand split targets:
  - Brand: Outdoor Resorts Gatlinburg + ORG
  - Non-brand: Gatlinburg RV rentals, Smokies RV lodging, Rocky Top lodging
- "Do not target" terms:
  - Tent camping intent for this resort

## Competitive Set

- Top competitor domains:
  - Not yet finalized in this project context (needs agreed competitor list)
- Top competitor GBP links:
  - Not yet provided
- Differentiators we can prove:
  - Exact East Parkway location
  - Mix of RV rentals and lot rentals
  - Resort amenities context (pool season, pond, putt-putt, etc.)
  - Lot-level map context and lot-number matching

## Existing Assets & Access

- Google Business Profile access: unknown
- Google Search Console access: unknown
- GA4 access: unknown
- Ahrefs/SEMrush access: unknown
- Call tracking access: unknown

## Existing Content Inventory

- Primary money pages:
  - `/rentals.html`
  - `/list-your-rv.html`
  - `/investing-units-for-sale.html`
- Secondary informational pages:
  - `/stay-guide.html`
  - `/things-to-do.html`
  - `/dining-near-the-resort.html`
  - `/great-smoky-mountains.html`
  - `/rocky-top-sports-world.html`
- Existing blog/article hubs:
  - `/blog/*.html` investor cluster (6 articles)
- Weak/thin/outdated pages:
  - None currently flagged after 2026-05-10 implementation pass.

## Technical Baseline

- Platform/CMS: static HTML/CSS/JS on Netlify
- Sitemap URL: `/sitemap.xml`
- Robots URL: `/robots.txt` live
- Known crawl/indexing issues:
  - Need post-deploy verification that `/sitemap.xml` returns 200 in production
  - Need Google Search Console sitemap submission/inspection when access is available
- Existing schema types in use:
  - `Campground` + `PostalAddress` + `LocationFeatureSpecification` (home)
  - `ItemList` (listing/content grids)
  - `FAQPage` where present

## Internal Linking Notes

- Must-link pages:
  - Home ↔ Rentals ↔ Stay Guide ↔ List Your RV
  - Explore pages ↔ Rentals
  - Investor hub ↔ investor blogs ↔ contact section
- Navigation constraints:
  - Shared top nav across pages, dropdown behavior should stay consistent
- Footer/linking opportunities:
  - Expand deep links from footer into money and support pages

## Trust & Conversion Signals

- Review sources: not yet integrated
- Awards/certifications: not yet integrated
- Case studies/examples: listing-level details + lot map context
- Missing trust signals:
  - Published policy/verification transparency
  - Stronger form confirmation and privacy assurances

## Immediate Priorities (Next 30 Days)

1. Verify sitemap indexing in Google Search Console after deployment.
2. Build GBP/review/citation inputs when access is available.
3. Expand blog/article schema and add an investor hub content map.

## Risks / Missing Data

- Missing tools/data:
  - No confirmed GSC/GA4/GBP/Ahrefs access in this context
  - No confirmed competitor domain benchmark set
- Assumptions to verify:
  - Canonical domain should remain non-www
  - Resort office number and policy statements remain accurate
