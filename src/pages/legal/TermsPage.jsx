import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { usePageMeta } from '../../hooks/usePageMeta';
import paths from '../../routes/paths';
import LegalLayout from './LegalLayout';

const LAST_UPDATED = '1 August 2026';
const EFFECTIVE_DATE = '2026-08-01';

/**
 * TermsPage
 *
 * Two clauses here do real work and must never be softened for tone: no
 * therapist–client relationship is created by using this site, and this site
 * is not an emergency service. Everything else is standard, but those two are
 * why the page exists.
 *
 * Numbers (the 24-hour cancellation window, the rates) are stated to match
 * src/data/insurance.js and src/data/faqs.js. If you change them there, change
 * them here.
 */
export function TermsPage() {
  usePageMeta({
    title: 'Terms of Service',
    description: `The terms that apply to using the ${site.name} website, requesting an appointment, fees and billing, telehealth, and dispute resolution.`,
  });

  const sections = [
    {
      id: 'acceptance',
      heading: 'Acceptance of these terms',
      body: (
        <>
          <p>
            These terms are an agreement between you and {site.legalName}
            {' '}(&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) covering your use
            of this website at {site.url}. By using the site you accept them. If you do not accept
            them, please do not use the site — you can still reach us on{' '}
            <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
          </p>
          <p>
            The site is intended for people aged 18 and over. If you are looking for care for
            someone under 18, a parent or legal guardian should make the initial contact.
          </p>
          <p>
            Separate agreements govern actual treatment: an informed consent to treatment, a
            financial agreement, and — where relevant — a telehealth consent. You receive and sign
            those at intake. Where they conflict with these terms, those agreements govern the
            treatment relationship.
          </p>
        </>
      ),
    },
    {
      id: 'no-relationship',
      heading: 'Using this site does not make you a client',
      body: (
        <>
          <p>
            <strong>
              No therapist–client relationship is created by visiting this website, submitting a
              form, requesting a consultation, or exchanging emails with us.
            </strong>
          </p>
          <p>
            A treatment relationship begins only when you and a clinician at this practice have
            completed an intake, you have signed an informed consent to treatment, and the
            clinician has agreed to take you on. Until all three of those have happened, nothing
            said on this site or in correspondence is clinical advice about your situation, and no
            clinician here has assumed a duty of care to you.
          </p>
          <p>
            This is not a technicality about liability. It is about what you can safely rely on:
            we cannot give you clinical guidance about your circumstances before someone here has
            properly assessed them, and it would be irresponsible to imply otherwise.
          </p>
        </>
      ),
    },
    {
      id: 'not-emergency',
      heading: 'This is not an emergency service',
      body: (
        <>
          <p>
            <strong>
              We do not monitor this website, our email or our voicemail outside business hours,
              and messages sent through this site are not read in real time.
            </strong>{' '}
            Do not use any channel on this site to report an emergency.
          </p>
          <p>If you or someone else is at risk right now:</p>
          <ul>
            <li>
              <strong>Call 911</strong> if there is immediate danger.
            </li>
            <li>
              <strong>Call or text 988</strong> — the Suicide &amp; Crisis Lifeline. Free,
              confidential and answered 24 hours a day.
            </li>
            <li>
              <strong>Text HOME to 741741</strong> — the Crisis Text Line.
            </li>
            <li>Go to your nearest emergency department.</li>
          </ul>
          <p>
            Every client at this practice also builds a personal safety plan with their therapist
            early in treatment, which sets out what to do and whom to contact between sessions.
          </p>
        </>
      ),
    },
    {
      id: 'not-advice',
      heading: 'The content here is general information',
      body: (
        <>
          <p>
            Articles, service descriptions and answers to common questions on this site are general
            information. They are not a diagnosis, not a treatment recommendation, and not a
            substitute for care from a clinician who knows your history.
          </p>
          <p>
            Reading something here that sounds like your experience is a reason to talk to someone,
            not a reason to conclude anything about yourself. Never delay seeking care, or
            disregard advice you have already been given, because of something you read on this
            site.
          </p>
          <p>
            We aim to keep content accurate and clinician-reviewed, but we do not warrant that
            everything is current or complete at every moment.
          </p>
        </>
      ),
    },
    {
      id: 'appointments',
      heading: 'Appointment and consultation requests',
      body: (
        <>
          <p>
            <strong>
              Submitting a request through this site does not book an appointment.
            </strong>{' '}
            It tells us you would like one. Nothing is scheduled until a member of our team has
            contacted you, confirmed a clinician and a time, and you have agreed to it.
          </p>
          <p>
            The 15-minute consultation is free, carries no obligation, and is not a therapy
            session. It exists so you can ask questions and so we can judge whether this practice
            and this clinician are the right fit. If we are not, we will say so and try to point
            you somewhere better.
          </p>
          <p>
            We may be unable to accept a request — because no clinician has capacity, because you
            are outside the states where we are licensed, or because your needs would be better met
            by a different level of care. In that case we will tell you promptly and, where we can,
            suggest alternatives.
          </p>
        </>
      ),
    },
    {
      id: 'cancellation',
      heading: 'Cancellations and missed appointments',
      body: (
        <>
          <p>
            <strong>We ask for 24 hours notice</strong> to cancel or reschedule a session. Your
            appointment time is reserved for you and cannot usually be filled at short notice.
          </p>
          <p>
            Sessions cancelled with less than 24 hours notice, and sessions you do not attend, are
            charged at the full rate. <strong>Insurance does not cover late cancellations</strong>,
            so the charge falls to you directly.
          </p>
          <p>
            We waive this fee for genuine emergencies and for illness. Tell us what happened — we
            are not looking for a reason to charge you. Repeated late cancellation may lead us to
            discuss whether the scheduled time is workable, or whether treatment should pause.
          </p>
          <p>
            If your clinician needs to cancel, we will give you as much notice as we can and offer
            an alternative time. You are never charged for a session we cancel.
          </p>
        </>
      ),
    },
    {
      id: 'fees',
      heading: 'Fees, billing and insurance',
      body: (
        <>
          <p>
            Current rates are published on our <Link to={paths.rates}>Rates &amp; insurance</Link>{' '}
            page. We publish them because you should not have to ask what something costs.
          </p>
          <p>
            <strong>Card on file.</strong> We keep a payment method on file and charge it after
            each session, then email you an itemised receipt the same day.
          </p>
          <p>
            <strong>Insurance.</strong> Where we are in network with your plan, we bill your
            insurer directly and you pay your copay or coinsurance. Being in network does not
            guarantee coverage of a particular service — your plan&rsquo;s terms govern that, and
            you remain responsible for amounts your plan does not cover, including any deductible.
          </p>
          <p>
            <strong>Out of network.</strong> Where we are not in network, we issue a monthly
            superbill for you to submit for reimbursement. We cannot guarantee that your insurer
            will reimburse you, or how much.
          </p>
          <p>
            <strong>Good Faith Estimate.</strong> Under the federal No Surprises Act, if you are
            uninsured or choose not to use insurance, you have the right to a written estimate of
            expected costs before care begins. We provide one automatically at intake and on
            request. If you are billed at least $400 more than your estimate, you may be able to
            dispute the charge, and we will tell you how.
          </p>
          <p>
            <strong>Unpaid balances.</strong> If a balance goes unpaid we will contact you to
            arrange a plan. We would rather work something out than send an account to collections,
            and we will always talk to you first.
          </p>
          <p>
            Rates are reviewed annually. Current clients receive at least 60 days notice of any
            change.
          </p>
        </>
      ),
    },
    {
      id: 'telehealth',
      heading: 'Telehealth',
      body: (
        <>
          <p>
            <strong>Licensure limits.</strong> Our clinicians are licensed in Oregon and
            Washington, and we can only provide care to clients who are physically located in a
            state where the treating clinician holds a licence at the time of the session. This is
            a legal requirement, not a preference. Tell us before travelling out of state — a
            session may need to be rescheduled.
          </p>
          <p>
            <strong>What you need.</strong> A device with a camera and microphone, a reliable
            internet connection, and a private space where you will not be overheard. Sessions run
            on a HIPAA-compliant platform in your browser; no account or download is required.
          </p>
          <p>
            <strong>Location and safety.</strong> At the start of each telehealth session your
            clinician confirms where you are and the emergency contact on file. This is standard
            practice and it matters: if there is a crisis, we need to be able to direct help to the
            right place.
          </p>
          <p>
            <strong>If the connection fails.</strong> Your clinician will call the phone number on
            file. Agree a backup plan at your first telehealth session. Time lost to technical
            problems is not charged to you.
          </p>
          <p>
            <strong>Suitability.</strong> Telehealth is effective for most presentations, but not
            all. Some trauma processing, some family work, and any situation where you do not have
            a private or safe space are better in the room. Your clinician will tell you honestly
            if that applies, and recording sessions is not permitted by either party without
            explicit written agreement.
          </p>
        </>
      ),
    },
    {
      id: 'acceptable-use',
      heading: 'Acceptable use of this website',
      body: (
        <>
          <p>You agree not to:</p>
          <ul>
            <li>use the site for any unlawful purpose, or to harass or impersonate anyone;</li>
            <li>
              submit false information, or another person&rsquo;s personal information without
              their permission;
            </li>
            <li>
              attempt to gain unauthorised access to the site, its servers, or any connected
              system;
            </li>
            <li>
              scrape, harvest or automatically extract content or contact details from the site;
            </li>
            <li>
              introduce malicious code, or take any action that places an unreasonable load on our
              infrastructure;
            </li>
            <li>
              reproduce, republish or resell content from the site other than as permitted below.
            </li>
          </ul>
          <p>
            We may restrict or block access where we reasonably believe these terms are being
            breached.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      body: (
        <>
          <p>
            The content of this site — text, articles, design, graphics, logo and code — belongs to{' '}
            {site.legalName} or is used with permission, and is protected by copyright and
            trademark law.
          </p>
          <p>
            You may read it, print it, and share links to it. You may quote short passages with
            attribution and a link. You may not republish substantial portions, use our content to
            train a commercial model, or use our name or logo in a way that suggests we endorse
            you, without our written permission.
          </p>
          <p>
            If you send us feedback or a suggestion, you agree we may use it without obligation to
            you. This does not apply to anything you tell us in a clinical context, which is
            governed by our <Link to={paths.privacy}>Privacy Policy</Link> and by HIPAA.
          </p>
        </>
      ),
    },
    {
      id: 'third-party',
      heading: 'Third-party links and services',
      body: (
        <>
          <p>
            This site links to external resources including crisis services, professional bodies
            and insurers. We do not control those sites and are not responsible for their content,
            their availability or their privacy practices.
          </p>
          <p>
            We also rely on third-party providers to operate — our website host, scheduling and
            records system, payment processor and email provider. We choose them carefully and,
            where they handle protected health information, we hold Business Associate Agreements
            with them. We are not liable for an interruption or failure originating with a provider
            outside our control.
          </p>
        </>
      ),
    },
    {
      id: 'disclaimers',
      heading: 'Disclaimers',
      body: (
        <>
          <p>
            <strong>
              This website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
              warranties of any kind, whether express or implied.
            </strong>{' '}
            To the fullest extent permitted by law, we disclaim the implied warranties of
            merchantability, fitness for a particular purpose and non-infringement.
          </p>
          <p>
            We do not warrant that the site will be uninterrupted, timely, secure or error-free,
            that defects will be corrected, or that the site is free of harmful components.
          </p>
          <p>
            Nothing in this section limits our professional obligations to clients under our
            treatment agreements, our licences, or applicable healthcare law — and nothing here
            attempts to disclaim liability for professional negligence, which we could not do and
            would not want to.
          </p>
        </>
      ),
    },
    {
      id: 'liability',
      heading: 'Limitation of liability',
      body: (
        <>
          <p>
            To the fullest extent permitted by law, {site.legalName} and its clinicians, employees
            and contractors will not be liable for any indirect, incidental, special, consequential
            or punitive damages, or any loss of data, arising out of your use of, or inability to
            use, <strong>this website</strong> — including anything arising from content on the
            site or from a delayed or undelivered form submission.
          </p>
          <p>
            Where liability cannot be excluded, our total liability arising out of your use of the
            website is limited to $100.
          </p>
          <p>
            <strong>
              This section is about the website. It does not apply to the professional services we
              provide to clients
            </strong>
            , which are governed by our treatment agreements, our professional licences, and
            applicable law. Some jurisdictions do not allow certain exclusions, in which case those
            exclusions do not apply to you.
          </p>
        </>
      ),
    },
    {
      id: 'indemnification',
      heading: 'Indemnification',
      body: (
        <p>
          You agree to indemnify and hold harmless {site.legalName} and its clinicians, employees
          and contractors from any claim, loss or expense (including reasonable legal fees) arising
          out of your misuse of this website, your breach of these terms, or your violation of
          another person&rsquo;s rights through your use of the site.
        </p>
      ),
    },
    {
      id: 'governing-law',
      heading: 'Governing law and disputes',
      body: (
        <>
          <p>
            These terms are governed by the laws of the State of Oregon, without regard to its
            conflict-of-laws rules. Any dispute arising out of your use of this website will be
            brought in the state or federal courts located in Multnomah County, Oregon, and you
            consent to their jurisdiction.
          </p>
          <p>
            <strong>Before that, please talk to us.</strong> Most concerns are resolved by a
            conversation, and we would rather have one. Contact us using the details at the foot of
            this page and we will respond within five business days.
          </p>
          <p>
            Complaints about clinical care can also be made to the relevant licensing board — the
            Oregon Board of Psychology, the Oregon Board of Licensed Professional Counselors and
            Therapists, or the Oregon State Board of Licensed Social Workers, depending on the
            clinician. We will give you the correct board and contact details on request, and we
            will not retaliate for a complaint.
          </p>
        </>
      ),
    },
    {
      id: 'general',
      heading: 'General',
      body: (
        <>
          <p>
            <strong>Severability.</strong> If any provision of these terms is found unenforceable,
            the rest remains in force and the unenforceable provision is applied to the maximum
            extent permitted.
          </p>
          <p>
            <strong>No waiver.</strong> If we do not enforce a provision on one occasion, we have
            not waived our right to enforce it later.
          </p>
          <p>
            <strong>Entire agreement.</strong> These terms, together with our{' '}
            <Link to={paths.privacy}>Privacy Policy</Link>, are the whole agreement between you and
            us regarding this website — separately from the treatment agreements you sign at
            intake, which govern care.
          </p>
          <p>
            <strong>Assignment.</strong> You may not assign your rights under these terms. We may
            assign ours in connection with a merger, acquisition or transfer of the practice, in
            which case your records are handled under the notice and consent requirements that
            healthcare law imposes.
          </p>
        </>
      ),
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      body: (
        <>
          <p>
            We may update these terms. The &ldquo;last updated&rdquo; date at the top of this page
            always reflects the current version, and continuing to use the site after a change
            means you accept it.
          </p>
          <p>
            For a material change we will post a notice on the site. Current clients are notified
            directly of changes to fees, cancellation policy or anything else that affects their
            care, and always with reasonable notice — never retroactively.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
      intro={
        <>
          <p>
            These terms cover using this website — not your treatment, which is governed by the
            agreements you sign at intake. We have written them to be read rather than skimmed.
          </p>
          <p>
            Two things matter more than the rest: <a href="#no-relationship">using this site does
            not make you our client</a>, and <a href="#not-emergency">this site is not an emergency
            service</a>.
          </p>
        </>
      }
    />
  );
}

export default TermsPage;
