# Footer Specification

## Overview
- **Target file:** `src/components/shared/Footer.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Internal & external links navigation

## DOM Structure
- `footer.footer-root`: Full-width light gray footer (`bg-[#f8f9fa] border-t border-border mt-auto`)
  - `div.footer-top`: Navigation & brand section (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8`)
    - Left col (`lg:col-span-4`): GSoC logo + "Introducing developers to open source software development"
    - Right cols (`lg:col-span-8`): 2-column link directory
      - Col 1: About, Get started, How it works, Past programs, Program timeline
      - Col 2: 2026 program, News, Help, GSoC YouTube, Contact
  - `div.footer-bottom`: Google attribution section (`border-t border-border py-8`)
    - Grayscale Google wordmark SVG
    - Legal links: Privacy, Rules, Terms
