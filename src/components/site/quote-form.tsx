import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  company,
  industries,
  materials,
  products,
  requirementTypes,
  whatsapp,
} from "@/data/company";
import { emailDraft, enquirySchema, type Enquiry } from "@/data/enquiry";
import { PageIntro } from "./shared";
export function ContactPage({ context = "" }: { context?: string }) {
  const [draft, setDraft] = useState("");
  const type = products.some(([n]) => n === context)
    ? "Industrial Products"
    : context === "Secondary Processing"
      ? "Secondary Processing"
      : "CNC Machining";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      requirementType: type,
      industry: industries.some(([n]) => n === context) ? context : "",
      material: materials.some(([n]) => n === context) ? context : "",
      deliveryTimeline: "",
      quantity: 1,
      technicalRequirements: context ? "Enquiry about " + context + ": " : "",
    },
  });
  function submit(data: Enquiry) {
    const url = emailDraft(data);
    setDraft(url);
    window.location.href = url;
  }
  const fieldError = (name: keyof Enquiry) =>
    errors[name]?.message ? (
      <p className="field-error" id={name + "-error"}>
        {String(errors[name]?.message)}
      </p>
    ) : null;
  const props = (name: keyof Enquiry) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? name + "-error" : undefined,
  });
  return (
    <>
      <PageIntro
        label="Contact & Request a Quote"
        title="Let’s Start with Your Requirement."
        description="Have a drawing, prototype, production component or industrial supply requirement? Tell us what you have in mind."
      />
      <section className="section">
        <div className="container-site contact-layout">
          <aside className="contact-info">
            <div className="eyebrow">MICRO TOOLS AND SERVICES</div>
            <h2>
              A Direct Conversation.
              <br />A Practical Next Step.
            </h2>
            <a className="footer-contact" href={company.phoneHref}>
              <Phone />
              <span>{company.phone}</span>
            </a>
            <a className="footer-contact" href={"mailto:" + company.email}>
              <Mail />
              <span>{company.email}</span>
            </a>
            <a
              className="footer-contact"
              href={company.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin />
              <span>{company.address}</span>
            </a>
            <a
              href={whatsapp(context || undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <MessageCircle size={16} />
              WhatsApp enquiry
              <ArrowUpRight size={16} />
            </a>
            <div className="contact-details">
              <Button asChild variant="outline">
                <a href={company.map} target="_blank" rel="noopener noreferrer">
                  Get directions
                  <ArrowUpRight />
                </a>
              </Button>
              <p>GSTIN: {company.gstin}</p>
            </div>
          </aside>
          <form className="quote-form" onSubmit={handleSubmit(submit)} noValidate>
            <h2>Request a Quote</h2>
            <p className="form-intro">
              Your enquiry will open as an email draft. Send it from your email application to
              complete the enquiry.
            </p>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  autoComplete="name"
                  maxLength={100}
                  {...register("fullName")}
                  {...props("fullName")}
                />
                {fieldError("fullName")}
              </div>
              <div className="form-field">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  id="companyName"
                  autoComplete="organization"
                  maxLength={150}
                  {...register("companyName")}
                  {...props("companyName")}
                />
                {fieldError("companyName")}
              </div>
              <div className="form-field">
                <label htmlFor="email">Business Email *</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  {...register("email")}
                  {...props("email")}
                />
                {fieldError("email")}
              </div>
              <div className="form-field">
                <label htmlFor="phone">Mobile Number *</label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  {...register("phone")}
                  {...props("phone")}
                />
                {fieldError("phone")}
              </div>
              <div className="form-field">
                <label htmlFor="industry">Industry</label>
                <select id="industry" {...register("industry")}>
                  <option value="">Select industry</option>
                  {industries.map(([n]) => (
                    <option key={n}>{n}</option>
                  ))}
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="requirementType">Requirement Type *</label>
                <select id="requirementType" {...register("requirementType")}>
                  {requirementTypes.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="material">Material</label>
                <input
                  id="material"
                  list="materials-list"
                  maxLength={100}
                  {...register("material")}
                />
                <datalist id="materials-list">
                  {materials.map(([n]) => (
                    <option key={n} value={n} />
                  ))}
                </datalist>
              </div>
              <div className="form-field">
                <label htmlFor="quantity">Quantity *</label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  max={100000000}
                  {...register("quantity")}
                  {...props("quantity")}
                />
                {fieldError("quantity")}
              </div>
              <div className="form-field field-wide">
                <label htmlFor="deliveryTimeline">Expected Delivery Timeline</label>
                <input
                  id="deliveryTimeline"
                  placeholder="e.g. To be discussed"
                  maxLength={150}
                  {...register("deliveryTimeline")}
                />
              </div>
              <div className="form-field field-wide">
                <label htmlFor="technicalRequirements">Technical Requirements *</label>
                <textarea
                  id="technicalRequirements"
                  placeholder="Component details, material grade, critical dimensions and requirements…"
                  maxLength={4000}
                  {...register("technicalRequirements")}
                  {...props("technicalRequirements")}
                />
                {fieldError("technicalRequirements")}
              </div>
            </div>
            <p className="submission-note">
              Drawing uploads are not enabled. Attach drawings directly to your email draft, only
              when appropriate.
            </p>
            <label className="consent-field">
              <input type="checkbox" {...register("consent")} {...props("consent")} />
              <span>
                I consent to being contacted about this enquiry and have read the{" "}
                <Link to="/privacy" className="text-primary underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {fieldError("consent")}
            <Button type="submit" size="lg">
              <Mail />
              Prepare Email Enquiry
              <ArrowUpRight />
            </Button>
            <p className="submission-note">
              Nothing is sent or saved by this website. You must send the email to complete your
              enquiry.
            </p>
            {draft && (
              <div className="form-status" role="status">
                Your email draft is ready. This enquiry has not been submitted.{" "}
                <a href={draft} className="underline">
                  Open email draft again
                </a>
                .
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
