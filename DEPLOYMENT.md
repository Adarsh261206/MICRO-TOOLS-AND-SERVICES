# Static website setup and launch

## Architecture
React 19, TypeScript, Tailwind v4 and TanStack Start. The platform's supported router is retained rather than React Router. Every public page is explicitly configured for prerendering in `vite.config.ts`. Company and directory content are static TypeScript data. No app API, authentication, database query, email sending service or upload is used.

Previously provisioned database tables and private storage from the original brief are unused, contain no website enquiry records and are not connected to the website. They have no public access policies. They are not required for this website and have not been destructively removed.

## Development and tests
Install with `bun install`, run development with `bun run dev`, and run tests with `bun run test`. Use the configured production build and inspect the generated route HTML output; for a static-only host publish the prerendered public output, not the worker/server output. On Vercel, the Nitro Vercel preset is auto-detected during builds. Verify every path in the list below has an `index.html` and that assets are included. Do not add a second client router or generic hosting fallback configuration inside this project.

Public pages: `/`, `/about`, `/capabilities`, `/materials`, `/industries`, `/facility`, `/quality`, `/products`, `/contact`, `/privacy`, `/terms`.

## Quote enquiries
`src/data/enquiry.ts` centralizes validation and the email-draft configuration. Submission opens a mailto draft; the user must send the email in their email application. There is no sent confirmation, persistence or upload. Drawings may be attached to the email by the customer. If a secure external service is approved later, replace this isolated delivery mechanism, document the provider's privacy/data-retention rules and add real delivery/error tests before enabling uploads. No endpoint is assumed or invented.

## Before publication
- Supply the authoritative company profile PDF. Only the two text briefs have been supplied.
- Replace clearly labelled illustrative generated industrial photographs with authorized company or licensed industrial photographs. Illustrations do not depict company machines or products.
- Confirm contact-link discrepancy: displayed number is `+91 9773211252`, but the latest brief explicitly specifies `tel:+919773212522` and WhatsApp `919773212522` (one extra trailing 2). Links currently follow the latest brief literally.
- Confirm material names Stavex and WPS and exact material grades.
- Approve the proposed quality workflow and final privacy/terms text, including retention practices.
- Verify representative customer and Gulf experience references; no customer logos or endorsements are used.
- Supply verified business hours if they should be published.
- Set a real canonical host at launch and update `public/sitemap.xml`; the current unpublished preview origin is not a final company domain.
- Test native email draft opening on target devices with an email application configured.
- Review keyboard navigation, menu, contact links and all pages at 1440, 1280, 768, 390 and 360 pixels.

No owned email sending domain or credentials are needed for the email-draft fallback. The browser opens the customer's email app; this website itself sends nothing.