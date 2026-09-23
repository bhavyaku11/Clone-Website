# VerticalRibbon Specification

## Overview
- **Target file:** `src/components/shared/VerticalRibbon.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Static desktop branding ribbon

## DOM Structure
- `aside.ribbon-root`: Fixed left rail container (`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex items-center`)
  - `div.ribbon-content`: Rotated text container (`-rotate-90 origin-left flex items-center gap-2 pl-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground select-none`)
    - GSoC Sun Icon SVG
    - "Google Summer of Code" label

## Computed Styles
- position: fixed
- left: 0px
- top: 50%
- transform: translateY(-50%)
- zIndex: 40
- color: #5f6368
- fontSize: 11px
- letterSpacing: 0.15em
- textTransform: uppercase
- display: none on < 1280px, flex on >= 1280px
