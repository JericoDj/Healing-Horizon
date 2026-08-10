import {
  Accordion,
  Alert,
  Button,
  Card,
  Icon,
  SectionHeading,
} from '../components/ui';
import { site } from '../data/site';
import {
  acceptedPlans,
  billingPolicies,
  insuranceChecklist,
  paymentMethods,
  rates,
} from '../data/insurance';
import { usePageMeta } from '../hooks/usePageMeta';
import paths from '../routes/paths';
import styles from './RatesPage.module.css';

/**
 * RatesPage — the page most visitors open second.
 *
 * Cost is the single biggest unspoken barrier to starting therapy, and most
 * practice sites hide it behind "contact us for pricing". Leading with a plain
 * table is both kinder and better marketing.
 */
export function RatesPage() {
  usePageMeta({
    title: 'Rates & insurance',
    description:
      'What therapy costs at Healing Horizon, the insurance plans we accept, how out-of-network superbills work, and our sliding-scale slots.',
  });

  const formatPrice = (price) =>
    price === 0 ? 'Free' : `$${price.toLocaleString('en-US')}`;

  return (
    <>
      <section className={`section ${styles.hero}`} aria-labelledby="rates-heading">
        <div className="container">
          <p className="eyebrow">Rates &amp; insurance</p>
          <h1 id="rates-heading" className={styles.title}>
            What therapy costs here, before you commit to anything
          </h1>
          <p className={styles.lede}>
            Every rate we charge is on this page. There is no consultation fee, no assessment
            fee you find out about later, and no charge at all for the first 15-minute call.
            If something here does not work for your situation, tell us — we would rather have
            that conversation than lose you to a number.
          </p>
          <div className={styles.heroActions}>
            <Button to={paths.book} size="lg" iconRight="arrowRight">
              Book a free consultation
            </Button>
            <Button href={site.contact.phoneHref} size="lg" variant="outline" iconLeft="phone">
              {site.contact.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--sunken" aria-labelledby="rates-table-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Session rates"
            title="Our standard rates"
            intro="These are our private-pay rates, before any insurance benefit is applied. If you are using insurance, what you pay depends on your plan — see the section below."
            id="rates-table-heading"
          />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className="visually-hidden">
                Healing Horizon session rates by service, showing duration and price in US
                dollars.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Length</th>
                  <th scope="col" className={styles.numeric}>
                    Rate
                  </th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate) => (
                  <tr key={rate.id}>
                    <th scope="row" className={styles.rowHead}>
                      {rate.service}
                    </th>
                    <td className={styles.duration}>{rate.duration}</td>
                    <td className={`${styles.numeric} ${rate.price === 0 ? styles.free : ''}`}>
                      {formatPrice(rate.price)}
                    </td>
                    <td className={styles.note}>{rate.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableFootnote}>
            Extended trauma sessions beyond 60 minutes are billed pro rata and always agreed with
            you in advance. Rates are reviewed each January; current clients are given at least
            60 days notice of any change.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" aria-labelledby="insurance-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Insurance"
            title="Plans we are in network with"
            intro="Panels vary by clinician — not every therapist here is credentialed with every plan. Our intake coordinator confirms your specific coverage before your first session, not after."
            id="insurance-heading"
          />

          <ul className={styles.planGrid}>
            {acceptedPlans.map((plan) => (
              <li key={plan} className={styles.plan}>
                <Icon name="shieldCheck" size={18} className={styles.planIcon} />
                <span>{plan}</span>
              </li>
            ))}
          </ul>

          <div className={styles.outOfNetwork}>
            <Card tone="accent" padding="lg">
              <h3 className={styles.cardHeading}>If we are out of network with your plan</h3>
              <p className={styles.cardBody}>
                Most of our clients in this position still get a meaningful portion back. We issue
                a monthly <strong>superbill</strong> containing every code your insurer needs —
                diagnosis, CPT codes, dates of service, our NPI and tax ID. You submit it through
                your plan&rsquo;s member portal, usually in a couple of minutes, and reimbursement
                goes directly to you.
              </p>
              <p className={styles.cardBody}>
                How much you get back varies widely. It is worth one phone call to find out before
                you start — the checklist below is what to ask.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--sunken" aria-labelledby="checklist-heading">
        <div className="container">
          <div className={styles.checklistLayout}>
            <div>
              <SectionHeading
                eyebrow="Before you call"
                title="Six questions to ask your insurer"
                intro="Call the member services number on the back of your card and ask these, in this order. Write down the answers and the reference number they give you for the call."
                id="checklist-heading"
              />
            </div>

            <ol className={styles.checklist}>
              {insuranceChecklist.map((question, index) => (
                <li key={question} className={styles.checklistItem}>
                  <span className={styles.checklistNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" aria-labelledby="billing-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Billing"
            title="How payment actually works"
            intro="No surprises is the whole policy. Here is every billing practice we operate, written out."
            id="billing-heading"
          />

          <div className={styles.billingLayout}>
            <Accordion
              items={billingPolicies.map((policy) => ({
                id: policy.id,
                question: policy.title,
                answer: policy.body,
              }))}
              defaultOpenId={billingPolicies[0]?.id}
              allowMultiple
              className={styles.billingAccordion}
            />

            <aside className={styles.paymentAside} aria-labelledby="payment-methods-heading">
              <h3 id="payment-methods-heading" className={styles.asideHeading}>
                Ways to pay
              </h3>
              <ul className={styles.paymentList}>
                {paymentMethods.map((method) => (
                  <li key={method}>
                    <Icon name="check" size={17} className={styles.checkIcon} />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.asideNote}>
                Receipts are emailed the same day as your session. Questions about a charge go to{' '}
                <a href={`mailto:${site.contact.billingEmail}`}>{site.contact.billingEmail}</a> —
                a person reads that inbox.
              </p>
            </aside>
          </div>

          <Alert
            tone="brand"
            title="Your right to a Good Faith Estimate"
            className={styles.gfeAlert}
          >
            <p>
              Under the federal No Surprises Act, if you are uninsured or choose not to use
              insurance, you have the right to a written estimate of what your care will cost
              before it begins. We provide one automatically at intake, and you can ask for an
              updated estimate at any point.
            </p>
            <p>
              If you are billed at least $400 more than your estimate, you can dispute the charge
              — we will tell you how, and we will not treat it as a problem.
            </p>
          </Alert>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--accent" aria-labelledby="sliding-heading">
        <div className="container">
          <div className={styles.slidingLayout}>
            <div className={styles.slidingCopy}>
              <p className="eyebrow">Reduced fees</p>
              <h2 id="sliding-heading" className={styles.slidingHeading}>
                If the standard rate is out of reach
              </h2>
              <p className={styles.slidingBody}>
                We hold a limited number of sliding-scale places, allocated by need rather than by
                who asks first. Ask our intake coordinator. The conversation is confidential, it
                is not means-tested with paperwork, and it has no effect whatsoever on the care
                you are offered or which therapist you see.
              </p>
              <p className={styles.slidingBody}>
                If we have no place open, we will say so directly and refer you to community
                clinics and training programmes in the Portland area that do — rather than leaving
                you to start the search over.
              </p>
              <div className={styles.slidingActions}>
                <Button to={paths.contact} iconRight="arrowRight">
                  Ask about reduced fees
                </Button>
              </div>
            </div>

            <Card tone="raised" padding="lg" className={styles.slidingCard}>
              <h3 className={styles.cardHeading}>Other things that lower the cost</h3>
              <ul className={styles.reduceList}>
                <li>
                  <Icon name="check" size={18} className={styles.checkIcon} />
                  <span>
                    <strong>HSA and FSA funds</strong> cover therapy. Most people with these
                    accounts do not realise it.
                  </span>
                </li>
                <li>
                  <Icon name="check" size={18} className={styles.checkIcon} />
                  <span>
                    <strong>Group programs</strong> run at ${rates.find((r) => r.id === 'group')?.price} per
                    session and are genuinely effective for anxiety skills and grief.
                  </span>
                </li>
                <li>
                  <Icon name="check" size={18} className={styles.checkIcon} />
                  <span>
                    <strong>Biweekly sessions</strong> work well for some presentations once
                    you are established. Your therapist will say if that is realistic for you.
                  </span>
                </li>
                <li>
                  <Icon name="check" size={18} className={styles.checkIcon} />
                  <span>
                    <strong>Employee Assistance Programs</strong> often cover a block of sessions
                    at no cost. Check with your HR team.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--inverse" aria-labelledby="rates-cta-heading">
        <div className="container">
          <div className={styles.cta}>
            <h2 id="rates-cta-heading" className={styles.ctaHeading}>
              Still not sure what this would cost you?
            </h2>
            <p className={styles.ctaBody}>
              That is exactly what the free call is for. Fifteen minutes, no cost, and you will
              come away knowing your likely out-of-pocket cost and who here would be a good fit.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
                Book a free consultation
              </Button>
              <Button
                href={site.contact.phoneHref}
                variant="inverseOutline"
                size="lg"
                iconLeft="phone"
              >
                {site.contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RatesPage;
