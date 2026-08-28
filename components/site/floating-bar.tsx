"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, CalendarPlus } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Persistent conversion bar:
 * - Mobile: fixed bottom glass action bar (Call / WhatsApp / Book)
 * - Desktop: floating emergency pill, appears after scrolling past the hero
 */
export function FloatingBar() {
  const [showDesktopPill, setShowDesktopPill] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowDesktopPill(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile bottom action bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 sm:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="glass mx-3 mb-3 grid grid-cols-3 gap-1.5 rounded-2xl p-1.5 shadow-2xl shadow-haven-950/25">
          <a
            href={SITE.tel}
            className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 rounded-xl bg-ember-600 font-bold text-white transition active:scale-[0.97]"
            aria-label={`Call ${SITE.phoneDisplay} — emergency line`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="text-[0.68rem] font-extrabold uppercase tracking-wide">
              Call now
            </span>
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 rounded-xl bg-haven-100 font-bold text-haven-800 transition active:scale-[0.97]"
            aria-label="Chat with the front desk on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="text-[0.68rem] font-extrabold uppercase tracking-wide">
              WhatsApp
            </span>
          </a>
          <a
            href="#booking"
            className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 rounded-xl bg-haven-700 font-bold text-white transition active:scale-[0.97]"
            aria-label="Book an appointment"
          >
            <CalendarPlus className="h-5 w-5" aria-hidden="true" />
            <span className="text-[0.68rem] font-extrabold uppercase tracking-wide">
              Book
            </span>
          </a>
        </div>
      </div>

      {/* Desktop floating emergency pill */}
      <a
        href={SITE.tel}
        aria-label={`Emergency? Call ${SITE.phoneDisplay}`}
        className={`fixed bottom-7 right-7 z-40 hidden items-center gap-3 rounded-full bg-ember-600 py-3.5 pl-4 pr-6 font-bold text-white shadow-2xl shadow-ember-600/40 transition-all duration-500 hover:-translate-y-1 hover:bg-ember-700 sm:flex ${
          showDesktopPill
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-white" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-white/80">
            Emergency? 24/7
          </span>
          <span className="block font-display text-lg font-extrabold tracking-wide">
            {SITE.phoneDisplay}
          </span>
        </span>
      </a>
    </>
  );
}
