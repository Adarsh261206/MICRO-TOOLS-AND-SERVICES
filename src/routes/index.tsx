import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Gauge,
  Wrench,
  Package,
  Cog,
  Flame,
  Cable,
  HardHat,
  Crosshair,
  Drill,
  ArrowDown,
} from "lucide-react";
import hero from "@/assets/machining-hero.jpg";
import milling from "@/assets/milling-detail.jpg";
import inspection from "@/assets/precision-inspection.jpg";
import { CapabilityShowcase } from "@/components/site/capability-showcase";
import { QuoteLink, TextLink, SectionHeading, ContactCTA, Photo } from "@/components/site/shared";
import { Button } from "@/components/ui/button";
import {
  capabilities,
  company,
  feasibility,
  industries,
  materials,
  instruments,
  products,
  customers,
  gulf,
  seo,
} from "@/data/company";
export const Route = createFileRoute("/")({
  head: () => ({
    ...seo(
      "Precision CNC Machining in Navi Mumbai",
      "Micro Tools and Services: precision CNC machining, engineering support and industrial supply in Rabale MIDC, Navi Mumbai. Established in 2013.",
      "/",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          telephone: company.phone,
          email: company.email,
          foundingDate: "2013",
          address: {
            "@type": "PostalAddress",
            streetAddress: "PAP-R 620, Near Jaggi and Jaggi, Rabale MIDC",
            addressLocality: "Navi Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400701",
            addressCountry: "IN",
          },
          hasMap: company.map,
        }),
      },
    ],
  }),
  component: Home,
});
const productIcons = [Wrench, Flame, HardHat, Cable, Package, Drill, Cog, Crosshair];
function Home() {
  return (
    <>
      <section className="hero">
        <img
          src={hero}
          alt="Illustrative close-up of CNC milling a precision metal component"
          className="hero-image"
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="container-site hero-inner">
          <div className="eyebrow hero-enter">RABALE MIDC · NAVI MUMBAI · EST. 2013</div>
          <h1 className="hero-enter">Micro Tools<br /><span>and Services.</span></h1>
          <p className="hero-statement hero-enter">Precision in Every Component.<br />Confidence in Every Process.</p>
          <p className="hero-copy hero-enter">
            Precision CNC machining, engineering support and industrial supply for businesses that
            demand accuracy, dependable execution and practical manufacturing expertise.
          </p>
          <div className="hero-actions hero-enter">
            <QuoteLink />
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/capabilities">
                Explore Our Capabilities
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="hero-footnote hero-enter">
            <ShieldCheck />
            PRECISION <span>·</span> EXPERIENCE <span>·</span> QUALITY <span>·</span> RELIABILITY
          </div>
        </div>
        <a className="hero-scroll" href="#capabilities" aria-label="Scroll to machining capabilities"><ArrowDown /></a>
        <div className="hero-process-label"><Crosshair /> CNC MACHINING<span>TURNING / MILLING / ENGINEERING</span></div>
        <span className="image-disclosure">ILLUSTRATIVE MACHINING IMAGE · NOT OUR FACILITY</span>
      </section>
      <section className="credibility">
        <div className="container-site">
          <div className="spec-strip">
            <div className="spec-item">
              <div className="spec-value">
                2013<small>EST.</small>
              </div>
              <div className="spec-label">BUILT ON A FOUNDATION OF EXPERIENCE</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">
                26+<small>YEARS</small>
              </div>
              <div className="spec-label">OWNER’S CNC MACHINING EXPERIENCE</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">
                Ø1–Ø2000<small>MM</small>
              </div>
              <div className="spec-label">APPROX. COMPONENT DIAMETER RANGE</div>
            </div>
          </div>
          <p className="range-note">{feasibility}</p>
        </div>
      </section>
      <div className="process-ticker" aria-label="Machining specialisms">
        <div className="ticker-track">{[0, 1].map((copy) => <div className="ticker-group" key={copy} aria-hidden={copy === 1}>{["CNC TURNING", "VMC MACHINING", "4TH-AXIS", "SLIDING-HEAD", "ENGINEERING SUPPORT"].map((name) => <span key={name}>{name}<Crosshair /></span>)}</div>)}</div>
      </div>
      <section className="section" id="capabilities">
        <div className="container-site">
          <SectionHeading
            label="01 / OUR CAPABILITIES"
            title={
              <>
                Engineered for Your
                <br />
                Manufacturing Requirements.
              </>
            }
            text="From small precision parts to complex machining requirements, a practical approach at every stage."
            link={<TextLink to="/capabilities">Explore all capabilities</TextLink>}
          />
          <CapabilityShowcase />
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site editorial-grid">
          <div>
            <div className="eyebrow">02 / EXPERIENCE THAT MATTERS</div>
            <h2>
              Practical Expertise.
              <br />
              Personal Commitment.
            </h2>
            <p>
              Behind every component is a considered process. Established in 2013, Micro Tools and
              Services brings owner-level machining experience to your engineering requirements.
            </p>
            <p>
              Led by Mr. Hanif Maheboob Lambe, the business combines engineering, programming,
              operations and quality expertise with a connected manufacturing vendor network.
            </p>
            <ul className="expertise-points">
              {[
                "26+ years of owner CNC machining experience",
                "Experience with special and difficult-to-machine materials",
                "Machining, inspection and industrial supply support",
              ].map((p) => (
                <li key={p}>
                  <Check />
                  {p}
                </li>
              ))}
            </ul>
            <TextLink to="/about">Discover our story</TextLink>
            <div className="leader-name">
              <strong>{company.owner}</strong>
              <span>OWNER · MICRO TOOLS AND SERVICES</span>
            </div>
          </div>
          <Photo src={milling} alt="Illustrative precision CNC milling operation" />
        </div>
      </section>
      <section className="section">
        <div className="container-site">
          <SectionHeading
            label="03 / INDUSTRIES WE SUPPORT"
            title="Precision Across Industries."
            text="Component requirements differ. Our commitment to understanding your drawing and application stays the same."
            link={<TextLink to="/industries">View industry applications</TextLink>}
          />
          <div className="industry-index">
            {industries.map(([name], i) => (
              <Link to="/industries" hash={"industry-" + i} key={name}>
                <span className="index">{String(i + 1).padStart(2, "0")}</span>
                <span>{name}</span>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site">
          <SectionHeading
            label="04 / MATERIALS EXPERTISE"
            title={
              <>
                The Right Process Starts
                <br />
                with the Right Material.
              </>
            }
            text="From engineering steels and special alloys to non-ferrous metals and polymers. Every grade deserves a considered machining approach."
            link={<TextLink to="/materials">Explore material directory</TextLink>}
          />
          <div className="material-ribbon">
            {materials.map(([name]) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <p className="experience-note">
            Material names are preserved as supplied. Exact grades, including Stavex and WPS, and
            machining feasibility must be confirmed against your drawing and requirements.
          </p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container-site technical-layout">
          <div>
            <div className="eyebrow">05 / MANUFACTURING RANGE</div>
            <h2 className="text-4xl">
              Small Details.
              <br />
              Wide Possibilities.
            </h2>
            <p className="text-sm mt-6 mb-8">
              Manufacturing requirements reviewed against the component, the process and the
              appropriate equipment.
            </p>
            <TextLink to="/facility">Our manufacturing facility</TextLink>
          </div>
          <div>
            <dl className="technical-table">
              <div>
                <dt>Component diameter</dt>
                <dd className="measurement">
                  Ø1–Ø2000 mm<small className="block text-[10px] mt-2">APPROXIMATE RANGE</small>
                </dd>
              </div>
              <div>
                <dt>Component length</dt>
                <dd>
                  Up to 6 metres and beyond
                  <br />
                  <small>Subject to requirements</small>
                </dd>
              </div>
              <div>
                <dt>Processes</dt>
                <dd>
                  Turning · Milling · 4th-axis
                  <br />
                  Drilling · Tapping · Sliding-head
                </dd>
              </div>
            </dl>
            <p className="text-[11px] mt-5">{feasibility}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-site technical-layout">
          <div>
            <div className="eyebrow">06 / QUALITY & INSPECTION</div>
            <h2 className="text-4xl">
              Measured Against
              <br />
              Your Requirements.
            </h2>
            <p className="text-sm text-steel mt-6 mb-7">
              A quality-conscious inspection approach, guided by customer drawings, specifications
              and applicable requirements.
            </p>
            <TextLink to="/quality">Explore our inspection approach</TextLink>
          </div>
          <div className="inspection-visual"><Photo src={inspection} alt="Illustrative micrometer, caliper and machined parts for inspection" /><ul className="instrument-grid">
            {instruments.map((v) => (
              <li key={v}>
                <Gauge />
                {v}
              </li>
            ))}
          </ul></div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site">
          <SectionHeading
            label="07 / INDUSTRIAL SUPPLY"
            title="Beyond the Component."
            text="Machining expertise, complemented by a practical range of industrial supply categories."
            link={<TextLink to="/products">All products & supply</TextLink>}
          />
          <div className="product-grid">
            {products.slice(0, 4).map(([name, desc], i) => {
              const Icon = productIcons[i] || Package;
              return (
                <article key={name} className="product-card">
                  <Icon />
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <Link to="/contact" search={{ context: name }} className="text-link">
                    Enquire
                    <ArrowUpRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-site">
          <div className="eyebrow">REPRESENTATIVE EXPERIENCE</div>
          <div className="experience-list">
            {customers.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <p className="experience-note">
            Representative experience references supplied in the company brief, pending profile
            verification. Not endorsements, current contracts or proof of direct contractual
            relationships.
          </p>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="eyebrow">GULF REGION EXPERIENCE REFERENCES</div>
            <div className="experience-list">
              {gulf.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
