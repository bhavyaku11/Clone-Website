# AboutStatsSection Specification

## Overview
- **Target file:** `src/components/home/AboutStatsSection.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Click link ("Learn more") + button hovers

## DOM Structure
- `section.stats-section-root`: Wrapper with max-width container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`)
  - `div.stats-card-container`: Split rounded container with overflow hidden (`rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-md`)
    - `div.left-card`: Google Blue card (`lg:col-span-5 bg-[#1a73e8] p-8 lg:p-12 text-white flex flex-col justify-between`)
      - `h2.about-title`: "What is Google Summer of Code?"
      - `p.about-body`: "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development..."
      - `Link.learn-more-btn`: Outlined white rounded button ("Learn more") linking to `/about`
    - `div.right-card`: Charcoal dark card (`lg:col-span-7 bg-[#202124] p-8 lg:p-12 text-white grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8`)
      - 6 Stat Items:
        1. `22K+` / `New Contributors`
        2. `123` / `Countries`
        3. `48M+` / `Lines of Code`
        4. `1000+` / `Open Source Organizations`
        5. `21K+` / `Mentors`
        6. `20+` / `Years`

## Computed Styles
### Left Container (Blue)
- backgroundColor: #1a73e8
- color: #ffffff
- padding: 48px
- borderRadius: 16px 0 0 16px (desktop)

### Right Container (Charcoal)
- backgroundColor: #202124
- color: #ffffff
- padding: 48px
- borderRadius: 0 16px 16px 0 (desktop)

### Stat Value
- fontFamily: 'JetBrains Mono', monospace
- fontSize: 32px to 38px
- fontWeight: 700
- color: #ffffff

### Stat Label
- fontFamily: 'Roboto', sans-serif
- fontSize: 13px
- color: #dadce0
- textTransform: capitalize
