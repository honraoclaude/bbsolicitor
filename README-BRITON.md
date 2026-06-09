# Briton Solicitors — Modern AI-Powered Marketing Website

A premium, editorial marketing website for Briton Solicitors (UK law firm). Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Anthropic's Claude AI.

## Quick Start

### Prerequisites
- Node.js 18+
- Anthropic API key (for Ask Briton chat)

### Setup
```bash
npm install

# Create .env.local
echo "ANTHROPIC_API_KEY=sk-ant-your-key-here" > .env.local

# Start dev server
npm run dev
```

Opens at `http://localhost:3000`

## Features

✨ **8 Fully Built Pages:**
- Home (8 sections: Hero, Trust Strip, Services, Offices, Why Briton, Insights, CTA)
- Expertise Landing (9 services in grid)
- Immigration Detail (with Visa Checker & Document Intelligence AI demos)
- Offices (3 locations with Google Maps)
- Contact (office directory)
- ILA (Independent Legal Advice explainer)
- AI Policy (regulatory transparency)

🤖 **Ask Briton AI Chat:**
- Floating button on every page
- Streaming responses via Claude Sonnet
- Prompt caching (~90% cost savings)
- Multilingual (EN, BN, UR, HI, TA, RO)
- SRA-compliant refusal rules
- Zero data retention

🎨 **Design System:**
- Navy/Ivory/Gold brand colors
- Fraunces (serif) + Inter (sans) typography
- Responsive 12-col grid with hairline dividers
- Scroll-reveal animations
- Dark mode support

♿ **Production Quality:**
- Full accessibility (WCAG AA)
- Security headers (CSP, X-Frame-Options)
- SEO (dynamic sitemap, schema.org JSON-LD)
- Performance optimized

## Development

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # TypeScript check
```

## Customization

### Services
Edit `data/services.ts` — updates `/expertise` landing + creates dynamic pages at `/expertise/[slug]`

### Offices
Edit `data/offices.ts` — affects Footer, Offices page, Chat context

### Brand Colors
Edit `app/globals.css` CSS variables (`--color-navy`, `--color-ivory`, `--color-gold`)

### Chat System Prompt
Edit `lib/system-prompt.ts` to customize AI behavior, refusal rules, or supported languages

## Deployment

### Vercel
```bash
vercel deploy
# Set env var: ANTHROPIC_API_KEY
```

### Docker
```bash
docker build -t briton-solicitors .
docker run -p 3000:3000 -e ANTHROPIC_API_KEY=sk-ant-... briton-solicitors
```

### Self-Hosted
```bash
npm run build
npm start  # Runs on :3000
```

## Key Components

**EligibilityChecker** — 3-step visa route wizard. Outputs recommendation card.

**DocumentIntelligenceDemo** — File upload → AI analysis streaming. Extracts fields, flags missing items.

**ChatPanel** — Slide-out sidebar with streaming messages, suggested prompts, SRA disclaimer.

**AnimatedSection** — Scroll-reveal animations. Respects `prefers-reduced-motion`.

## Security & Compliance

- CSP headers (frame-src: maps.google.com only)
- X-Frame-Options, X-XSS-Protection enabled
- ANTHROPIC_API_KEY server-only
- SRA-compliant AI refusal rules
- GDPR compliant (zero data retention)
- Full accessibility (WCAG AA)

## Performance

- Static generation (SSG) for all pages
- Image lazy-loading (next/image)
- Font optimization (display=swap)
- 1-year cache headers for static assets
- Prompt caching: 90% API cost reduction

## Troubleshooting

**Chat not working?**
- Check `.env.local` has valid `ANTHROPIC_API_KEY`

**Dev server stuck?**
```bash
rm -rf .next && npm run dev
```

## Support

- **Website:** https://britonsolicitors.co.uk
- **Phone:** +44 203 475 4545

---

**Built with Next.js 14 + Claude AI**
