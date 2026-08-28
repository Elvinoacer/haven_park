import Image from "next/image";
import { Quote, BadgeCheck, Cpu, GraduationCap, Languages } from "lucide-react";
import { Reveal } from "./reveal";

const STATS = [
  { k: "24/7", v: "OPD, lab & pharmacy — even on holidays" },
  { k: "80,000+", v: "residents in our wider service area" },
  { k: "5", v: "service lines under one roof" },
  { k: "<15 min", v: "target to clinician for urgent cases" },
];

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    title: "Licensed & accountable",
    body: "Registered by the Kenya Medical Practitioners and Dentists Council (KMPDC License No. 14865) — a private Level 2 medical clinic held to national standards, with annual license verification for every clinician.",
  },
  {
    icon: Cpu,
    title: "Modern diagnostics",
    body: "Our Ilara Health partnership brings AI-enabled blood analyzers, point-of-care ultrasound and a digital HMIS — so results reach your file and your phone, not a paper chase.",
  },
  {
    icon: GraduationCap,
    title: "Continuously trained",
    body: "Staff complete accredited CPD modules through the Ilara platform, staying current on the latest clinical management guidelines.",
  },
  {
    icon: Languages,
    title: "Truly multilingual",
    body: "Our team consults comfortably in English and Kiswahili — and understands the local expressions you actually use at home.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Imagery */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -bottom-5 -left-5 h-full w-full rounded-[2.5rem] border-2 border-haven-200"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl shadow-haven-900/15 ring-1 ring-haven-900/10">
                <Image
                  src="/images/reception.jpg"
                  alt="The bright, modern reception of Haven Park Medical Centre"
                  width={1600}
                  height={1064}
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* floating credential glass card */}
              <div className="glass-panel absolute -bottom-8 right-4 max-w-[17rem] rounded-2xl p-4 sm:right-8">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-gold-600">
                  Regulated care
                </p>
                <p className="mt-1 text-sm font-bold leading-snug text-haven-950">
                  KMPDC License No. 14865
                </p>
                <p className="text-xs font-medium text-mist">
                  Private Level 2 Medical Clinic — verified annually
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-600">
                <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
                Why Haven Park
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-haven-950 sm:text-[2.75rem] sm:leading-[1.1]">
                Community care, without the runaround.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-mist">
                Too many neighbours delay care because of cost fears or endless
                public-facility queues — then self-medicate from unaccredited
                chemists. Haven Park exists to break that pattern: efficient
                consultations that respect your working day, and honest,
                affordable medication.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <blockquote className="relative mt-8 rounded-3xl border-l-4 border-haven-500 bg-haven-50 p-6 pl-7">
                <Quote
                  className="absolute right-5 top-5 h-8 w-8 text-haven-200"
                  aria-hidden="true"
                />
                <p className="font-display text-[1.05rem] font-bold leading-relaxed text-haven-900">
                  “We understand the value of your time. Our clinics offer
                  quick and efficient consultations, so you can receive the
                  care you need without delay — and quality medication
                  shouldn&apos;t come with a heavy price tag.”
                </p>
                <footer className="mt-3 text-sm font-bold text-haven-600">
                  — The Haven Park care philosophy
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {CREDENTIALS.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <div className="flex h-full gap-3.5 rounded-2xl border border-haven-900/10 bg-white p-5 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-haven-100 text-haven-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-[0.95rem] font-extrabold text-haven-950">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-mist">
                        {body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats band */}
        <Reveal delay={100}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-haven-900/10 shadow-sm lg:grid-cols-4">
            {STATS.map(({ k, v }) => (
              <div
                key={k}
                className="flex flex-col items-center gap-2 bg-haven-950 px-6 py-9 text-center"
              >
                <dt className="order-2 max-w-[16rem] text-[0.82rem] font-semibold leading-snug text-haven-100/75">
                  {v}
                </dt>
                <dd className="order-1 font-display text-4xl font-extrabold tracking-tight text-white sm:text-[2.6rem]">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
