import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/industries")({
  head: () =>
    seo(
      "Industries Served",
      "Drawing-led precision machining and industrial supply enquiries across 18 industry categories.",
      "/industries",
    ),
  component: IndustriesPage,
});
