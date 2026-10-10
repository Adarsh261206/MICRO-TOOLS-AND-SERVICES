import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/terms")({
  head: () =>
    seo(
      "Terms & Conditions",
      "Draft website terms covering indicative machining capabilities and individually agreed enquiries.",
      "/terms",
    ),
  component: () => <LegalPage kind="terms" />,
});
