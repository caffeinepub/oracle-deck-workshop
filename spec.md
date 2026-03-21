# Oracle Deck Workshop

## Current State
App has 10 navigation sections: Arrival & Intent, Process Map, Symbol Draw, Reflection, Creation Log, Symbol Library, Visual Reference, Witness Space, Pattern Insights, Integration Close. No Hub Home landing section. No "Your Deck" section with lesson cards.

## Requested Changes (Diff)

### Add
- **Hub Home section** (🌀 Oracle Deck Workshop) as the first item in the sidebar navigation. It should be the default landing view, containing: welcome text / container introduction, a "How This Workshop Works" summary (self-paced, reflective, guided process), a care/disclaimer statement (ACleaverArt canon-friendly), and a brief intro note about using the Spirit Animal Library for inspiration.
- **Your Deck section** in the sidebar (icon: 🃏 or 🂴, after Integration Close) displaying all 22 lessons as individual interactive cards. Each lesson card shows: lesson number + title, objective summary, Symbol Exploration, Visual Elements, Voice & Meaning, and Reflection — presented in an expandable card or modal. All 22 lessons must be included with full content.

### Modify
- **Sidebar navigation order** updated to: Hub Home → Arrival & Intent → Process Map → Symbol Draw → Reflection → Creation Log → Symbol Library → Visual Reference → Witness Space → Pattern Insights → Integration Close → (Your Deck at end or integrated).
- Default active section changes from "arrival" to "hub" (Hub Home).

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/sections/HubHome.tsx` — landing section with welcome, how it works, care statement, Spirit Animal Library note.
2. Create `src/frontend/src/sections/YourDeck.tsx` — section containing all 22 lesson cards as expandable/modal cards with full lesson content.
3. Update `src/frontend/src/App.tsx` — add Hub Home as first section (default), add Your Deck as last section, update SECTIONS array.
