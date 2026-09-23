# Page Topology: Google Summer of Code Homepage

- **Target URL:** `https://summerofcode.withgoogle.com/`
- **Normalized Origin:** `https://summerofcode.withgoogle.com`
- **Site Key:** `summerofcode-withgoogle-com-0d0b67bf`
- **Page Key:** `root-8a5edab2`
- **Inspection Date:** 2026-09-22

---

## Visual Structure (Top to Bottom)

### 1. Navigation / Top Bar (`Navbar`)
- **Visual Order:** 1 (Sticky/Fixed top layer, `z-index: 100`)
- **Type:** App header / navigation bar
- **Layout:** Flex row with space-between
- **Left:** Mobile hamburger menu icon button + Google Summer of Code lockup (logo mark + text)
- **Right:** "Log in" pill button with user profile silhouette icon
- **Interaction Model:** Static layout with interactive menu toggle and login link

### 2. Side Ribbon (`VerticalRibbon`)
- **Visual Order:** Persistent fixed left overlay
- **Type:** Decorative / branding side rail
- **Position:** `position: fixed; left: 0; top: 50%; transform: translateY(-50%) rotate(-90deg)`
- **Content:** Sun logo mark + `Google Summer of Code` text
- **Visibility:** Visible on desktop viewports, hidden on mobile

### 3. Hero Section (`HeroSection`)
- **Visual Order:** 2
- **Type:** Flow content
- **Layout:** 2-column hero or single left-aligned column with perspective 3D dot grid background on right
- **Elements:**
  - Eyebrow branding: GSoC Sun Icon + "Google Summer of Code"
  - Large Headline: "GSoC 2026 Contributors Announced!" (JetBrains Mono style, bold, high-contrast)
  - Color Block Accent: Solid Google blue (`#1a73e8`) rectangular badge
  - Background graphic: SVG dot matrix pattern with 3D perspective distortion (light blue `#d2e3fc` dots)
- **Interaction Model:** Static visual presentation

### 4. Overview & Impact Metrics Section (`AboutStatsSection`)
- **Visual Order:** 3
- **Type:** Split dual-container section
- **Left Container (Blue Accent `#1a73e8`):**
  - Headline: "What is Google Summer of Code?" (Google Sans / JetBrains Mono)
  - Body copy describing the program (white text on blue)
  - Button: "Learn more" (white outlined button)
- **Right Container (Dark Charcoal `#202124` / `#2d3135`):**
  - 6 Impact statistics displayed in a 3-column / 2-row grid:
    1. `22K+` / `New Contributors`
    2. `123` / `Countries`
    3. `48M+` / `Lines of Code`
    4. `1000+` / `Open Source Organizations`
    5. `21K+` / `Mentors`
    6. `20+` (or active counter) / `Years`
- **Interaction Model:** Static with button hover states

### 5. Become a GSoC Contributor Section (`ContributorSection`)
- **Visual Order:** 4
- **Type:** Flow content on light/off-white background
- **Elements:**
  - Headline: "Become a GSoC contributor" (JetBrains Mono style)
  - Guidance text & instructions on reaching out to organizations
  - Primary CTA Button: "View 2026 project list" (filled Google blue `#1a73e8`)
  - 3 Feature Resource Cards (white rounded cards with subtle drop shadow):
    - Card 1: Blue play icon, "Want to learn more about Google Summer of Code?", "Watch video" link
    - Card 2: Green people icon, "Open source organizations are ready to welcome new, excited contributors into their communities", "Watch video" link
    - Card 3: Orange lightbulb icon, "Learn how to apply to be a GSoC contributor", "Watch video" link
- **Interaction Model:** Clickable video links and CTA button

### 6. Open Source Organizations Section (`OrganizationsSection`)
- **Visual Order:** 5
- **Type:** Flow content
- **Elements:**
  - Headline: "Open source organizations"
  - Description of mentoring history since 2005
  - Sub-columns for Organizations & Mentors:
    - Left: "Learn why your organization should participate in GSoC" + "Watch video" link
    - Right: "Interested in being a GSoC Mentor?" + "Watch video" + "Read mentor guide" links
  - CTA Button: "Browse all 2026 organizations" (filled blue `#1a73e8`)
- **Interaction Model:** Static with interactive link & button hovers

### 7. Latest News Section (`NewsSection`)
- **Visual Order:** 6
- **Type:** Flow content with royal blue background (`#1a73e8` / `#4285f4`) and background dot pattern
- **Elements:**
  - Centered Headline: "Latest News" (white text, JetBrains Mono style)
  - Centered Card: Elevated white card with rounded corners (`border-radius: 16px`)
    - Item 1: "The Journey Begins: Meet the 2026 GSoC Contributors!" (by Google Open Source, date, excerpt, "Read More" link)
    - Horizontal divider
    - Item 2: "Open Source, Open Doors, Apply Now for Google Summer of Code!" (author, date, excerpt, "Read More" link)
  - Outlined CTA Button: "View all news" (white border & text)
- **Interaction Model:** Link navigation to blog posts

### 8. Footer (`Footer`)
- **Visual Order:** 7
- **Type:** Multi-tier footer
- **Top Footer Tier:**
  - Left: Logo lockup + "Introducing developers to open source software development"
  - Right: Link directory in 2 columns:
    - Column 1: About, Get started, How it works, Past programs, Program timeline
    - Column 2: 2026 program, News, Help, GSoC YouTube, Contact
- **Bottom Footer Tier:**
  - Google wordmark (`/assets/media/gray-google-word-logo.svg`)
  - Privacy, Rules, Terms legal links
- **Cookie Consent Banner:**
  - Fixed bottom banner: "This site uses cookies from Google to deliver and enhance the quality of its services and to analyze traffic." + "Learn more", "OK, got it" buttons
