# Codex SEO Strategy Workflow (20-Module System)

Use this workflow whenever the user asks to:

- "run SEO strategy"
- "audit this site for SEO"
- "design around SEO strategy"
- "build this page for rankings"

This framework is adapted for Codex from the Sarvesh Shrivastava 20-prompt model (originally written for Claude). In this project, Codex is the execution engine.

## 1) Operating Principle

SEO is treated as a system, not isolated tasks:

1. Load business context once.
2. Benchmark competitors with structured comparisons.
3. Prioritize quick wins first.
4. Turn findings into ranked action lists.
5. Track impact monthly and iterate.

## 2) Required Inputs (Per Site)

Before running audits, gather or create `/SEO/context/<site-key>.md` using `SEO_CONTEXT_TEMPLATE.md`:

- Business name, address, phone, domain, GBP URL
- Service areas
- Core services
- Primary keywords
- Competitor domains + GBP links
- Existing assets/tools (GSC, GA4, SEMrush/Ahrefs, GBP access)

If a tool is missing, continue with available sources and mark "missing-data risk" in the output.

## 3) Output Structure

Create dated deliverables in:

- `/SEO/outputs/<site-key>/<YYYY-MM-DD>/`

Minimum deliverables per run:

1. `01-summary.md` — executive summary + top priorities
2. `02-priority-actions.csv` — ranked fixes by impact/effort
3. One file per audit module used (CSV/MD)
4. `implementation-log.md` — what changed on-site
5. `next-30-days.md` — roadmap

## 4) The 20 Modules (Codex Version)

## Part A: Google Business Profile (1–8)

1. GBP category audit  
2. GBP attributes audit  
3. Competitor review velocity teardown  
4. Review response system  
5. GBP post cadence + 8-week calendar  
6. GBP services section audit + rewrites  
7. GBP description optimization  
8. GBP photo velocity + shot-plan audit  

## Part B: Website Performance & Local Coverage (9–13)

9. Keyword gap audit (competitor terms you miss)  
10. Money-page audit (pages ranking 4–15, CTR gaps, cannibalization)  
11. Service + city page coverage builder  
12. Search Console page-2 sprint plan  
13. Review sentiment language mining for conversion copy  

## Part C: Authority & Trust (14–16)

14. Competitor backlink audit + outreach targets  
15. Local citation/NAP consistency audit  
16. Local search intent mapping by buyer stage  

## Part D: Content & Reporting (17–20)

17. Content gap analysis + briefs  
18. Entity optimization (schema + consistency + knowledge graph signals)  
19. Competitor GBP posting pattern analysis  
20. Monthly SEO performance report  

## 5) Execution Cadence (90-Day)

- Week 1: modules 1–2  
- Week 2: modules 3–5  
- Week 3: modules 6–8  
- Week 4: modules 9 and 12  
- Weeks 5–6: modules 10, 11, 13  
- Weeks 7–8: modules 14–16  
- Weeks 9–10: modules 17–19  
- Weeks 11–12: module 20 + reset priorities

## 6) "Design Around SEO" Rule Set

When building new pages, Codex must:

1. Pick one intent per page (single-job page design).
2. Map one primary keyword cluster + supportive entities.
3. Build semantic structure first: Title, H1, H2s, FAQ, internal links.
4. Add local trust anchors (address/areas/landmarks where relevant).
5. Add conversion path (CTA + next internal step).
6. Add metadata + schema consistent with visible content.
7. Avoid keyword stuffing, invented claims, and thin copy.

## 7) Prioritization Model

Every recommendation gets:

- Impact: High / Medium / Low
- Effort: Low / Medium / High
- Time-to-signal: Days / Weeks / Months

Priority score:

- High impact + low effort + short time-to-signal = first
- Page-2 keywords (positions 11–20) are default quick-win targets

## 8) Standard Deliverable Format

For each finding:

- `Issue`
- `Evidence`
- `Why it matters`
- `Fix`
- `Owner`
- `ETA`
- `Expected outcome`

## 9) Guardrails

- No fabricated metrics.
- No fabricated rankings.
- No fabricated review or competitor data.
- Clearly label assumptions.
- Keep recommendations tied to measurable outcomes.

## 10) Quick Trigger for Future Use

When the user says "run SEO strategy", Codex should:

1. Load `SEO_GUIDELINES.md`
2. Load `SEO_STRATEGY_WORKFLOW.md`
3. Load or create `/SEO/context/<site-key>.md`
4. Run the highest-value pending modules first
5. Produce updated `/SEO/outputs/<site-key>/<date>/` deliverables

