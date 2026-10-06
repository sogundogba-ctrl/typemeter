# TypeMeter Decisions

## Design decisions

- Chose a restrained teal-accent palette to keep the product serious, readable, and competitive without feeling AI-generated.
- Kept the homepage focused on the typing test and placed ads below the main typing region to avoid reducing initial usability.
- Used a small 6px radius and border-heavy layout to keep the UI crisp and editorial rather than template-like.
- Selected a monospace passage surface tuned for long lines and a clear caret, while keeping the rest of the interface in a calm sans-serif stack.

## Difficulty tiers

Difficulty tiers are defined by real observable properties and not relabeled versions of the same content.

- Beginner: short, common, low-complexity words; low punctuation; minimal capitalization; low numeric density.
- Intermediate: mixed vocabulary with more varied word length, occasional punctuation, and moderate capitalization.
- Advanced: longer words, more uncommon vocabulary, punctuation-heavy phrasings, and more frequent numeric or capitalized tokens.

This is documented here and in code as a data model for the typing engine and practice library.

## Storage resilience

Local storage is treated as best-effort. Any malformed or unavailable storage is ignored in a quiet way so the app continues operating with in-memory defaults.

## Ads and privacy

Advertisements are rendered only when `PUBLIC_ADSENSE_CLIENT` is set, and they are confined to non-typing regions. Analytics remain opt-in and disabled by default.
