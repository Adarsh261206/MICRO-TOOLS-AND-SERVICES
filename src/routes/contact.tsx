import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/quote-form";
import { seo } from "@/data/company";
export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>) => ({
    context: typeof s["context"] === "string" ? s["context"].slice(0, 100) : undefined,
  }),
  head: () =>
    seo(
      "Contact & Request a Quote",
      "Contact Micro Tools and Services in Rabale MIDC, Navi Mumbai. Prepare an email enquiry for machining, engineering or industrial supply.",
      "/contact",
    ),
  component: ContactRoute,
});
function ContactRoute() {
  const { context } = Route.useSearch();
  return <ContactPage key={context} context={context || ""} />;
}
