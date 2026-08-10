# Healing Horizon — Design Guide

**Version 1.0 · Light mode**
A brand and interface system for a group therapy practice.

---

## Contents

1. [Brand foundation](#1-brand-foundation)
2. [Voice and tone](#2-voice-and-tone)
3. [Colour](#3-colour)
4. [Typography](#4-typography)
5. [Space and layout](#5-space-and-layout)
6. [Shape, elevation and texture](#6-shape-elevation-and-texture)
7. [Iconography and imagery](#7-iconography-and-imagery)
8. [Motion](#8-motion)
9. [Components](#9-components)
10. [Page patterns](#10-page-patterns)
11. [Accessibility standard](#11-accessibility-standard)
12. [Content and clinical-ethics rules](#12-content-and-clinical-ethics-rules)
13. [Applying the system](#13-applying-the-system)
14. [Governance](#14-governance)

---

## 1. Brand foundation

### 1.1 What the brand is for

Healing Horizon is a **group practice**, not a solo therapist's portfolio. That single
fact settles most design questions before they are asked.

A solo practitioner's site sells a person: their face, their voice, their story.
A group practice sells an **institution you can trust with something private** — one
that will still be there in three years, that has more than one clinician so there is
somewhere to go if the first fit is wrong, and that runs on stated policies rather than
one person's goodwill.

So the design leans toward **established** over **personal**, and toward **calm
competence** over **warmth-as-decoration**. It should feel closer to a well-run clinic
than to a wellness brand.

### 1.2 Positioning

| | |
|---|---|
| **Category** | Outpatient mental health — individual, couples, family, group, trauma |
| **Audience** | Adults deciding whether to start therapy; parents seeking care for a teen; partners in conflict; people referred by a doctor or an employer |
| **Emotional state at arrival** | Ambivalent, tired, often embarrassed. Frequently comparing three tabs at 11pm. |
| **The competitive set** | Solo private practices, national teletherapy apps, hospital outpatient departments |
| **Our edge** | Real named clinicians, published prices, a free 15-minute call before anything is committed to |

### 1.3 Brand attributes

The palette brief named four qualities. Here is what each one has to mean in practice —
an attribute that doesn't change a design decision isn't an attribute, it's a mood board.

| Attribute | In the interface it means |
|---|---|
| **Safe** | Nothing moves unexpectedly. No modals that interrupt. No countdown timers. Prices visible before commitment. Every form says what happens to what you type. |
| **Professional** | High-contrast text, real credentials, semantic tables for rates, consistent spacing. No stock photography of women meditating on cliffs. |
| **Peaceful** | Generous whitespace, a narrow colour range, slow easing, no more than one primary action per screen. |
| **Reliable** | The same components behave the same way everywhere. The phone number is always in the header. The crisis lines are always in the footer. |

### 1.4 The horizon idea

The name gives the brand its one visual idea: **a horizon** — the line between where
you are and where you are going, and the light coming up over it.

This shows up in three deliberate places and nowhere else:

- **The logo**: a rising sun above two horizon rules.
- **Section transitions**: soft horizontal bands of Mist and Soft Blue, layered like
  distance haze, used as section backgrounds rather than decoration.
- **The hero composition**: layered arcs, drawn as inline SVG.

Everything else stays plain. A metaphor used four times is a system; used everywhere,
it's a theme park.

### 1.5 What this brand is not

Say this out loud in reviews. It saves arguments:

- Not a wellness brand. No lotus flowers, no watercolour blobs, no "journey" language.
- Not a startup. No gradient-mesh backgrounds, no oversized rounded-everything, no
  emoji in headings.
- Not clinical-cold. No pure `#FFFFFF`, no grey-on-grey, no dense forms.
- Not a personal blog. Individual clinicians matter, but the practice is the subject.

---

## 2. Voice and tone

### 2.1 The reader

Write for one person: someone at the end of a hard week who has opened this page
for the third time and has not yet clicked anything. They are not looking for
inspiration. They are looking for **a reason to believe this will not be awkward,
expensive, or a waste of time**.

### 2.2 Principles

**Say what actually happens.** "Your therapist will ask what brought you in, some
history, and what you would like to be different" beats "we provide a supportive
environment for exploration."

**Lead with the cost of entry, not the benefit.** The benefit is obvious. The
uncertainty is the barrier. Fifteen minutes. Free. No obligation. That is the message.

**Never promise an outcome.** This is an ethical requirement, not a stylistic
preference. Describe what treatment involves; do not describe how the reader will feel
afterwards.

**Short sentences. Ordinary words.** Reading ability drops under stress. Write for
that reader, not for the one who is fine.

**No exclamation marks.** Not one, anywhere on the site.

### 2.3 Vocabulary

| Prefer | Avoid |
|---|---|
| therapy, sessions, working together | journey, healing journey, path |
| what to expect | what to discover |
| a free 15-minute call | reach out today! |
| we will match you with a therapist | we'll find your perfect match |
| this may help with… | this will fix… |
| tell us what you need | let us empower you |
| clients | patients (unless a medical context requires it) |
| we do not publish client testimonials | ⭐⭐⭐⭐⭐ |

### 2.4 Tone by context

| Context | Tone |
|---|---|
| Hero and marketing copy | Warm, direct, unhurried |
| Service and clinician pages | Informative, concrete, plain |
| Forms and errors | Helpful and specific. Never blame: "Add a phone number so we can reach you that way," not "Invalid input." |
| Crisis messaging | Flat, factual, immediate. No softening, no warmth-as-padding. Numbers first. |
| Legal pages | Plain-English professional. Explain the exception before citing the rule. |
| Confirmations | Say what happens next and when. Give a reference number. |

### 2.5 Microcopy patterns

```
Button:        Book a free consultation
Under-button:  A 15-minute call. No cost, no obligation.
Form intro:    A sentence or two is plenty — just enough for us to point you the right way.
Form caveat:   Please don't include clinical details here. Treat this like ordinary email.
Empty state:   No therapists match those filters. Clear filters to see all six.
Success:       We'll reply within one business day. Your reference is HH-C-9K2XM.
Error:         We couldn't send your message. Please try again, or call us on (555) 014-2200.
```

---

## 3. Colour

### 3.1 The brand palette

Six colours, supplied. Everything else in the system is derived from them.

| Token | Hex | Name | Role |
|---|---|---|---|
| `--teal-800` | `#285C61` | **Deep Teal** | Primary. Buttons, links, footer, headings on tint. |
| `--teal-600` | `#4F8C8D` | **Teal** | Secondary. Borders, icons, accents, large display text. |
| `--teal-200` | `#DCECEF` | **Soft Blue** | Highlight surfaces, badges, inverse-surface body text. |
| `--teal-100` | `#EEF5F4` | **Mist** | Alternating section backgrounds. The workhorse tint. |
| `--white` | `#FCFCFA` | **Warm White** | The page canvas. |
| `--ink-900` | `#273438` | **Charcoal** | Primary text. |

**Why this works.** Blue reads as trustworthy and institutional; teal warms it enough
to feel human. Charcoal at `#273438` carries a green undertone, so black text never
looks pasted onto the teal background — a pure `#000` would. Warm White at `#FCFCFA`
does the same job in the other direction: it stops the page reading as clinical
fluorescent.

### 3.2 The full ramps

Six colours are not enough to build an interface. Hover states, disabled states, borders,
dividers and secondary text all need steps in between. The ramps below extend the brand
colours without introducing a second hue family.

**Teal** — the supplied colours are 800, 600, 200 and 100.

| Token | Hex | Typical use |
|---|---|---|
| `--teal-50` | `#F6FAF9` | Barely-there tint on hover |
| `--teal-100` | `#EEF5F4` | **Mist** — sunken sections, secondary buttons |
| `--teal-200` | `#DCECEF` | **Soft Blue** — accent blocks, badges, focus glow |
| `--teal-300` | `#B4D4D3` | Hover borders, footer headings |
| `--teal-400` | `#8FBCBB` | Decorative strokes |
| `--teal-500` | `#6BA3A3` | Illustration mid-tone |
| `--teal-600` | `#4F8C8D` | **Teal** — icons, rules, large text |
| `--teal-700` | `#35706F` | Input hover border |
| `--teal-800` | `#285C61` | **Deep Teal** — primary actions, links |
| `--teal-900` | `#1E4A4F` | Primary hover, focus ring |
| `--teal-950` | `#16383C` | Primary active |

**Ink** — neutrals, warmed toward the teal so they never drift grey.

| Token | Hex | Typical use |
|---|---|---|
| `--ink-50` | `#F4F7F7` | Disabled surfaces |
| `--ink-100` | `#E9EFF0` | Hairlines, disabled fills |
| `--ink-200` | `#D5DEE0` | Card and section borders |
| `--ink-300` | `#B6C2C5` | Breadcrumb separators |
| `--ink-400` | `#93A2A6` | Placeholder text only |
| `--ink-500` | `#74858A` | Muted text — **large or bold only** |
| `--ink-600` | `#5A6B70` | Secondary body text |
| `--ink-700` | `#445459` | Emphasis on tinted surfaces |
| `--ink-900` | `#273438` | **Charcoal** — primary text |

**Clay** — one supporting accent, and the only colour in the system that is not teal
or neutral. It exists so the palette has somewhere warm to go.

| Token | Hex | Typical use |
|---|---|---|
| `--clay-50` | `#FBF4EF` | Accent badge background |
| `--clay-100` | `#F6E7DD` | Accent badge border |
| `--clay-600` | `#A85B3C` | Accent button fill |
| `--clay-700` | `#8C4A30` | Accent text on white |

> **Clay budget: 5%.** At most one clay element per screen, and never as a large fill.
> Its job is to draw the eye to a single highest-intent action or to warm a photograph.
> The moment clay appears twice in one viewport, the palette stops feeling calm.

**Status** — deliberately desaturated so they sit inside the palette rather than
shouting over it.

| Token | Hex | Contrast on Warm White |
|---|---|---|
| `--success-600` | `#1F6B4F` | 6.24:1 — AA |
| `--warning-600` | `#8A5B12` | 5.70:1 — AA |
| `--danger-600` | `#9B2C2C` | 7.33:1 — AAA |

### 3.3 Measured contrast

Every pairing below was computed against the WCAG 2.x relative-luminance formula.
**These are the rules, not suggestions.**

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| Charcoal `#273438` | Warm White | **12.51:1** | AAA — default body text |
| Charcoal | Mist | **11.63:1** | AAA |
| Charcoal | Soft Blue | **10.58:1** | AAA |
| Deep Teal `#285C61` | Warm White | **7.32:1** | AAA — links, headings |
| Deep Teal | Mist | **6.80:1** | AA |
| Deep Teal | Soft Blue | **6.19:1** | AA |
| Warm White | Deep Teal | **7.32:1** | AAA — inverse sections |
| Soft Blue | Deep Teal | **6.19:1** | AA — inverse body text |
| `--ink-600` `#5A6B70` | Warm White | **5.42:1** | AA — secondary text |
| `--clay-700` `#8C4A30` | Warm White | **6.52:1** | AA — accent text |
| `--border-strong` `#6E8387` | Warm White | **3.89:1** | Passes 1.4.11 — form borders |
| `--text-error-on-inverse` `#FFD5D5` | Deep Teal | **5.63:1** | AA — error text in the footer |
| **Teal `#4F8C8D`** | **Warm White** | **3.74:1** | ⚠️ **Large text and UI only** |
| **Teal `#4F8C8D`** | **Mist** | **3.48:1** | ⚠️ **Large text and UI only** |
| `--ink-500` `#74858A` | Warm White | **3.74:1** | ⚠️ **Large text and UI only** |
| `--ink-400` `#93A2A6` | Warm White | **2.57:1** | ❌ **Placeholder text only** |

### 3.4 The one rule people get wrong

> **Teal `#4F8C8D` is not a body-text colour.**
>
> At 3.74:1 it fails WCAG AA for anything under 18.66px regular or 14px bold. It is a
> beautiful colour for icons, rules, borders, decorative strokes and large display type.
> Use `--teal-800` (Deep Teal, 7.32:1) whenever teal-coloured text needs to be read.

The same applies to `--ink-500`: it is named `--text-muted` for a reason, and that
token is documented as ≥18.66px or bold only.

### 3.5 Semantic tokens

Components never reference a ramp directly. They reference intent, so a palette change
is one edit rather than a hundred.

```css
--surface-page:          var(--white);      /* the canvas                 */
--surface-raised:        #ffffff;           /* cards on the canvas        */
--surface-sunken:        var(--teal-100);   /* Mist — alternating bands   */
--surface-accent:        var(--teal-200);   /* Soft Blue — highlights     */
--surface-inverse:       var(--teal-800);   /* Deep Teal — footer, CTAs   */

--text-primary:          var(--ink-900);    /* 12.51:1                    */
--text-secondary:        var(--ink-600);    /*  5.42:1                    */
--text-muted:            var(--ink-500);    /*  3.74:1 — large/bold only  */
--text-brand:            var(--teal-800);   /*  7.32:1                    */
--text-on-inverse:       var(--white);      /*  7.32:1 on Deep Teal       */
--text-error-on-inverse: #ffd5d5;           /*  5.63:1 on Deep Teal       */

--border-subtle:         var(--ink-100);
--border-default:        var(--ink-200);
--border-strong:         #6e8387;           /* form controls — 3.89:1     */

--action-primary:        var(--teal-800);
--action-primary-hover:  var(--teal-900);
--action-primary-active: var(--teal-950);
--action-accent:         var(--clay-600);
```

**Rule: no hex codes in component CSS.** If a component needs a colour that has no
token, the answer is a new token in `tokens.css`, not a literal.

### 3.6 Distribution

A rough target for any full page. Getting this ratio wrong is the fastest way to make
a calm palette feel busy.

```
Warm White canvas          ████████████████████████████░░░░  ~60%
Mist / Soft Blue tints     ████████░░░░░░░░░░░░░░░░░░░░░░░░  ~22%
Deep Teal (footer, CTAs)   ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ~10%
Charcoal text              ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ~6%
Clay accent                ▌░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ~2%
```

### 3.7 Section rhythm

Backgrounds alternate down the page so long pages have a pulse instead of a scroll.
The pattern for a standard marketing page:

```
Warm White  →  Mist  →  Warm White  →  Soft Blue  →  Warm White  →  Deep Teal (closing CTA)
```

Never place two tinted sections adjacent, and never end a page on anything but the
Deep Teal closing CTA — that band is what makes the footer feel intentional rather
than like the page ran out.

### 3.8 On dark mode

**This system ships light mode only, and that is a decision rather than an omission.**

Reasons: the palette's emotional work — Mist, Soft Blue, Warm White — depends on light
surfaces; the audience overwhelmingly arrives from search on daylight-default browsers;
and a half-finished dark theme on a clinical site reads as neglect.

The architecture is nonetheless ready. Every component consumes semantic tokens, so
adding dark mode is:

1. Add a `[data-theme='dark'] { … }` block to `tokens.css` overriding **only** the
   semantic tokens in section 2 of that file — never the raw ramps.
2. Set `ALLOW_DARK = true` in `src/providers/ThemeProvider.jsx`.

No component changes. That is the whole point of the token layer.

---

## 4. Typography

### 4.1 The pairing

| Role | Family | Weights | Why |
|---|---|---|---|
| **Headings** | **Lora** | 400, 500, 600 | A warm transitional serif. Serifs read as established and considered — the "practice, not app" signal. Lora's brushed curves keep it from feeling institutional. |
| **Body & UI** | **Inter** | 400, 500, 600, 700 | Designed for screens, tall x-height, unambiguous at small sizes, excellent numerals for rates and phone numbers. |
| **Mono** | System stack | 400 | Reference numbers only. |

Both load from Google Fonts with `display=swap` and a full system fallback stack, so
the page is readable before webfonts arrive.

```css
--font-heading: 'Lora', 'Iowan Old Style', Palatino, Georgia, serif;
--font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Headings use weight 500, not 700.** A bold serif at display size shouts. Medium
carries the same authority at half the volume, which is the entire brand in one
setting.

### 4.2 The scale

Fluid, using `clamp()` — the type breathes between mobile and desktop instead of
jumping at breakpoints. Ratio is roughly 1.200 (minor third) at the small end and
1.250 (major third) at the large end.

| Token | Mobile → Desktop | Use |
|---|---|---|
| `--text-xs` | 12px | Legal fine print, captions, counters |
| `--text-sm` | 14px | Labels, badges, meta, hints |
| `--text-base` | 16px | UI text, buttons — **never go below this for body copy** |
| `--text-md` | 17px | Long-form body copy |
| `--text-lg` | 18 → 20px | Lead paragraphs, section intros |
| `--text-xl` | 22 → 26px | Card headings, accordion questions |
| `--text-2xl` | 26 → 34px | Sub-section headings (h3) |
| `--text-3xl` | 32 → 44px | Section headings (h2) |
| `--text-4xl` | 38 → 56px | Page titles (h1) |

### 4.3 Line height and measure

| Token | Value | Applies to |
|---|---|---|
| `--leading-tight` | 1.15 | h1, h2 |
| `--leading-snug` | 1.3 | h3, h4 |
| `--leading-normal` | 1.5 | UI text, labels, buttons |
| `--leading-relaxed` | 1.7 | Body prose |

| Token | Value | Applies to |
|---|---|---|
| `--measure-prose` | 68ch | Article and legal body copy |
| `--measure-narrow` | 46ch | Lead paragraphs, card text, pull quotes |

**1.7 line height on body copy is unusually generous, deliberately.** Anxious readers
skim and lose their place. Extra leading is the cheapest reading-comfort intervention
there is.

### 4.4 Letter spacing

| Token | Value | Applies to |
|---|---|---|
| `--tracking-tight` | −0.02em | h1, h2 — large serif needs tightening |
| `--tracking-snug` | −0.01em | h3, h4, buttons |
| `--tracking-normal` | 0 | Body |
| `--tracking-wide` | +0.06em | Eyebrows and small caps — **required**; uppercase without added tracking is hard to read |

### 4.5 Rules

- **One `<h1>` per page.** Never skip a level.
- **Headings are `text-wrap: balance`**, body is `text-wrap: pretty`. This prevents
  the single-word orphan line that makes a careful layout look careless.
- **Eyebrows are `<p>`, not headings.** An eyebrow is a label, not a level in the
  document outline. Styling it as a heading breaks screen-reader navigation.
- **Never centre more than three lines of text.** Centred paragraphs have a ragged left
  edge, and the left edge is what the eye returns to on every line.
- **Numerals in tables use `font-variant-numeric: tabular-nums`** so columns align.

---

## 5. Space and layout

### 5.1 The 4px grid

Every spacing value is a multiple of 4. There are no arbitrary values.

| Token | px | Common use |
|---|---|---|
| `--space-1` | 4 | Icon-to-text nudge |
| `--space-2` | 8 | Inside badges, tight stacks |
| `--space-3` | 12 | Label to control |
| `--space-4` | 16 | Default gap |
| `--space-5` | 20 | Card internals |
| `--space-6` | 24 | Card padding, grid gap |
| `--space-8` | 32 | Between related blocks |
| `--space-10` | 40 | Heading to content |
| `--space-12` | 48 | Between sub-sections |
| `--space-16` | 64 | Major separation |
| `--space-20` | 80 | — |
| `--space-24` | 96 | — |

### 5.2 Vertical rhythm

```css
--section-y:       clamp(3.5rem, 7vw, 7rem);   /* 56 → 112px */
--section-y-tight: clamp(2.5rem, 4.5vw, 4rem); /* 40 →  64px */
```

Section padding scales with the viewport. A section that is generous on a 27-inch
display is claustrophobic on a phone, and one tuned for a phone looks lost on a desktop.

**The single most important spacing rule on this site: when in doubt, add more.**
White space is how the design says *nothing here is urgent*. It is doing brand work,
not just layout work.

### 5.3 Containers

| Token | Width | Use |
|---|---|---|
| `--container-narrow` | 760px | Legal pages, articles — anything read linearly |
| `--container-max` | 1200px | Default page width |
| `--container-wide` | 1360px | Full-bleed heroes, wide card grids |
| `--gutter` | `clamp(1.25rem, 4vw, 2.5rem)` | Page side padding, all breakpoints |

### 5.4 Breakpoints

Mobile-first, in `rem` so they respond to the user's base font size.

| Width | Name | What changes |
|---|---|---|
| — | base | Single column. Everything stacks. |
| `34rem` (544px) | sm | Two-column option grids, inline phone in header |
| `48rem` (768px) | md | Two-column card grids, side-by-side hero |
| `62rem` (992px) | lg | Page sidebars and sticky in-page navigation appear |
| `76rem` (1216px) | nav | Desktop navigation replaces the drawer — see §9.7 |
| `82rem` (1312px) | xl | Three-column footer; wide grids |

**Why the nav breakpoint is `76rem` and not `62rem`.** Six icon-labelled nav
pills, the wordmark, the phone number and the CTA need about **1109px** of
content box between them. Showing the desktop nav at 992px gave them 912px, and
the thing that gave way was the wordmark — "Healing Horizon" broke onto two
lines. A breakpoint belongs at the width where the layout genuinely fits, not at
a round number inherited from a grid system. The extra `1rem` over the measured
minimum is headroom for a classic scrollbar at the switch-over point.

**There is ~11px of slack, which is to say none.** Adding a seventh nav item or
lengthening a label will break the bar. Re-measure and raise the breakpoint if
you do — or shorten something else, which is why the header CTA reads "Book a
call" while every in-page CTA reads "Book a free consultation".

### 5.5 Grids

Card listings use intrinsic sizing rather than breakpoint-counted columns:

```css
.grid-auto {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}
```

The `min(100%, 280px)` is load-bearing: without it, a 280px minimum overflows a
320px-wide viewport once the gutter is subtracted.

---

## 6. Shape, elevation and texture

### 6.1 Radius

| Token | Value | Applies to |
|---|---|---|
| `--radius-xs` | 4px | Focus-ring rounding |
| `--radius-sm` | 8px | Inputs, small surfaces |
| `--radius-md` | 12px | Option cards, alerts, toasts |
| `--radius-lg` | 16px | Cards, avatars |
| `--radius-xl` | 24px | Large feature panels |
| `--radius-2xl` | 32px | Hero visuals |
| `--radius-pill` | 999px | Buttons, badges, chips |

**Buttons are pills; containers are soft rectangles.** Pills read as friendly and
tappable; rectangles read as structural. Mixing the two arbitrarily is what makes an
interface feel unresolved.

### 6.2 Elevation

Shadows are **teal-tinted**, not grey. On a warm-white canvas a neutral grey shadow
reads as dirt; a shadow that carries a hint of the brand hue reads as depth.

| Token | Use |
|---|---|
| `--shadow-xs` | Barely-there separation |
| `--shadow-sm` | Resting cards, the scrolled header |
| `--shadow-md` | Hovered buttons |
| `--shadow-lg` | Hovered cards, the error panel |
| `--shadow-xl` | Toasts — the only truly floating layer |

```css
--shadow-md: 0 4px 12px rgba(40, 92, 97, 0.08), 0 1px 3px rgba(39, 52, 56, 0.05);
```

Two layers each: a tight contact shadow plus a wider ambient one. A single large blur
looks like a sticker.

### 6.3 Borders

`1px` everywhere. Alerts add a `3px` left border as a colour-independent tone marker —
so an alert's meaning survives greyscale, which is what WCAG 1.4.1 is actually asking for.

### 6.4 Texture

The site uses **no raster textures, no noise overlays, no background images**. Depth
comes from tint layering (Warm White → Mist → Soft Blue → Deep Teal) and from inline
SVG in the hero. That keeps the page fast, keeps it sharp on every display, and keeps
it printable.

---

## 7. Iconography and imagery

### 7.1 Icon style

One set, drawn in-house, shipped as inline SVG in `src/components/ui/Icon.jsx`.

| Property | Value |
|---|---|
| Grid | 24 × 24 |
| Stroke | 1.6px |
| Caps / joins | Round |
| Fill | None (except the logo's sun) |
| Colour | `currentColor` — always inherited |

1.6px is chosen to match Inter's stem weight at body size. A 2px icon next to 17px
Inter looks heavy; a 1.25px icon disappears.

### 7.2 Icon rules

- **Decorative by default** — `aria-hidden="true"`. An icon beside a text label adds
  nothing for a screen reader except noise.
- **Pass `title` only** when the icon is the entire content of a control.
- **Never use an icon as the sole indicator of state.** Pair it with text.
- **Sizes**: 16px inline with small text, 18–20px in buttons and lists, 22–24px as
  section markers. Nothing larger — big line icons look like clip art.

### 7.3 Photography

When real photography is commissioned, it must follow these rules. Until then the site
uses designed monogram avatars, which look deliberate rather than missing.

**Clinician portraits**

- 4:5 portrait crop, subject's eyes on the upper third
- Soft, directional daylight; no harsh key light, no ring-light catchlights
- Backgrounds: warm neutral, Mist, or a real interior from the office
- Natural expression. Not a broad smile, not a clasped-hands stock pose
- Consistent across the whole team — same photographer, same session, same treatment
- Export at 800×1000, WebP with a JPEG fallback, `loading="lazy"`

**Space photography**

- The actual office. Never a stock waiting room
- Daylight, plants, real furniture, no people
- Show the accessible entrance and the lift — it is reassurance, not just decoration

**Never use**

- Silhouettes on clifftops or beaches
- Hands cupping light, single flowers on white, sunrise stock
- Models pretending to be clients
- Anything that could be mistaken for a photograph of a real client

### 7.4 The generated avatar

Missing headshots are the normal state during a build, and a broken image on a
clinician card destroys the credibility of the whole page. The `Avatar` component
falls back to a tinted monogram in one of three brand accents (`teal`, `deep`, `clay`)
with a soft SVG texture. It looks designed. Drop a `src` in and it takes over.

---

## 8. Motion

### 8.1 Principles

Motion on a therapy site has one job: **confirm that something responded.** It is never
entertainment.

- **Short.** 160–240ms for almost everything.
- **Decelerating.** Things arrive and settle; they never bounce, overshoot or spring.
- **Small.** Movement is measured in a few pixels, never across the screen.
- **Interruptible.** No animation blocks input.
- **Optional.** `prefers-reduced-motion` collapses every duration token to 1ms.

### 8.2 Tokens

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 90ms | Colour-only changes |
| `--duration-fast` | 160ms | Hover, focus |
| `--duration-normal` | 240ms | Accordion, drawer, toast |
| `--duration-slow` | 400ms | Section transitions |
| `--duration-deliberate` | 700ms | Scroll reveals |

| Easing | Curve | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.22,.61,.36,1)` | Default — anything entering or responding |
| `--ease-in-out` | `cubic-bezier(.45,.05,.55,.95)` | Looping (the loading pulse) |
| `--ease-entrance` | `cubic-bezier(.16,1,.3,1)` | Toasts, drawers — a longer, softer settle |

### 8.3 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 1ms;
    --duration-normal: 1ms;
    /* …every duration */
  }
}
```

Because durations are tokens, honouring the preference is a single override rather
than an audit of every animation. Scroll reveals additionally reset to their visible
state, so nothing can be left invisible.

**This matters more than usual here.** Vestibular disorders, migraine and anxiety are
all over-represented in this audience, and all three are aggravated by motion.

### 8.4 The loading pulse

Route transitions use a slowly breathing circle rather than a spinner. A spinner
implies *waiting*; a breath implies *steadiness*. It is a two-line CSS animation and
one of the more on-brand details in the system.

---

## 9. Components

The full API reference lives in [`BUILD-SPEC.md`](./BUILD-SPEC.md). This section covers
the design intent — when to use each component and why it looks the way it does.

### 9.1 Button

Seven variants, one per level of intent.

| Variant | Appearance | When |
|---|---|---|
| `primary` | Deep Teal fill, white text | The main next step. **One per view.** |
| `secondary` | Mist fill, teal text | The reasonable alternative |
| `outline` | Border only | Tertiary |
| `ghost` | No chrome until hover | Toolbars, inline |
| `accent` | Clay fill | The single highest-intent CTA. Use rarely. |
| `inverse` | White on Deep Teal surfaces | Closing CTA sections |
| `inverseOutline` | Bordered, on Deep Teal | The secondary action there |

**Rules**

- Minimum height 48px (38px for `sm`), always ≥44px touch target.
- Buttons are pills. Never square a button.
- Renders as `<button>`, `<Link>` or `<a>` depending on props — **a link is never
  faked with a button and vice versa.** This is the single most common accessibility
  failure in marketing sites.
- Labels are verb phrases: "Book a free consultation", not "Booking" or "Click here".
- `loading` swaps in a spinner and sets `aria-busy`.

### 9.2 Card

The grouping primitive. Tones: `raised` (default), `sunken`, `accent`, `outline`,
`inverse`.

Passing `to` makes the whole card a single link — one target, one announcement, no
nested-interactive trap. Hover lifts 3px and deepens the shadow; that lift is disabled
under reduced motion.

### 9.3 Form controls

The form layer carries most of the accessibility weight in the system, so the rules
are built into the components rather than left to the caller.

- Every control has a real `<label>`. **Placeholders are never labels** — they vanish
  the moment someone types, which is exactly when a distracted person needs them.
- Optional fields are marked "optional" in the label; required fields carry an asterisk
  *and* the `required` attribute.
- Hints and errors are wired through `aria-describedby`.
- Errors set `aria-invalid` and announce with `role="alert"`.
- Validation is **on blur, not on keystroke.** Validating as someone types tells them
  their email is invalid three characters in, which is hostile.
- Error text says what to do: "Add a phone number so we can reach you that way."
- Minimum 48px control height; 22px checkboxes.
- `RadioCardGroup` and `CheckboxCardGroup` render as selectable cards over real
  `<input>` elements, so keyboard and screen-reader behaviour is the browser's.
- Spam is handled with a **honeypot**, never a CAPTCHA. Making someone solve a puzzle
  to reach a therapist is not acceptable.

### 9.4 Alert vs. Toast

| | Alert | Toast |
|---|---|---|
| Lifetime | Persistent, in the layout | Transient, floating |
| Use | Standing context — crisis notice, legal caveat, form-level error | Confirmation of an action just taken |
| Announcement | `role="alert"` for warning/danger, `role="note"` otherwise | `role="status"`, or `role="alert"` for errors |

Toasts never carry information the user cannot get elsewhere, because a toast that is
missed is gone.

### 9.5 Accordion

Real buttons with `aria-expanded` / `aria-controls`, not `<details>`, because open
state needs to be controllable for deep-linking. Content stays in the DOM when
collapsed so in-page search still finds it. The chevron rotates 180°; the open panel
tints to `--teal-50`.

### 9.6 Badge

Small status and category markers. **The label text always carries the meaning** —
colour is reinforcement only. `StatusBadge` adds a dot for clinician availability.

### 9.7 Header

Sticky, translucent with a backdrop blur, condensing from 68px to 58px on scroll.
Below `76rem` it collapses to a drawer that closes on Escape, closes on route change,
and locks body scroll while open.

**Nav items are pills, not underlined text.** Each carries an icon, and the state
ladder is a step darker at each level so it survives a squint test:

| State | Background | Text | Contrast |
|---|---|---|---|
| Rest | transparent | Charcoal | 12.51:1 |
| Hover | Mist `--teal-100` | Deep Teal | 6.80:1 — AA |
| Active | Soft Blue `--teal-200` | Deep Teal | 6.19:1 — AA |

The active pill also carries a 5px Deep Teal dot beneath it. Tint plus weight is
not enough on its own — a tint step of one ramp stop is exactly the kind of
difference that disappears on a dim laptop screen, and weight alone fails a
squint test. The dot is the colour-independent half of the indicator, which is
what WCAG 1.4.1 is actually asking for.

**The dot travels between items rather than blinking.** It is a single element
on the `<nav>`, not a `::after` on each link — a per-link pseudo-element can
only pop in and out, because no element exists in both the old position and the
new one, so there is nothing to animate. Its position is measured from the
active pill and applied as a `--indicator-x` custom property; only `transform`
and `opacity` animate, so the travel never triggers layout.

Three details that are easy to get wrong here:

- **No animation on first paint.** The transition is switched on a frame after
  mount, so the dot appears under the current page instead of flying in from
  the left on every page load.
- **Routes outside the nav** (`/`, `/rates`, `/book`, the legal pages) have no
  active pill. The dot fades out and holds its last position rather than
  sliding to zero.
- **Reduced motion needs no special case.** The duration tokens collapse to
  1ms, so the dot moves instantly — which is the correct behaviour, not a
  degraded one.

**The wordmark never wraps.** "Healing Horizon" sits on one line above its
subtext, and `.brand` is `flex-shrink: 0` so it is never the element that gets
squeezed. When the bar runs out of room the *navigation* collapses to the
drawer — that is what the `74rem` breakpoint is for. A logo broken across two
lines reads as a layout failure rather than as a brand, and on a site whose job
is to look like an established practice that is an expensive thing to get wrong.

**The phone number is visible at every breakpoint above 480px.** On a therapy site the
phone is not a secondary action, and burying it in a hamburger menu is a real failure.

### 9.8 News ticker

A thin Deep Teal strip above the header carrying short practice announcements.
It is the **only moving thing on the site**, so it is also the most heavily
constrained component in the system.

- **It has a pause button, and that is not optional.** WCAG 2.2.2 (Level A)
  requires a mechanism to pause, stop or hide anything that moves for more than
  five seconds alongside other content. The button is transparent at rest and
  fades in on hover, on focus, and whenever the ticker is paused — the same
  "invisible until you need it" trick the skip link uses. On touch devices,
  where there is no hover, it is permanently visible.
- **It does not animate under `prefers-reduced-motion`.** It becomes a plain,
  horizontally scrollable row. Not slower — stopped.
- **It pauses on hover** so you can finish reading an item without racing it.
- **It is not a live region.** The copy is static marketing text; announcing it
  over whatever a screen-reader user is doing would be hostile.
- **The duplicate copy that makes the loop seamless is `aria-hidden`**, so the
  announcements are never read out twice.
- **Items are plain text, not links.** A moving click target is a bad one, and
  everything the ticker refers to is reachable from the nav directly beneath it.
- **It scrolls away** with the page — only the header is sticky. Announcements
  are read once; they do not earn permanent vertical space.
- **Speed is 52px/s**, derived from the measured content width so it stays
  constant however many items are configured. Most marquees run at 60–100px/s,
  which reads as urgent.

Content rules live in the header comment of `src/data/announcements.js`. In
short: short, factual, verifiable, time-bound — and **someone has to own the
dates**, because a stale "starts 14 September" in November reads as neglect.

### 9.9 Modal, and the booking dialog

`Modal` is built on the native `<dialog>` element and `showModal()`. That gives
us the focus trap, Escape-to-close, background inerting and focus-restore from
the browser rather than from hand-written code — every one of which custom
modal implementations get subtly wrong. We add only the three things `<dialog>`
does not do: syncing Escape back into React state, locking body scroll, and
closing on backdrop click.

**Modals are for short tasks.** The booking dialog is one screen with six
fields, not the three-step wizard from `/book`. A wizard inside a modal hides
progress, traps people mid-flow, and turns a "quick call" into a commitment.
The dialog and the page share `bookingController`, so validation, payload
shaping and submission are one implementation, not two — and the dialog links
out to the full flow for anyone who wants to specify format, dates and payment.

On phones it becomes a bottom sheet rather than a floating card: a centred card
with margins wastes the little vertical room a form has.

Every booking CTA on the site — header, hero, mobile drawer — calls
`useUI().openBooking()`. There is exactly one dialog in the tree, mounted in
`Layout`, rather than one per trigger.

**One rule this system will not break:** a modal never opens by itself. No
exit-intent, no timed popup, no "wait, before you go". This is a therapy
practice; interrupting someone who is reading about whether to get help is not
a growth tactic we are willing to use.

### 9.10 Footer

Four regions, in this order:

1. **Crisis strip** — Deep Teal 900. 988, Crisis Text Line, 911.
2. **Practice details + sitemap + newsletter**
3. **Legal bar** — copyright, privacy, terms, accessibility
4. **Disclaimer** — no therapist–client relationship; placeholder-data notice

**The crisis strip sits above everything else, and that placement is not negotiable.**
The footer is where people scroll when they are looking for a phone number in a bad
moment. It must not be below four columns of marketing links.

### 9.11 Error boundary

A white screen is bad on any site; on this one it is worse. The fallback keeps the
phone number, the crisis lines and a route home. Design for the worst moment, not the
happy path.

---

## 10. Page patterns

### 10.1 Standard marketing page

```
┌──────────────────────────────────────────┐
│ Header (sticky)                          │
├──────────────────────────────────────────┤
│ Hero          — Warm White / soft tint   │  eyebrow · h1 · lead · 2 CTAs
├──────────────────────────────────────────┤
│ Proof         — Mist                     │  trust signals, credentials
├──────────────────────────────────────────┤
│ Substance     — Warm White               │  services, process, detail
├──────────────────────────────────────────┤
│ Reassurance   — Soft Blue                │  how it works, what it costs
├──────────────────────────────────────────┤
│ Questions     — Warm White               │  FAQ accordion
├──────────────────────────────────────────┤
│ Closing CTA   — Deep Teal (inverse)      │  one action + the phone number
├──────────────────────────────────────────┤
│ Footer                                   │
└──────────────────────────────────────────┘
```

### 10.2 Detail page (service, clinician, article)

Breadcrumbs → split hero (visual left, content right) → body sections → related items
→ closing CTA.

Breadcrumbs appear on **every** detail page. People arrive on these pages from search,
with no idea where they are in the site.

### 10.3 Legal page

`container--narrow` (760px) · sticky table of contents on desktop · `.prose` body ·
"Last updated" date directly under the h1 · a review-required warning at the top ·
contact details at the bottom.

### 10.4 Form page

Crisis alert → intro → form (single column) → aside with alternatives (phone, hours,
what happens next) → relevant FAQs.

**Single column, always.** Multi-column forms increase completion time and error rates,
and every extra second here is a chance to close the tab.

### 10.5 Column first, not grid first

**Default to one column reading top to bottom.** Side-by-side layouts are the
exception and have to earn their place.

The About, FAQ and Contact pages were each built as a two-column grid — prose
with a sticky facts card, questions with a sticky topic rail, form with a sticky
details rail — and each was worse for it:

- A **sticky rail beside prose** pulls the eye out of the sentence every few
  lines. The About page's job is "who runs this place"; that is a piece of
  writing, and it should be read as one.
- A **topic rail** cost 15rem of width to shortcut four topics, while squeezing
  the questions it was meant to help you reach. The topics are now a row of
  chips above them.
- A **form beside a rail** asks someone who is already hesitating to choose
  between two things. The practice details read better underneath, once the
  form has had its turn.

Where a set of facts belongs on the page, make it a **full-width band** under
the content — a rule, then two to four columns of label-and-value — rather than
a card floating to one side. It reads as a summary instead of an interruption.

Reserve real two-column layouts for pages where the second column is genuinely
parallel content, not supporting content.

### 10.6 Every page ends the same way

Deep Teal closing CTA, then footer. Consistency at the bottom of the page is what makes
a site feel like one place.

---

## 11. Accessibility standard

**Target: WCAG 2.2 Level AA.** Several things exceed it, deliberately.

### 11.1 What is guaranteed

| Area | Commitment |
|---|---|
| Contrast | Body text ≥ 4.5:1; large text and UI ≥ 3:1. All pairings measured, §3.3. |
| Keyboard | Every interactive element reachable and operable. Logical tab order. |
| Focus | Visible 3px `--teal-900` ring with 2px offset. **Never removed.** Light ring on inverse surfaces. |
| Skip link | First tab stop on every page, targeting a focusable `#main`. |
| Landmarks | `<header>`, `<nav aria-label>`, `<main>`, `<footer>` on every page. |
| Headings | One `<h1>`; no skipped levels; eyebrows are not headings. |
| Forms | Real labels, `aria-describedby` hints, `aria-invalid` + `role="alert"` errors, blur-time validation. |
| Motion | `prefers-reduced-motion` collapses all durations; reveals reset to visible. |
| Touch | ≥ 44×44px targets. |
| Text size | Body never below 16px. Layout reflows to 320px and survives 200% zoom. |
| Colour independence | No meaning carried by colour alone. |
| Live regions | Filter results, step changes and toasts announced politely. |
| Route changes | `ScrollToTop` restores position; `usePageMeta` updates the document title. |

### 11.2 Beyond AA

- **1.7 line height** on body copy — reading comfort, not compliance.
- **AAA contrast** on primary text (12.51:1) and primary links (7.32:1).
- **No CAPTCHA.** Honeypot instead.
- **No auto-playing anything.**
- **No modal interrupts.** No exit-intent popups, ever.

### 11.3 Testing checklist

Before any release:

- [ ] Tab through every page. Is focus always visible? Is the order sensible?
- [ ] Every page at 320px wide. Any horizontal scroll?
- [ ] Every page at 200% zoom. Anything clipped?
- [ ] Forms with a screen reader. Are labels, hints and errors announced?
- [ ] `prefers-reduced-motion: reduce` enabled. Is anything still moving?
- [ ] Greyscale filter. Is any meaning lost?
- [ ] Automated axe / Lighthouse pass with zero violations.
- [ ] Full keyboard-only run of the booking wizard, start to confirmation.

Automated tools catch roughly a third of real issues. The keyboard run is the one that
matters most.

---

## 12. Content and clinical-ethics rules

These are not style preferences. Breaking them creates regulatory exposure for the
practice.

### 12.1 Testimonials

**Do not publish client testimonials.**

APA Ethics Code 5.05 and most state licensing boards prohibit soliciting testimonials
from current therapy clients or from anyone vulnerable to undue influence. Several
boards discourage them entirely, including from former clients.

The site instead uses:

- **Composite reflections** — written by the practice, explicitly labelled in the UI as
  composites and not client quotes.
- **Verifiable trust signals** — number of licensed clinicians, years in practice,
  response time, free consultation. These build more trust than quotes anyway, because
  they can be checked.

If real quotes are ever added: former clients only, written and revocable consent,
confirm the state board permits it, keep the consent on file.

### 12.2 Claims

- Never promise or imply an outcome.
- Never diagnose, or invite self-diagnosis.
- Never present a statistic without a source.
- Never publish a licence number that is not real and current — this is a regulatory
  problem, not a content one.
- Describe what treatment *involves*; do not describe how the reader will *feel*.

### 12.3 Crisis messaging

Every page carries crisis resources in the footer. The contact and booking forms repeat
them above the fold. The rule: **the practice is not a crisis service and does not
monitor messages after hours, and the site must say so wherever someone might type a
message expecting to be read.**

Crisis copy is flat and factual. Numbers first, warmth second.

### 12.4 Protected health information

The website is **not** a PHI channel. Forms say so explicitly. The contact form asks for
a sentence about what someone is looking for — not history, not diagnoses. The booking
form collects scheduling preferences only.

`storageService` never persists clinical content. Draft recovery is limited to
non-clinical contact fields.

### 12.5 Before launch

Every item below must be resolved. All are marked `PLACEHOLDER` in the source.

- [ ] Replace every value in `src/data/site.js` — the 555 numbers are reserved for fiction
- [ ] Replace `src/data/team.js` entirely; **verify every licence number**
- [ ] Confirm rates in `src/data/insurance.js` with billing
- [ ] Confirm the accepted-plans list against actual contracted panels
- [ ] Have a healthcare attorney review the Privacy Policy and Terms
- [ ] Publish the real Notice of Privacy Practices
- [ ] Clinician review of every article in `src/data/resources.js`
- [ ] Commission real headshots
- [ ] Point `VITE_API_BASE_URL` at a real, HIPAA-appropriate form endpoint
- [ ] Remove the fictional-practice disclaimer from the footer

---

## 13. Applying the system

### 13.1 Adding a page

1. Create `src/pages/FooPage.jsx` + `FooPage.module.css`.
2. Call `usePageMeta({ title, description })` once.
3. Compose from `src/components/ui` — do not write new primitives.
4. Use the global `.container` / `.section` classes for layout.
5. Add the route to `src/routes/AppRoutes.jsx` and the path to `src/routes/paths.js`.
6. Add it to the nav in `src/data/site.js` if it belongs there.

### 13.2 Adding a colour

Don't — until you have confirmed no existing token works. If it is genuinely new:

1. Add it to the correct ramp in `tokens.css` §1.
2. Add a semantic token in §2 describing its *role*.
3. Measure contrast against Warm White, Mist and Deep Teal.
4. Record the ratio in §3.3 of this guide.
5. Reference only the semantic token from components.

### 13.3 Adding a component

1. Check the UI kit first. Most needs are a variant, not a component.
2. `Foo.jsx` + `Foo.module.css` in `src/components/ui/`.
3. Tokens only. No hex codes, no magic numbers.
4. Keyboard operable, labelled, focus-visible.
5. Export it from `src/components/ui/index.js`.
6. Document it in `BUILD-SPEC.md`.

### 13.4 Extending the brand offline

| Asset | Specification |
|---|---|
| Business card | Warm White stock, uncoated. Deep Teal logo. Lora 500 for the name, Inter 400 for details. Generous margins — at least 8mm. |
| Letterhead | Logo top-left at 18mm. Deep Teal 1px rule under the header. Body in Inter 10.5pt / 15pt leading. |
| Email signature | Plain text or minimal HTML. Name in Charcoal, credentials in `--ink-600`, one Deep Teal link. No images, no banner. |
| Intake paperwork | Mist section headers, Charcoal body, 11pt minimum. Large-print version at 16pt available on request. |
| Office signage | Deep Teal on Warm White. Suite number ≥ 60pt. |
| Waiting-room print | Crisis numbers in Charcoal on Mist, 14pt minimum, at eye level. |

---

## 14. Governance

### 14.1 Where the truth lives

| Layer | File | Rule |
|---|---|---|
| Design tokens | `src/styles/tokens.css` | The only place colour, type, space, radius, shadow and duration values exist |
| Layout primitives | `src/styles/global.css` | `.container`, `.section`, `.prose`, `.stack`, `.grid-auto` |
| Components | `src/components/ui/` | Consume tokens only |
| Content | `src/data/` | All editable copy — never inline in a component |
| Business logic | `src/controllers/` | Validation, payload shaping, error mapping. No React. |
| State | `src/providers/` | Context wiring. No business rules. |
| Transport | `src/services/` | The only place that touches the network or storage |

### 14.2 Filters are a design decision, not a data dump

The clinician directory filters by **eight curated areas**, not by the two dozen
`focus` labels the clinicians actually carry on their profiles. Flattening the raw
labels produced 24 near-duplicate chips, and forced a visitor looking for anxiety
help to guess between "Anxiety" and "Anxiety & OCD".

The taxonomy lives in `focusAreas` in `src/data/team.js` and matches on substrings,
so adding a clinician does not mean editing the filter. The same rule applies
anywhere else a filter is built: **curate the options, do not derive them from
whatever strings happen to be in the data.**

### 14.3 Review questions

For any new screen:

1. Does it use a hex code anywhere? → Fix it.
2. Is there more than one primary button in view? → Demote one.
3. Does clay appear more than once? → Remove one.
4. Can you complete it with the keyboard alone?
5. Does it read as a promise about outcomes? → Rewrite it.
6. Is the next step small enough for someone who is ambivalent?
7. Does the page end with the Deep Teal CTA and the phone number?

### 14.4 Changing the system

Token changes affect the whole site by design. Treat them as system changes: propose,
measure contrast, check the pages that use them, then update this guide in the same
change. **A design system whose documentation lags its code stops being a system.**

---

*Healing Horizon is a fictional demonstration practice. All names, licence numbers,
addresses and phone numbers in this project are placeholders. Nothing here is legal,
medical or clinical advice.*
