import { LogoMark } from "./logo";
import { Phone, MessageSquareText, MapPin, Clock3 } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-haven-950 text-haven-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <span className="leading-none">
                <span className="block font-display text-xl font-extrabold tracking-tight text-white">
                  Haven Park
                </span>
                <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-haven-300">
                  Medical Centre
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-haven-100/70">
              A KMPDC-licensed Level 2 medical centre serving Mwiki and greater
              Kasarani with 24-hour outpatient care, modern diagnostics and
              honest pricing — powered by an Ilara Health digital platform.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-haven-100">
              <Clock3 className="h-3.5 w-3.5 text-haven-300" aria-hidden="true" />
              Open 24 hours · 7 days a week · Public holidays
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-haven-300">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-haven-100/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-haven-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={SITE.tel}
                  className="flex items-center gap-3 font-bold text-white transition hover:text-haven-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {SITE.phoneDisplay}
                  <span className="rounded-full bg-ember-600 px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider">
                    24/7
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-haven-100/85 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                  </span>
                  WhatsApp the front desk
                </a>
              </li>
              <li className="flex items-start gap-3 text-haven-100/80">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="pt-1.5 leading-relaxed">
                  {SITE.address.street}, {SITE.address.town},{" "}
                  {SITE.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-haven-100/55 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. {SITE.license} · Private {SITE.level}.
          </p>
          <p className="max-w-xl leading-relaxed">
            Patient data is handled under the Kenya Data Protection Act (2019)
            — consent-based intake, role-restricted access, encryption in
            transit and at rest.
          </p>
        </div>
      </div>
    </footer>
  );
}
