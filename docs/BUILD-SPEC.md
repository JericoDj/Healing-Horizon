# Build spec — conventions every page must follow

This is the contract. The foundation (tokens, UI kit, layout, routing, providers,
controllers, data) is already built. Pages consume it; they do not re-invent it.

---

## Stack

- React 18 + Vite, **plain JSX** (no TypeScript)
- `react-router-dom` v6
- **CSS Modules** per component (`Foo.jsx` + `Foo.module.css`)
- No CSS-in-JS, no Tailwind, no UI library, **no new npm dependencies**

## Absolute rules

1. **Never hard-code a colour, font-size, spacing value, radius, shadow or
   duration.** Every value comes from a token in `src/styles/tokens.css`.
   If a token is missing, use the closest one — do not add hex codes.
2. **Never import another page's CSS module.** Shared styling goes in
   `src/styles/global.css` (already has `.container`, `.section`, `.prose`,
   `.eyebrow`, `.stack`, `.grid-auto`, `.visually-hidden`, `.measure-prose`).
3. **Never write content into a component that belongs in `src/data/`.**
   All copy that a practice owner would edit lives in the data files.
4. **Never remove or weaken the crisis-resource messaging.**
5. Every page calls `usePageMeta({ title, description })` exactly once.
6. Import UI from the barrel: `import { Button, Card, SectionHeading } from '../components/ui'`.

## Accessibility (non-negotiable — these get checked)

- One `<h1>` per page. Heading levels never skip.
- All interactive elements reachable and operable by keyboard. Never remove
  focus outlines — the global `:focus-visible` rule handles them.
- Images have meaningful `alt`, or `alt=""` when decorative.
- Icons are decorative by default; pass `title` only when an icon is the only
  content of a control.
- Colour is never the sole carrier of meaning.
- Touch targets ≥ 44×44px.
- Body text ≥ 16px. `--text-muted` is only for ≥18.66px or bold text.
- Landmarks: the layout already provides `<header>`, `<main>`, `<footer>`.
  Use `<section aria-labelledby="...">` for major page sections.

## Page file shape

```jsx
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionHeading } from '../components/ui';
import styles from './FooPage.module.css';

export function FooPage() {
  usePageMeta({
    title: 'Foo',
    description: 'One sentence, under 155 characters, written for a human.',
  });

  return (
    <>
      <section className={`section ${styles.hero}`} aria-labelledby="foo-heading">
        <div className="container">
          <h1 id="foo-heading">…</h1>
        </div>
      </section>
      {/* more sections */}
    </>
  );
}

export default FooPage;   // ← default export is REQUIRED (routes lazy-import it)
```

Section backgrounds alternate to give the page rhythm: page → `section--sunken`
(Mist) → page → `section--inverse` (Deep Teal) for the closing CTA.

## Available UI components

From `src/components/ui`:

| Component | Notes |
|---|---|
| `Button` | `variant`: primary \| secondary \| outline \| ghost \| accent \| inverse \| inverseOutline. `size`: sm \| md \| lg. Pass `to` for a router link, `href` for an external one. `iconRight="arrowRight"`, `loading`, `fullWidth`. |
| `Card`, `CardHeader`, `CardBody`, `CardFooter` | `tone`: raised \| sunken \| accent \| outline \| inverse. `padding`: none \| sm \| md \| lg. Pass `to` to make the card a link. |
| `SectionHeading` | `eyebrow`, `title`, `intro`, `align="left"\|"center"`, `level={2}`, `id`. Use this instead of hand-rolling section intros. |
| `Badge`, `StatusBadge` | `tone`: neutral \| brand \| accent \| success \| warning \| danger \| inverse. |
| `Alert` | `tone`: info \| brand \| success \| warning \| danger. `title`, `action`. |
| `Accordion` | `items=[{ id, question, answer }]`, `allowMultiple`, `defaultOpenId`. |
| `Avatar` | `initials`, `accent`: teal \| deep \| clay. `size`: sm \| md \| lg \| xl. |
| `Breadcrumbs` | `items=[{ label, to }]` — last item is the current page. |
| `Icon` | See `iconNames`. 24px box, stroke, inherits `currentColor`. |
| `Modal` | `open`, `onClose`, `title`, `description`, `footer`, `size`: sm \| md \| lg. Built on native `<dialog>` — focus trap, Escape and focus restore come from the browser. |
| `Input`, `Textarea`, `Select`, `Checkbox`, `RadioCardGroup`, `CheckboxCardGroup`, `HoneypotField` | Labels, hints, errors and ARIA are handled inside. |

Icon names: `person hearts sprout home shield group video arrowRight arrowLeft
chevronDown chevronRight close menu check plus minus search external phone mail
mapPin clock calendar alert info quote sparkle heartHand leaf shieldCheck`

## Data modules

| Import | Exports |
|---|---|
| `../data/site` | `site` (default too), `crisisResources`, `primaryNav` (each item has `icon`), `footerNav` |
| `../data/announcements` | `announcements`, `TICKER_SPEED` — the strip above the header |
| `../data/services` | `services`, `featuredServices`, `getServiceBySlug(slug)` |
| `../data/team` | `team`, `getTherapistBySlug(slug)`, `getTherapistsByService(slug)`, `therapistOptions`, `focusAreas`, `therapistMatchesFocusArea(member, areaId)` |
| `../data/testimonials` | `reflections`, `trustSignals`, `affiliations` |
| `../data/faqs` | `faqGroups`, `allFaqs`, `homeFaqs` |
| `../data/insurance` | `rates`, `acceptedPlans`, `paymentMethods`, `billingPolicies`, `insuranceChecklist` |
| `../data/resources` | `resources`, `featuredResources`, `resourceCategories`, `getResourceBySlug(slug)` |

## Routes (`../routes/paths`)

`paths.home` `.about` `.services` `.service(slug)` `.therapists` `.therapist(slug)`
`.rates` `.resources` `.resource(slug)` `.faq` `.contact` `.book` `.privacy`
`.terms` `.accessibility`

## Providers and hooks

- `useUI()` — `isNavOpen`, `hasScrolled`, drawer controls
- `useToast()` — `.success(title, desc)`, `.error(...)`, `.info(...)`
- `useTheme()` — `theme`, `prefersReducedMotion`, `prefersHighContrast`
- `useContactForm()` — inside `<ContactProvider>` only
- `useBooking()` — inside `<BookingProvider>` only
- `usePageMeta({ title, description, noIndex })`

Form pages mount their own provider inside the page component:

```jsx
export default function ContactPage() {
  return (
    <ContactProvider>
      <ContactPageInner />
    </ContactProvider>
  );
}
```

## Voice and copy

Written for someone who is anxious about reaching out.

- Plain, warm, direct. Short sentences. No exclamation marks.
- Second person ("you"), present tense.
- **Never** promise outcomes ("we will cure your anxiety"), diagnose, or
  guarantee results. Never say "we can help with X" as a clinical claim.
- Avoid: journey, unlock, transform, empower, holistic, safe space (as filler),
  "reach out today!", stock-therapy cliché.
- Prefer: what actually happens, what it costs, how long it takes, who you
  will talk to.
- Always give the reader a next step that is small (a 15-minute call), not
  large (commit to therapy).
- Where a claim could be read as clinical advice, keep it descriptive and add
  the practice's standard caveat.

## Not allowed in content

- Client testimonials attributed to individuals (see the header comment in
  `src/data/testimonials.js` — APA 5.05 and state board rules).
- Statistics without a source.
- Fake credentials beyond the clearly-marked placeholders already in the data.

## Responsive

Mobile-first. Breakpoints used in the existing CSS, in `rem`:

- `34rem` (544px) — small tablet / large phone landscape
- `48rem` (768px) — tablet
- `62rem` (992px) — desktop nav appears
- `82rem` (1312px) — wide

Never cause horizontal page scroll. Wide tables and code get their own
`overflow-x: auto` container.

## Verify before you finish

Run from the project root:

```
npx vite build
```

Your files must compile with no errors and no unresolved imports.
