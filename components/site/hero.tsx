"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock3, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-haven-50 via-white to-white" />
        <div className="dot-grid absolute inset-x-0 top-0 h-[42rem] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -top-24 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-haven-200/40 blur-3xl" />
        <div className="absolute left-[-10rem] top-72 h-[26rem] w-[26rem] rounded-full bg-gold-100/60 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Copy column */}
        <div>
          <Reveal>
            <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-haven-200 bg-white/80 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-haven-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-haven-600" aria-hidden="true" />
              KMPDC Licensed · {SITE.level} · Mwiki, Nairobi
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[2.65rem] font-extrabold leading-[1.06] tracking-tight text-haven-950 sm:text-6xl lg:text-[4.1rem]">
              Quality care for Mwiki,{" "}
              <span className="text-gradient">day and night.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Haven Park Medical Centre is your neighbourhood clinic on
              Kasarani–Mwiki Road — open 24 hours, every day. Swift
              consultations, honest pricing, and modern diagnostics powered by
              Ilara Health, right opposite the Mwiki Police Station.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SITE.tel}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ember-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-ember-600/25 transition hover:-translate-y-0.5 hover:bg-ember-700 hover:shadow-xl hover:shadow-ember-600/30"
              >
                <Phone className="h-5 w-5 transition group-hover:rotate-12" aria-hidden="true" />
                Call {SITE.phoneDisplay}
                <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider">
                  24/7
                </span>
              </a>
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-haven-700 bg-white px-7 py-[0.9rem] text-base font-bold text-haven-800 transition hover:-translate-y-0.5 hover:bg-haven-50"
              >
                Book a visit
                <ArrowRight
                  className="h-5 w-5 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={310}>
            <dl className="mt-11 grid max-w-lg grid-cols-3 divide-x divide-haven-900/10 rounded-2xl border border-haven-900/10 bg-white/70 py-4 shadow-sm">
              {[
                { icon: Clock3, k: "24/7", v: "OPD · Lab · Pharmacy" },
                { icon: BadgeCheck, k: "Level 2", v: "Licensed facility" },
                { icon: ShieldCheck, k: "Lic. 14865", v: "KMPDC registered" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="flex flex-col items-center gap-1 px-2 text-center">
                  <Icon className="h-5 w-5 text-haven-600" aria-hidden="true" />
                  <dt className="font-display text-lg font-extrabold text-haven-900">
                    {k}
                  </dt>
                  <dd className="text-[0.72rem] font-semibold uppercase tracking-wide text-mist">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Imagery column */}
        <Reveal delay={150} className="relative">
          <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]">
            <div
              className="absolute -inset-3 -z-10 rounded-[2.75rem] bg-gradient-to-br from-haven-200 via-haven-100 to-gold-100"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-haven-900/20 ring-1 ring-haven-900/10">
              <Image
                src="/images/hero-doctor.jpg"
                alt="A Haven Park clinician warmly consulting a patient"
                width={1100}
                height={1650}
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="h-auto w-full object-cover"
              />
              {/* subtle bottom scrim for depth */}
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-haven-950/35 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating glass badge — always open */}
            <div className="glass-panel animate-float absolute -left-4 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-haven-500" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-haven-600" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold text-haven-950">
                  Open right now
                </p>
                <p className="text-xs font-semibold text-mist">
                  24 hours · 7 days a week
                </p>
              </div>
            </div>

            {/* Floating glass badge — landmark */}
            <div className="glass-panel animate-float-late absolute -right-3 bottom-16 max-w-[15rem] rounded-2xl px-4 py-3 sm:-right-6">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-gold-600">
                Easy to find
              </p>
              <p className="mt-1 text-sm font-bold leading-snug text-haven-950">
                Directly opposite Mwiki Police Station
              </p>
              <p className="mt-0.5 text-xs font-medium text-mist">
                Matatu 44 &amp; 17A · Mwiki Police Stage
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
