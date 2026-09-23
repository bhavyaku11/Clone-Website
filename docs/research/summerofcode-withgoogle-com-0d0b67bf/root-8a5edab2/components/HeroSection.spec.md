# HeroSection Specification

## Overview
- **Target file:** `src/components/home/HeroSection.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Static visual hero with 3D perspective dot-matrix animation/canvas

## DOM Structure
- `section.hero-root`: Relative overflow-hidden container with light gray surface (`bg-[#f8f9fa] pt-12 pb-16 lg:pt-20 lg:pb-24`)
  - `div.hero-container`: Grid layout wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`)
    - `div.hero-text-col`: Left content (`lg:col-span-7 space-y-6`)
      - `div.hero-eyebrow`: Flex row with Sun icon + "Google Summer of Code" in JetBrains Mono
      - `h1.hero-headline`: Large bold title "GSoC 2026 Contributors Announced!"
      - `div.hero-accent-block`: Solid Google Blue (`#1a73e8`) rectangular block (`w-24 h-4 bg-primary`)
    - `div.hero-graphic-col`: Right graphic area (`lg:col-span-5 relative flex justify-center items-center`)
      - Perspective 3D SVG Dot Matrix (`DotGridPattern.tsx` with light blue dots `#d2e3fc` on angled grid plane)

## Computed Styles
### Headline (H1)
- fontFamily: 'JetBrains Mono', 'Roboto Mono', monospace
- fontSize: clamp(2.5rem, 5vw, 4.25rem) (approx 48px to 68px)
- fontWeight: 700
- lineHeight: 1.15
- letterSpacing: -0.02em
- color: #202124

### Eyebrow
- fontFamily: 'JetBrains Mono', monospace
- fontSize: 14px
- fontWeight: 500
- color: #5f6368
- letterSpacing: 0.05em

### Blue Accent Bar
- width: 80px
- height: 12px
- backgroundColor: #1a73e8
- borderRadius: 2px

## Responsive Behavior
- **Desktop (1440px):** 2 columns (7 cols text + 5 cols 3D perspective graphic).
- **Tablet (768px):** Single column stack, headline scales to 38px, dot pattern sits beneath text.
- **Mobile (390px):** Headline 30px, compact padding.
