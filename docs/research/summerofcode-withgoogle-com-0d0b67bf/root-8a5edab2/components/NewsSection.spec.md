# NewsSection Specification

## Overview
- **Target file:** `src/components/home/NewsSection.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Read more article links + "View all news" CTA

## DOM Structure
- `section.news-root`: Deep Blue background section with perspective dot matrix (`bg-[#1a73e8] py-16 lg:py-24 relative overflow-hidden text-white`)
  - `div.news-container`: Max-width container (`max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8`)
    - `h2.news-title`: Centered "Latest News" in JetBrains Mono
    - `div.news-card`: Elevated white card with dark text (`bg-white text-foreground rounded-2xl p-6 sm:p-10 shadow-xl space-y-8`)
      - Article 1: "The Journey Begins: Meet the 2026 GSoC Contributors!"
        - Meta: "By Google Open Source", Date
        - Excerpt paragraph
        - "Read More" link
      - Divider line (`border-t border-border`)
      - Article 2: "Open Source, Open Doors, Apply Now for Google Summer of Code!"
        - Meta: "By Google Open Source", Date
        - Excerpt paragraph
        - "Read More" link
    - `div.cta-wrapper`: Centered white outlined button ("View all news")

## Computed Styles
- Section background: #1a73e8
- Headline: JetBrains Mono 36px, color #ffffff, text-align center
- Card: background #ffffff, border-radius 16px, box-shadow 0 8px 24px rgba(0,0,0,0.15)
- Article Title: Roboto 20px, font-weight 500, color #202124
- Read More: color #1a73e8, font-weight 500
