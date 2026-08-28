/**
 * Central site configuration — Haven Park Medical Centre.
 * Single source of truth for contact points, navigation and shared copy.
 */

export const SITE = {
  name: "Haven Park Medical Centre",
  shortName: "Haven Park",
  tagline: "Quality healthcare for Mwiki, open around the clock",
  phoneDisplay: "0711 775 678",
  phoneIntl: "+254711775678",
  tel: "tel:+254711775678",
  whatsapp: "https://wa.me/254711775678",
  email: "info@havenparkmedical.co.ke",
  license: "KMPDC License No. 14865",
  level: "Level 2 Medical Clinic",
  address: {
    street: "Kasarani–Mwiki Road, opposite Mwiki Police Station",
    town: "Mwiki, Kasarani Sub-County",
    city: "Nairobi",
    country: "Kenya",
  },
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Mwiki+Police+Station,+Nairobi,+Kenya",
  mapsEmbed:
    "https://maps.google.com/maps?q=Mwiki%20Police%20Station%2C%20Nairobi%2C%20Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#emergency", label: "Emergency" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Book a Visit" },
  { href: "#location", label: "Find Us" },
  { href: "#faq", label: "FAQ" },
] as const;

/** Complaints that should intercept the booking flow with a tap-to-call prompt. */
export const EMERGENCY_KEYWORDS = [
  "bleeding",
  "bleed",
  "unconscious",
  "unresponsive",
  "accident",
  "collision",
  "crash",
  "seizure",
  "convulsion",
  "convulsing",
  "not breathing",
  "can't breathe",
  "cant breathe",
  "difficulty breathing",
  "shortness of breath",
  "breathing difficulty",
  "chest pain",
  "stroke",
  "paralysis",
  "poison",
  "overdose",
  "suicide",
  "drowning",
  "severe burn",
  "severe pain",
  "severe malaria",
  "homa kali",
  "kupumua kwa shida",
];

/** Compose the WhatsApp appointment request body. */
export function buildWhatsAppMessage(fields: {
  name: string;
  phone: string;
  age: string;
  residence: string;
  service: string;
  date: string;
  window: string;
  payer: string;
  complaint: string;
}) {
  const lines = [
    "*Appointment Request — Haven Park Medical Centre*",
    "",
    `• Name: ${fields.name}`,
    `• Phone: ${fields.phone}`,
    `• Age: ${fields.age || "—"}`,
    `• Residence: ${fields.residence || "—"}`,
    `• Service: ${fields.service}`,
    `• Preferred date: ${fields.date || "Any"}`,
    `• Time window: ${fields.window}`,
    `• Payment: ${fields.payer}`,
    `• Reason for visit: ${fields.complaint || "—"}`,
    "",
    "_(Sent from the Haven Park website)_",
  ];
  return lines.join("\n");
}
