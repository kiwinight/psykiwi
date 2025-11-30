# 2025-11-30 Profile Page Wireframe

## Overview

GitHub profile style design for Psykiwi. Users can pin activities to the top, have a README, and get AI-generated summaries. Single column layout for consistency across devices.

---

## Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  🥝 Psykiwi                                    [Share]      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROFILE INFO                                               │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  ┌─────────┐                                                │
│  │  Photo  │   @alexkwon                                    │
│  │  120px  │   "Building things that matter"                │
│  └─────────┘                                                │
│                                                             │
│  📍 Seoul, Korea                                            │
│  🔗 github.com/alexkwon                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ✨ AI SUMMARY                                              │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  "Alex is an energetic and curious person who thrives      │
│   on new experiences. As an ENFP 7w8, they bring           │
│   enthusiasm to everything they do..."                      │
│                                                             │
│                              [🔄 Regenerate]                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  📝 README                                     [Edit]       │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  ### Hi there 👋                                            │
│                                                             │
│  I'm a product designer who loves exploring how people     │
│  think and interact. Feel free to reach out!               │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  📊 ACTIVITY GRAPH                                          │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  Nov 2025  ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░  5              │
│  Oct 2025  ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░  8              │
│  Sep 2025  ▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  📋 ACTIVITIES                             30 total         │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  ── Pinned ─────────────────────────────────────────────    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🧠 MBTI                            📌    Nov 29    │   │
│  │─────────────────────────────────────────────────────│   │
│  │  ENFP "The Campaigner"                              │   │
│  │  Energetic and creative free spirit...              │   │
│  │  🔗 16personalities.com                             │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🔢 Enneagram                       📌    Oct 20    │   │
│  │─────────────────────────────────────────────────────│   │
│  │  Type 7w8 "The Enthusiast"                          │   │
│  │  Optimistic and versatile personality...            │   │
│  │  🔗 truity.com                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ❤️ Love Language                   📌    Nov 28    │   │
│  │─────────────────────────────────────────────────────│   │
│  │  1. Quality Time (35%)                              │   │
│  │  Values shared time and undivided attention...      │   │
│  │  🔗 5lovelanguages.com                              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ── Nov 2025 ───────────────────────────────────────────    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🧬 Big Five                               Nov 25   │   │
│  │─────────────────────────────────────────────────────│   │
│  │  O 78% · C 62% · E 71% · A 45% · N 38%              │   │
│  │  Analysis of the five major personality factors...  │   │
│  │  🔗 understandmyself.com                            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  💼 DISC                                   Nov 20   │   │
│  │─────────────────────────────────────────────────────│   │
│  │  Di - Dominant/Influential                          │   │
│  │  Assertive and influential communication style...   │   │
│  │  🔗 crystalknows.com                                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ── Oct 2025 ───────────────────────────────────────────    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🔗 Attachment Style                       Oct 15   │   │
│  │─────────────────────────────────────────────────────│   │
│  │  Secure                                             │   │
│  │  Comfortable with intimacy, trusts others...        │   │
│  │  🔗 attachmentproject.com                           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                    [View All →]                             │
└─────────────────────────────────────────────────────────────┘

         ↓ Scroll end → Drawer slides up ↓

┌─────────────────────────────────────────────────────────────┐
│  ━━━━━━━━━━                                                 │
│                                                             │
│  🥝 Psykiwi                                                 │
│                                                             │
│  Create your own personality profile                        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    Get Started                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│              Already have an account? Sign in               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Activity Card (Full View)

When expanded or in detail view:

### MBTI (16personalities)

```
┌─────────────────────────────────────────────────────────────┐
│  🧠 MBTI                                   📌    Nov 29     │
│─────────────────────────────────────────────────────────────│
│                                                             │
│                      E N F P                                │
│                  "The Campaigner"                           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Energetic and creative free spirit. Loves exploring new   │
│  ideas and possibilities, seeks deep connections with      │
│  others. Values authenticity and emotional honesty.        │
│                                                             │
│  • Mind: 72% Extraverted                                    │
│  • Energy: 65% Intuitive                                    │
│  • Nature: 58% Feeling                                      │
│  • Tactics: 81% Prospecting                                 │
│  • Identity: 54% Assertive                                  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  🔗 16personalities.com                                     │
└─────────────────────────────────────────────────────────────┘
```

### Enneagram (Truity)

```
┌─────────────────────────────────────────────────────────────┐
│  🔢 Enneagram                              📌    Oct 20     │
│─────────────────────────────────────────────────────────────│
│                                                             │
│                    Type 7w8                                 │
│               "The Enthusiast"                              │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Optimistic and versatile personality. Seeks new           │
│  experiences and stimulation, values freedom. The 8 wing   │
│  adds assertiveness and decisiveness.                      │
│                                                             │
│  Core Fear: Being trapped in pain and limitation           │
│  Core Desire: A happy and fulfilling life                  │
│  Growth: Moves toward Type 5                               │
│  Stress: Moves toward Type 1                               │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  🔗 truity.com                                              │
└─────────────────────────────────────────────────────────────┘
```

### Love Language (5lovelanguages.com)

```
┌─────────────────────────────────────────────────────────────┐
│  ❤️ Love Language                          📌    Nov 28     │
│─────────────────────────────────────────────────────────────│
│                                                             │
│              1. Quality Time (35%)                          │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Values shared time and undivided attention most. Feels    │
│  loved through conversations, shared activities, and       │
│  focused presence with each other.                         │
│                                                             │
│  1. Quality Time      ████████████░░░░  35%                │
│  2. Words of Affirm.  ██████████░░░░░░  27%                │
│  3. Physical Touch    ████████░░░░░░░░  20%                │
│  4. Acts of Service   ████░░░░░░░░░░░░  10%                │
│  5. Receiving Gifts   ███░░░░░░░░░░░░░   8%                │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  🔗 5lovelanguages.com                                      │
└─────────────────────────────────────────────────────────────┘
```

### Attachment Style (attachmentproject.com)

```
┌─────────────────────────────────────────────────────────────┐
│  🔗 Attachment Style                            Sep 10      │
│─────────────────────────────────────────────────────────────│
│                                                             │
│                     Secure                                  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Comfortable with intimacy, trusts and relies on others.   │
│  Maintains balance between independence and closeness,     │
│  resolves conflicts in a healthy way.                      │
│                                                             │
│  • Anxiety: Low                                             │
│  • Avoidance: Low                                           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  🔗 attachmentproject.com                                   │
└─────────────────────────────────────────────────────────────┘
```

### Big Five / OCEAN (understandmyself.com)

```
┌─────────────────────────────────────────────────────────────┐
│  🧬 Big Five                                    Nov 25      │
│─────────────────────────────────────────────────────────────│
│                                                             │
│  Analysis of the five major personality factors.           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Openness        ████████████████░░  78%                   │
│  Open to new experiences and ideas                         │
│                                                             │
│  Conscientiousness ████████████░░░░░  62%                  │
│  Moderately organized and goal-oriented                    │
│                                                             │
│  Extraversion    ██████████████░░░░  71%                   │
│  Gains energy from social situations                       │
│                                                             │
│  Agreeableness   █████████░░░░░░░░░  45%                   │
│  Cooperative but can assert when needed                    │
│                                                             │
│  Neuroticism     ███████░░░░░░░░░░░  38%                   │
│  Relatively emotionally stable                             │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  🔗 understandmyself.com                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Hierarchy

```
Profile
├── User Info
│   ├── profile_photo
│   ├── username
│   ├── bio
│   ├── location (optional)
│   └── links[] (optional)
│
├── AI Summary
│   ├── generated_text
│   ├── generated_at
│   └── sources: [activities, readme]
│
├── README (Markdown, free-form)
│
├── Activities[]
│   ├── id
│   ├── type: "mbti" | "enneagram" | ...
│   ├── title: "MBTI"
│   ├── result: "ENFP"
│   ├── subtitle: "The Campaigner"
│   ├── summary: "Energetic and creative..."
│   ├── details: { ... }  // type-specific data
│   ├── source_url: "https://16personalities.com/..."
│   ├── source_name: "16personalities.com"
│   ├── taken_at: Date
│   └── is_pinned: boolean  // pinned items shown at top
│
└── Activity Stats
    ├── total: number
    └── monthly_counts: { "2025-11": 5, ... }
```

---

## LLM Import Principles

| Principle      | Description                              |
| -------------- | ---------------------------------------- |
| **Keep Core**  | Type/result values must never be omitted |
| **Summarize**  | Long descriptions → 2-3 sentences        |
| **Preserve**   | Percentages, scores, data must be kept   |
| **Source URL** | Test site URL is required                |

---

## Key Features

| Feature              | Description                                 |
| -------------------- | ------------------------------------------- |
| **Single Column**    | One column layout for all screen sizes      |
| **Pinned**           | Max 6, shown at top of Activities section   |
| **Multiple Results** | Same test taken multiple times, pin one     |
| **README**           | Markdown, free-form like GitHub profile     |
| **AI Summary**       | Auto-generated from activities + README     |
| **Activity Graph**   | GitHub contribution graph style             |
| **Activities**       | Single section: Pinned at top, then by date |
| **CTA Drawer**       | Slide-up drawer at scroll end               |
| **Source Links**     | Each activity links to original test        |

---

## Decisions

- GitHub profile as main reference
- **Single column layout** for consistency across mobile/desktop
- Pinned max 6, shown at top within Activities section
- AI summary is optional, user can regenerate
- README supports markdown
- Activity Graph and Activities are separate sections
- CTA via drawer instead of footer
- No social interactions (likes/comments) in MVP
- Each activity card shows full imported content with source link
