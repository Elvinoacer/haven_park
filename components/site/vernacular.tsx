import {
  MessageCircleHeart,
  MoveRight,
  Thermometer,
  Soup,
  TestTube2,
  ScanLine,
  HeartPulse,
  Droplets,
  Glasses,
} from "lucide-react";
import { Reveal } from "./reveal";

const PHRASES = [
  {
    icon: Thermometer,
    say: "“Niko na homa kali”",
    mean: "Fever, coughs & flu",
    dept: "General Outpatient / Pediatrics",
  },
  {
    icon: Soup,
    say: "“Tumbo inaniuma / nakuendesha”",
    mean: "Stomach pain & running stomach",
    dept: "Outpatient Internal Medicine",
  },
  {
    icon: TestTube2,
    say: "“Nataka kupima damu”",
    mean: "Blood tests & lab screening",
    dept: "Diagnostic Laboratory",
  },
  {
    icon: ScanLine,
    say: "“Nataka picha ya tumbo”",
    mean: "Abdominal ultrasound imaging",
    dept: "Ultrasound & Imaging",
  },
  {
    icon: HeartPulse,
    say: "“Presha yangu imepanda”",
    mean: "Blood pressure monitoring",
    dept: "Chronic Disease Clinic",
  },
  {
    icon: Droplets,
    say: "“Kisukari”",
    mean: "Diabetes care & follow-up",
    dept: "Endocrine & Metabolic Clinic",
  },
  {
    icon: Glasses,
    say: "“Macho yanawasha / sielewi kusoma”",
    mean: "Itchy or blurry vision",
    dept: "Specialized Eye Clinic",
  },
];

export function Vernacular() {
  return (
    <section
      aria-labelledby="vernacular-heading"
      className="relative overflow-hidden bg-haven-950 py-20 text-white sm:py-24"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-haven-600/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-300">
                <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
                We speak your language
              </p>
              <h2
                id="vernacular-heading"
                className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-[2.75rem] sm:leading-[1.1]"
              >
                Tuambie kwa lugha yako —{" "}
                <span className="text-haven-300">we&apos;ll take it from here.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-haven-100/85">
                Health care works better when you can describe things your own
                way. Tell us about your <em>homa</em>, your{" "}
                <em>presha</em>, or your <em>tumbo</em> — our team translates
                everyday words into the right tests, the right clinician and
                the right care, in English or Kiswahili.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex items-start gap-4 rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <MessageCircleHeart
                  className="mt-0.5 h-9 w-9 shrink-0 text-gold-400"
                  aria-hidden="true"
                />
                <p className="text-[0.95rem] leading-relaxed text-haven-100/90">
                  This mapping also powers our front desk and digital intake —
                  so whatever words you use at the gate or in the booking form,
                  you land in front of the right service line faster.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2" role="list">
            {PHRASES.map(({ icon: Icon, say, mean, dept }, i) => (
              <Reveal key={say} delay={i * 60}>
                <div
                  role="listitem"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-md transition duration-300 hover:border-haven-300/40 hover:bg-white/[0.12]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display text-[1.05rem] font-bold leading-snug">
                      {say}
                    </p>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-haven-800/80 text-haven-200 transition group-hover:bg-haven-600 group-hover:text-white">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-haven-300">
                    <MoveRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <p className="text-sm font-semibold text-white/90">{mean}</p>
                  </div>
                  <p className="mt-1.5 pl-6 text-xs font-semibold uppercase tracking-wide text-haven-100/60">
                    {dept}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
