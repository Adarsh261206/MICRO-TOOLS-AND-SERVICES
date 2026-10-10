<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep website content in static TypeScript data and shared presentation modules; this preserves consistency across independently shareable pages.
- Use TanStack file routes and explicit static prerender paths rather than a second router; the platform owns routing and deployment.
- Quote enquiries use a validated mailto draft and never write to Cloud or expose uploads; the revised static brief supersedes the initial backend request.
- Cloud resources provisioned before the revised brief are unused; do not connect them to the static website or remove them destructively without instruction.
- Centralize typography, visual tokens and page layouts in src/styles.css; page code consumes semantic styles rather than raw colors.
- Use shared progressive-enhancement motion and a reusable capability showcase; static content remains available without animation or JavaScript.
