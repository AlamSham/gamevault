# GameVault APK — Long-Term Growth Plan (Aug 2026)

## Current Status (Post-Fix Audit)
- **211 games** (was 210; 4 fake/duplicate entries removed, 5 high-traffic games added)
- **Live domain:** gamevaultinfo.com (Vercel, HTTP 200)
- **Build:** clean, 211 game pages SSG, lint 0 errors
- **Links:** 5 broken packages fixed, all 211 Play Store links verified, zero duplicate packages

---

## What Was Fixed (This Session)

| Fix | Detail |
|---|---|
| Mirror branding removed | DownloadTimer no longer shows "APKMirror"/"APKPure" — now "GameVault Secure Server" + "Backup Server" |
| Mirror URL routing | Search-page links replaced with direct APKPure package search URLs (always resolve) |
| 4 broken packages | asphalt-9 → `GloftA9HM`, real-cricket-24 → `com.nautilus.realcricket`, hill-climb-racing → `com.fingersoft.hillclimb2`, rules-of-survival → `com.netease.ros` |
| 4 fake duplicates removed | subway-surfers-tokyo, clash-of-clans-th16, rules-of-survival, dream-league-soccer (outdated 2024 dup of 2026) |
| Logo trust | 703KB JPEG-as-PNG → 117KB real PNG (512px); favicon 517KB → 22KB (192px) |
| Fake stats removed | Homepage "10M+ Downloads / 4.8★", schema `ratingCount 18500` — all removed (Google manual-action risk) |
| 5 high-traffic games added | Block Blast!, Dream League Soccer 2026, eFootball 2026, Delta Force, Honor of Kings |
| Category counts fixed | All 10 categories now match actual game counts |
| Lint/build | 18 lint errors fixed, build verified |

---

## Phase 1 — Trust & Indexing (Week 1-2)
- [x] Remove fake stats/schema (done)
- [x] Fix broken links (done)
- [ ] Submit sitemap in Google Search Console (if not done) — `gamevaultinfo.com/sitemap.xml`
- [ ] Add site to Bing Webmaster Tools
- [ ] Verify GSC "Page Indexing" report weekly; submit URL inspection for homepage

## Phase 2 — Content Engine (Week 3-6)
- [ ] **Hindi blog section** — 20-30 query-targeted posts:
  - "Subway Surfers APK Download 2026" (hi-IN)
  - "Free Fire MAX APK Download Hindi"
  - "Block Blast APK Download 2026"
- [ ] Add 2-3 related-game links on every game page (internal linking already exists via `relatedGames`)
- [ ] Add FAQ schema on download pages (rich snippets)
- [ ] Write "Top 10" list posts monthly (blog)

## Phase 3 — Traffic Channels (Month 2-3)
- [ ] YouTube Shorts: "Top 5 Best Android Games 2026" — link in description
- [ ] Telegram channel: daily APK updates, link back to site
- [ ] Pinterest pins of game cards → site links
- [ ] Reddit r/androidapps / r/AndroidGaming — only in comments, never spam

## Phase 4 — Authority & Scale (Month 3-6)
- [ ] 10-15 backlinks (guest posts, forums, directories)
- [ ] Track rankings in GSC; double down on pages getting impressions
- [ ] Own hosting decision: when traffic > 500/day, move top 20 games to Google Drive/Backblaze direct links (`downloadUrl` field already supported)
- [ ] Add real user ratings/reviews system (this replaces fake schema when trust allows)

---

## Game Data Facts (Verified Aug 2026)
- All 211 `playStoreUrl`s point to valid Google Play listings, zero duplicate packages
- `pubg-mobile` (`com.tencent.ig`) and `mobile-legends` (`com.mobile.legends`) are VALID — earlier 404s were geo-blocking, not broken links
- APKPure blocks bot access; mirror links use `apkpure.com/search?q={package}` which always resolves

## Rules for New Games
1. Never add a game whose `playStoreUrl` package duplicates an existing game
2. `getApkPureUrl` handles mirror routing automatically — no manual mirror links needed
3. When self-hosting: set `downloadUrl` on the game object; DownloadTimer prioritizes it automatically