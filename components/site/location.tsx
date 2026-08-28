import {
  MapPin,
  Clock3,
  Bus,
  Bike,
  Car,
  Footprints,
  Phone,
  ExternalLink,
  CircleCheck,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./reveal";

const HOURS = [
  { unit: "General Outpatient (OPD)", hours: "24 / 7", note: "Open holidays" },
  { unit: "Diagnostic Laboratory", hours: "24 / 7", note: "Urgent tests anytime" },
  { unit: "Pharmacy & Dispensing", hours: "24 / 7", note: "Open holidays" },
  {
    unit: "Specialized Eye Clinic",
    hours: "Clinic days",
    note: "From 9:00 AM — book ahead",
  },
  {
    unit: "Emergency Line",
    hours: "24 / 7",
    note: SITE.phoneDisplay,
  },
];

const TRANSIT = [
  {
    icon: Bus,
    title: "Matatu (routes 44 & 17A)",
    body: "Board from the CBD or Thika Superhighway along Kasarani–Mwiki Road. Alight at Mwiki Police Stage — our entrance is directly opposite.",
  },
  {
    icon: Bike,
    title: "Boda-boda",
    body: "Ask for “Haven Park, moo ya police” — drop-off is right at the main gate from anywhere in Mwiki, Clay City or Maji Mazuri.",
  },
  {
    icon: Car,
    title: "Car / taxi",
    body: "Drive toward Mwiki Town centre on Kasarani–Mwiki Road. Street and on-site parking is available opposite the police station.",
  },
  {
    icon: Footprints,
    title: "On foot",
    body: "Paved footpaths run along the road from surrounding estates. Ground-floor, step-free entry — wheelchair and stretcher friendly.",
  },
];

export function Location() {
  return (
    <section
      id="location"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-haven-600">
              <span className="h-px w-10 bg-haven-400" aria-hidden="true" />
              Find us
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-haven-950 sm:text-[2.75rem] sm:leading-[1.1]">
              Impossible to miss — opposite the Police Station.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              {SITE.address.street}, {SITE.address.town}. A landmark address
              that works day or night — which is just as well, because we
              never close.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-6">
            {/* Hours */}
            <Reveal delay={60}>
              <div className="rounded-3xl border border-haven-900/10 bg-white p-7 shadow-sm sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="flex items-center gap-2.5 font-display text-lg font-extrabold text-haven-950">
                    <Clock3 className="h-5 w-5 text-haven-600" aria-hidden="true" />
                    Opening hours
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-haven-100 px-3 py-1.5 text-xs font-extrabold text-haven-800">
                    <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    Open 24 hours
                  </span>
                </div>
                <table className="mt-5 w-full text-left">
                  <caption className="sr-only">
                    Service units and their operating hours
                  </caption>
                  <tbody className="divide-y divide-haven-900/8">
                    {HOURS.map(({ unit, hours, note }) => (
                      <tr key={unit} className="align-baseline">
                        <th
                          scope="row"
                          className="py-3 pr-3 text-[0.92rem] font-bold text-ink"
                        >
                          {unit}
                        </th>
                        <td className="whitespace-nowrap py-3 pr-3 font-display text-sm font-extrabold text-haven-700">
                          {hours}
                        </td>
                        <td className="py-3 text-right text-xs font-medium text-mist">
                          {note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Transit */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-haven-900/10 bg-white p-7 shadow-sm sm:p-8">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-extrabold text-haven-950">
                  <MapPin className="h-5 w-5 text-haven-600" aria-hidden="true" />
                  Getting here
                </h3>
                <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                  {TRANSIT.map(({ icon: Icon, title, body }) => (
                    <li key={title} className="flex gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-haven-100 text-haven-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[0.92rem] font-extrabold text-haven-950">
                          {title}
                        </p>
                        <p className="mt-1 text-[0.85rem] leading-relaxed text-mist">
                          {body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Map card */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-haven-900/10 bg-white shadow-sm">
              <div className="relative min-h-[22rem] flex-1">
                <iframe
                  src={SITE.mapsEmbed}
                  title="Map showing Haven Park Medical Centre, opposite Mwiki Police Station, Nairobi"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.9rem] font-semibold leading-snug text-ink">
                  Kasarani–Mwiki Road, Mwiki Town
                  <span className="block text-xs font-medium text-mist">
                    Directly opposite Mwiki Police Station
                  </span>
                </p>
                <a
                  href={SITE.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-haven-700 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-haven-800"
                >
                  Get directions
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Compact contact strip */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl bg-haven-950 px-7 py-7 text-white sm:flex-row sm:px-9">
            <div>
              <p className="font-display text-xl font-extrabold">
                Questions before you come?
              </p>
              <p className="mt-1 text-sm text-haven-100/75">
                Talk to a human — not a phone tree. We answer around the clock.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={SITE.tel}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-600 px-6 py-3.5 font-bold text-white transition hover:bg-ember-700"
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
