# OrganizationsSection Specification

## Overview
- **Target file:** `src/components/home/OrganizationsSection.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Click CTA ("Browse all 2026 organizations") + Guide & video links

## DOM Structure
- `section.orgs-root`: White background section (`bg-white py-16 lg:py-24 border-t border-border`)
  - `div.orgs-container`: Wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
    - `h2`: "Open source organizations"
    - `p`: Description of open source organizations mentoring new developers
    - `div.orgs-grid`: 2-column guidance layout (`grid grid-cols-1 md:grid-cols-2 gap-8 my-10`)
      - Col 1: Organizations guidance + "Watch video" link
      - Col 2: Mentors guidance + "Watch video" link + "Read mentor guide" link
    - `Link.cta-btn`: Blue pill button ("Browse all 2026 organizations")

## Computed Styles
- Background: #ffffff
- Headline H2: JetBrains Mono 36px, font-weight 700, color #202124
- Subtitle: Roboto 16px, color #5f6368, max-width 720px
- CTA Button: background #1a73e8, border-radius 24px, color #ffffff, padding 12px 28px
