# Navbar Specification

## Overview
- **Target file:** `src/components/shared/Navbar.tsx`
- **Screenshot:** `docs/design-references/summerofcode-withgoogle-com-0d0b67bf/desktop-1440.png`
- **Interaction model:** Click-driven (menu drawer toggle, navigation links, login redirect) + sticky scroll

## DOM Structure
- `header.navbar-root`: Sticky top container (`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border`)
  - `div.navbar-container`: Max-width wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between`)
    - `div.navbar-left`: Flex row containing:
      - `button.menu-toggle`: Mobile hamburger toggle button (`lg:hidden`)
      - `Link.brand`: Logo lockup with GSoC Sun mark and "Google Summer of Code" text
      - `nav.desktop-links`: Horizontal route links (`hidden lg:flex items-center gap-6 ml-8`)
    - `div.navbar-right`: Flex row containing:
      - `Link.login-btn`: Google blue outline/solid pill button with user profile silhouette icon
  - `div.mobile-drawer`: Absolute / fixed slideout drawer for mobile navigation

## Computed Styles
### Container
- display: flex
- position: sticky
- top: 0px
- height: 64px
- backgroundColor: rgba(255, 255, 255, 0.98)
- borderBottom: 1px solid #dadce0
- zIndex: 100

### Brand Lockup
- display: flex
- alignItems: center
- gap: 10px
- fontFamily: 'Roboto', 'Google Sans', sans-serif
- fontSize: 18px
- fontWeight: 500
- color: #202124

### Nav Links
- fontSize: 14px
- fontWeight: 500
- color: #5f6368 (Hover: #1a73e8; Active: #1a73e8 with bottom indicator)
- transition: color 0.15s ease

### Login Button
- height: 36px
- padding: 0 16px
- borderRadius: 18px
- border: 1px solid #dadce0
- color: #1a73e8
- fontSize: 14px
- fontWeight: 500

## States & Behaviors
- **Mobile Menu Toggle:** Clicking hamburger icon toggles `isMobileMenuOpen` state, displaying full vertical navigation links.
- **Hover:** Nav links turn from `#5f6368` to `#1a73e8`. Login button shows background `#f8f9fa` on hover.

## Text Content
- Brand: "Google Summer of Code"
- Links: "About", "How It Works", "Get Started", "Past Programs", "Help", "Rules", "Terms"
- Button: "Log in"

## Responsive Behavior
- **Desktop (1440px):** Full desktop horizontal navigation visible; hamburger menu hidden.
- **Tablet (768px):** Hamburger visible, horizontal links collapsed.
- **Mobile (390px):** Brand lockup compacted, mobile slideout drawer provides full navigation access.
