import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Hexagon,
  Component,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, nav, whatsapp } from "@/data/company";
export function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Micro Tools and Services home">
      <span className="relative wordmark-icon">
        <Hexagon size={38} strokeWidth={1.5} />
        <Component size={18} strokeWidth={1.5} className="absolute top-2.5 left-2.5" />
      </span>
      <span className="min-w-0">
        <span className="wordmark-main">MICRO TOOLS</span>
        <span className="wordmark-sub">AND SERVICES</span>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container-site header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([name, to]) => (
              <Link key={to} to={to} activeOptions={{ exact: true }}>
                {name}
              </Link>
            ))}
          </nav>
          <Button asChild className="header-quote" size="lg">
            <Link to="/contact" search={{ context: "" }}>
              Request a Quote
              <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {nav.map(([name, to]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}>
                {name}
              </Link>
            ))}
            <Link to="/facility" onClick={() => setOpen(false)}>
              Manufacturing Facility
            </Link>
            <Link to="/contact" search={{ context: "" }} onClick={() => setOpen(false)}>
              Request a Quote <ArrowUpRight className="inline size-4" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container-site">
          <div className="footer-grid">
            <div>
              <Wordmark />
              <p>
                Precision CNC machining, practical engineering expertise and industrial supply.
                Based in Rabale MIDC, Navi Mumbai.
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                <Link to="/about">About Us</Link>
                <Link to="/capabilities">Our Capabilities</Link>
                <Link to="/facility">Manufacturing Facility</Link>
                <Link to="/quality">Quality Control</Link>
              </div>
            </div>
            <div>
              <h3>Expertise</h3>
              <div className="footer-links">
                <Link to="/materials">Materials Directory</Link>
                <Link to="/industries">Industries Served</Link>
                <Link to="/products">Products & Supply</Link>
                <Link to="/contact" search={{ context: "" }}>
                  Request a Quote
                </Link>
              </div>
            </div>
            <div>
              <h3>Get in touch</h3>
              <a href={company.phoneHref} className="footer-contact">
                <Phone />
                {company.phone}
              </a>
              <a href={"mailto:" + company.email} className="footer-contact">
                <Mail />
                {company.email}
              </a>
              <a
                href={company.map}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact"
              >
                <MapPin />
                <span>{company.address}</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Micro Tools and Services. All rights reserved.</span>
            <span className="font-mono">GSTIN: {company.gstin}</span>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
      <nav className="mobile-contact" aria-label="Quick contact">
        <a href={company.phoneHref}>
          <Phone />
          Call
        </a>
        <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
          <MessageCircle />
          WhatsApp
        </a>
        <Link to="/contact" search={{ context: "" }}>
          Request a Quote
          <ArrowUpRight />
        </Link>
      </nav>
    </>
  );
}
