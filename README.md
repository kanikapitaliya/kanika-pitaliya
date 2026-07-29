# Kanika Pitaliya — Personal Data Science & AI Portfolio

A modern, high-performance personal portfolio website for **Kanika Pitaliya** built from scratch using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

Designed with a sophisticated dark AI/data science aesthetic, statistical reasoning focus, interactive project showcases, modular timeline, category-filtered skill matrix, and Vercel-ready serverless deployment architecture.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Local Setup & Running](#local-setup--running)
3. [Project Architecture](#project-architecture)
4. [How to Edit Portfolio Data](#how-to-edit-portfolio-data)
   - [Modifying Personal Details & Hero](#1-modifying-personal-details--hero)
   - [Updating About Section](#2-updating-about-section)
   - [Adding & Editing Skills](#3-adding--editing-skills)
   - [Modifying Journey (Timeline) Entries](#4-modifying-journey-timeline-entries)
   - [Adding & Customizing Projects & Metrics](#5-adding--customizing-projects--metrics)
   - [Adding GitHub / Live Demo Links](#6-adding-github--live-demo-links)
   - [Replacing Resume PDF](#7-replacing-resume-pdf)
   - [Modifying Social Links](#8-modifying-social-links)
   - [Changing Theme Accent Styling](#9-changing-theme-accent-styling)
5. [Vercel Deployment Instructions](#vercel-deployment-instructions)

---

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.react.dev/) & Custom SVG Vectors

---

## Local Setup & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to preview the site with live reloading.

### 3. Run Type Checking & Production Build
```bash
# Type check without emitting
npx tsc --noEmit

# Production build
npm run build

# Run production server locally
npm run start
```

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

## How to Edit Portfolio Data

All text, projects, skills, metrics, achievements, certifications, and links are centralized in a single configuration file:
👉 `src/data/portfolio.ts`

### 1. Modifying Personal Details & Hero
Open `src/data/portfolio.ts` and modify `personalDetails`:
```ts
export const personalDetails: PersonalDetails = {
  name: 'KANIKA PITALIYA',
  primaryTitle: 'Data Scientist • ML & AI Engineer',
  supportingIdentity: 'Statistics × Machine Learning × Generative AI',
  heroDescription: '...',
  rotatingDescriptors: [
    'Data Scientist',
    'ML Engineer',
    'AI Builder',
    'Statistical Thinker',
  ],
  // ...
};
```

### 2. Updating About Section
In `src/data/portfolio.ts`, update `aboutNarrative` (array of paragraphs) and `currentlyExploring` (array of topic tags):
```ts
aboutNarrative: [
  'Paragraph 1...',
  'Paragraph 2...',
],
currentlyExploring: [
  'Production ML systems',
  'Agentic AI',
  'RAG evaluation',
  // ...
],
```

### 3. Adding & Editing Skills
Skills are organized under `skillCategories` in `src/data/portfolio.ts`:
```ts
export const skillCategories: SkillCategory[] = [
  {
    id: 'data-science-stats',
    category: 'DATA SCIENCE & STATISTICS',
    description: 'Statistical reasoning and data exploration.',
    skills: ['Python', 'R', 'Statistical Modeling', 'Hypothesis Testing'],
  },
  // Add new skill categories or add skills to existing categories
];
```

### 4. Modifying Journey (Timeline) Entries
Update `timelineItems` in `src/data/portfolio.ts`:
```ts
export const timelineItems: TimelineItem[] = [
  {
    id: 'msc-data-analytics',
    type: 'EDUCATION', // 'EDUCATION' or 'EXPERIENCE'
    title: 'MSc — Data Analytics',
    subtitle: 'Christ University',
    location: 'Bangalore',
    period: 'Present',
    narrative: '...',
    focus: ['Machine Learning', 'Generative AI'],
  },
];
```

### 5. Adding & Customizing Projects & Metrics
Update `projects` in `src/data/portfolio.ts`:
```ts
export const projects: Project[] = [
  {
    id: 'my-new-project',
    title: 'New AI Project Title',
    category: 'Category Name',
    oneLiner: 'One sentence project summary.',
    technologies: ['Python', 'LangChain', 'FastAPI'],
    featured: true,
    metrics: [
      { value: '95%', label: 'Accuracy' },
      { value: '<50ms', label: 'Latency' },
    ],
    problem: 'Detailed description of the problem...',
    approach: 'How you approached solving it...',
    engineering: 'Architecture & technical choices...',
    evaluation: 'Quantitative metrics and evaluation findings...',
    keyInsight: 'Main takeaway or statistical finding...',
    interestingThemes: ['Semantic Search', 'Vector Indexing'],
    githubUrl: 'https://github.com/your-username/repo',
    demoUrl: 'https://demo-link.com',
  },
];
```

### 6. Adding GitHub / Live Demo Links
In `src/data/portfolio.ts`, set `githubUrl` and `demoUrl` properties on any project. If left undefined, the modal automatically hides unlinked buttons without displaying broken placeholders.

### 7. Replacing Resume PDF
Simply drop your actual PDF resume into:
`public/resume/resume.pdf`

Both the Navbar and Hero "View Resume" buttons will immediately serve your new PDF file.

### 8. Modifying Social Links
Update the `email`, `github`, and `linkedin` fields inside `personalDetails` in `src/data/portfolio.ts`:
```ts
email: 'your.email@domain.com',
github: 'https://github.com/yourusername',
linkedin: 'https://linkedin.com/in/yourusername',
```

### 9. Changing Theme Accent Styling
Accent colors use Tailwind classes (`emerald`, `cyan`, `violet`, `zinc`). You can customize the color theme across components or update `src/app/globals.css`.

---

## Vercel Deployment Instructions

This repository is optimized for one-click deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git remote add origin https://github.com/yourusername/kanika-pitaliya.tech.git
   git push -u origin main
   ```

2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Next.js** (auto-detected).
5. Click **"Deploy"**.

No environment variables or API keys are required for basic deployment.
