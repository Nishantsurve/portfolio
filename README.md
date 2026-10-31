# Nishant Surve — Personal Portfolio Website

Modern, high-performance personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **next-themes**.

---

## 🌟 Features

- **2026–2027 Aesthetic**: Deep near-black background (`#06080d`), electric cyan (`#00f2fe`) and emerald accents, dark-mode default with contrast-compliant light mode toggle.
- **Visual Motif**: Interactive HTML5 Canvas node-graph and workflow lines in the hero section evoking enterprise automation, RPA flows, and autonomous AI agents.
- **Bento Grid Layouts**: Glassmorphic rounded cards for About and Skills with subtle glows and responsive stacking.
- **Project Showcase**: Filterable gallery (`All`, `AI & Automation`, `Full-Stack`, `Tools`) with status badges (`Featured ML`, `In Development`, `Technical Prototype`), key technical features, and links.
- **Experience Timeline**: Career history at Xalta (Enterprise Automation & AI) and Prodigy Infotech.
- **Achievements & Academics**: LeetCode Knight stats (rating 1885, global ranks 539 & 555), DevCup Enigma Top 12, Hacktoberfest contributions, education at Dr. D. Y. Patil Institute of Technology (CGPA 8.83), and cloud certifications.
- **Contact & Interaction**: 1-click email copy, interactive contact form with instant validation, and direct social links.
- **Vercel-Ready & SEO Optimized**: JSON-LD Person schema, Open Graph metadata, dynamic sitemap, and robots.txt.

---

## 🛠️ Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata, JSON-LD, ThemeProvider
│   ├── page.tsx           # Single-page layout connecting all portfolio sections
│   ├── globals.css        # Tailwind directives, theme variables, glass utilities
│   ├── robots.ts          # Robots configuration
│   └── sitemap.ts         # Dynamic sitemap generator
├── components/
│   ├── navbar.tsx         # Sticky glass navbar with scroll progress & active spy
│   ├── theme-toggle.tsx   # Dark/Light switcher
│   ├── hero.tsx           # Hero section with headline, status badge & CTAs
│   ├── hero-canvas.tsx    # Interactive node-graph automation canvas
│   ├── about.tsx          # Story + Bento grid (Pune, Xalta, LeetCode, AI exploration)
│   ├── experience.tsx     # Career timeline (Xalta, Prodigy Infotech)
│   ├── skills.tsx         # Categorized tech stack bento cards
│   ├── projects.tsx       # Filterable projects gallery
│   ├── project-card.tsx   # Detailed project card component
│   ├── achievements.tsx   # LeetCode Knight & contest honors
│   ├── education.tsx      # Degree & verified certifications
│   ├── contact.tsx        # Message form & 1-click email copy
│   ├── footer.tsx         # Back-to-top button & attribution
│   └── social-icons.tsx   # Scalable SVG icons for GitHub and LinkedIn
└── data/
    ├── profile.ts         # Bio, links, headline, and status info
    ├── experience.ts      # Roles and responsibilities
    ├── skills.ts          # Categorized skills
    ├── projects.ts        # All 7 portfolio projects
    └── achievements.ts    # Ratings, hackathons, and certifications
```

---

## 🚀 Running the Project

### Prerequisites
- Node.js LTS (v20+ or v26+)

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your site.

### Production Build
```bash
npm run build
npm run start
```

---

## 📝 Updating Your Content
All content is cleanly separated into `src/data/`:
1. **Projects**: Edit [`src/data/projects.ts`](file:///c:/NishantPersonalSite/src/data/projects.ts) to add or modify projects.
2. **Profile & Links**: Edit [`src/data/profile.ts`](file:///c:/NishantPersonalSite/src/data/profile.ts) to update your GitHub, LinkedIn, LeetCode, or email.
3. **Experience**: Edit [`src/data/experience.ts`](file:///c:/NishantPersonalSite/src/data/experience.ts).
4. **Skills**: Edit [`src/data/skills.ts`](file:///c:/NishantPersonalSite/src/data/skills.ts).
5. **Resume**: Replace [`public/resume.pdf`](file:///c:/NishantPersonalSite/public/resume.pdf) with your actual PDF resume.
