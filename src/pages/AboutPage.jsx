import { usePageMeta } from '../hooks/usePageMeta';
import { useUI } from '../context/UIContext';
import { Button, Card, Icon, SectionHeading } from '../components/ui';
import { site } from '../data/site';
import { affiliations } from '../data/testimonials';
import paths from '../routes/paths';
import styles from './AboutPage.module.css';

const PRINCIPLES = [
  {
    id: 'recovery',
    icon: 'sparkle',
    title: 'Recovery is Possible for Every Individual',
    body: 'We operate with the core conviction that meaningful recovery, functional growth, and community independence are attainable for every participant through consistent, structured support.',
  },
  {
    id: 'person-centered',
    icon: 'heartHand',
    title: 'Person-Centered & Strength-Based',
    body: 'Rehabilitation plans are tailored to individual goals and built on personal strengths, resilience, and unique life aspirations rather than deficits.',
  },
  {
    id: 'partnership',
    icon: 'group',
    title: 'Active Partnership in Rehabilitation',
    body: 'Participants are primary decision-makers in their recovery journey, defining their own milestones and directing the pace and focus of their rehabilitation plan.',
  },
  {
    id: 'real-life',
    icon: 'home',
    title: 'Support in Real-Life Environments',
    body: 'Rehabilitation takes place in the home and community settings where daily living skills, grocery shopping, transit, and social routines actually occur.',
  },
  {
    id: 'coordination',
    icon: 'shieldCheck',
    title: 'Integrated Care Coordination',
    body: 'We collaborate closely with outpatient therapists, prescribing psychiatrists, primary care doctors, and family supports to ensure seamless, holistic care.',
  },
  {
    id: 'standards',
    icon: 'leaf',
    title: 'Built to CARF & Maryland BHA Standards',
    body: 'Our program operates strictly under Maryland Behavioral Health Administration (BHA) regulations and CARF-aligned quality and safety standards.',
  },
];

const PRP_PILLARS = [
  'Individualized Rehabilitation Plans (IRP) developed collaboratively with measurable 6-month goals.',
  'One-on-one community-based and in-home skill development sessions across Maryland.',
  'Daily living skill building: meal planning, budgeting, hygiene, home organization, and transit navigation.',
  'Mental health symptom self-management, early warning sign recognition, and crisis safety planning.',
  'Educational, vocational, and volunteer readiness support tailored to personal career aspirations.',
  'Maryland Medicaid-covered services with no out-of-pocket costs for authorized participants.',
];

const WHY_CHOOSE_ITEMS = [
  {
    icon: 'person',
    title: 'Person-Centered Care',
    body: 'Personalized rehabilitation plans built around your strengths, dignity, values, and individualized pace of recovery.',
  },
  {
    icon: 'home',
    title: 'Community-Based Support',
    body: 'Practical skill practice in real-life settings: your home, neighborhood, grocery store, and local transit stations.',
  },
  {
    icon: 'mapPin',
    title: 'Maryland-Focused Services',
    body: 'Seamless Maryland Medicaid billing, alignment with BHA/LBHA regulations, and dedicated local coordination.',
  },
];

export function AboutPage() {
  const { openBooking } = useUI();

  usePageMeta({
    title: 'About Healing Horizons Behavioral Health | Psychiatric Rehabilitation Maryland',
    description:
      'Healing Horizons provides person-centered psychiatric rehabilitation services (PRP) for adults and transitional-age youth across Maryland.',
  });

  return (
    <>
      {/* -------------------------------------------------------- 1. Hero -- */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">ABOUT HEALING HORIZONS</p>
            <h1 id="about-heading">About Healing Horizons Behavioral Health</h1>
            <p className="eyebrow" style={{ color: 'var(--text-brand)', marginTop: 'calc(-1 * var(--space-2))' }}>
              Empowering Independence, Recovery &amp; Community Living
            </p>
            <p className={styles.lead}>
              Healing Horizons provides person-centered psychiatric rehabilitation services for
              adults and transitional-age youth across Maryland.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------- 2. Mission, Vision & Values -- */}
      <section id="mission" className={`section section--sunken ${styles.story}`} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.storyLayout}>
            <div className={styles.storyMain}>
              <SectionHeading
                id="mission-heading"
                eyebrow="Healing Horizons Behavioral Health"
                title="Mission, Vision &amp; Values"
                intro="Healing Horizons Behavioral Health, LLC is committed to providing high-quality, person-centered Psychiatric Rehabilitation Program (PRP) services that empower individuals to achieve stability, independence, and meaningful community integration."
              />

              <div className={styles.missionGrid}>
                <Card tone="raised" padding="lg" className={styles.missionCard}>
                  <div className={styles.missionCardHeader}>
                    <span className={styles.missionIcon} aria-hidden="true">
                      <Icon name="sparkle" size={24} />
                    </span>
                    <h3 className={styles.missionCardTitle}>Mission Statement</h3>
                  </div>
                  <p className={styles.missionCardBody}>
                    To support individuals experiencing mental health challenges through structured rehabilitation, skill-building, and recovery-focused services delivered with dignity, compassion, and clinical excellence.
                  </p>
                </Card>

                <Card tone="raised" padding="lg" className={styles.missionCard}>
                  <div className={styles.missionCardHeader}>
                    <span className={styles.missionIcon} aria-hidden="true">
                      <Icon name="compass" size={24} />
                    </span>
                    <h3 className={styles.missionCardTitle}>Vision Statement</h3>
                  </div>
                  <p className={styles.missionCardBody}>
                    Healing Horizons Behavioral Health envisions a community where every person has access to the support needed to live a fulfilling, independent life.
                  </p>
                </Card>
              </div>

              <div className={styles.storyProse} style={{ marginTop: 'var(--space-8)' }}>
                <p>
                  While clinical psychotherapy and medication management provide vital symptom
                  treatment, individuals facing serious mental health conditions often need
                  hands-on, practical support navigating the realities of daily community life.
                  Healing Horizons was established to bridge that exact gap through structured,
                  person-centered Psychiatric Rehabilitation (PRP).
                </p>
                <p>
                  PRP is recovery-oriented and focused on functional rehabilitation rather than
                  clinical therapy alone. Our rehabilitation specialists work directly with
                  participants in their homes and local Maryland communities to build sustainable
                  habits, manage symptoms, establish daily routines, and foster meaningful
                  social connections.
                </p>
                <p>
                  We serve adults and transitional-age youth (TAY) throughout Maryland, working in
                  close collaboration with outpatient therapists, psychiatrists, CSAs, and
                  hospital discharge planners to ensure care is integrated and continuous.
                </p>
                <p>
                  Every service is individualized: we meet participants where they are, honor
                  their dignity, and empower them to build self-sufficiency on their own terms.
                </p>
              </div>
            </div>

            <aside className={styles.storyAside} aria-label="Program facts">
              <dl className={styles.factList}>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>PROGRAM</dt>
                  <dd className={styles.factValue}>Psychiatric Rehabilitation (PRP)</dd>
                </div>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>COVERAGE</dt>
                  <dd className={styles.factValue}>Maryland Medicaid Authorized</dd>
                </div>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>SERVICE AREA</dt>
                  <dd className={styles.factValue}>Statewide Maryland (Community &amp; In-Home)</dd>
                </div>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>STANDARDS</dt>
                  <dd className={styles.factValue}>CARF Behavioral Health</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- 3. Core Values & Principles -- */}
      <section id="principles" className={`section ${styles.beliefs}`} aria-labelledby="beliefs-heading">
        <div className="container">
          <SectionHeading
            id="beliefs-heading"
            eyebrow="Our Values"
            title="Core Values &amp; Practice Commitments"
            intro="Six foundational commitments that guide every rehabilitation plan, skill-building session, and community interaction."
          />

          <ul className={styles.beliefGrid}>
            {PRINCIPLES.map((principle) => (
              <li key={principle.id} className={styles.beliefItem}>
                <Card className={styles.beliefCard} padding="lg" tone="raised">
                  <span className={styles.beliefIcon} aria-hidden="true">
                    <Icon name={principle.icon} size={22} />
                  </span>
                  <h3 className={styles.beliefTitle}>{principle.title}</h3>
                  <p className={styles.beliefBody}>{principle.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------ 4. Our Approach to Person-Centered Psychiatric Rehabilitation -- */}
      <section
        id="care-model"
        className={`section section--sunken ${styles.practice}`}
        aria-labelledby="practice-heading"
      >
        <div className="container">
          <SectionHeading
            id="practice-heading"
            eyebrow="Care Model"
            title="Our Approach to Person-Centered Psychiatric Rehabilitation"
            intro="Psychiatric rehabilitation requires intentional structure, skilled clinical coordination, and continuous quality oversight."
          />

          <div className={styles.practiceGrid}>
            <article className={styles.practiceBlock}>
              <h3 className={styles.practiceTitle}>Clinical Supervision &amp; Case Reviews</h3>
              <p>
                Our rehabilitation specialists receive structured clinical supervision and
                participate in regular multidisciplinary case reviews. Your progress is supported
                by an experienced team dedicated to keeping your goals on track.
              </p>
            </article>

            <article className={styles.practiceBlock}>
              <h3 className={styles.practiceTitle}>Specialized Psychiatric Rehabilitation Training</h3>
              <p>
                Staff complete comprehensive training in psychiatric rehabilitation competencies,
                motivational interviewing, trauma-informed care, and crisis de-escalation to
                provide safe, compassionate, and effective community support.
              </p>
            </article>

            <article className={styles.practiceBlock}>
              <h3 className={styles.practiceTitle}>Collaborative Care Coordination</h3>
              <p>
                We maintain active communication with outpatient mental health therapists,
                psychiatrists, primary care providers, and case managers to ensure all parts of
                your care work together toward the same goals.
              </p>
            </article>
          </div>

          <div className={styles.traumaBlock}>
            <h3 className={styles.practiceTitle}>Our Rehabilitation Standards</h3>
            <p className={styles.traumaIntro}>
              What you can expect from every rehabilitation service at Healing Horizons:
            </p>
            <ul className={styles.checkList}>
              {PRP_PILLARS.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkMark} aria-hidden="true">
                    <Icon name="check" size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- 5. Community-Based Psychiatric Rehabilitation Across Maryland -- */}
      <section id="service-areas" className={`section ${styles.office}`} aria-labelledby="office-heading">
        <div className="container">
          <SectionHeading
            id="office-heading"
            eyebrow="Where We Serve"
            title="Community-Based Psychiatric Rehabilitation Across Maryland"
            intro="We provide rehabilitation support through in-home and community settings where individuals can build practical skills and work toward greater independence."
          />

          <div className={styles.officeGrid}>
            <Card className={styles.officeCard} padding="lg" tone="sunken">
              <span className={styles.officeIcon} aria-hidden="true">
                <Icon name="mapPin" size={22} />
              </span>
              <h3 className={styles.officeTitle}>Administrative Office</h3>
              <address className={styles.address}>
                <span>{site.address.line1}</span>
                <span>
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                </span>
              </address>
              <Button
                href={site.address.mapUrl}
                variant="outline"
                size="sm"
                iconRight="external"
              >
                Open in maps
              </Button>
            </Card>

            <Card className={styles.officeCard} padding="lg" tone="sunken">
              <span className={styles.officeIcon} aria-hidden="true">
                <Icon name="home" size={22} />
              </span>
              <h3 className={styles.officeTitle}>In-Home &amp; Community Settings</h3>
              <ul className={styles.officeList}>
                <li>One-on-one sessions in your home, neighborhood, or public library.</li>
                <li>Real-world practice: grocery stores, transit stops, and community centers.</li>
                <li>Serving Charles County, Prince George’s, and surrounding Maryland areas.</li>
              </ul>
              <p className={styles.officeNote}>
                Sessions are scheduled flexibly to fit participant routines and work commitments.
              </p>
            </Card>

            <Card className={styles.officeCard} padding="lg" tone="sunken">
              <span className={styles.officeIcon} aria-hidden="true">
                <Icon name="shieldCheck" size={22} />
              </span>
              <h3 className={styles.officeTitle}>Maryland Medicaid Coverage</h3>
              <p className={styles.officeBody}>
                PRP services are 100% covered by Maryland Medicaid for eligible participants with an
                active mental health diagnosis and referral from a licensed clinician.
              </p>
              <Button to={paths.contact} variant="ghost" size="sm" iconRight="arrowRight">
                Ask about eligibility
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* -------------------------- 6. Our Mental Health Professionals -- */}
      <section className={`section section--sunken ${styles.team}`} aria-labelledby="team-heading">
        <div className="container">
          <SectionHeading
            id="team-heading"
            eyebrow="Our Professionals"
            title="Our Mental Health Professionals"
            intro="Our team brings experience in psychiatric rehabilitation, mental health support, care coordination, and community-based services. We work collaboratively with each participant, their support system, and appropriate healthcare providers."
          />

          <div className={styles.teamAction} style={{ marginTop: 'var(--space-6)' }}>
            <Button to={paths.therapists} size="lg" iconRight="arrowRight">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* --------------------------------- 7. Why Choose Healing Horizons? -- */}
      <section id="why-choose" className={`section ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <SectionHeading
            id="why-heading"
            eyebrow="Why Healing Horizons"
            title="Why Choose Healing Horizons?"
            intro="We combine person-centered psychiatric rehabilitation, community-based support, and coordinated care to help participants work toward meaningful and practical goals."
          />

          <ul className={styles.whyGrid}>
            {WHY_CHOOSE_ITEMS.map((item) => (
              <li key={item.title}>
                <div className={styles.whyCard}>
                  <span className={styles.whyIcon} aria-hidden="true">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------- Affiliations Bar -- */}
      <section
        className={`section section--tight section--accent ${styles.affiliations}`}
        aria-labelledby="affiliations-heading"
      >
        <div className="container">
          <h2 id="affiliations-heading" className={styles.affiliationsHeading}>
            Accreditations, Authorizations &amp; Compliance Standards
          </h2>
          <ul className={styles.affiliationList}>
            {affiliations.map((affiliation) => (
              <li key={affiliation} className={styles.affiliationItem}>
                <Icon name="shieldCheck" size={18} />
                <span>{affiliation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ 8. Closing CTA -- */}
      <section id="get-started" className={`section section--inverse ${styles.cta}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <p className="eyebrow">Get Started</p>
            <h2 id="cta-heading">Ready to Start Psychiatric Rehabilitation Services?</h2>
            <p className={styles.ctaCopy}>
              Whether you're seeking support for yourself, a family member, or someone you care for,
              our intake team can help you understand the next steps.
            </p>
            <div className={styles.ctaActions}>
              <Button type="button" variant="inverse" size="lg" iconRight="arrowRight" className={styles.bookCta} onClick={openBooking}>
                Get Started / Make a Referral
              </Button>
              <Button to={paths.contact} variant="inverseOutline" size="lg">
                Contact Our Intake Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
