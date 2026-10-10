import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesPage } from "@/components/site/content-pages";
import { seo } from "@/data/company";
export const Route = createFileRoute("/capabilities")({
  head: () =>
    seo(
      "CNC Machining & Engineering Capabilities",
      "Explore CNC turning, VMC, 4th-axis, sliding-head machining and manufacturing coordination in Rabale MIDC, Navi Mumbai.",
      "/capabilities",
    ),
  component: CapabilitiesPage,
});
