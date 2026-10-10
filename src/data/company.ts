export const company = {
  name: "Micro Tools and Services",
  owner: "Mr. Hanif Maheboob Lambe",
  established: "2013",
  experience: "26+",
  phone: "+91 9773211252",
  phoneHref: "tel:+919773212522",
  email: "hanifml2002@gmail.com",
  address: "PAP-R 620, Near Jaggi and Jaggi, Rabale MIDC, Navi Mumbai – 400701, Maharashtra, India",
  gstin: "27AKDPL4685P1ZE",
  map: "https://maps.app.goo.gl/582daqtxoueMAovbA",
};
export const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Capabilities", "/capabilities"],
  ["Materials", "/materials"],
  ["Industries", "/industries"],
  ["Quality", "/quality"],
  ["Products & Supply", "/products"],
  ["Contact", "/contact"],
] as const;
export const feasibility =
  "Indicative ranges only. Final feasibility depends on component geometry, machine capability, chucking, tooling and process requirements.";
export const materials = [
  ["Inconel", "Special alloys"],
  ["Monel", "Special alloys"],
  ["Stavex", "Grade to confirm"],
  ["WPS", "Grade to confirm"],
  ["D2 Tool Steel", "Steels"],
  ["Stainless Steel", "Steels"],
  ["Carbon and Alloy Steel", "Steels"],
  ["Copper", "Non-ferrous"],
  ["Special-Grade Aluminium", "Non-ferrous"],
  ["Brass", "Non-ferrous"],
  ["Phosphor Bronze", "Non-ferrous"],
  ["Delrin", "Polymers"],
  ["PP", "Polymers"],
  ["PTFE / Teflon", "Polymers"],
  ["Nylon – Special Grades", "Polymers"],
  ["EN Series Steels", "Steels"],
  ["4130", "Steels"],
  ["4140", "Steels"],
] as const;
export const industries = [
  ["Tools and Dies", "Drawing-led machining for tooling components and die-related requirements."],
  ["Automobile", "Precision components for automotive manufacturing and equipment requirements."],
  [
    "Defence",
    "Component enquiries reviewed against drawings and applicable customer requirements.",
  ],
  ["Drone and UAV", "Machining enquiries for compact parts, fixtures and structural components."],
  [
    "Aerospace",
    "Drawing-based component support, subject to applicable customer qualification requirements.",
  ],
  ["Agriculture", "Machined components and industrial supply for agricultural equipment."],
  ["Textile", "Machine components and accessories for textile equipment requirements."],
  ["Machine Tools", "Precision parts, fixtures and manufacturing equipment components."],
  ["CNC Machine Accessories", "Machine accessories and machining-related supply enquiries."],
  ["Laboratory Equipment", "Component machining for laboratory equipment and assemblies."],
  ["Oil Mill", "Machining and supply requirements for oil mill equipment."],
  ["Laser Machine Parts", "Drawing-led support for laser machine components."],
  ["3D Printing Machine Parts", "Precision parts and fixtures for 3D printing equipment."],
  ["Instrumentation", "Machining requirements for instrument housings, fittings and components."],
  ["Valve Fittings", "Turned and machined fittings based on supplied specifications."],
  ["Hydraulic Pumps", "Component enquiries for hydraulic pump equipment."],
  ["Switchgear", "Machined components and supply for switchgear-related requirements."],
  ["Flanges", "Flange machining enquiries reviewed against size, material and drawing."],
] as const;
export const capabilities = [
  {
    slug: "cnc-turning",
    name: "Precision CNC Turning",
    short: "Rotational components. Carefully controlled machining.",
    description:
      "CNC turning for cylindrical parts, profiles, threads and component features defined by your drawing. Share the material grade, diameter, length, tolerances and quantity for a feasibility review.",
  },
  {
    slug: "vmc-machining",
    name: "VMC Machining",
    short: "Milled profiles, pockets and complex part features.",
    description:
      "Vertical machining for milled faces, profiles, pockets and drilled features. Provide a dimensioned drawing or model, material grade, critical features and required finish.",
  },
  {
    slug: "4th-axis",
    name: "4th-Axis Machining",
    short: "Multi-face machining with indexed positioning.",
    description:
      "4th-axis capability supports indexed machining requirements around a component. Geometry, access, workholding and tooling are reviewed before the process is confirmed.",
  },
  {
    slug: "sliding-head",
    name: "Sliding-Head Machining",
    short: "Machining support for small precision components.",
    description:
      "Sliding-head machining for suitable small components. Send the drawing, stock material, finished dimensions, quantity and inspection requirements to discuss the appropriate process.",
  },
  {
    slug: "drilling-tapping",
    name: "Drilling & Tapping",
    short: "Accurate hole features and threaded connections.",
    description:
      "Drilling and tapping based on hole sizes, thread specifications, locations and depths. Specify material, drawing revision, quantity and any critical inspection requirements.",
  },
  {
    slug: "special-materials",
    name: "Special Material Machining",
    short: "Practical expertise for demanding material grades.",
    description:
      "Experience with special and difficult-to-machine materials. Feasibility is assessed against the exact material grade, component geometry, tooling and process requirements; no universal machining guarantee is implied.",
  },
  {
    slug: "engineering-support",
    name: "Engineering Support",
    short: "Drawing review, programming and process support.",
    description:
      "Practical engineering, programming and manufacturing support to review component requirements and discuss workable process options. Share available drawings, purpose and critical specifications.",
  },
  {
    slug: "manufacturing-coordination",
    name: "Manufacturing Coordination",
    short: "Connected support beyond the machining process.",
    description:
      "Manufacturing coordination through a vendor network for agreed secondary and finishing operations. Scope, specifications, inspection and delivery expectations are reviewed for each enquiry.",
  },
  {
    slug: "industrial-supply",
    name: "Industrial Products & Supply",
    short: "Tools, fixtures and dependable industrial sourcing.",
    description:
      "Industrial supply enquiries across the listed product categories. Share the item description, specification, quantity and timeline; brands, availability and pricing are confirmed individually.",
  },
];
export const vendorProcesses = [
  "Fabrication",
  "Plating",
  "Anodising",
  "Laser cutting",
  "Sheet/profile bending",
  "EDM/sparking",
  "Wire cutting",
];
export const instruments = [
  "Digital Vernier Calipers",
  "Outside and Inside Micrometers",
  "Dial Bore Gauges",
  "Surface Plate",
  "Slip Gauges",
  "Plug Gauges",
  "Height Gauge",
  "Dial Indicators and standard inspection aids",
];
export const equipment = [
  "Indian-make CNC lathe machines",
  "Indian-make VMC machines with 4th-axis capability and through-coolant facility",
  "Japanese-make sliding-head machine",
  "Automatic bandsaw",
  "Drilling and tapping",
  "Laser marking for part identification and traceability support",
];
export const products = [
  ["Industrial Hardware Items", "Hardware supply enquiries based on your item specifications."],
  ["Welding Rods and Filler Wires", "Share the required grade, application and quantity."],
  ["Fire and Safety Products", "Safety supply requirements reviewed against specified products."],
  ["Wire Rope", "Enquiries based on rope specification, length and application."],
  ["Crane Accessories", "Accessories sourced against your equipment requirements."],
  ["CNC Machine Cutting Tools", "Cutting tool requirements based on material and operation."],
  ["CNC Machine Accessories", "Accessories for your machining and equipment requirements."],
  ["Clamping Fixtures", "Workholding and fixture enquiries based on your component."],
] as const;
export const customers = [
  "Scantec",
  "Siemens",
  "Godrej",
  "Mikipully",
  "Lab India",
  "Chemapol Aerospace",
  "Alloy Metal",
  "Hallmark Advance Pvt. Ltd.",
];
export const gulf = ["Saudi Aramco", "BAPCO", "Mahy Khoory & Company"];
export const requirementTypes = [
  "CNC Machining",
  "Prototype Components",
  "Production Parts",
  "Special Materials",
  "Engineering Support",
  "Industrial Products",
  "Secondary Processing",
  "Other",
] as const;
export function whatsapp(context = "a machining or industrial supply requirement") {
  return (
    "https://wa.me/919773212522?text=" +
    encodeURIComponent("Hello Micro Tools and Services, I would like to discuss " + context + ".")
  );
}
export function seo(title: string, description: string, path: string) {
  return {
    meta: [
      { title: title + " — Micro Tools and Services" },
      { name: "description", content: description },
      { property: "og:title", content: title + " — Micro Tools and Services" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
