import { describe, expect, it } from "vitest";
import { enquirySchema, emailDraft, enquiryConfig } from "@/data/enquiry";
import { materials, industries, products, company, whatsapp } from "@/data/company";
const valid = {
  fullName: "Test Buyer",
  companyName: "Example Engineering",
  email: "buyer@example.com",
  phone: "+91 9876543210",
  industry: "Tools and Dies",
  requirementType: "CNC Machining",
  material: "WPS",
  quantity: 3,
  deliveryTimeline: "To discuss",
  technicalRequirements: "Drawing-led CNC component enquiry.",
  consent: true,
};
describe("Static enquiry boundaries", () => {
  it("requires contact consent", () => {
    expect(enquirySchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });
  it("requires valid email", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("requires positive whole quantity", () => {
    expect(enquirySchema.safeParse({ ...valid, quantity: 0 }).success).toBe(false);
    expect(enquirySchema.safeParse({ ...valid, quantity: 1.5 }).success).toBe(false);
  });
  it("creates an email draft to the supplied company email", () => {
    const url = emailDraft(enquirySchema.parse(valid));
    expect(url.startsWith("mailto:hanifml2002@gmail.com?")).toBe(true);
    expect(decodeURIComponent(url)).toContain("Material: WPS");
    expect(decodeURIComponent(url)).toContain("Quantity: 3");
  });
  it("disables uploads without a secure external service", () => {
    expect(enquiryConfig.uploadsEnabled).toBe(false);
    expect(enquiryConfig.mode).toBe("email-draft");
  });
  it("preserves 18 supplied material names and ambiguous grades", () => {
    expect(materials).toHaveLength(18);
    expect(materials.map(([n]) => n)).toContain("Stavex");
    expect(materials.map(([n]) => n)).toContain("WPS");
  });
  it("includes all 18 industries and 8 supply categories", () => {
    expect(industries).toHaveLength(18);
    expect(products).toHaveLength(8);
  });
  it("preserves the supplied map destination", () => {
    expect(company.map).toBe("https://maps.app.goo.gl/582daqtxoueMAovbA");
  });
  it("uses contextual WhatsApp link without enquiry personal details", () => {
    const url = whatsapp("CNC Turning");
    expect(url.startsWith("https://wa.me/919773212522?text=")).toBe(true);
    expect(decodeURIComponent(url)).toContain("CNC Turning");
  });
});
