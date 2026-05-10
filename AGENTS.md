<claude-mem-context>
# Memory Context

# [New project] recent context, 2026-05-09 11:49pm CDT

No previous sessions found.
</claude-mem-context>

# Project SEO Rules

Before building or editing site pages, consult `SEO_GUIDELINES.md` in this folder and apply its page intent, local SEO, internal linking, trust signal, metadata, and copy style checklist.

When the user asks to "run SEO strategy," "audit SEO," or "design/build around SEO strategy," follow `SEO_STRATEGY_WORKFLOW.md` in this folder.

For multi-site SEO work, create or load per-site context files at:

- `/SEO/context/<site-key>.md`

and save outputs at:

- `/SEO/outputs/<site-key>/<YYYY-MM-DD>/`

# Speed Preference (Default)

For short or single-change requests, run in **quick patch mode** by default:

- touch only the targeted file/section
- avoid broad repo scans unless needed to complete the change safely
- skip extra analysis and non-essential checks
- return quickly with the preview link

Only switch to deep analysis when the user explicitly asks for broader checks, strategy, or full validation.
