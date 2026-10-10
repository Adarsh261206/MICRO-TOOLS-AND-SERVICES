import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/products")({
  head: () =>
    seo(
      "Industrial Products & Supply",
      "Industrial hardware, cutting tools, accessories, welding supplies and clamping fixture enquiries in Navi Mumbai.",
      "/products",
    ),
  component: ProductsPage,
});
