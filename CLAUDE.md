@AGENTS.md

# Gilgamesh Enterprise — Project Context

> Holding company site for Gilgamesh Enterprise LLC (Wyoming LLC).
> Live: **gilgameshenterprise.com** (Vercel, free tier — migrated off Squarespace June 6, 2026, $25/mo cancelled).
> Repo: `renewalmateupdates/gilgameshenterprise` · Default branch: `master`

---

## What This Site Is

Dark/gold professional hub for Joshua Bostic's ventures. Lists: SocialMate, RenewalMate, the co-founded 3D printing venture with Butch Chiappinelli, and Gilgamesh's Guides.

## Pages

`/` (ventures hub) · `/blog` (category filter tabs, client-side) · `/blog/[slug]` · `/faq` (accordion — About GE / Ventures / Philosophy) · `/guides` (mirrors SocialMate's Gilgamesh's Guides, Vols 1–14) · `/portfolio` · `/storefront-studio` (local business website service — live service, not "upcoming")

## Design System (June–July 2026 facelift, PRs #13–#16+)

- Black/gold premium palette, **Outfit + DM Sans** fonts (Syne was swapped out — letterforms too wide)
- Framer Motion animations, looping gold sweep, tightened letter-spacing, smaller hero font
- **Ember particle field** rendered on every page (global + inner pages)
- Logo: `/public/logo.png` — saved locally from the Squarespace CDN before hosting expired (June 10, 2026). Never hotlink Squarespace.

## Hard Rules

- **3D printing venture name change pending** — do NOT use "Hearthforge" in any public-facing copy until Joshua + Butch confirm the new name. Say "co-founded 3D printing venture with Butch Chiappinelli."
- The venture card must always present it as a **co-founded partnership** (Joshua: web/business · Butch: manufacturing/CAD, Bambu Lab **H2C** — never X1 Carbon).
- Keep `/guides`, blog posts, and `public/llms.txt` in sync with SocialMate's guide volumes when new volumes ship there.
- Vercel Analytics is wired in the root layout — don't remove.
- Sitemap is submitted to Google Search Console (DNS TXT verified). When resubmitting, enter only `sitemap.xml`, not the full URL.
- Mirror SocialMate's workflow discipline: one branch + one PR per change, always open a PR after pushing and give the direct link.
