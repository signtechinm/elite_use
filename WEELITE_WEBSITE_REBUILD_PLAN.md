# We Elite Website Rebuild Plan

## Project overview

Rebuild the We Elite website as a premium, responsive Next.js experience that communicates luxury, trust, creativity, and high-value service. The new site will combine editorial design, refined typography, carefully art-directed imagery, subtle entrance animations, and a reusable Shadcn UI component system.

> Note: The live domain was unavailable during the initial review and returned a 502/unreachable response. The exact sitemap, content inventory, and page-by-page recommendations must be confirmed when the site or a staging copy becomes accessible.

## Project goals

- Create a more premium and memorable digital presence.
- Improve clarity around services, capabilities, and value.
- Present portfolio work through stronger visual storytelling.
- Increase trust through case studies, testimonials, and client proof.
- Improve mobile usability, accessibility, SEO, and performance.
- Establish a flexible design and component system for future growth.
- Make the site easy to maintain and extend.

## Recommended technology

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Framer Motion
- Lucide icons
- Next.js Image optimization
- Vercel deployment
- Resend or an existing email provider for contact forms
- Sanity, Contentful, or another CMS if non-technical content editing is required

## Visual direction

The design should feel elegant, restrained, editorial, and luxurious rather than visually busy.

### Design characteristics

- Warm ivory, charcoal, black, and muted gold palette
- Large editorial headlines
- Generous whitespace
- Full-bleed photography and art-directed compositions
- Thin borders and restrained shadows
- Refined hover states
- Strong visual hierarchy
- Minimal, confident navigation
- Subtle transitions and scroll reveals

### Suggested typography

- Display font: Cormorant Garamond, Playfair Display, or an equivalent luxury serif
- UI and body font: Manrope, Inter, or DM Sans

Recommended starting pairing: **Cormorant Garamond + Manrope**.

### Suggested color tokens

| Token | Value | Usage |
|---|---:|---|
| Ivory | `#F4F0E9` | Main light background |
| Charcoal | `#22201D` | Primary text |
| Deep black | `#171614` | Dark sections and footer |
| Muted text | `#777169` | Secondary copy |
| Accent gold | `#B49A68` | Highlights and premium accents |
| Border | `#D8D0C4` | Dividers and card borders |

## Proposed site structure

The exact structure will be validated during discovery. The proposed information architecture is:

1. Home
2. About / Our Story
3. Services
4. Individual service pages, where useful
5. Work / Portfolio
6. Individual case studies
7. Industries or Solutions, if applicable
8. Testimonials / Clients
9. Insights or Journal, if applicable
10. Contact
11. Privacy policy and legal pages

## Phased development plan

### Phase 1 — Discovery and website audit

**Purpose:** Establish the complete scope before design and development.

**Activities:**

- Confirm live-site access or receive screenshots/source files.
- Create a full sitemap.
- Inventory existing copy, images, videos, forms, and links.
- Review navigation and conversion paths.
- Review mobile and responsive behavior.
- Identify SEO, accessibility, and performance issues.
- Document existing animations and interactions.
- Identify content that should be retained, rewritten, replaced, or removed.

**Deliverables:**

- Approved sitemap
- Page-by-page audit
- Content inventory
- Asset inventory
- Conversion-flow recommendations
- Initial technical requirements

### Phase 2 — Brand and design system

**Purpose:** Define the visual rules that will keep the entire website consistent.

**Activities:**

- Define colors, typography, spacing, grid, borders, and shadows.
- Establish button, form, card, menu, and navigation variants.
- Define image ratios and treatments.
- Create responsive behavior rules.
- Define motion and interaction guidelines.

**Deliverables:**

- Design tokens
- Typography scale
- UI component inventory
- Responsive guidelines
- Motion guidelines
- High-fidelity homepage direction

### Phase 3 — Image and asset direction

**Purpose:** Build a visual asset library that supports the luxury positioning.

**Activities:**

- Review and classify all existing assets.
- Identify assets to reuse, retouch, replace, or generate.
- Create hero imagery and background options where needed.
- Select icons and decorative elements.
- Prepare responsive image crops.

**Asset principles:**

- Use real project photography for portfolio work whenever possible.
- Use generated imagery for art direction, abstract backgrounds, textures, and supporting visuals.
- Export assets as WebP or AVIF where supported.
- Add meaningful alt text to informative images.
- Use mobile-specific crops for important hero visuals.

### Phase 4 — Technical foundation

**Purpose:** Establish a stable, reusable Next.js codebase.

**Activities:**

- Initialize Next.js, TypeScript, Tailwind, and Shadcn/ui.
- Configure fonts, global styles, metadata, and image handling.
- Add ESLint and Prettier.
- Create shared layout, loading, error, and 404 states.
- Establish content and data conventions.
- Configure environment variables and deployment settings.

**Suggested structure:**

```text
app/
  layout.tsx
  page.tsx
  about/
  services/
  work/
  work/[slug]/
  contact/
components/
  layout/
  navigation/
  sections/
  ui/
content/
lib/
public/
```

### Phase 5 — Global navigation and layout

**Purpose:** Create the shared shell used throughout the website.

**Features:**

- Desktop header
- Mobile navigation drawer
- Primary contact CTA
- Scroll-aware header state
- Footer with contact and social links
- Page transitions
- Consistent section containers and spacing

**Recommended Shadcn components:**

- Sheet
- Button
- Dialog
- Navigation Menu
- Dropdown Menu
- Separator

### Phase 6 — Homepage

**Purpose:** Create a strong first impression and guide visitors toward inquiry.

**Proposed sections:**

1. Hero statement and primary CTA
2. Positioning statement
3. Selected services
4. Featured work
5. Process or capabilities
6. Client logos and credibility proof
7. Testimonials
8. Contact CTA
9. Premium footer

**Animation direction:**

- Staggered headline reveal
- Image fade and scale entrance
- Scroll-triggered section reveals
- Project-card hover movement
- Subtle line and border transitions

### Phase 7 — Services

**Purpose:** Explain the company’s offering clearly and persuasively.

Each service page should use a reusable template containing:

- Service introduction
- Value proposition
- Capabilities
- Process
- Related projects
- Testimonial or proof point
- FAQ
- Contact CTA

**Recommended components:**

- Accordion for FAQs
- Tabs for service categories
- Cards for capabilities
- Numbered process blocks
- Image panels

### Phase 8 — Portfolio and case studies

**Purpose:** Turn project work into a primary trust and conversion tool.

#### Portfolio listing

- Editorial project grid
- Project categories or filters
- Featured-project treatment
- Hover title and category state
- Responsive stacked mobile layout

#### Case-study template

- Project hero
- Client and project metadata
- Challenge
- Strategy
- Execution
- Results
- Image gallery
- Video, where applicable
- Next-project navigation
- Contact CTA

### Phase 9 — About and trust content

**Purpose:** Make the business feel credible, human, and differentiated.

Potential sections:

- Company story
- Team or leadership
- Values
- Working process
- Client logos
- Awards or certifications
- Testimonials
- Studio or office imagery

Copy should be specific, confident, and outcome-focused. Generic agency language should be reduced wherever possible.

### Phase 10 — Contact and lead generation

**Purpose:** Make it easy for qualified prospects to begin a conversation.

**Features:**

- Short contact form
- Name, email, company, service, and message fields
- Optional budget or project-type field
- Optional file upload
- Validation and helpful error states
- Success confirmation
- Spam protection
- Direct contact details
- Location or map section where relevant

### Phase 11 — Reusable animation system

Create a small motion library rather than implementing unrelated animations on each page.

Potential primitives:

- `FadeIn`
- `SlideUp`
- `StaggerChildren`
- `ImageReveal`
- `TextReveal`
- `PageTransition`
- `HoverLift`
- `LineReveal`

Motion rules:

- Use approximately 300–800ms transitions.
- Prefer ease-out curves.
- Keep movement subtle.
- Respect `prefers-reduced-motion`.
- Do not hide essential content behind long animations.
- Avoid heavy parallax that affects performance or usability.

### Phase 12 — SEO, accessibility, and performance

Implement:

- Unique title and description for every page
- Open Graph and social preview images
- Canonical URLs
- Structured data where relevant
- XML sitemap
- Robots configuration
- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible form labels and errors
- Reduced-motion support
- Optimized images and fonts

Target benchmarks:

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- Minimal layout shift

### Phase 13 — Content migration and quality assurance

**Activities:**

- Migrate approved copy and project content.
- Add metadata and alt text.
- Verify every link and CTA.
- Test contact delivery and error handling.
- Test responsive layouts across major breakpoints.
- Test Chrome, Safari, Firefox, iOS Safari, and Android Chrome.
- Test keyboard navigation and reduced-motion behavior.
- Review 404, loading, and error states.
- Validate social previews and sitemap output.

### Phase 14 — Deployment and handoff

**Deliverables:**

- Production deployment
- Domain and SSL configuration
- Analytics setup
- Search Console setup
- CMS/editor documentation, if applicable
- Environment-variable documentation
- Backup and maintenance notes
- Final acceptance checklist

## Recommended MVP scope

The first release should include:

- Homepage
- About page
- Services page or service pages
- Portfolio listing
- Three to six case studies
- Contact page and working form
- Responsive navigation and footer
- Premium typography and imagery
- Subtle entrance animations
- SEO, accessibility, and performance foundations

Advanced features such as a journal, CMS, multilingual support, advanced project filtering, and complex interactive effects can be added after the core experience is approved.

## Suggested implementation order

1. Discovery and content audit
2. Design system and visual direction
3. Technical foundation
4. Global layout and navigation
5. Homepage
6. Services
7. Portfolio and case studies
8. About and trust sections
9. Contact form
10. Animation, SEO, accessibility, and performance polish
11. Content migration and QA
12. Deployment and handoff

## Decisions required before development

- Confirm the final sitemap.
- Confirm whether the website needs a CMS.
- Confirm whether existing imagery can be reused.
- Identify which new images should be generated.
- Approve typography and color direction.
- Confirm contact-form recipient and email provider.
- Confirm analytics requirements.
- Provide the live website, staging URL, screenshots, or source export for the full audit.

## Definition of success

The rebuild is successful when the website:

- Looks and feels unmistakably premium.
- Explains the offering quickly and clearly.
- Makes the portfolio easy to explore.
- Builds trust through specific proof and case studies.
- Converts visitors into qualified inquiries.
- Performs well on mobile and desktop.
- Is accessible, SEO-ready, and maintainable.
- Can grow without redesigning the entire codebase.
