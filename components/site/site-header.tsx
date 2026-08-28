"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X, CalendarPlus } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Emergency ribbon — desktop only (mobile uses the bottom action bar) */}
      <div className="hidden sm:block bg-ember-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-1.5 text-[0.8rem] font-medium">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-ember-200" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <p>
            24-hour emergency &amp; outpatient line —{" "}
            <a
              href={SITE.tel}
              className="font-bold underline decoration-white/40 underline-offset-2 transition hover:decoration-white"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      {/* Main glass nav */}
      <div
        className={`glass transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_36px_-16px_rgba(16,32,26,0.28)]" : ""
        }`}
      >
        <nav
          className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Logo compact />

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline-slide text-[0.92rem] font-semibold text-ink/80 transition hover:text-haven-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={SITE.tel}
              className="hidden items-center gap-2 rounded-full border border-ember-600/30 bg-ember-50 px-4 py-2 text-sm font-bold text-ember-700 transition hover:bg-ember-100 md:flex"
              aria-label={`Call Haven Park now at ${SITE.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <a
              href="#booking"
              className="hidden items-center gap-2 rounded-full bg-haven-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-px hover:bg-haven-800 hover:shadow-md sm:flex"
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Book a Visit
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-haven-900/10 bg-white/70 text-haven-900 transition hover:bg-haven-50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-haven-950/45 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-x-3 top-3 rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-haven-50 text-haven-900 transition hover:bg-haven-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 grid gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 font-display text-lg font-bold text-ink transition hover:bg-haven-50 hover:text-haven-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 grid gap-2.5 border-t border-haven-900/10 pt-5">
            <a
              href={SITE.tel}
              className="flex items-center justify-center gap-2 rounded-2xl bg-ember-600 px-4 py-4 font-bold text-white transition hover:bg-ember-700"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SITE.phoneDisplay} — 24/7
            </a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-haven-700 px-4 py-4 font-bold text-white transition hover:bg-haven-800"
            >
              <CalendarPlus className="h-5 w-5" aria-hidden="true" />
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
