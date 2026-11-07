# We Elite Website

Premium creative-studio website built with Next.js, TypeScript, Tailwind CSS, Shadcn-style components, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production validation

```bash
npm run build
npm run start
```

## Routes

- `/` — Homepage
- `/about` — Company story and values
- `/services` — Services overview
- `/services/[slug]` — Service detail pages
- `/work` — Portfolio listing
- `/work/[slug]` — Case studies
- `/contact` — Inquiry form

## Content and assets

- Service content: `content/services.ts`
- Portfolio content: `content/projects.ts`
- Images: `public/images/`
- Global design tokens: `app/globals.css`

Replace the sample content and generated imagery with approved brand content before launch.

## Deployment checklist

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Configure the production environment variables from `.env.example`.
4. Connect `weelitead.com` and the preferred `www` behavior.
5. Verify SSL, redirects, and canonical URLs.
6. Connect the contact form to Resend, Formspree, or the chosen provider.
7. Add analytics and Google Search Console verification.
8. Run the production build and test the live routes.
9. Submit `/sitemap.xml` to Search Console.
10. Confirm mobile, accessibility, social previews, and form delivery.

## Before launch

- Replace placeholder client names and testimonial copy.
- Recover and add the official We Elite logo.
- Confirm the correct email address and contact details.
- Approve final typography and imagery.
- Add real project images and measurable case-study results.
- Configure a real form endpoint; the current form displays a frontend success state only.
