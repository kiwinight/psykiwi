# 2025-12-03 Profile Page Wireframe

## Overview

Current profile page design using a unified card layout with flat activity items separated by dividers. Inspired by Threads/X feed patterns for familiarity.

---

## Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  🥝 Psykiwi                                    [sticky]     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
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
│═════════════════════════════════════════════════════════════│
│                                                             │
│  ✨ Summary                                         [🔄]    │
│                                                             │
│  │ "Alex is an energetic and curious person who thrives    │
│  │  on new experiences. As an ENFP 7w8, they bring         │
│  │  enthusiasm to everything they do..."                    │
│                                                             │
│═════════════════════════════════════════════════════════════│
│                                                             │
│  📌 Pinned activities                                       │
│                                                             │
│  🧠 MBTI                                                    │
│  ENFP "The Campaigner"                                      │
│  Energetic and creative free spirit...                      │
│  🔗 16personalities.com                          Nov 29     │
│  ─────────────────────────────────────────────────────────  │
│  # Enneagram                                                │
│  Type 7w8 "The Enthusiast"                                  │
│  Optimistic and versatile personality...                    │
│  🔗 truity.com                                   Oct 20     │
│  ─────────────────────────────────────────────────────────  │
│  ♡ Love Language                                            │
│  1. Quality Time (35%)                                      │
│  Values shared time and undivided attention...              │
│  🔗 5lovelanguages.com                           Nov 28     │
│                                                             │
│═════════════════════════════════════════════════════════════│
│                                                             │
│  📋 Activities                                              │
│                                                             │
│  🧬 Big Five                                                │
│  O 78% · C 62% · E 71% · A 45% · N 38%                      │
│  Analysis of the five major personality factors...          │
│  🔗 understandmyself.com                         Nov 25     │
│  ─────────────────────────────────────────────────────────  │
│  💼 DISC                                                    │
│  Di - Dominant/Influential                                  │
│  Assertive and influential communication style...           │
│  🔗 crystalknows.com                             Nov 20     │
│  ─────────────────────────────────────────────────────────  │
│  🔗 Attachment Style                                        │
│  Secure                                                     │
│  Comfortable with intimacy, trusts others...                │
│  🔗 attachmentproject.com                        Oct 15     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    View more                         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### Header (Sticky)

- Logo + "Psykiwi" text
- Sticky with backdrop blur
- No right-side actions (minimal)

### Unified Card Container

Single card wrapping all content sections, separated by full-width dividers (`═══`).

### Section 1: Profile Info

| Element | Description |
|---------|-------------|
| Name | H4 typography |
| Username | Muted text with @ prefix |
| Avatar | 80px, circular, fallback to initials |
| Bio | Regular text (not muted) |
| Location | Icon + text, muted |
| Link | Icon + primary color link |
| Actions | "Edit profile" ghost button + "..." dropdown (Copy link) |

### Section 2: Summary

| Element | Description |
|---------|-------------|
| Header | Icon + "Summary" + refresh button with tooltip |
| Content | Blockquote with AI-generated personality summary |

### Section 3: Pinned Activities

| Element | Description |
|---------|-------------|
| Header | Pin icon + "Pinned activities" |
| Items | Flat list with regular-width separators |

### Section 4: Activities

| Element | Description |
|---------|-------------|
| Header | ListChecks icon + "Activities" |
| Items | Flat list with regular-width separators |
| Footer | "View more" outline button |

---

## Activity Item Structure

Each activity item follows this pattern:

```
[Icon] Title
Result/Value (font-semibold)
Description... (muted)
[🔗 source.com]                                    [Date]
```

---

## Visual Hierarchy

### Divider Types

| Type | Usage | Style |
|------|-------|-------|
| Full-width | Between major sections (Profile/Summary/Pinned/Activities) | `-mx-6 !w-[calc(100%+3rem)]` |
| Regular-width | Between activity items within a section | Default `<Separator />` |

This creates clear hierarchy:
- **Full-width dividers** = strong section breaks
- **Regular dividers** = item separators within same section

### Typography

| Element | Style |
|---------|-------|
| Section headers | `<Large>` + `font-semibold` + icon |
| Activity titles | `font-semibold` + icon |
| Activity results | `font-semibold` |
| Descriptions | `<Muted>` |
| Dates | `<Muted>` |
| Links | `text-primary` + underline on hover |

---

## Design Decisions

### Why Unified Card?

- Creates cohesive profile feel vs dashboard of widgets
- Reduces visual noise from multiple card borders
- Content flows as continuous narrative
- Matches modern social profile patterns (Threads, X)

### Why Flat Activity Items?

- Removes "card inside card" visual complexity
- Familiar feed pattern (Threads/X use dividers between posts)
- Cleaner, more scannable

### Why Separate Pinned Section?

- Clear distinction between curated (pinned) and chronological content
- Users understand pinned = important/featured
- Section header eliminates need for pin icon on each item

---

## Removed Elements

- **Activity Graph** — Removed for simplicity (can be added later)
- **Date dividers** (Nov 2025, Oct 2025) — Redundant; each item shows its date
- **Individual pin icons** on pinned items — Section header indicates pinned status

---

## References

- Previous wireframes: `2025-12-02-unified-profile-card.md`, `2025-12-02-profile-wireframe-update.md`
- Design inspiration: Threads profile layout

