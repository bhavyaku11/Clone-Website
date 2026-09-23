# Technical Stack Analysis: Google Summer of Code

- **Target URL:** `https://summerofcode.withgoogle.com/`
- **Site Key:** `summerofcode-withgoogle-com-0d0b67bf`
- **Page Key:** `root-8a5edab2`

---

## 1. Target Site Architecture
- **Framework:** Angular with Angular Material (`@angular/material`, `var(--mat-...)`)
- **Styling:** Material Design 3 tokens + custom component SCSS
- **Fonts:** Google Sans + Roboto + JetBrains Mono hosted via Google Fonts CDN
- **Icons:** Material Symbols / SVG icon definitions
- **Graphics:** SVG dot pattern backgrounds embedded as data URIs with CSS 3D perspective transforms

---

## 2. Rebuilt Stack Mapping (Target Next.js Project)
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4 with custom tokens matching target's palette
- **UI Components:** shadcn/ui primitives + tailored components
- **Typography:** `next/font/google` for `Google Sans`, `Roboto`, `JetBrains Mono`
- **Icons:** Extracted Lucide / SVG icons matching original icons exactly
- **Layout Architecture:** Modular section components under `src/components/sites/summerofcode-withgoogle-com-0d0b67bf/root-8a5edab2/`
