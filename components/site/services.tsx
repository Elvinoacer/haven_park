import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Stethoscope,
  Eye,
  FlaskConical,
  ScanLine,
  Pill,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "General Outpatient (OPD)",
    image: "/images/service-opd.jpg",
    alt: "A nurse gently examining a baby at the outpatient department",
    blurb:
      "Your first stop for everyday health — acute fevers, infections, wound care and general check-ups, triaged fast by a team that knows the community.",
    points: [
      "Consultations & acute infection management",
      "Wound dressing and basic burn care",
      "Blood pressure & vitals monitoring",
      "Digital triage and automated queuing",
    ],
  },
  {
    icon: Eye,
    title: "Specialized Eye Clinic",
    image: "/images/service-eye.jpg",
    alt: "A patient undergoing a vision test with a phoropter",
    blurb:
      "Dedicated eye-clinic days bring specialized vision care to Mwiki — no trip to the city needed. Walk in for screenings or book ahead.",
    points: [
      "Visual acuity & automated refraction testing",
      "Conjunctivitis and eye-infection care",
      "Cataract and glaucoma screening",
      "Ophthalmic prescriptions dispensed in-house",
    ],
  },
  {
    icon: FlaskConical,
    title: "Diagnostic Laboratory",
    image: "/images/service-lab.jpg",
    alt: "Gloved hands collecting a blood sample for laboratory testing",
    blurb:
      "AI-enabled analyzers deliver rapid, reliable results — transmitted straight to your digital patient record and your phone.",
    points: [
      "CBC, blood glucose & malaria RDTs",
      "Urinalysis and stool parasite exams",
      "Lipid panels & serological screening",
      "24/7 processing for urgent tests",
    ],
  },
  {
    icon: ScanLine,
    title: "Ultrasound & Imaging",
    image: "/images/service-ultrasound.jpg",
    alt: "A clinician performing an obstetric ultrasound scan",
    blurb:
      "Portable high-resolution ultrasound — including obstetric and abdominal scanning — with sonographer tele-guidance via Butterfly iQ.",
    points: [
      "Routine obstetric & fetal well-being scans",
      "Basic abdominal and pelvic scanning",
      "Emergency pelvic diagnostics",
      "Tele-guided by specialist sonographers",
    ],
  },
  {
    icon: Pill,
    title: "Pharmacy & Dispensing",
    image: "/images/service-pharmacy.jpg",
    alt: "A pharmacist explaining medication to a patient",
    blurb:
      "Genuine, affordable medication with honest pricing — quality medicine shouldn't come with a heavy price tag.",
    points: [
      "Essential medicines & chronic refills",
      "Generic medication financing",
      "Antibiotic stewardship",
      "Smart stock control — always available",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-600">
              <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-haven-950 sm:text-[2.75rem] sm:leading-[1.1]">
              Five service lines, one caring team.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              As a KMPDC-licensed Level 2 facility, we focus on what primary
              care does best: fast answers, honest guidance and the right
              treatment — with seamless referral when a case needs a higher
              level of care.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map(({ icon: Icon, title, image, alt, blurb, points }, i) => (
            <Reveal
              key={title}
              delay={i * 70}
              className={
                i === 0
                  ? "sm:col-span-2 lg:col-span-3"
                  : i === 1
                    ? "lg:col-span-3"
                    : i === 2
                      ? "lg:col-span-2"
                      : i === 3
                        ? "lg:col-span-2"
                        : "lg:col-span-2"
              }
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-haven-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-haven-900/10">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 420px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-haven-950/55 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3.5 left-4 flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-haven-700 shadow-md backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-white drop-shadow">
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="leading-relaxed text-mist">{blurb}</p>
                  <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[0.92rem] font-medium text-ink/85"
                      >
                        <span
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-haven-500"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#booking"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-haven-700 transition hover:text-haven-800"
                    aria-label={`Book ${title}`}
                  >
                    Book this service
                    <ArrowUpRight
                      className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Referral scope note */}
          <Reveal delay={350} className="sm:col-span-2 lg:col-span-6">
            <div className="flex flex-col items-start gap-4 rounded-3xl border border-haven-200 bg-haven-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-[0.95rem] leading-relaxed text-haven-900">
                <strong className="font-display">Beyond Level 2?</strong> For
                care that needs a bigger team — major surgery, blood
                transfusion or neonatal ICU — we stabilize first, then arrange
                direct referral transport to trusted hospitals.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "St. Francis Kasarani",
                  "Mama Lucy Kibaki",
                  "Kenyatta National",
                ].map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full border border-haven-300 bg-white px-3.5 py-1.5 text-xs font-bold text-haven-800"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-haven-600" aria-hidden="true" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
