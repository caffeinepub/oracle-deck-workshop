# Oracle Deck Workshop

## Current State
The app has 7 sections: Arrival & Intent, Symbol Draw, Reflection, Journal, Pattern Insights, Symbol Library, Integration Close. Content is functional but uses placeholder/brief text rather than the full participant guide copy.

## Requested Changes (Diff)

### Add
- New **Process Map** section (section 2) showing the 6 phases (Symbol Exploration → Integration Close) with objectives and descriptions
- New **Witness Space** section (section 6, optional) with sharing prompts and reflective feedback framing
- Guided Creation Prompts panel added to Symbol Draw or as a sub-section within it

### Modify
- **Arrival & Intent**: Replace brief invocation with full welcome text, 3-bullet invitation, and 3 reflective check-in prompts
- **Journal**: Rename nav label to "Creation Log"; update subtitle to reflect reflective record framing (intentions, inspirations, pattern noticing)
- **Symbol Library**: Add usage tips panel (choose intuitively, remix symbols, reference don't restrict) with example Axolotl card showing positive/shadow/question
- **Integration Close**: Expand with Phase 6 steps (Review & Reflect, Decide Next Steps, Final Reflection Prompts) and next-step ideas list
- **Reflection**: Update subtitle and empty state to align with Phase 5 language (patterns, insights, connections)
- **Pattern Insights**: Update framing copy to align with Phase 5 reflection language
- **Nav order**: Arrival & Intent → Process Map → Symbol Draw (Guided Creation) → Creation Log → Symbol Library → Witness Space → Pattern Insights → Integration Close

### Remove
- Nothing removed; sections retained but reorganized

## Implementation Plan
1. Update ArrivalIntent.tsx: full welcome text, invitation bullets, 3 check-in prompts
2. Create ProcessMap.tsx: 6-phase staged creation path with objectives and descriptions
3. Update SymbolDraw.tsx: add guided creation prompts panel above or alongside draw UI
4. Rename Journal section label to "Creation Log", update subtitle
5. Update SymbolLibrary.tsx: add usage tips section and shadow/positive qualities display in detail dialog
6. Create WitnessSpace.tsx: sharing prompts, reflective feedback framing, optional presence note
7. Update IntegrationClose.tsx: Phase 6 steps, next-step ideas, final reflection prompts
8. Update Reflection.tsx: align language with Phase 5 framing
9. Update App.tsx: add ProcessMap + WitnessSpace to SECTIONS, reorder nav
