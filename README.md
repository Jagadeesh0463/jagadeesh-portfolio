# Jagadeesh Portfolio

A premium personal portfolio experience for Jagadeesh, designed with a dark cinematic aesthetic, subtle rain ambience, glassmorphism, smooth motion, and a strong personal-brand storytelling angle.

Built with:

- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Overview

This portfolio is designed to feel more like a personal brand experience than a basic resume website. It combines:

- Apple-inspired visual restraint
- Awwwards-style motion and atmosphere
- Calm rain mood with deep blue and neon accents
- Responsive, section-based storytelling
- Clean reusable component structure

The site includes:

- Hero section with cinematic messaging and CTAs
- Story-driven about section
- Animated skills section
- Premium project showcase
- Content creator / YouTube embed section
- Interests cards
- Services section
- Contact form with API route support
- SEO metadata, robots, and sitemap

## Project Structure

```text
app/
  api/contact/route.ts
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  about-section.tsx
  contact-form.tsx
  contact-section.tsx
  content-section.tsx
  hero-section.tsx
  interests-section.tsx
  motion-reveal.tsx
  navbar.tsx
  page-shell.tsx
  projects-section.tsx
  rain-background.tsx
  section-shell.tsx
  services-section.tsx
  skills-section.tsx

data/
  site.ts
```

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file if you want the contact form to send live email via Resend:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

If these are not set, the portfolio still works, but the contact endpoint will return a friendly configuration message instead of sending email.

## Personalization Checklist

Before launch, update these values:

- Replace placeholder project, social, and YouTube links in `data/site.ts`
- Replace `https://example.com` in `app/layout.tsx`
- Replace `https://example.com` in `app/robots.ts`
- Replace `https://example.com` in `app/sitemap.ts`
- Update any text content in `data/site.ts` and section components to better match Jagadeesh's real story and work

## Netlify Deployment

This project can be deployed on Netlify.

Recommended settings:

- Build command: `npm run build`
- Publish directory: `.next`

If using the contact form in production, add these environment variables in Netlify:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`

## Notes

- The current content includes polished placeholder portfolio copy designed to match the requested brand direction.
- The contact form backend is ready for Resend-style delivery through the existing API route.
- The local environment used during creation did not have `npm` installed, so dependency installation and final production verification were not run here.
