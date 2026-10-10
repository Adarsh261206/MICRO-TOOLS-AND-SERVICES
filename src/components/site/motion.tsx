import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Progressive enhancement: static content stays readable without JavaScript. */
export function SiteMotion() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-reveal", "visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -25px 0px" });
    document.querySelectorAll(".section-heading, .editorial-grid > div, .photo-frame, .technical-layout > div, .detail-row, .industry-detail, .material-entry, .product-card, .cta-inner, .spec-item, .capability-showcase").forEach((element) => {
      element.setAttribute("data-reveal", "pending");
      observer.observe(element);
    });
    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (hero && window.scrollY < hero.offsetHeight) {
          hero.style.setProperty("--hero-offset", `${Math.min(window.scrollY * 0.16, 100)}px`);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [path]);
  return null;
}