import Image from "next/image";
import {
  PhoneCall,
  Siren,
  Zap,
  Clock3,
  LayoutList,
  PhoneIncoming,
  Ambulance,
  MapPin,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./reveal";

const TRIAGE = [
  {
    icon: Zap,
    level: "Red",
    title: "Immediate danger",
    body: "Airway trouble, severe bleeding, shock or unconsciousness — you go straight to the stabilization bay. Registration can wait; you can't.",
    accent: "ember" as const,
  },
  {
    icon: Clock3,
    level: "Yellow",
    title: "Urgent, not critical",
    body: "Severe pain, high fever or a closed fracture? A clinician evaluates you within 15 minutes of walking through the gate.",
    accent: "gold" as const,
  },
  {
    icon: LayoutList,
    level: "Green",
    title: "Standard care",
    body: "Minor ailments join the smart HMIS queue and are seen in order — with transparent waits and no skipped turns.",
    accent: "haven" as const,
  },
];

const STEPS = [
  {
    icon: PhoneIncoming,
    title: "Call or walk in",
    body: `Ring ${SITE.phoneDisplay} any hour — a clinician answers, triages you on the phone and preps the team before you even arrive.`,
  },
  {
    icon: Siren,
    title: "Priority triage at the gate",
    body: "Every arrival is colour-coded in seconds: red, yellow or green — so the sickest patients are seen first, always.",
  },
  {
    icon: Ambulance,
    title: "Escalation if needed",
    body: "If your case exceeds Level 2 scope, we stabilize you here and arrange warm referral transport to St. Francis Kasarani, Mama Lucy Kibaki or KNH.",
  },
];

const accentStyles = {
  ember: {
    chip: "bg-ember-100 text-ember-700",
    ring: "hover:border-ember-300",
    bar: "bg-ember-600",
  },
  gold: {
    chip: "bg-gold-100 text-gold-600",
    ring: "hover:border-gold-400",
    bar: "bg-gold-400",
  },
  haven: {
    chip: "bg-haven-100 text-haven-700",
    ring: "hover:border-haven-300",
    bar: "bg-haven-600",
  },
};

export function Emergency() {
  return (
    <section
      id="emergency"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-haven-950/20">
            <Image
              src="/images/banner-staff.jpg"
              alt="A smiling member of the Haven Park clinical team"
              width={1440}
              height={617}
              sizes="100vw"
              className="h-64 w-full object-cover object-[center_30%] sm:h-72"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-haven-950/90 via-haven-950/60 to-haven-950/20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col justify-center gap-4 p-7 sm:p-12">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-ember-600 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-white">
                <Siren className="h-3.5 w-3.5" aria-hidden="true" />
                Emergency? Skip the forms
              </p>
              <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                In an emergency, every minute talks.
              </h2>
              <p className="max-w-lg text-[0.95rem] leading-relaxed text-white/85">
                Average ambulance response in Nairobi runs 40–60 minutes. When
                it can&apos;t wait, come straight in — we&apos;re wired for
                walk-in triage, 24/7.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Tap-to-call card */}
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-ember-600/25 bg-white p-7 shadow-lg shadow-ember-600/10 sm:p-9">
              <span className="flex h-14 w-14 animate-ring-pulse items-center justify-center rounded-2xl bg-ember-600 text-white">
                <PhoneCall className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-haven-950">
                One tap connects you to a clinician.
              </h3>
              <p className="mt-3 leading-relaxed text-mist">
                No apps, no accounts, no queues on the phone line. Calls to our
                emergency number are answered by clinical staff — day, night,
                weekends and public holidays.
              </p>
              <a
                href={SITE.tel}
                className="mt-7 flex items-center justify-center gap-3 rounded-2xl bg-ember-600 px-6 py-5 font-display text-2xl font-extrabold tracking-wide text-white shadow-lg shadow-ember-600/30 transition hover:-translate-y-0.5 hover:bg-ember-700 sm:text-3xl"
                aria-label={`Call Haven Park emergency line ${SITE.phoneDisplay} now`}
              >
                <PhoneCall className="h-7 w-7" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <p className="mt-5 flex items-start gap-2 text-sm font-medium text-mist">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-ember-600"
                  aria-hidden="true"
                />
                {SITE.address.street} — ground-floor, step-free entrance
                for wheelchairs and stretchers.
              </p>
            </div>
          </Reveal>

          {/* Triage + protocol */}
          <div className="flex flex-col gap-6">
            <Reveal delay={140}>
              <div className="grid gap-4 sm:grid-cols-3">
                {TRIAGE.map(({ icon: Icon, level, title, body, accent }) => {
                  const a = accentStyles[accent];
                  return (
                    <div
                      key={level}
                      className={`rounded-2xl border border-haven-900/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 ${a.ring}`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${a.chip}`}
                        >
                          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                        </span>
                        <span
                          className={`h-1.5 w-8 rounded-full ${a.bar}`}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-4 font-display text-base font-extrabold text-haven-950">
                        {level} · {title}
                      </p>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-mist">
                        {body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl border border-haven-900/10 bg-white p-7 shadow-sm sm:p-8">
                <h3 className="font-display text-lg font-extrabold text-haven-950">
                  How an emergency unfolds with us
                </h3>
                <ol className="mt-5 space-y-5">
                  {STEPS.map(({ icon: Icon, title, body }, i) => (
                    <li key={title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-haven-700 text-white">
                          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                        </span>
                        {i < STEPS.length - 1 && (
                          <span
                            className="mt-1 w-px flex-1 bg-haven-200"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="pb-1">
                        <p className="font-bold text-haven-950">
                          <span className="mr-2 text-haven-400">{i + 1}.</span>
                          {title}
                        </p>
                        <p className="mt-1 text-[0.9rem] leading-relaxed text-mist">
                          {body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
