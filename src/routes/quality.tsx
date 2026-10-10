import { createFileRoute } from "@tanstack/react-router";
import { QualityPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/quality")({
  head: () =>
    seo(
      "Quality Control & Inspection",
      "Quality-conscious inspection against customer drawings and specifications, with suitable measuring instruments.",
      "/quality",
    ),
  component: QualityPage,
});
