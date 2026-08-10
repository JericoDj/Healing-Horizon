# Healing Horizon

A complete website for a mental health group therapy practice — React 18 + Vite,
Context API, routes, controllers and providers. Light mode.

> **Healing Horizon is a fictional demonstration practice.** Every name, licence
> number, address and phone number in this project is a placeholder. See
> [Before launch](#before-launch) before using any of it for a real practice.

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:5173>.

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with HMR on port 5173 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build on port 4173 |

---

## Documentation

| Document | What it covers |
|---|---|
| **[docs/DESIGN-GUIDE.md](./docs/DESIGN-GUIDE.md)** | The design guide: brand foundation, voice, colour with measured contrast ratios, typography, spacing, components, motion, accessibility standard, clinical-ethics rules, and how to extend the brand offline. **Start here.** |
| **[docs/BUILD-SPEC.md](./docs/BUILD-SPEC.md)** | The engineering contract: conventions, component API reference, data modules, and the rules any new page must follow. |

---

## Architecture

The app is layered so that each concern has exactly one home.

```
main.jsx
└── App.jsx
    └── ErrorBoundary            keeps a phone number on screen if anything throws
        └── BrowserRouter
            └── AppProviders     Theme → Toast → UI
                ├── ScrollToTop  restores per-navigation scroll behaviour
                └── AppRoutes
                    └── Layout   header · main · footer · skip link
                        └── page components
```

### The layers

| Layer | Directory | Responsibility | Knows about React? |
|---|---|---|---|
| **Services** | `src/services/` | Transport only — HTTP and localStorage. The only code that touches the network. | No |
| **Controllers** | `src/controllers/` | Business logic — field schemas, validation rules, payload shaping, error mapping. | No |
| **Context** | `src/context/` | Context objects and their consumer hooks. | Minimal |
| **Providers** | `src/providers/` | Wires controllers to React state and exposes it via context. | Yes |
| **Components** | `src/components/` | Presentation. | Yes |
| **Pages** | `src/pages/` | Composition of components into routes. | Yes |
| **Data** | `src/data/` | All editable content. | No |

The point of the split: `contactController.js` can be unit-tested with no DOM, no
React and no network, and the page that renders the contact form contains almost no
logic at all.

### Directory map

```
src/
├── components/
│   ├── layout/      Header, Footer, Layout, Logo, ErrorBoundary, RouteFallback
│   ├── sections/    Home-page sections
│   └── ui/          Button, Card, Field, Alert, Badge, Accordion, Avatar,
│                    Breadcrumbs, Icon, SectionHeading, Toaster
├── context/         ThemeContext, UIContext, ToastContext, ContactContext,
│                    BookingContext + createSafeContext()
├── controllers/     contactController, bookingController, newsletterController
├── data/            site, services, team, testimonials, faqs, insurance, resources
├── hooks/           useFormController, usePageMeta
├── pages/           one file per route, plus pages/legal/
├── providers/       AppProviders, ThemeProvider, UIProvider, ToastProvider,
│                    ContactProvider, BookingProvider
├── routes/          AppRoutes, paths, ScrollToTop
├── services/        httpClient, contactService, storageService
├── styles/          tokens.css, global.css
└── utils/           validators
```

---

## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | Home | Eager-loaded |
| `/about` | About the practice | |
| `/services` | Service index | |
| `/services/:slug` | Service detail | 7 services |
| `/therapists` | Clinician directory | Filterable |
| `/therapists/:slug` | Clinician profile | 6 clinicians |
| `/rates` | Rates & insurance | |
| `/resources` | Article index | Filterable |
| `/resources/:slug` | Article | |
| `/faq` | FAQ | Searchable |
| `/contact` | Contact form | `ContactProvider` |
| `/book` | 3-step consultation request | `BookingProvider` |
| `/privacy` | Privacy Policy | Includes `#hipaa` |
| `/terms` | Terms of Service | |
| `/accessibility` | Accessibility statement | |
| `*` | 404 | |

Everything except `/` is code-split with `React.lazy`, so a visitor who reads the
privacy policy never downloads the booking wizard.

`/team`, `/pricing`, `/blog` and `/appointment` redirect to their canonical paths.

---

## Context API usage

Five contexts, each with a hook that throws a useful error when used outside its
provider (see `createSafeContext.js`).

| Hook | Provider | Exposes |
|---|---|---|
| `useTheme()` | `ThemeProvider` | `theme`, `prefersReducedMotion`, `prefersHighContrast` |
| `useUI()` | `UIProvider` | Mobile drawer state, `hasScrolled`, banner dismissal |
| `useToast()` | `ToastProvider` | `.success()`, `.error()`, `.info()` |
| `useContactForm()` | `ContactProvider` | Full contact-form state |
| `useBooking()` | `BookingProvider` | Booking-form state plus the step machine |

The first three are mounted globally in `AppProviders`. The two form providers are
mounted by the pages that need them, so a visitor reading the privacy policy is not
carrying booking-form state.

---

## Forms

`useFormController` is the shared engine. It holds values, errors, touched state and
submission status, and delegates every decision to a plain controller object:

```js
const form = useFormController(contactController, { onSuccess });
```

Behaviour it provides for free:

- Validation on **blur**, not on keystroke
- Errors cleared the moment the user starts fixing a field
- `errorFor(field)` — surfaces an error only after the field has been touched
- `handleChange` / `handleBlur` / `handleSubmit` for controlled inputs
- `toggleArrayValue` for checkbox groups
- Honeypot spam handling (no CAPTCHA)
- Submission status → `isSubmitting`, `isSuccess`, `formError`

### Backend

`src/services/httpClient.js` currently runs a **mock transport**: realistic latency,
a generated reference number, and a deliberate failure path (submit an email starting
with `fail@` to exercise the error UI).

To connect a real API:

```bash
# .env.local
VITE_API_BASE_URL=https://api.example.com
```

The mock switches off automatically. No caller changes, because every caller already
handles `ApiError`. Expected endpoints: `POST /contact`, `POST /booking`,
`POST /newsletter`.

> **HIPAA note.** The forms deliberately collect no clinical information, and the UI
> says so. If you ever change that, the endpoint, the transport and the storage behind
> it all need to be HIPAA-compliant, with a Business Associate Agreement in place.

---

## Design system

All design values live in `src/styles/tokens.css`. **No component contains a hex code.**

| Colour | Hex | Contrast on Warm White |
|---|---|---|
| Deep Teal | `#285C61` | 7.32:1 — AAA |
| Teal | `#4F8C8D` | 3.74:1 — large text and UI only |
| Soft Blue | `#DCECEF` | surface |
| Mist | `#EEF5F4` | surface |
| Warm White | `#FCFCFA` | canvas |
| Charcoal | `#273438` | 12.51:1 — AAA |

Type: **Lora** for headings, **Inter** for body and UI, on a fluid `clamp()` scale.
Space on a 4px grid. Teal-tinted shadows. Motion 160–240ms, decelerating, and fully
collapsed under `prefers-reduced-motion`.

Full rationale in [docs/DESIGN-GUIDE.md](./docs/DESIGN-GUIDE.md).

### Light mode only

This is a decision, not an omission — see §3.8 of the design guide. The plumbing is
ready: add a `[data-theme='dark']` block overriding the semantic tokens, then set
`ALLOW_DARK = true` in `ThemeProvider.jsx`. No component changes.

---

## Accessibility

Built to **WCAG 2.2 AA**, exceeding it in several places.

Skip link · visible focus rings that are never removed · one `<h1>` per page ·
landmark regions · real labels on every control · `aria-describedby` hints ·
`role="alert"` errors · live-region announcements for filters and step changes ·
≥44px touch targets · reflow to 320px · full `prefers-reduced-motion` support ·
no CAPTCHA · no modal interrupts.

Testing checklist: §11.3 of the design guide.

---

## Deployment

Static build. Any static host works, but a **SPA fallback rewrite is required** —
without it, a hard refresh on `/privacy` returns the host's 404 before React Router
ever sees the URL.

```bash
npm run build     # → dist/
```

| Host | Config | Status |
|---|---|---|
| Netlify / Cloudflare Pages | `public/_redirects` | Included |
| Vercel | `vercel.json` | Included |
| Apache | `.htaccess` rewrite to `/index.html` | Add it |
| Nginx | `try_files $uri /index.html;` | Add it |

---

## Before launch

Everything below is marked `PLACEHOLDER` in the source and must be resolved.

- [ ] Replace every value in `src/data/site.js` — phone numbers use the 555 range reserved for fiction
- [ ] Replace `src/data/team.js` entirely, and **verify every licence number**
- [ ] Confirm rates in `src/data/insurance.js` with your billing lead
- [ ] Confirm the accepted-plans list against your actual contracted panels
- [ ] Have a healthcare attorney review the Privacy Policy and Terms
- [ ] Publish your real Notice of Privacy Practices
- [ ] Clinician review of every article in `src/data/resources.js`
- [ ] Commission real headshots (spec: design guide §7.3)
- [ ] Point `VITE_API_BASE_URL` at a real, HIPAA-appropriate endpoint
- [ ] Remove the fictional-practice disclaimer from the footer
- [ ] Generate a real `sitemap.xml` and update `robots.txt`

### Two things that are ethics, not preferences

**No client testimonials.** APA Ethics Code 5.05 and most state boards prohibit
soliciting testimonials from current clients. `src/data/testimonials.js` deliberately
contains composite reflections and verifiable facts instead, and the UI labels them as
such. Read the comment at the top of that file before changing it.

**Crisis resources stay.** 988, the Crisis Text Line and 911 appear in the footer of
every page and above the fold on both forms. The site states plainly that the practice
is not a crisis service and does not monitor messages after hours.

---

## Licence

Provided as a starting point for the Healing Horizon practice. Nothing in this
repository is legal, medical or clinical advice.
