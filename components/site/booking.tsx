"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  CalendarCheck2,
  Phone,
  MessageSquareText,
  TriangleAlert,
  PartyPopper,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import {
  SITE,
  EMERGENCY_KEYWORDS,
  buildWhatsAppMessage,
} from "@/lib/site";
import { Reveal } from "./reveal";

const SERVICES = [
  "General OPD consultation",
  "Specialized Eye Clinic",
  "Diagnostic Laboratory tests",
  "Ultrasound & Imaging",
  "Pharmacy refill",
  "Chronic disease (NCD) follow-up",
];

const RESIDENCES = [
  "Mwiki",
  "Clay City",
  "Kasarani",
  "Maji Mazuri",
  "Njiru",
  "Lucky Summer",
  "Dandora",
  "Thome / Garden City",
  "Other",
];

const WINDOWS = [
  "Morning (6am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 11pm)",
  "Overnight (11pm – 6am)",
  "Any time",
];

const PAYERS = [
  "Cash",
  "M-Pesa",
  "Britam (outpatient panel)",
  "CIC CoopCare",
  "SHA / NHIF",
  "Other insurance",
];

const HOW_IT_WORKS = [
  "Send your request — it opens straight into a WhatsApp chat with our front desk.",
  "We confirm your slot by SMS or WhatsApp and pre-register you in the HMIS queue.",
  "Walk in at your time. Booked patients skip the queue — walk-ins are always welcome too.",
];

function isEmergency(text: string) {
  const t = text.toLowerCase();
  return EMERGENCY_KEYWORDS.some((k) => t.includes(k));
}

const inputCls =
  "w-full rounded-2xl border border-haven-900/15 bg-white px-4 py-3.5 text-[0.95rem] font-medium text-ink placeholder:text-ink/35 shadow-sm transition focus:border-haven-500 focus:outline-none focus:ring-4 focus:ring-haven-500/15";

const labelCls =
  "mb-1.5 block text-[0.8rem] font-extrabold uppercase tracking-wide text-haven-900";

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    residence: "",
    service: SERVICES[0],
    date: "",
    window: WINDOWS[0],
    payer: PAYERS[0],
    complaint: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Set the date input's minimum to today directly on the DOM (avoids
  // server/client timezone mismatch and effect-driven re-renders).
  useEffect(() => {
    const today = new Date();
    const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    dateInputRef.current?.setAttribute("min", iso);
  }, []);

  const emergencyFlag = useMemo(
    () => isEmergency(form.complaint),
    [form.complaint],
  );

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage(form);
    const url = `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const smsBody = useMemo(
    () => `sms:${SITE.phoneIntl}?&body=${encodeURIComponent(buildWhatsAppMessage(form))}`,
    [form],
  );

  return (
    <section
      id="booking"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24"
    >
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-haven-50 via-white to-white" />
        <div className="absolute -left-24 top-40 h-96 w-96 rounded-full bg-haven-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          {/* Left: pitch */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-600">
                <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
                Book a visit
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-haven-950 sm:text-[2.75rem] sm:leading-[1.1]">
                Reserve your slot —{" "}
                <span className="text-gradient">in under a minute.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist">
                Fill the form and your request opens directly in WhatsApp — no
                accounts, no waiting on hold. Prefer talking? One tap on the
                number below reaches a human being, any hour.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ol className="mt-8 space-y-5">
                {HOW_IT_WORKS.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-haven-700 font-display text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1.5 leading-relaxed text-[0.95rem] text-ink/80">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={160}>
              <div className="relative mt-10 overflow-hidden rounded-[2rem] shadow-lg shadow-haven-900/15">
                <Image
                  src="/images/booking-doctor.jpg"
                  alt="A Haven Park doctor reviewing notes during a consultation"
                  width={900}
                  height={1600}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="h-72 w-full object-cover object-[center_25%] sm:h-80"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-haven-950/75 via-haven-950/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                  <p className="font-display text-sm font-extrabold text-white">
                    Walk-ins always welcome
                  </p>
                  <a
                    href={SITE.tel}
                    className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-ember-700 shadow-md backdrop-blur transition hover:bg-white"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form card */}
          <Reveal delay={80}>
            <div className="rounded-[2rem] border border-haven-900/10 bg-white p-6 shadow-xl shadow-haven-900/10 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[36rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-haven-100 text-haven-700">
                    <PartyPopper className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-haven-950">
                    WhatsApp should be opening…
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-mist">
                    Your request summary is ready to send. If the chat
                    didn&apos;t open (some browsers block pop-ups), use any of
                    the options below — or simply call us.
                  </p>
                  <div className="mt-8 grid w-full max-w-sm gap-3">
                    <a
                      href={`${SITE.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage(form))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-2xl bg-haven-700 px-5 py-4 font-bold text-white transition hover:bg-haven-800"
                    >
                      <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                      Open WhatsApp again
                    </a>
                    <a
                      href={smsBody}
                      className="flex items-center justify-center gap-2 rounded-2xl border-2 border-haven-200 px-5 py-4 font-bold text-haven-800 transition hover:border-haven-400 hover:bg-haven-50"
                    >
                      <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                      Send by SMS instead
                    </a>
                    <a
                      href={SITE.tel}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-ember-600 px-5 py-4 font-bold text-white transition hover:bg-ember-700"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call {SITE.phoneDisplay}
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mx-auto mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-haven-700 underline-offset-4 hover:underline"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Edit my request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-haven-100 text-haven-700">
                      <CalendarCheck2 className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-haven-950">
                        Appointment request
                      </h3>
                      <p className="text-sm font-medium text-mist">
                        Confirmed by SMS / WhatsApp
                      </p>
                    </div>
                  </div>

                  {/* Emergency intercept panel */}
                  {emergencyFlag && (
                    <div
                      role="alert"
                      className="mt-6 rounded-2xl border-2 border-ember-600 bg-ember-50 p-5"
                    >
                      <p className="flex items-start gap-3 font-bold text-ember-700">
                        <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                        This sounds like it could be an emergency.
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ember-700/90">
                        Please don&apos;t wait for a booking confirmation —
                        call us now. A clinician answers 24/7 and will guide
                        you immediately.
                      </p>
                      <a
                        href={SITE.tel}
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-ember-600 px-5 py-3.5 text-lg font-extrabold tracking-wide text-white transition hover:bg-ember-700"
                      >
                        <Phone className="h-5 w-5" aria-hidden="true" />
                        Call {SITE.phoneDisplay} now
                      </a>
                    </div>
                  )}

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-name" className={labelCls}>
                        Full legal name *
                      </label>
                      <input
                        id="bk-name"
                        required
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        placeholder="e.g. Amina Wanjiru"
                        className={inputCls}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-phone" className={labelCls}>
                        Phone number *
                      </label>
                      <input
                        id="bk-phone"
                        required
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        placeholder="07XX XXX XXX"
                        className={inputCls}
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-age" className={labelCls}>
                        Age
                      </label>
                      <input
                        id="bk-age"
                        type="number"
                        min={0}
                        max={120}
                        value={form.age}
                        onChange={(e) => set("age")(e.target.value)}
                        placeholder="Years"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-res" className={labelCls}>
                        Residence
                      </label>
                      <div className="relative">
                        <select
                          id="bk-res"
                          value={form.residence}
                          onChange={(e) => set("residence")(e.target.value)}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          <option value="">Select area…</option>
                          {RESIDENCES.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-haven-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="bk-service" className={labelCls}>
                        Service needed *
                      </label>
                      <div className="relative">
                        <select
                          id="bk-service"
                          required
                          value={form.service}
                          onChange={(e) => set("service")(e.target.value)}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-haven-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="bk-date" className={labelCls}>
                        Preferred date
                      </label>
                      <input
                        id="bk-date"
                        ref={dateInputRef}
                        type="date"
                        value={form.date}
                        onChange={(e) => set("date")(e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-window" className={labelCls}>
                        Time window
                      </label>
                      <div className="relative">
                        <select
                          id="bk-window"
                          value={form.window}
                          onChange={(e) => set("window")(e.target.value)}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          {WINDOWS.map((w) => (
                            <option key={w} value={w}>
                              {w}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-haven-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="bk-payer" className={labelCls}>
                        Payment method
                      </label>
                      <div className="relative">
                        <select
                          id="bk-payer"
                          value={form.payer}
                          onChange={(e) => set("payer")(e.target.value)}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          {PAYERS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-haven-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="bk-complaint" className={labelCls}>
                        Why are you coming?{" "}
                        <span className="font-medium normal-case text-mist">
                          (your own words are fine — “homa kali”, “presha”…)
                        </span>
                      </label>
                      <textarea
                        id="bk-complaint"
                        rows={3}
                        value={form.complaint}
                        onChange={(e) => set("complaint")(e.target.value)}
                        placeholder="e.g. Homa kali for three days, headache and cough…"
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-haven-700 px-6 py-4.5 font-display text-lg font-extrabold text-white shadow-lg shadow-haven-700/25 transition hover:-translate-y-0.5 hover:bg-haven-800"
                  >
                    <MessageSquareText className="h-5.5 w-5.5" aria-hidden="true" />
                    Send request via WhatsApp
                  </button>
                  <p className="mt-4 text-center text-xs leading-relaxed text-mist">
                    Your details go straight to our front desk — stored under
                    Kenya Data Protection Act (2019) safeguards and never
                    shared. Prefer a call?{" "}
                    <a
                      href={SITE.tel}
                      className="font-bold text-haven-700 underline underline-offset-2 hover:text-haven-800"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
