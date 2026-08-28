# Haven Park Medical Centre — Website

The official website for **Haven Park Medical Centre**, a KMPDC-licensed private
Level 2 medical clinic on Kasarani–Mwiki Road, Mwiki — opposite the Mwiki Police
Station, Nairobi. Open 24 hours, 7 days a week.

Built with **Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript**.

## Quick start

```bash
npm install     # or: bun install / pnpm install
npm run dev     # development server on http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## What's inside

A single-page marketing + conversion site organised into sections:

| Section | Purpose |
| --- | --- |
| Hero | 24/7 positioning, tap-to-call, trust badges (KMPDC · Level 2 · License 14865) |
| Trust bar | Payment & partner marquee — M-Pesa, Cash, Britam, CIC CoopCare, SHA/NHIF, Ilara Health |
| Services | Bento grid of the five service lines (OPD, Eye Clinic, Lab, Ultrasound, Pharmacy) + referral network |
| Vernacular | "Tuambie kwa lugha yako" — maps everyday Swahili/Sheng expressions to service lines |
| Emergency | Tap-to-call card, Red/Yellow/Green triage explainer, escalation protocol |
| Preparation | Fasting, ultrasound hydration, documents and NCD follow-up checklists |
| About | Care philosophy, credentials (KMPDC, Ilara Health, CPD) and stats |
| Booking | Appointment request form with **emergency-keyword interception** and WhatsApp/SMS/call handoff |
| Location | 24/7 hours table, matatu/boda/car directions, embedded Google Map |
| FAQ | Accordion covering costs, insurance, prep, referrals and data protection |
| Floating bar | Mobile bottom action bar (Call / WhatsApp / Book) + desktop emergency pill |

### Booking flow

The form requires **no backend**. On submit it composes a structured message
and opens it in WhatsApp (`wa.me/254711775678`), with SMS and tap-to-call
fallbacks shown afterwards. If the stated complaint contains emergency
keywords (bleeding, unconscious, *homa kali*, chest pain…), a red intercept
panel surfaces a direct call button first — mirroring the clinic's telephone
triage protocol.

## Editing content

* **Contact details, links, emergency keywords, message template**
  → `lib/site.ts` (single source of truth)
* **Section copy & content** → `components/site/*.tsx` (one file per section)
* **Brand colours & animations** → `app/globals.css` (`@theme` tokens, `haven-*` scale)
* **Imagery** → `public/images/`
* **SEO metadata & structured data (JSON-LD)** → `app/layout.tsx`
  (replace the `metadataBase` placeholder domain with the real one before launch)

## Accessibility & responsiveness

* Mobile-first, safe-area aware floating action bar; no horizontal overflow at 390 px
* Semantic landmarks, ARIA labelling, keyboard-focus rings, `prefers-reduced-motion` support
* Emergency contact is reachable within one tap from any scroll position

---

© Haven Park Medical Centre · KMPDC License No. 14865 · Private Level 2 Medical Clinic
Patient data handling aligned with the Kenya Data Protection Act (2019).
