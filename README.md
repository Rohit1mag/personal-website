# Rohit Kota - Personal Portfolio

A personal portfolio website showcasing experience, projects, and skills.

## Next.js Version (Recommended)

The main portfolio is built with Next.js in the `personal-portfolio/` folder.

**Requirements:** Node.js 18–22 (Node 20 LTS recommended)

```bash
cd personal-portfolio
nvm use 20   # if using nvm - ensures compatible Node version
npm install
npm run dev
```

Then open **http://localhost:3000**

**Build for production:**
```bash
npm run build
npm start
```

## Static HTML Version

A standalone version (no build required) is also available:

```bash
open index.html
# or: npx serve . && open http://localhost:3000
```

## Contents

- **Hero** - Name, tagline, and social links
- **About** - Bio and education (Cal Poly SLO, CS '26)
- **Experience** - Livin, AWS/CSU AI Camp, Cal Poly ML Research, Spread Goodness
- **Leadership** - CodeBox Technical Lead, Hack4Impact TPM
- **Projects** - ReviewSense, GhostHire, and pinned GitHub repos (Comment Insights, Indie Games EDA, MTG Cards, IMDB Parser, AuraFarm)
- **Skills** - Languages, frameworks, tools, ML stack
- **Contact** - Email, phone, LinkedIn, GitHub

## Design

- Dark theme with warm amber/gold accents
- Syne (display) + DM Sans (body) typography
- Responsive layout with mobile menu
- Subtle grid background pattern
