import { z } from "zod";
import { company, requirementTypes } from "./company";
export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100),
  companyName: z.string().trim().min(2, "Enter your company name.").max(150),
  email: z.string().trim().email("Enter a valid business email.").max(254),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]{7,20}$/, "Enter a valid mobile number."),
  industry: z.string().max(100),
  requirementType: z.enum(requirementTypes),
  material: z.string().max(100),
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1.").max(100000000),
  deliveryTimeline: z.string().max(150),
  technicalRequirements: z
    .string()
    .trim()
    .min(10, "Please add at least 10 characters about your requirement.")
    .max(4000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please consent to being contacted about this enquiry." }),
  }),
});
export type Enquiry = z.infer<typeof enquirySchema>;
export function emailDraft(data: Enquiry) {
  const body = [
    "Full name: " + data.fullName,
    "Company: " + data.companyName,
    "Business email: " + data.email,
    "Mobile: " + data.phone,
    "Industry: " + (data.industry || "Not specified"),
    "Requirement: " + data.requirementType,
    "Material: " + (data.material || "Not specified"),
    "Quantity: " + data.quantity,
    "Delivery timeline: " + (data.deliveryTimeline || "To discuss"),
    "",
    "Technical requirements:",
    data.technicalRequirements,
    "",
    "I consent to being contacted about this enquiry.",
  ].join("\n");
  return (
    "mailto:" +
    company.email +
    "?subject=" +
    encodeURIComponent("Quote enquiry — " + data.requirementType + " — " + data.companyName) +
    "&body=" +
    encodeURIComponent(body)
  );
}
// No endpoint is connected. A secure external provider must be approved before enabling uploads.
export const enquiryConfig = { mode: "email-draft", uploadsEnabled: false } as const;
