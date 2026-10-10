import { Link } from "@tanstack/react-router";
import { Check, Gauge, Package } from "lucide-react";
import { PageIntro, ContactCTA, SectionHeading, Photo, TextLink, ArrowEnquiry } from "./shared";
import {
  capabilities,
  company,
  equipment,
  feasibility,
  instruments,
  industries,
  products,
  vendorProcesses,
  customers,
  gulf,
} from "@/data/company";
import components from "@/assets/component-study.jpg";
import { CapabilityShowcase } from "./capability-showcase";
export function AboutPage() {
  return (
    <>
      <PageIntro
        label="About Us"
        title="Precision Is a Practice. Not a Promise."
        description="An established machining and engineering business, built on hands-on experience and practical manufacturing understanding."
      />
      <section className="section">
        <div className="container-site editorial-grid">
          <div>
            <div className="eyebrow">OUR STORY / EST. 2013</div>
            <h2>
              Engineering Experience.
              <br />
              Grounded in Practice.
            </h2>
            <p>
              Micro Tools and Services is a precision CNC machining, engineering and industrial
              supply business based in Rabale MIDC, Navi Mumbai, Maharashtra, India.
            </p>
            <p>
              Established in 2013 and led by {company.owner}, the business brings 26+ years of owner
              CNC machining experience to custom component and manufacturing requirements.
            </p>
            <p>
              Engineering, programming, operations and quality expertise support a considered
              approach to each drawing. Manufacturing coordination through a vendor network extends
              this support to agreed secondary and finishing processes.
            </p>
            <ul className="expertise-points">
              {[
                "Precision and practical engineering solutions",
                "Quality-conscious manufacturing support",
                "Dependable industrial supply and coordination",
              ].map((n) => (
                <li key={n}>
                  <Check />
                  {n}
                </li>
              ))}
            </ul>
            <div className="leader-name">
              <strong>{company.owner}</strong>
              <span>OWNER · 26+ YEARS CNC MACHINING EXPERIENCE</span>
            </div>
          </div>
          <Photo src={components} alt="Illustrative precision machined metal components" />
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site">
          <SectionHeading
            label="CONNECTED MANUFACTURING SUPPORT"
            title="The Complete Requirement. Considered."
            text="From machining and inspection requirements to vendor-coordinated finishing and industrial supply, scope is reviewed together."
            link={<TextLink to="/capabilities">Explore our capabilities</TextLink>}
          />
          <div className="experience-list">
            {customers.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <p className="experience-note">
            Representative experience references from the supplied brief, pending company profile
            verification. These are not endorsements or confirmed current contracts.
          </p>
          <p className="experience-note">
            Gulf Region references: {gulf.join(" · ")}. References do not establish direct
            contractual relationships.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        label="Capabilities"
        title="Your Drawing. Our Starting Point."
        description="Precision machining, practical engineering support and manufacturing coordination — with the process defined by your requirements."
      />
      <section className="section">
        <div className="container-site">
          <div className="eyebrow">MACHINING & ENGINEERING CAPABILITIES</div>
          <CapabilityShowcase />
          {capabilities.map((c, i) => (
            <section key={c.slug} id={c.slug} className="detail-row">
              <span className="index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>{c.name}</h2>
                <p className="text-steel text-xs mt-3">{c.short}</p>
              </div>
              <div className="detail-text">
                <p>{c.description}</p>
                <ArrowEnquiry context={c.name} />
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site">
          <SectionHeading
            label="VENDOR-COORDINATED PROCESSES"
            title="Connected Expertise. Clearly Defined."
            text="The following processes are coordinated through external vendors, rather than represented as directly performed in-house machining."
          />
          <div className="vendor-grid">
            {vendorProcesses.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
          <div className="mt-8">
            <ArrowEnquiry context="Secondary Processing" />
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function IndustriesPage() {
  return (
    <>
      <PageIntro
        label="Industries"
        title="Different Industries. A Precise Approach."
        description="Machining and industrial supply requirements across 18 industry categories. Each enquiry begins with your drawing, material and application."
      />
      <section className="section">
        <div className="container-site">
          <div className="industry-details">
            {industries.map(([name, desc], i) => (
              <section className="industry-detail" id={"industry-" + i} key={name}>
                <span className="index">{String(i + 1).padStart(2, "0")} / INDUSTRY</span>
                <h2>{name}</h2>
                <p>{desc}</p>
                <ArrowEnquiry context={name} />
              </section>
            ))}
          </div>
          <p className="notice">
            Industry references do not imply specialist certifications or approved-supplier status.
            All applicable customer qualifications and inspection requirements must be reviewed
            before work is agreed.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function FacilityPage() {
  return (
    <>
      <PageIntro
        label="Manufacturing Facility"
        title="Capability, Matched to the Component."
        description="The equipment and process capabilities supplied in the company brief. Every requirement is assessed for suitable geometry, workholding and tooling."
      />
      <section className="section">
        <div className="container-site technical-layout">
          <div>
            <div className="eyebrow">FACILITY & EQUIPMENT</div>
            <h2 className="text-4xl">
              A Practical
              <br />
              Manufacturing Foundation.
            </h2>
            <p className="text-sm text-steel mt-6">
              Company equipment photographs are awaiting confirmation. No machine brands, models,
              quantities, tolerances or production rates are implied.
            </p>
            <div className="mt-8">
              <ArrowEnquiry context="Manufacturing facility and component feasibility" />
            </div>
          </div>
          <ol className="numbered-list">
            {equipment.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site">
          <SectionHeading
            label="INDICATIVE MANUFACTURING RANGE"
            title="Defined by Your Requirements."
          />
          <dl className="technical-table">
            <div>
              <dt>Diameter</dt>
              <dd className="measurement">Approximately Ø1 mm to Ø2000 mm</dd>
            </div>
            <div>
              <dt>Length</dt>
              <dd>Up to 6 metres and beyond, subject to component and process requirements</dd>
            </div>
            <div>
              <dt>Processes</dt>
              <dd>
                Turning, milling, 4th-axis machining, drilling, tapping and sliding-head machining
              </dd>
            </div>
          </dl>
          <p className="notice">{feasibility}</p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function QualityPage() {
  return (
    <>
      <PageIntro
        label="Quality Control"
        title="Quality Begins with Understanding."
        description="A quality-conscious inspection approach, guided by customer drawings, specifications and agreed measurement requirements."
      />
      <section className="section">
        <div className="container-site technical-layout">
          <div>
            <div className="eyebrow">INSPECTION INSTRUMENTS</div>
            <h2 className="text-4xl">
              The Right Check.
              <br />
              The Right Instrument.
            </h2>
            <p className="text-sm text-steel mt-6">
              Inspection is carried out according to drawings, customer specifications and
              applicable requirements, using suitable measuring instruments.
            </p>
            <p className="text-sm text-steel mt-4">
              No ISO certification, accredited laboratory capability or formal quality certification
              is claimed.
            </p>
          </div>
          <ul className="instrument-grid">
            {instruments.map((n) => (
              <li key={n}>
                <Gauge />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-site technical-layout">
          <div>
            <div className="eyebrow">PROPOSED INSPECTION APPROACH</div>
            <h2 className="text-4xl">
              From Drawing
              <br />
              to Agreed Checks.
            </h2>
            <p className="notice">
              Proposed website presentation only. This workflow requires confirmation by the company
              before publication.
            </p>
          </div>
          <ol className="numbered-list">
            {[
              "Receive customer drawings and specifications.",
              "Review measurement requirements.",
              "Plan the applicable checks.",
              "Inspect using suitable measuring instruments.",
              "Share inspection information when agreed with the customer.",
            ].map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function ProductsPage() {
  return (
    <>
      <PageIntro
        label="Products & Supply"
        title="Industrial Requirements. Connected Supply."
        description="A practical industrial supply directory. Share your specifications, quantity and application to discuss the right next step."
      />
      <section className="section">
        <div className="container-site">
          <div className="product-grid">
            {products.map(([name, desc]) => (
              <article className="product-card" key={name}>
                <Package />
                <h2 className="text-xl">{name}</h2>
                <p>{desc}</p>
                <Link to="/contact" search={{ context: name }} className="text-link">
                  Enquire about supply
                  <Package size={14} />
                </Link>
              </article>
            ))}
          </div>
          <p className="notice">
            Product specifications, brands, quantities, prices and availability are confirmed
            individually. This is an enquiry directory, not an online shop.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  return (
    <>
      <PageIntro
        label={kind === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
        title={
          kind === "privacy"
            ? "Your Information. Handled with Care."
            : "Clear Requirements. Agreed Together."
        }
        description="Draft notice for review and approval by Micro Tools and Services before publication."
      />
      <section className="section">
        <div className="container-site legal-copy">
          {kind === "privacy" ? (
            <>
              <h2>Enquiry information</h2>
              <p>
                The enquiry form validates the information you provide and opens a draft in your
                email application. The website does not save enquiries or upload technical drawings.
                The email is sent only when you choose to send it through your email application.
              </p>
              <h2>Contact and consent</h2>
              <p>
                The requested contact details and requirement information are intended to let the
                company review and respond to your enquiry. Do not include confidential drawings in
                public links or WhatsApp messages.
              </p>
              <h2>External services</h2>
              <p>
                Email, WhatsApp and Google Maps are third-party services with their own privacy
                terms. Fonts are loaded from Google Fonts. No analytics or marketing cookies have
                been added to this website.
              </p>
              <h2>Retention and requests</h2>
              <p>
                The company must approve its email handling, information retention and deletion
                practices before publication. For questions about your enquiry, contact{" "}
                <a href={"mailto:" + company.email} className="text-primary">
                  {company.email}
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <h2>Indicative capabilities</h2>
              <p>
                All machining ranges and process descriptions are indicative. Feasibility depends on
                material grade, drawing, geometry, machine capability, workholding, tooling and
                process requirements.
              </p>
              <h2>Enquiries and quotations</h2>
              <p>
                An enquiry is not an accepted order. Scope, pricing, delivery, inspection
                requirements and commercial terms must be separately reviewed and agreed with the
                company.
              </p>
              <h2>Supply and coordinated processes</h2>
              <p>
                Availability and specifications of industrial products require confirmation.
                Secondary and finishing processes identified as vendor-coordinated are performed
                through external vendors.
              </p>
              <h2>Draft status</h2>
              <p>
                These website terms are a draft, not a final commercial agreement. Company-approved
                terms and legal review are required before launch.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
