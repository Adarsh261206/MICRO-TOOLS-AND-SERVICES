import { createFileRoute } from "@tanstack/react-router";
import { MaterialsPage } from "@/components/site/material-directory";
import { seo } from "@/data/company";
export const Route = createFileRoute("/materials")({
  head: () =>
    seo(
      "Machining Materials Directory",
      "Search 18 supplied material names, including special alloys, steels, non-ferrous metals and polymers. Confirm exact grades against your drawing.",
      "/materials",
    ),
  component: MaterialsPage,
});
