import { createFileRoute } from "@tanstack/react-router";
import { FacilityPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/facility")({
  head: () =>
    seo(
      "Manufacturing Facility",
      "Explore supplied machining equipment capabilities and indicative manufacturing ranges at Micro Tools and Services.",
      "/facility",
    ),
  component: FacilityPage,
});
