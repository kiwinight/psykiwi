# 2025-12-02 Unified Profile Card

## Overview

Refactored profile page layout from multiple separate cards to a single unified card container. Inspired by Threads' cohesive profile design.

## Design Decision

### Problem with Multiple Cards

- 4 separate cards created dashboard-like feel instead of cohesive profile
- Excessive visual boundaries added cognitive load
- Wasted vertical space with repeated padding/margins
- Content felt disconnected despite describing the same person

### Solution: Single Unified Card

- One card container wrapping all profile content
- Horizontal separators between major sections
- Individual activity items remain as nested cards (they ARE distinct items)
- Typography and spacing create hierarchy instead of borders

---

## New Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  🥝 Psykiwi                                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROFILE INFO                                               │
│                                                             │
│  Alex Kwon                                         [AK]     │
│  @alexkwon                                                  │
│                                                             │
│  I'm a product designer who loves exploring how people      │
│  think and interact. Feel free to reach out!                │
│                                                             │
│  📍 Seoul, Korea                                            │
│  🔗 github.com/alexkwon                                     │
│                                                             │
│                           [Edit profile] [···]              │
│                                                             │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  ✨ Summary                                         [🔄]    │
│                                                             │
│  "Alex is an energetic and curious person who thrives      │
│   on new experiences. As an ENFP 7w8, they bring           │
│   enthusiasm to everything they do..."                      │
│                                                             │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  📊 Activity Graph                                          │
│                                                             │
│  Nov 2025  ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░  5              │
│  Oct 2025  ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░  8              │
│  Sep 2025  ▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3              │
│                                                             │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  📋 Activities                                              │
│                                                             │
│  ── Pinned ─────────────────────────────────────────────    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🧠 MBTI                                       📌   │   │
│  │  ENFP "The Campaigner"                              │   │
│  │  Energetic and creative free spirit...              │   │
│  │  🔗 16personalities.com               Nov 29        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  # Enneagram                                  📌   │   │
│  │  Type 7w8 "The Enthusiast"                          │   │
│  │  Optimistic and versatile personality...            │   │
│  │  🔗 truity.com                        Oct 20        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ── Nov 2025 ───────────────────────────────────────────    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🧬 Big Five                                        │   │
│  │  O 78% · C 62% · E 71% · A 45% · N 38%              │   │
│  │  Analysis of the five major personality factors...  │   │
│  │  🔗 understandmyself.com              Nov 25        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                    [View more]                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Key Differences from Previous Design

| Aspect           | Before            | After                    |
| ---------------- | ----------------- | ------------------------ |
| Container        | 4 separate cards  | 1 unified card           |
| Section dividers | Card boundaries   | Horizontal separators    |
| Visual weight    | Equal per section | Hierarchy via typography |
| Activity items   | Cards (nested)    | Cards (unchanged)        |
| Vertical space   | Wasted by gaps    | Compact, flows better    |

## References

- Threads profile layout (unified container, content flows)
- Previous wireframe: `2025-12-02-profile-wireframe-update.md`
