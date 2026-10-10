import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About Us",
      "Meet Micro Tools and Services, established in 2013 and led by Mr. Hanif Maheboob Lambe with 26+ years of CNC machining experience.",
      "/about",
    ),
  component: AboutPage,
});
