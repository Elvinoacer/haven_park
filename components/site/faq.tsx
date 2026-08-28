"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "Do I need an appointment, or can I just walk in?",
    a: "Walk-ins are always welcome — our outpatient department, laboratory and pharmacy run 24/7, no appointment needed. Booking is recommended for the specialized Eye Clinic and ultrasound scans so we can reserve you a slot and minimize waiting.",
  },
  {
    q: "How much does a consultation cost?",
    a: "We keep pricing transparent and affordable for out-of-pocket payers — you'll know the consultation fee upfront, before you're seen. All transactions generate an itemized digital receipt through our HMIS. Call or WhatsApp us for current rates.",
  },
  {
    q: "Which payment methods and insurers do you accept?",
    a: "Cash and M-Pesa (with instant SMS receipts), plus private outpatient schemes including Britam medical panels and CIC CoopCare. We also work with national financing under SHA and legacy NHIF outpatient frameworks.",
  },
  {
    q: "What should I bring for my first visit?",
    a: "A valid National ID, passport, or a birth certificate/notification for a minor. Insured patients should bring an active membership card and any pre-authorization documents. For chronic-condition follow-ups, also carry your current medicines, past reports and tracking booklet.",
  },
  {
    q: "Do I really need to fast before a blood test?",
    a: "Only for specific tests. Fasting glucose and lipid panels need 8–12 hours without food, milk, tea or sweetened drinks — water is fine. Most other tests (malaria RDT, CBC, urinalysis) need no fasting at all. If you're unsure, ask us when booking.",
  },
  {
    q: "What happens if my condition is beyond a Level 2 clinic?",
    a: "Your safety comes first. We stabilize you on-site, then arrange emergency referral transport to a higher-level hospital — typically St. Francis Community Hospital Kasarani, Mama Lucy Kibaki Hospital or Kenyatta National Hospital — and send your records ahead.",
  },
  {
    q: "How is my personal and medical data protected?",
    a: "Under the Kenya Data Protection Act (2019), your health records are classified as sensitive personal data. Access is role-restricted to the clinicians and staff who need it, intake is consent-based, and our systems use TLS 1.3 in transit with AES-256 encryption at rest. You retain rights to access, rectify or request erasure of your records, subject to medical retention law.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-600">
              <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
              Good to know
              <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-haven-950 sm:text-[2.75rem] sm:leading-[1.1]">
              Questions patients actually ask.
            </h2>
          </div>
        </Reveal>

        <div className="mt-11 grid gap-3.5">
          {FAQS.map(({ q, a }, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    open
                      ? "border-haven-300 bg-haven-50/60 shadow-md shadow-haven-900/5"
                      : "border-haven-900/10 bg-white hover:border-haven-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-display text-[1.02rem] font-extrabold text-haven-950">
                      {q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open
                          ? "rotate-45 bg-haven-600 text-white"
                          : "bg-haven-100 text-haven-700"
                      }`}
                    >
                      <Plus className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    hidden={!open}
                    className="px-6 pb-6"
                  >
                    <p className="max-w-3xl leading-relaxed text-mist">{a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
