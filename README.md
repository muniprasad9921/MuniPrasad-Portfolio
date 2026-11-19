# Muni Prasad | Senior UI/UX Designer & AI Automation Specialist

Personal portfolio showcasing end-to-end product design, scalable design systems, UX strategy, and production AI automation architectures.

## Highlights

- **Dark Luxury Editorial System**: Obsidian, charcoal, and warm champagne-gold visual language built with Tailwind CSS v4 and subtle compositor-only motion.
- **Interactive UI/UX Case Studies**: 7 filterable case studies across Enterprise SaaS, Mobile Apps, Healthcare, and Civic platforms, each opening a 12-chapter interactive reader modal.
- **AI Automation Blueprint Studio**: 7 AI workflow solutions (Voice AI, Real Estate Qualification, Support Chatbots, WhatsApp/Telegram Automation, CRM Automation, Process Automation, Appointment Booking) with live step-by-step pipeline simulation.
- **Dual Methodology Explorer**: Interactive 9-stage UI/UX Design Process and 8-stage AI Automation Process.
- **In-App Resume Viewer & Direct Download**: Built-in PDF preview modal and one-click download directly from the sticky navigation bar.
- **SEO & Production Ready**: Custom SVG favicon, Open Graph & Twitter Card tags, Schema.org JSON-LD, `robots.txt`, `sitemap.xml`, and `vercel.json`.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React

## Project Structure

```text
├── public/
│   ├── assets/aistudio/          # Resume PDF and static media assets
│   ├── favicon.svg               # Custom MP monogram favicon
│   ├── robots.txt                # Search crawler directives
│   └── sitemap.xml               # XML sitemap
├── src/
│   ├── assets/images/            # Portfolio visual mockups (copied to dist/ on build)
│   ├── components/               # Modular UI sections and interactive modals
│   ├── data/portfolioData.ts     # Structured case studies, automations, skills, and links
│   ├── App.tsx                   # Root application shell and scrollspy navigation
│   ├── index.css                 # Tailwind v4 theme tokens and global styles
│   └── main.tsx                  # React DOM entry point
├── index.html                    # Document shell, fonts, SEO, and JSON-LD
├── vercel.json                   # Vercel SPA routing and caching headers
├── vite.config.ts                # Vite build and static asset copy configuration
└── package.json                  # Scripts and dependencies
```

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:3000)
npm run dev

# 3. Type-check
npm run lint

# 4. Build for production
npm run build

# 5. Preview the production bundle locally
npm run preview
```

## Environment Variables & Security

This portfolio is a static client-side Single Page Application (SPA) and **requires zero environment variables and zero API keys** to run locally or deploy on Vercel.

- Leave the **Environment Variables** section completely blank when importing into Vercel.
- Never add private API keys to client-side `VITE_*` variables (they are bundled into browser JavaScript).

## Deploying to Vercel via GitHub

Repository: [github.com/muniprasad9921/Muni_Prasad-Portfolio](https://github.com/muniprasad9921/Muni_Prasad-Portfolio)

1. Synchronize this project to the `main` branch of `https://github.com/muniprasad9921/Muni_Prasad-Portfolio`.
2. Sign in to [Vercel](https://vercel.com) with your GitHub account.
3. Click **Add New → Project** and import `muniprasad9921/Muni_Prasad-Portfolio`.
4. Confirm the detected build settings (also defined in `vercel.json`):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Every future push to `main` triggers an automatic production deployment.
6. After deployment, update the domain URL in `public/robots.txt` and `public/sitemap.xml` if you connect a custom domain.

## Contact

- **Email**: [muniprasad9921@gmail.com](mailto:muniprasad9921@gmail.com)
- **LinkedIn**: [linkedin.com/in/muniprasadt1](https://www.linkedin.com/in/muniprasadt1)
- **Behance**: [behance.net/muniprasad1](https://www.behance.net/muniprasad1)
