import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/privacy")({
  head: () =>
    seo(
      "Privacy Policy",
      "Draft privacy notice for email-draft enquiries and external contact services.",
      "/privacy",
    ),
  component: () => <LegalPage kind="privacy" />,
});
