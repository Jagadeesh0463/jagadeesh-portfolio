# S. Jagadeesh Portfolio

A modern single-page portfolio for S. Jagadeesh, focused on embedded systems experience, the transition toward AI engineering, freelance readiness, and professional networking.

Built with:

- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Sections

- Sticky navbar with smooth scrolling
- Hero
- About
- Skills
- Experience
- Projects
- Social links
- Contact
- Footer

## Content Editing

All portfolio content lives in `data/site.ts`.

Social links are intentionally empty by default. Add a URL to a social item in `data/site.ts` when it is ready to show publicly.

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Optional Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email
```

`NEXT_PUBLIC_SITE_URL` is used for sitemap, robots, and metadata URLs. `RESEND_API_KEY` and `CONTACT_EMAIL` enable live email delivery from the contact form.
