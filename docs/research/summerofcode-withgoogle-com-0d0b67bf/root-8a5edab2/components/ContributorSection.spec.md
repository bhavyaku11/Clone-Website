# ContributorSection Specification

## Overview
- **Target file:** `src/components/home/ContributorSection.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Click CTA ("View 2026 project list") + Video modal dialog triggers

## DOM Structure
- `section.contributor-root`: Full width section with light background (`bg-[#f8f9fa] py-16 lg:py-24`)
  - `div.contributor-container`: Max-width wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
    - `div.contributor-header`: Text and CTA
      - `h2`: "Become a GSoC contributor"
      - `p`: Guidance paragraph detailing the application process and connecting with organizations
      - `Link.cta-btn`: Blue filled pill button ("View 2026 project list")
    - `div.cards-grid`: 3 resource cards (`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12`)
      - Card 1: Blue video icon, "Want to learn more about Google Summer of Code?", "Watch video" link
      - Card 2: Green group icon, "Open source organizations are ready to welcome new, excited contributors into their communities", "Watch video" link
      - Card 3: Orange bulb icon, "Learn how to apply to be a GSoC contributor", "Watch video" link

## Computed Styles
### Cards
- backgroundColor: #ffffff
- borderRadius: 12px
- padding: 32px
- border: 1px solid #dadce0
- boxShadow: 0 1px 3px rgba(60,64,67,0.1)
- transition: transform 0.2s ease, box-shadow 0.2s ease
- hover: translateY(-2px), shadow-md

### Watch Video Link
- color: #1a73e8
- fontWeight: 500
- fontSize: 14px
- display: flex, alignItems: center, gap: 8px
