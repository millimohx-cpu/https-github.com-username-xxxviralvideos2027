# xxxviralvideos2027 — safe streaming UI prototype

A dark black/red, placeholder-only Next.js prototype. It does not contain adult media, upload functionality, payment processing, or a real age-verification service.

## Run locally
1. Install Node.js 20 LTS.
2. In this folder run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.

## Before any real-world deployment
- Get written legal advice on whether the proposed service and content can lawfully be operated from India and served in each target country.
- Obtain written approval from the hosting, storage, CDN, and payment providers for the exact business model.
- Use only content for which you hold documented distribution rights, releases, and age/identity verification records.
- Implement a provider-backed, jurisdiction-specific age-assurance system; this demo's notice is not age verification.
- Add moderation, complaint handling, takedown, privacy, security, and record-retention procedures.
- Do not upload, publish, or stream real content until these checks are complete.

## Project structure
- `src/app/page.tsx` — homepage and catalogue UI
- `src/app/globals.css` — black/red responsive design
- `src/app/layout.tsx` — metadata and root layout
- `src/components/AgeNotice.tsx` — non-verifying prototype notice
- `src/data/videos.ts` — fictional placeholder catalogue
