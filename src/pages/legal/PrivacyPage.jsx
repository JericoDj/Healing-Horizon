import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { usePageMeta } from '../../hooks/usePageMeta';
import paths from '../../routes/paths';
import LegalLayout from './LegalLayout';

const LAST_UPDATED = '1 August 2026';
const EFFECTIVE_DATE = '2026-08-01';

/**
 * PrivacyPage
 *
 * The section with `id="hipaa"` is linked directly from the footer, so its id
 * must not change. The distinction the whole page turns on — website data is
 * not the same thing as your clinical record — is stated first, because it is
 * the thing people are actually confused about.
 */
export function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description: `How ${site.name} handles information collected through this website, and how protected health information in your clinical record is treated under HIPAA.`,
  });

  const sections = [
    {
      id: 'scope',
      heading: 'What this policy covers',
      body: (
        <>
          <p>
            This policy explains how {site.legalName} (&ldquo;{site.name}&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information collected through this
            website, at {site.url}.
          </p>
          <p>
            <strong>
              Information collected through this website is not the same thing as your clinical
              record.
            </strong>{' '}
            That distinction matters more than anything else on this page. If you become a client,
            the notes, assessments and treatment records your therapist keeps are protected health
            information governed by HIPAA and by Oregon and Washington law. Those are described in{' '}
            <a href="#hipaa">section 5</a> and in the full Notice of Privacy Practices you receive
            at intake.
          </p>
          <p>
            Everything else on this page — forms, cookies, server logs — is ordinary website data,
            and is handled under this policy.
          </p>
        </>
      ),
    },
    {
      id: 'information-you-give',
      heading: 'Information you give us',
      body: (
        <>
          <p>When you use a form on this site, you choose what to tell us. We collect:</p>
          <ul>
            <li>
              <strong>Contact form</strong> — your name, email address, phone number if you give
              one, how you would prefer to be contacted, whether you have a therapist in mind, and
              the message you write.
            </li>
            <li>
              <strong>Consultation request</strong> — the kind of support you are looking for, your
              preferred format and times, your earliest availability, how you expect to pay, your
              contact details, and any note you add.
            </li>
            <li>
              <strong>Newsletter</strong> — your email address only.
            </li>
          </ul>
          <p>
            <strong>Please do not send clinical information through these forms.</strong> They are
            encrypted in transit, but they arrive in an ordinary work inbox and are not a secure
            channel for health information. A sentence about what you are looking for is all we
            need to point you the right way. Anything clinical belongs in a session or on the
            phone.
          </p>
          <p>
            We do not ask for, and you should not send, your Social Security number, insurance
            member ID, date of birth or payment card details through this website. Those are
            collected through our secure intake system after you become a client.
          </p>
        </>
      ),
    },
    {
      id: 'information-collected-automatically',
      heading: 'Information collected automatically',
      body: (
        <>
          <p>
            Like almost every website, ours records some technical information when you visit. Our
            hosting provider keeps server logs containing your IP address, browser and device type,
            the pages you requested, the time of the request, and the referring page if there was
            one.
          </p>
          <p>
            We use this to keep the site working, diagnose errors and detect abuse. Logs are
            retained for a limited period and are not used to build a profile of you.
          </p>
          <p>
            <strong>Cookies and analytics.</strong> This site uses only the storage strictly
            necessary for it to function — for example, remembering that you dismissed a notice.
            We do not run advertising trackers, and we do not sell or share information with data
            brokers.
          </p>
          <p>
            If analytics are added in future, they will be configured to anonymise IP addresses,
            they will not be used to target advertising, and this policy will be updated before
            they go live. Advertising or tracking pixels on a mental health website can reveal that
            someone is seeking care, and we treat that as unacceptable rather than as a trade-off.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use-it',
      heading: 'How we use information',
      body: (
        <>
          <p>We use the information described above only to:</p>
          <ul>
            <li>reply to your enquiry and, if you ask, arrange a consultation;</li>
            <li>match you with a clinician whose training and availability fit;</li>
            <li>answer questions about rates, insurance and scheduling;</li>
            <li>send the newsletter, if you subscribed, until you unsubscribe;</li>
            <li>operate, secure and improve the website;</li>
            <li>meet our legal, regulatory and professional obligations.</li>
          </ul>
          <p>
            We do not use website enquiry data for marketing to you beyond the newsletter you
            explicitly asked for, and we do not add enquirers to a mailing list automatically.
          </p>
        </>
      ),
    },
    {
      id: 'hipaa',
      heading: 'Your clinical record and HIPAA',
      body: (
        <>
          <p>
            Once you become a client, your therapist keeps a clinical record. That record is{' '}
            <strong>protected health information</strong> under the Health Insurance Portability
            and Accountability Act, and is subject to considerably stronger rules than this
            website.
          </p>
          <p>
            This section is a summary. The complete <strong>Notice of Privacy Practices</strong>{' '}
            is given to you at intake, you sign to acknowledge receiving it, and you can request
            another copy at any time.
          </p>

          <h3>Uses and disclosures that do not need your authorisation</h3>
          <ul>
            <li>
              <strong>Treatment</strong> — coordinating your care within the practice, and with
              other providers involved in your treatment where clinically appropriate.
            </li>
            <li>
              <strong>Payment</strong> — billing you or your insurer, and providing the minimum
              information necessary for a claim.
            </li>
            <li>
              <strong>Health care operations</strong> — quality review, clinical supervision and
              consultation, and practice administration.
            </li>
          </ul>

          <h3>Disclosures the law requires or permits</h3>
          <p>
            Your therapist will explain these in full at your first session. In summary, we may be
            required to disclose information without your authorisation when:
          </p>
          <ul>
            <li>
              there is a serious and imminent risk of harm to you or to another identifiable
              person, and disclosure is necessary to prevent it;
            </li>
            <li>
              we have reasonable cause to believe a child, an older adult or a dependent adult is
              being abused or neglected — mandatory reporting under Oregon and Washington law;
            </li>
            <li>we receive a valid court order or a subpoena that we cannot lawfully resist;</li>
            <li>disclosure is required by another specific law or by a regulator.</li>
          </ul>
          <p>
            These exceptions are narrow, and your therapist will tell you if one is triggered
            unless doing so would itself create risk. Outside of them, nothing leaves the practice
            without your signed authorisation, and you may revoke an authorisation in writing at
            any time.
          </p>

          <h3>Psychotherapy notes</h3>
          <p>
            Process notes kept separately from your main record receive additional protection under
            HIPAA and generally require your specific written authorisation before they can be
            disclosed — including to an insurer.
          </p>
        </>
      ),
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      body: (
        <>
          <p>In relation to your clinical record, you have the right to:</p>
          <ul>
            <li>
              <strong>Inspect and copy</strong> your record, in the format you request where we can
              readily produce it;
            </li>
            <li>
              <strong>Request an amendment</strong> if you believe something is inaccurate or
              incomplete — we must respond in writing, and if we decline you may file a statement
              of disagreement that stays with the record;
            </li>
            <li>
              <strong>Receive an accounting</strong> of certain disclosures we have made;
            </li>
            <li>
              <strong>Request a restriction</strong> on how your information is used or disclosed.
              If you pay in full out of pocket for a service, you have the right to require that we
              do not disclose it to your health plan;
            </li>
            <li>
              <strong>Request confidential communications</strong> — for example, that we only
              call a particular number, or never leave a voicemail;
            </li>
            <li>
              <strong>Receive a paper copy</strong> of the Notice of Privacy Practices, even if you
              agreed to an electronic one;
            </li>
            <li>
              <strong>Be notified</strong> if a breach affects your unsecured protected health
              information.
            </li>
          </ul>
          <p>
            <strong>Complaints.</strong> If you believe your privacy rights have been violated, you
            can complain to us using the contact details at the foot of this page, or directly to
            the U.S. Department of Health and Human Services Office for Civil Rights.{' '}
            <strong>
              We will not retaliate against you in any way for making a complaint, and it will not
              affect your care.
            </strong>
          </p>
        </>
      ),
    },
    {
      id: 'sharing',
      heading: 'Who we share information with',
      body: (
        <>
          <p>
            <strong>We do not sell personal information, and we never will.</strong>
          </p>
          <p>We share information only with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> who help us operate — our electronic health record
              and scheduling system, our billing processor, our email provider and our website
              host. Any provider that handles protected health information does so under a{' '}
              <strong>Business Associate Agreement</strong> that binds them to HIPAA-equivalent
              obligations.
            </li>
            <li>
              <strong>Your insurer</strong>, where you have asked us to bill them, and only the
              minimum information necessary for the claim.
            </li>
            <li>
              <strong>Other providers</strong> involved in your care, where that is clinically
              appropriate or where you have authorised it.
            </li>
            <li>
              <strong>Authorities</strong>, where one of the narrow legal exceptions in{' '}
              <a href="#hipaa">section 5</a> applies.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'retention',
      heading: 'How long we keep information',
      body: (
        <>
          <p>
            <strong>Website enquiries.</strong> If you contact us and do not become a client, we
            keep your enquiry only as long as needed to respond and to keep a basic record that we
            did, then delete it. You can ask us to delete it sooner.
          </p>
          <p>
            <strong>Newsletter.</strong> Until you unsubscribe. Every email carries an unsubscribe
            link, and we act on it immediately.
          </p>
          <p>
            <strong>Clinical records.</strong> Retention periods are set by state law and
            professional standards rather than by us, and differ for adults and for clients seen as
            minors. The specific period that applies to your record is set out in the Notice of
            Privacy Practices you receive at intake — ask your therapist if you want it confirmed
            before then.
          </p>
        </>
      ),
    },
    {
      id: 'security',
      heading: 'How we protect information',
      body: (
        <>
          <p>
            This website is served over HTTPS, and form submissions are encrypted in transit. Our
            electronic health record is a HIPAA-compliant system with access controls, audit
            logging and encryption at rest. Access is limited to staff who need it, and staff
            complete privacy and security training.
          </p>
          <p>
            <strong>An honest limitation.</strong> No website or email system is perfectly secure.
            Email in particular is not a secure channel — it can sit unencrypted on a mail server,
            and it can be read by anyone with access to the device it arrives on. That is why we
            ask you to keep clinical detail out of email and web forms, and why we use a secure
            portal for anything sensitive once you are a client.
          </p>
          <p>
            If you share a device or a mailbox with someone, tell us. We can adjust how we contact
            you, and we would much rather be asked.
          </p>
        </>
      ),
    },
    {
      id: 'minors',
      heading: 'Children and minors',
      body: (
        <>
          <p>
            This website is not directed at children under 13, and we do not knowingly collect
            information from them through it. A parent or guardian should make the initial contact
            about care for a child.
          </p>
          <p>
            Confidentiality for adolescent clients is a clinical matter, not just a privacy one,
            and it is agreed explicitly with the family at the first caregiver session. Broadly:
            the content of a teenager&rsquo;s sessions is treated as private, caregivers receive
            progress and safety information rather than transcripts, and safety concerns are always
            shared. Oregon law also gives minors aged 14 and over certain rights to consent to
            outpatient mental health treatment, which affects who controls the record. Your
            therapist will explain exactly how this works for your family before treatment starts.
          </p>
        </>
      ),
    },
    {
      id: 'third-parties',
      heading: 'Links to other websites',
      body: (
        <>
          <p>
            This site links to external resources — crisis lines, professional bodies, insurers.
            Those sites have their own privacy policies and we do not control them. Following a
            link means leaving this site.
          </p>
          <p>
            We chose the links on this site deliberately and review them, but a link is not an
            endorsement of everything on the destination.
          </p>
        </>
      ),
    },
    {
      id: 'state-rights',
      heading: 'Oregon and Washington residents',
      body: (
        <>
          <p>
            Residents of some states have additional rights over their personal information,
            including rights to access, correct and delete it, and to opt out of certain kinds of
            sharing. Where such a right applies to you, you can exercise it using the contact
            details at the foot of this page, and we will not treat you differently for doing so.
          </p>
          <p>
            <strong>Washington&rsquo;s My Health My Data Act</strong> gives Washington consumers
            particular rights over consumer health data — broadly defined to include information
            that identifies someone&rsquo;s past, present or future physical or mental health
            status, and which can include the fact that a person sought care. It generally requires
            separate consent before such data is collected or shared, prohibits its sale without
            specific authorisation, and provides rights to access and to withdraw consent.
          </p>
          <p>
            Because we do not run advertising trackers on this site and do not sell personal
            information, most of the practices that Act was written to address do not occur here.
            If you are a Washington resident and want to exercise a right under it, contact us and
            we will respond within the time the law allows.
          </p>
          <p>
            Information already governed by HIPAA as part of your clinical record continues to be
            governed by HIPAA and by state health-information law.
          </p>
        </>
      ),
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      body: (
        <>
          <p>
            We update this policy when our practices change or when the law changes. The
            &ldquo;last updated&rdquo; date at the top of the page always reflects the current
            version.
          </p>
          <p>
            If we make a change that materially affects how we handle information we already hold
            about you, we will tell you directly rather than relying on you to notice the date.
            Changes to the Notice of Privacy Practices are handled separately, under the process
            that Notice describes.
          </p>
          <p>
            You may also want to read our <Link to={paths.terms}>Terms of Service</Link> and our{' '}
            <Link to={paths.accessibility}>Accessibility statement</Link>.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
      intro={
        <>
          <p>
            Deciding to look for a therapist is private, and so is looking at a therapist&rsquo;s
            website. This policy sets out plainly what we collect, why, who sees it, and what you
            can ask us to do about it.
          </p>
          <p>
            If anything here is unclear, ask. We would rather explain it than have you wonder.
          </p>
        </>
      }
    />
  );
}

export default PrivacyPage;
