import {
  UtensilsCrossed,
  GlassWater,
  IdCard,
  Pill,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "./reveal";

const PREP = [
  {
    icon: UtensilsCrossed,
    title: "Fasting blood tests",
    lead: "Fasting for 8–12 hours before your test?",
    body: "For fasting glucose or a lipid panel, avoid all food, milk, tea and sweetened drinks beforehand. Plain water is perfectly fine — stay hydrated.",
  },
  {
    icon: GlassWater,
    title: "Pelvic & obstetric ultrasound",
    lead: "One hour before your scan…",
    body: "Drink about 1–1.5 litres of clear water and hold on — a full bladder acts as the acoustic window that gives a crystal-clear view for the scan.",
  },
  {
    icon: IdCard,
    title: "Bring your documents",
    lead: "Every patient, every visit:",
    body: "A National ID, passport, or a birth certificate/notification for minors. Insured patients: bring an active membership card and any pre-authorization documents.",
  },
  {
    icon: Pill,
    title: "Chronic care follow-ups",
    lead: "Attending the NCD clinic?",
    body: "Carry all your current medicine containers, past lab reports and your tracking booklet — it makes medication review fast and accurate.",
  },
];

export function Prep() {
  return (
    <section
      aria-labelledby="prep-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-paper to-white"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-600">
              <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
              Come prepared
              <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
            </p>
            <h2
              id="prep-heading"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-haven-950 sm:text-[2.75rem] sm:leading-[1.1]"
            >
              A little preparation, a lot faster.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              Four quick things to sort before your visit — so results are
              accurate, billing is smooth and your consultation starts on
              time.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PREP.map(({ icon: Icon, title, lead, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-3xl border border-haven-900/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-haven-300 hover:shadow-lg hover:shadow-haven-900/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-haven-100 text-haven-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <ClipboardCheck
                    className="h-5 w-5 text-haven-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold text-haven-950">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-bold text-haven-600">{lead}</p>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-mist">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
