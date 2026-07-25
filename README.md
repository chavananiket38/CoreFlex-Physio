# CoreFlex Physiotherapy Clinic — Website

A fast, animated, SEO-ready React website for CoreFlex Physiotherapy Clinic (Viman Nagar, Pune), built with Vite, React Router, Tailwind CSS and Framer Motion.

## Quick start

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build       # production build -> /dist
npm run preview     # preview the production build locally
```

Requires Node.js 18+.

## What's included

- **11 pages**: Home, About, Services (overview), Home Physiotherapy, Sports Rehabilitation, Post-Surgery Rehab, Corporate Physiotherapy, Gallery, Blog + individual blog posts, Contact, and a 404 page.
- **Fully responsive** — designed mobile-first, tested at 390px and 1280px+.
- **SEO**: per-page `<title>`/meta descriptions, canonical tags, Open Graph tags, JSON-LD structured data (`MedicalClinic` schema on every page, `Article` schema on blog posts), `sitemap.xml` and `robots.txt` in `/public`.
- **Performance**: routes are code-split with `React.lazy`, vendor libraries are chunked separately, icons are imported individually (not the whole icon library) — production JS is small and loads fast.
- **Animations**: Framer Motion scroll-reveals throughout, an animated "motion-capture line" motif in the hero and section dividers, and full support for `prefers-reduced-motion`.
- **Floating WhatsApp button** (compact, bottom-right) and a **slim sticky "Call / Book Appointment" bar** on mobile only.
- **Inquiry form** (`src/components/InquiryForm.jsx`) — validates input client-side and opens WhatsApp with a pre-filled message. No backend required to launch. See "Wiring up the inquiry form" below to connect it to email/a database instead.

## Editing content

Almost everything — phone numbers, address, pricing, services, FAQs, testimonials, blog posts — lives in **one file**:

```
src/data/site.js
```

Change something there and it updates everywhere it's used across the site. You generally won't need to touch the page files for content edits.

### Things to update before launch

1. **Reviews/testimonials** (`src/data/site.js` → `testimonials`): I could not pull real named reviews from your JustDial/Google links — both blocked automated access. The current testimonials use the review text you supplied, labelled "Verified Patient" rather than invented names. Two good options:
   - Paste in real reviews (with names, if the reviewers are OK being named) and I'll drop them in directly, or
   - Wire up a live Google Reviews widget (e.g. via your Google Business Profile or a service like Trustindex/Elfsight) so reviews update automatically without editing code.
2. **Gallery photos** (`src/components/GalleryTile.jsx` / `src/pages/Gallery.jsx`): the gallery currently uses elegant styled placeholder tiles (not stock photos) since I don't have your real clinic photography. Swap in real photos of your reception, treatment room, equipment, etc. for the biggest visual upgrade.
3. **Google Maps embed** (`src/data/site.js` → `clinic.mapEmbedUrl` / `mapLink`): currently a place-name search query. For pinpoint accuracy, replace with the exact embed URL from Google Maps → Share → Embed a map, using your business listing.
4. **Domain**: `public/sitemap.xml`, `public/robots.txt` and `src/components/SEO.jsx` reference `https://www.coreflexphysio.in` as a placeholder. Update to your real domain once you have one.
5. **Email address**: `clinic.email` in `src/data/site.js` is a placeholder (`hello@coreflexphysio.in`) — update to your real inbox.

## Wiring up the inquiry form

Right now, submitting the form opens WhatsApp with the enquiry pre-filled — no backend needed, and reliable since WhatsApp is your primary contact channel. If you'd also like enquiries emailed to you or saved somewhere, the cleanest options are:

- **Formspree** or **EmailJS** (no backend server needed, generous free tiers) — a few lines in `handleSubmit` inside `src/components/InquiryForm.jsx`.
- A small serverless function (e.g. on Vercel/Netlify) if you want full control over where submissions go.

## Deployment

This is a static site after `npm run build` (output in `/dist`) — it deploys to any static host:

- **Vercel** or **Netlify**: connect the repo, build command `npm run build`, output directory `dist`. Both auto-detect Vite projects.
- **Any static host** (GitHub Pages, S3, etc.): upload the contents of `/dist` after building.

Because this uses client-side routing (React Router), make sure your host redirects all unknown paths to `/index.html` (a `_redirects` file for Netlify or `vercel.json` rewrite for Vercel — ask if you'd like this added).

## Design system

- **Colors**: deep teal (`core`) as the primary brand color, a warm persimmon (`move`) as the energetic accent used for CTAs and highlights, on a sage-tinted paper background — all defined in `tailwind.config.js`.
- **Type**: Fraunces (display/headings), Inter (body), IBM Plex Mono (labels, stats, prices).
- **Motif**: a recurring "motion-capture line" (inspired by gait/joint-angle analysis, a real physiotherapy visual) appears in the hero, section dividers and the patient-journey timeline.

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, forms, cards, etc.)
  pages/        One file per route
  data/site.js  All editable content lives here
  hooks/        Small utility hooks
public/
  assets/       Doctor photo, favicon
  robots.txt, sitemap.xml
```
