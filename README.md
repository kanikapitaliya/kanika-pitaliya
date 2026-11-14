# Kanika Pitaliya — Personal Data Science & AI Portfolio

A modern, high-performance personal portfolio website built from scratch using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lucide React**.

Designed with a sophisticated & interactive project showcases, modular timeline, category-filtered skill matrix and Vercel-ready serverless deployment architecture.

---

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.react.dev/) & Custom SVG Vectors

---

## Project Architecture

```
kanika-pitaliya.tech/
├── public/
│   ├── favicon.ico
│   ├── icon.svg                     # Monogram tab icon
│   └── resume/
│       ├── README.md
│       └── resume.pdf               # Place your PDF resume here
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout & SEO OpenGraph metadata
│   │   ├── page.tsx                 # Main page assembling all sections
│   │   ├── robots.ts                # Dynamic robots.txt
│   │   ├── sitemap.ts               # Dynamic sitemap.xml
│   │   └── globals.css              # Custom Tailwind CSS theme & scrollbar styling
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Glassmorphism header with scrollspy & mobile drawer
│   │   │   └── Footer.tsx           # Footer with dynamic year & back-to-top button
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Hero section with dynamic text rotation
│   │   │   ├── About.tsx            # About section & Currently Exploring tags
│   │   │   ├── Skills.tsx           # Filterable skill matrix
│   │   │   ├── Journey.tsx          # Unified Education + Experience timeline
│   │   │   ├── Projects.tsx         # Selected work cards
│   │   │   ├── Highlights.tsx       # Hackathons & competition highlights
│   │   │   ├── Certifications.tsx   # Verified Stanford/DeepLearning/IBM certificates
│   │   │   └── Contact.tsx          # Contact form & email copy fallback
│   │   └── ui/
│   │       ├── Badge.tsx            # Styled tech & domain pills
│   │       ├── ProjectModal.tsx     # Deep-dive project modal dialog
│   │       ├── RotatingText.tsx     # Hero descriptor rotator
│   │       ├── SectionHeading.tsx   # Standard section heading layout
│   │       └── SocialIcons.tsx      # SVG social icon vectors
│   ├── data/
│   │   └── portfolio.ts             # CENTRALIZED PORTFOLIO DATA FILE
│   ├── lib/
│   │   └── utils.ts                 # Class merging utilities
│   └── types/
│       └── index.ts                 # TypeScript type definitions
└── README.md
```


---
