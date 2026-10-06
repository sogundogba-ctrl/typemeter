# TypeMeter Design System

## Product direction

TypeMeter is designed as a calm, tool-first typing platform. The interface emphasizes clarity, speed, and trust over decorative marketing. The typing surface is the visual center of the experience, while the surrounding UI remains restrained and purposeful.

## Design tokens

Colors are defined as CSS variables and used consistently across light and dark themes.

- bg
- surface
- surface-2
- border
- text
- text-muted
- accent
- accent-contrast
- correct
- incorrect
- focus
- warning

The product uses a restrained cool neutral palette with a teal accent. This keeps the interface professional and readable while emphasizing real data rather than visual noise.

## Spacing and structure

- 4/8px spacing scale
- 12-column grid with max content width of ~1120px
- reading width around 68ch for prose
- left-aligned content and asymmetric layouts where useful
- borders over shadows
- no oversized rounded corners; small radius of 6px

## Typography

- UI/prose: Inter-like system stack
- Typing surface: IBM Plex Mono / SFMono stack
- Type scale: 12, 14, 16, 18, 22, 28, 40
- Large monospace passage text with generous line height and clear caret

## Motion

- Short opacity/transform transitions only on state changes
- Respect `prefers-reduced-motion`
- no decorative animation, no parallax, no floating blobs

## Accessibility

- keyboard first interaction patterns
- visible focus rings using `--focus`
- text and shape differences for correct/incorrect states rather than color alone
- icon-only controls require accessible labels and tooltips

## Assets and brand

The product is built with a custom SVG wordmark and a simple geometric icon mark based on a caret and gauge motif. The same palette is used across assets, and all images are local and intentionally minimal.
