# Interaction & Behavior Audit: Google Summer of Code

- **Site Key:** `summerofcode-withgoogle-com-0d0b67bf`
- **Page Key:** `root-8a5edab2`
- **Target URL:** `https://summerofcode.withgoogle.com/`

---

## 1. Interaction Models Summary

| Section | Model | Primary Mechanisms |
|---|---|---|
| Navbar | Click-driven | Hamburger menu drawer / modal, Log in navigation |
| Side Ribbon | Static fixed | Positioned fixed on left viewport edge, responsive display none on mobile |
| Hero Section | Static visual | SVG background pattern with perspective distortion |
| About & Impact | Static visual / Click | Outlined button hover, static impact stat numbers |
| Contributor Section | Click-driven | Primary CTA button, video links opening modal/dialog or external player |
| Organizations Section | Click-driven | Links and CTA button |
| News Section | Click-driven | News article links and "View all news" button |
| Footer | Click-driven | Navigation links, legal links, cookie banner dismissal |

---

## 2. Responsive Breakpoints

- **Desktop (1440px+):**
  - Full width layout with fixed left vertical branding ribbon (`Google Summer of Code`).
  - About/Impact section displayed in side-by-side split panels (blue on left, dark charcoal on right).
  - Contributor cards laid out as a 3-column horizontal grid.
  - Organizations section uses a 2-column info layout.
  - News section displays articles in a wide centered white card.
- **Tablet (768px):**
  - Vertical ribbon hidden to free screen real-estate.
  - Split about/stats section transitions to a vertical stack or stacked panels.
  - 3 Contributor cards wrap or stack vertically.
- **Mobile (390px):**
  - Navbar collapses to hamburger menu icon on left + logo centered + login button.
  - Headlines stack and wrap (`GSoC 2026 Contributors Announced!`).
  - Stats display in a 2-column grid.
  - All cards and links stack single-column with 100% width.
  - Cookie consent banner stays docked to bottom.

---

## 3. Hover & Transition States

- **Buttons:**
  - Primary button (`#1a73e8` background): Subtle darkening/lightening (`#1765cc`), elevation increase (`box-shadow`), `transition: all 0.2s ease`.
  - Outlined button (white or blue border): Fill background with slight opacity on hover (`rgba(255, 255, 255, 0.1)` or `rgba(26, 115, 232, 0.08)`).
- **Cards:**
  - Feature resource cards (`border-radius: 8px` / `16px`): Subtle elevation increase `box-shadow: 0 4px 12px rgba(0,0,0,0.08)` on hover.
  - Links ("Watch video", "Read mentor guide", "Read More"): Text decoration underline / color shift on hover.
- **Header:**
  - Fixed or sticky top navigation with subtle drop shadow on scroll.
