import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, ChevronRight, Phone, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { company, whatsapp } from "@/data/company";
import machining from "@/assets/milling-detail.jpg";
import components from "@/assets/component-study.jpg";
import inspection from "@/assets/precision-inspection.jpg";
export function QuoteLink({
  context,
  children = "Request a Quote",
  variant = "default",
}: {
  context?: string;
  children?: ReactNode;
  variant?: "default" | "outline" | "heroOutline";
}) {
  return (
    <Button asChild variant={variant} size="lg">
      <Link to="/contact" search={{ context: context || "" }}>
        {children}
        <ArrowUpRight />
      </Link>
    </Button>
  );
}
export function TextLink({
  to,
  children,
}: {
  to:
    | "/about"
    | "/capabilities"
    | "/materials"
    | "/industries"
    | "/facility"
    | "/quality"
    | "/products"
    | "/contact";
  children: ReactNode;
}) {
  return (
    <Link to={to} className="text-link">
      {children}
      <ArrowUpRight />
    </Link>
  );
}
export function SectionHeading({
  label,
  title,
  text,
  link,
}: {
  label: string;
  title: ReactNode;
  text?: string;
  link?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{label}</div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {link}
    </div>
  );
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  const visual = label === "Quality Control" ? inspection : ["Materials", "Industries", "Products & Supply", "About Us"].includes(label) ? components : machining;
  const hasVisual = !["Privacy Policy", "Terms & Conditions", "Contact"].includes(label);
  return (
    <section className={"page-intro" + (hasVisual ? " page-intro-visual" : "")}>
      {hasVisual && <><img className="intro-image" src={visual} alt="Illustrative industrial machining and components" width={1280} height={1024} /><span className="image-disclosure">ILLUSTRATIVE IMAGE · NOT OUR FACILITY OR PARTS</span></>}
      <div className="container-site">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight />
          <span>{label}</span>
        </nav>
        <div className="eyebrow">{label}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="container-site cta-inner">
        <div>
          <div className="eyebrow text-highlight">YOUR NEXT COMPONENT</div>
          <h2>
            Have a Component in Mind?
            <br />
            Let’s Engineer the Next Step.
          </h2>
          <p>
            Share your drawing, material requirements or industrial supply enquiry with our team. We
            will review the requirements and discuss the appropriate next steps.
          </p>
        </div>
        <div className="cta-actions">
          <QuoteLink />
          <div className="cta-small-actions">
            <a href={company.phoneHref} className="inline-flex items-center gap-2">
              <Phone size={13} />
              Call Us
            </a>
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={"photo-frame " + className}>
      <img src={src} alt={alt} width={1280} height={1024} loading="lazy" />
      <figcaption>ILLUSTRATIVE INDUSTRIAL IMAGE · NOT THE COMPANY’S FACILITY OR PARTS</figcaption>
    </figure>
  );
}
export function ArrowEnquiry({ context }: { context: string }) {
  return (
    <Link to="/contact" search={{ context }} className="text-link">
      Discuss your requirement
      <ArrowRight />
    </Link>
  );
}
