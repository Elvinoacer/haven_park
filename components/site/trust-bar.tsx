import {
  Smartphone,
  Banknote,
  ShieldCheck,
  HeartPulse,
  Microscope,
  Building2,
} from "lucide-react";

const PARTNERS = [
  { icon: Smartphone, label: "M-Pesa", note: "Instant SMS receipts" },
  { icon: Banknote, label: "Cash", note: "Transparent pricing" },
  { icon: ShieldCheck, label: "Britam", note: "Outpatient panels" },
  { icon: HeartPulse, label: "CIC CoopCare", note: "Health plans accepted" },
  { icon: Building2, label: "SHA / NHIF", note: "Public schemes" },
  { icon: Microscope, label: "Ilara Health", note: "Diagnostics partner" },
];

export function TrustBar() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section
      aria-label="Payments, insurance and partners"
      className="border-y border-haven-900/10 bg-paper py-5"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="marquee-track items-center gap-10 pr-10">
          {row.map(({ icon: Icon, label, note }, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-2.5"
              aria-hidden={i >= PARTNERS.length}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-haven-100 text-haven-700">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-sm font-extrabold text-haven-950">
                  {label}
                </span>
                <span className="block text-xs font-medium text-mist">
                  {note}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
