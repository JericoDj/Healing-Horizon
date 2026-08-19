# Content Map — PRP Licensure Packet → Website

Maps the Healing Horizons Behavioral Health, LLC policy manual onto the live site.

**Read §1 first.** Four things in the source packet need correcting before it goes
to the Office of Health Care Quality, and one of them will be noticed immediately.

---

## 1. Errors in the source packet

### 1.1 The cover letter is addressed to the wrong licensure program

> `Attn: Adult Medical Day Care Licensure`

The subject line directly beneath it reads *"Letter of Interest for Psychiatric
Rehabilitation Program (PRP) License."* Adult Medical Day Care is a different
OHCQ program with different regulations. This reads as a template reused from
another application, and the reviewer receiving it is the first person who will
notice. **Change to the PRP / Behavioral Health Administration licensure unit.**

### 1.2 The service area contradicts itself

| Where | Says |
|---|---|
| Every policy header | Waldorf, Maryland |
| Cover letter | "serve individuals in **Baltimore City and Baltimore County**" |
| §4 Referrals | "**Charles County** Core Service Agency (CSA) / LBHA" |
| §7 Grievance | "**Charles County** Core Service Agency (CSA) / LBHA" |
| §10 Crisis | "**Charles County** Mobile Crisis Team" |
| §11 Reporting | "**Charles County** CSA/LBHA when applicable" |

Waldorf is in Charles County. Four policy sections and the business location all
point to Charles County; only the cover letter says Baltimore. Baltimore City and
Baltimore County are ~60 miles away and fall under different CSAs entirely — which
matters, because a community-based program is judged on whether it can actually
reach its catchment.

**The site now uses Charles County / Southern Maryland.** If Baltimore is genuinely
intended, the CSA and mobile-crisis references in §§4, 7, 10, 11 all need changing
to match, not just the cover letter.

### 1.3 Placeholder left in the cover letter

> "Please feel free to contact us at **[phone/email]** if additional information
> is needed."

The letterhead gives 443-413-9692; the body still has the bracket.

### 1.4 Section 2 numbering is broken

Roman numerals run **I, II, III, IV, VI (Service Frequency), V (Documentation),
VI (Expected Outcomes), VII**. There are two section VIs, and V appears after VI.
The standalone "2.x" version of the same content is numbered correctly — the two
copies have diverged.

### 1.5 Minor

- §5.A: *"provides services without discrimination and **in according to** all
  applicable civil rights laws"* — should be "in accordance with".
- The document titled "Mission, Vision & Values" contains a mission and a vision
  but never lists values. §2.2 Program Philosophy is doing that job; consider
  promoting those six beliefs to be the stated values.

---

## 2. The single biggest content problem

**The website currently sells therapy. The packet describes rehabilitation, and
insists they are different.**

The packet says, repeatedly:

> "PRP services are recovery-oriented, person-centered, and focused on
> rehabilitation **rather than clinical therapy alone**."
> "Healing Horizons **does not prescribe medications**."

But the live site has:

| Live now | Packet says |
|---|---|
| 7 therapy services (individual, couples, teen, family, trauma/EMDR, group, telehealth) | 8 PRP rehabilitation components |
| 6 named therapists with photos, licences, modalities (EMDR, Gottman, IFS) | Four staff **roles**; one named person (Brittinni Stroud) |
| "$175 per session" private-pay rates | Medicaid / BHA authorization |
| "Book a free 15-minute consultation" | Referral + intake + authorization |
| Portland/Oregon leftovers in places | Waldorf, Maryland |

Everything in §3–§7 below assumes those are being replaced.

**Status:** `src/data/site.js` is done (facts, contact, service area, credentials).
`services.js`, `team.js` and `faqs.js` are specified below but not yet written —
they need the consuming pages changed at the same time (see §8).

---

## 3. Home

| Section | Source | Notes |
|---|---|---|
| Hero heading | Mission statement | "Support to build stability, independence, and a life in your community" |
| Hero body | §2.1 Purpose | Lead with what PRP *is*, since most visitors won't know |
| Pillar row | §2.2 Program Philosophy | The six beliefs, as the four HEAL/EMPOWER/SUPPORT/THRIVE pillars |
| Services preview | §2.5 A–H | Four featured of the eight components |
| "How it works" | §4 Intake, Steps 1–5 | Referral → documents → assessment → orientation → enrollment |
| Trust strip | §2.9 Expected Outcomes | ⚠️ These are *aims*, not results — see §9 |
| Who we serve | §2.3 Target Population | Adults and transitional-age youth |
| Closing CTA | §4.A Referral Sources | "Make a referral" and "Ask about eligibility" |

**Hero copy, ready to use:**

> Psychiatric rehabilitation in Waldorf, Maryland. We work alongside adults and
> young people living with serious mental illness — in their homes, workplaces
> and neighbourhoods — building the practical skills that make independent living
> possible. Not therapy: rehabilitation, in the places where the skills are used.

---

## 4. Therapists → **rename to "Our Team"**

The packet names one person and otherwise defines roles. Publishing six invented
therapists alongside a licensure application is a real risk.

Replace the therapist directory with the four roles from §3.1:

| Role | Source | Responsibilities |
|---|---|---|
| **Program Director** | §3.1.A | Operations, compliance, staffing, referral relationships. Full authority over program operations. |
| **Clinical Director** | §3.1.B | Clinical supervision, IRP review, documentation compliance, crisis/risk, staff competency |
| **Rehabilitation Specialists / PRP Counselors** | §3.1.C | Direct services: skills teaching, symptom self-management, community integration, documentation |
| **Administrative Support** | §3.1.D | Records, scheduling, billing and authorization tracking |

**Named:** Brittinni Stroud — Owner / Program Director (cover letter).

Add from §3.2 and §15, which is what referrers actually want to see:
- Credential verification, licence validation, reference checks
- Criminal background checks; FBI fingerprint where applicable
- Child and Adult Protective Services registry screening
- Disqualifying-offence review, with ongoing re-verification
- Weekly or biweekly supervision (§3.3.2)

⚠️ **Do not publish licence numbers or credentials you cannot evidence.**

---

## 5. About

| Section | Source |
|---|---|
| Mission | Mission statement (verbatim) |
| Vision | Vision statement (verbatim) |
| Values | §2.2 Program Philosophy — the six beliefs |
| Who we serve | §2.3 Target Population |
| How we work | §2.6 Service Delivery Model — community-based |
| Our standards | §3 governance; CARF, BHA, Medicaid alignment |
| Quality | §12 QAPI — the 5-step improvement cycle |
| Safeguarding | §11 zero-tolerance; §15 screening |

**Values, lifted from §2.2:**

1. Recovery is possible for every individual
2. Services must be individualized and strength-based
3. Participants are active partners in their own rehabilitation
4. Support belongs in real-life environments, where the skills are needed
5. Family and natural supports are included when appropriate
6. Cultural humility and dignity are essential to effective care

**On the service model** (§2.6) — this is the most distinctive thing about the
programme and deserves prominence: services are delivered in participants'
residences, community centres, libraries, workplaces and schools, not only in an
office.

---

## 6. Resources

Currently six invented therapy articles. Replace with participant-facing guides
drawn straight from the policies — more useful, and already written:

| Guide | Source |
|---|---|
| What is a PRP, and is it right for me? | §2.1, §2.3, §2.4 |
| How referrals work, and who can refer | §4.A |
| What happens at intake — the five steps | §4.D |
| Your rights as a participant | §5.II A–H |
| Your Individual Rehabilitation Plan explained | §8.I–IV |
| Making a complaint, and what happens next | §7.III–V |
| Building a crisis prevention plan | §10.II, §10.IV |
| How we protect your information | §6.II–VII |

**Keep the existing "general information, not clinical advice" notice**, and keep
988 / 741741 / 911 on every article.

---

## 7. FAQ

Ready-made from the policies. Suggested groups:

**Getting started**
- Who is eligible? (§2.4 — five criteria)
- Who can refer me? (§4.A — hospitals, CSA/LBHA, outpatient providers, mobile
  crisis, community agencies, self-referral, family with consent)
- Who is *not* eligible? (§4.C — acute crisis needing inpatient, unmanageable
  safety risk, primary need is detox, no functional impairment. **State that
  alternative referrals are offered** — the packet commits to this.)
- What happens at intake? (§4.D)
- How soon do services start? (§4.D Step 5 — after enrollment and authorization)

**Services**
- What does a PRP actually do? (§2.5 A–H)
- Where do sessions happen? (§2.6)
- How often? (§2.7 — set by need, impairment, authorization and the IRP)
- Do you prescribe or manage medication? (§2.5.C — **no**; education and
  coordination only)
- Do you provide therapy? (§2.1 — PRP is rehabilitation; coordinated with, not a
  replacement for, clinical treatment)

**Cost**
- What does it cost? (§2.4.5 — Medicaid / BHA authorization) ⚠️ see §8
- Do I need a diagnosis? (§2.4.1 — yes, documented)

**Rights and privacy**
- What are my rights? (§5.II)
- Who sees my information? (§6.III–V)
- Can I refuse a service? (§5.II.C — yes, without retaliation)
- How do I complain? (§7 — verbal or written; acknowledged in 3 business days;
  written response in 10–14; appeal within 10)
- Can I go outside the agency? (§7.VI — BHA, CSA/LBHA, MCO, CARF)

**Family**
- Can family be involved? (§2.5.H — with consent)
- What if the participant is a minor? (§5.III — guardian consent, assent
  encouraged)

---

## 8. Rates page — needs a decision

The Rates page is built for private-pay therapy: a dollar table, "in-network
plans", superbills, sliding scale, No Surprises Act. **None of that is in the
packet.** PRP is authorized through Maryland Medicaid and the BHA (§2.4.5).

Options:
1. **Repurpose as "Cost & Authorization"** — how Medicaid authorization works,
   what a referral needs, what participants pay. *Recommended.*
2. Remove it and fold cost into the FAQ.
3. Keep it only if the programme really will bill privately — the packet gives no
   basis for the current figures.

`service.rate` is currently rendered as `${service.rate}` in three places
(`ServicesPage.jsx:136`, `ServiceDetailPage.jsx:134` and `:291`), so this needs a
code change alongside the data, not a data change alone.

---

## 9. Claims to hold back

| Claim | Why |
|---|---|
| §2.9 outcomes as *achieved* results | They are stated aims for a programme that has not opened. Frame as "what we work toward". |
| "CARF accredited" | The packet says *aligned with* CARF standards. Accreditation is a survey you pass — do not imply it. |
| "Licensed" | Licensure is what this packet is applying for. Say "licensure in progress". |
| Named clinicians / licence numbers | Publish only real, current, verifiable ones. |
| Participant testimonials | This population is by definition vulnerable to undue influence, and a testimonial discloses that its author received services. Use referrer statements and verifiable facts instead. |

---

## 10. Legal pages

### Privacy Policy — §6 maps almost section for section
- PHI definition → §6.I
- Confidentiality standards → §6.II
- Role-based access → §6.III
- Release of Information, including the six required elements → §6.IV
- Disclosure without consent: emergencies, mandated reporting, court orders,
  imminent threat, oversight agencies → §6.V
- **Community-based confidentiality** → §6.VI — genuinely distinctive and worth
  its own section: no PHI in public spaces, discretion on home visits, notes not
  left visible
- Participant record rights → §6.VII
- Storage and security, physical and electronic → §6.VIII
- Breach response, the six steps → §6.X

### Terms of Service — §§4, 5, 7, 8, 10
- Eligibility and exclusions → §4.B, §4.C
- No service relationship until enrollment → §4.D Step 5
- Not an emergency service → §10
- Participant responsibilities → §5.IV
- Grievance and appeals → §7
- Authorization and medical necessity → §8.V

### Accessibility
The packet has **no digital accessibility statement** — keep the existing one. It
does supply real substance to add:
- Assistance filing a grievance for literacy, cognitive or language needs (§7.III.3)
- Interpretation and advocacy support (§7.III.3)
- Materials explained in understandable language (§8.VI)
- Cultural humility and responsiveness (§2.2, §3.3.5)

⚠️ The physical-access claims currently on that page (step-free entry, lift,
accessible restroom) describe the old Portland office. **Delete or re-verify
against the Waldorf site.**

---

## 11. Footer

| Column | Now | Should be |
|---|---|---|
| Care | 5 therapy service links | PRP components: daily living skills, symptom self-management, community integration, employment & education |
| Practice | About, Therapists, Rates, Resources, FAQ | About, Our Team, Cost & Authorization, Resources, FAQ |
| Get started | Book a consultation, Contact, Paperwork | **Make a referral**, Contact us, Eligibility, Referral form |
| Legal | Privacy, Terms, Accessibility, NPP | Unchanged — plus Participant Rights (§5) and Grievance Process (§7) |

Add to the crisis strip: **Charles County Mobile Crisis Team** (§10.V) alongside
988 / 741741 / 911. It is named in the packet as a coordination partner and is
the locally relevant number.

---

## 12. Suggested order of work

1. ✅ `site.js` — facts, contact, service area, credentials *(done)*
2. `services.js` — the 8 PRP components; drop `rate`, update the 3 pages that print `$`
3. `footerNav` + `primaryNav` — Services → Our Team, Book → Make a referral
4. `team.js` → roles, not people; rename the route to `/team`
5. `faqs.js` — §7 above
6. Rates page decision — §8 above
7. Privacy + Terms rewrite from §6/§4/§5/§7/§10
8. Accessibility — strip the Portland physical claims
9. `resources.js` — replace the invented articles

Items 2–4 change the site's meaning most and should go together.

---

*Source: Healing Horizons Behavioral Health, LLC — PRP Letter of Intent Submission
Packet, Sections 1–16, plus the standalone Program Description and Mission/Vision
documents. Nothing here is legal advice; have Maryland licensure and HIPAA
requirements confirmed by qualified counsel.*
