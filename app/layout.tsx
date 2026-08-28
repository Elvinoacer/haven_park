import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://havenparkmedical.co.ke"),
  title:
    "Haven Park Medical Centre — 24/7 Clinic in Mwiki, Kasarani, Nairobi",
  description:
    "KMPDC-licensed Level 2 medical clinic on Kasarani–Mwiki Road, opposite Mwiki Police Station. 24/7 outpatient, laboratory, ultrasound, eye clinic & pharmacy. Call 0711 775 678.",
  keywords: [
    "hospital Mwiki",
    "clinic Kasarani",
    "24 hour clinic Nairobi",
    "Haven Park Medical Centre",
    "eye clinic Mwiki",
    "laboratory Mwiki",
    "ultrasound Kasarani",
    "affordable clinic Nairobi",
  ],
  openGraph: {
    title: "Haven Park Medical Centre — 24/7 Clinic in Mwiki, Nairobi",
    description:
      "Swift consultations, transparent pricing and diagnostics powered by Ilara Health — open 24 hours, 7 days a week on Kasarani–Mwiki Road.",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/hero-doctor.jpg",
        width: 1100,
        height: 1650,
        alt: "A Haven Park clinician consulting a patient",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c2620",
  width: "device-width",
  initialScale: 1,
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Haven Park Medical Centre",
  telephone: "+254711775678",
  description:
    "KMPDC-licensed Level 2 medical clinic in Mwiki, Nairobi offering 24/7 outpatient care, diagnostics, ultrasound, eye clinics and pharmacy services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasarani–Mwiki Road, opposite Mwiki Police Station, Mwiki",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  medicalSpecialty: [
    "https://schema.org/GeneralPractice",
    "https://schema.org/Ophthalmologic",
    "https://schema.org/DiagnosticImaging",
    "https://schema.org/PharmacySpecialty",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </body>
    </html>
  );
}
