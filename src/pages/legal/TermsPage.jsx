import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import paths from '../../routes/paths';
import LegalLayout from './LegalLayout';

const LAST_UPDATED = 'April 2026';
const EFFECTIVE_DATE = '2026-04-01';

export function TermsPage() {
  usePageMeta({
    title: 'Terms of Service | Healing Horizons Behavioral Health',
    description:
      'Important information about participating in Healing Horizons\' Psychiatric Rehabilitation Program (PRP), including services, eligibility, responsibilities, privacy, and participant rights.',
  });

  const intro = (
    <p>
      Important information about participating in Healing Horizons&apos; Psychiatric Rehabilitation
      Program (PRP), including services, eligibility, responsibilities, privacy, and participant
      rights.
    </p>
  );

  const customNotice = (
    <>
      <p style={{ fontWeight: 'var(--weight-bold)', margin: 0, color: 'var(--text-primary)' }}>
        Please read before starting services
      </p>
      <p style={{ margin: 'var(--space-2) 0 0' }}>
        These terms explain how PRP services work, participant responsibilities, privacy, service
        authorization, crisis situations, and the process for raising concerns.
      </p>
    </>
  );

  const sections = [
    {
      id: 'our-services',
      heading: 'Our Services',
      tocHeading: 'Our Services',
      body: (
        <>
          <p>
            Healing Horizons Behavioral Health, LLC provides recovery-oriented, person-centered
            Psychiatric Rehabilitation Program services designed to help participants develop skills,
            stability, independence, and community functioning.
          </p>
          <p>Services may include:</p>
          <ul>
            <li>Daily living skills development</li>
            <li>Symptom self-management and wellness support</li>
            <li>Medication education and self-management support</li>
            <li>Social and interpersonal skill development</li>
            <li>Community resource linkage and care coordination</li>
            <li>Educational and vocational rehabilitation support</li>
            <li>Crisis prevention and safety planning</li>
            <li>Family and natural support involvement when appropriate and authorized</li>
          </ul>
          <p>
            Services are designed around the participant&apos;s Individual Rehabilitation Plan (IRP). The
            program focuses on functional improvement, independence, community integration, and
            long-term wellness.
          </p>
        </>
      ),
    },
    {
      id: 'eligibility-enrollment',
      heading: 'Eligibility & Enrollment',
      tocHeading: 'Eligibility & Enrollment',
      body: (
        <>
          <p>
            Participation in the PRP is subject to eligibility and service authorization requirements.
          </p>
          <p>Participants generally must:</p>
          <ul>
            <li>Have a documented mental health or behavioral health condition requiring rehabilitation support.</li>
            <li>Demonstrate functional impairment in one or more areas of daily life.</li>
            <li>Be able to participate safely in community-based rehabilitation services.</li>
            <li>Complete the required referral and intake process.</li>
            <li>Meet applicable Maryland Medicaid and Behavioral Health Administration requirements when services are publicly funded.</li>
          </ul>
          <p>
            Healing Horizons reviews referrals to determine whether PRP is an appropriate level of service.
          </p>
        </>
      ),
    },
    {
      id: 'referral-intake',
      heading: 'Referral & Intake',
      tocHeading: 'Referral & Intake',
      body: (
        <>
          <p>Referrals may come from approved sources including:</p>
          <ul>
            <li>Hospitals and psychiatric discharge planners</li>
            <li>Core Service Agencies / Local Behavioral Health Authorities</li>
            <li>Outpatient mental health providers</li>
            <li>Mobile crisis teams</li>
            <li>Community organizations</li>
            <li>Family members or guardians with appropriate consent</li>
            <li>Self-referrals when clinically appropriate and permitted</li>
          </ul>
          <p>
            Before enrollment, Healing Horizons may collect information necessary to determine
            eligibility and establish an appropriate service plan. The intake process may include:
          </p>
          <ul>
            <li>Referral screening</li>
            <li>Insurance or Medicaid verification</li>
            <li>Clinical and diagnostic information</li>
            <li>Psychosocial history</li>
            <li>Functional assessment</li>
            <li>Risk screening</li>
            <li>Participant goals and strengths</li>
            <li>Natural support information</li>
            <li>Required consent and release forms</li>
          </ul>
        </>
      ),
    },
    {
      id: 'individual-rehabilitation-plan',
      heading: 'Individual Rehabilitation Plan',
      tocHeading: 'Individual Rehabilitation Plan',
      body: (
        <>
          <p>
            Each participant receiving PRP services receives an Individual Rehabilitation Plan (IRP).
          </p>
          <p>The IRP identifies:</p>
          <ul>
            <li>Rehabilitation goals</li>
            <li>Participant strengths and needs</li>
            <li>Measurable objectives</li>
            <li>Specific interventions</li>
            <li>Service frequency and intensity</li>
            <li>Assigned staff</li>
            <li>Review dates</li>
          </ul>
          <p>
            The IRP is developed collaboratively with the participant and is intended to reflect
            their goals, strengths, preferences, and recovery priorities. Services are delivered
            according to the participant&apos;s individualized plan and applicable authorization requirements.
          </p>
        </>
      ),
    },
    {
      id: 'community-based-services',
      heading: 'Community-Based Services',
      tocHeading: 'Community-Based Services',
      body: (
        <>
          <p>Healing Horizons PRP is primarily community-based.</p>
          <p>Services may be provided in locations such as:</p>
          <ul>
            <li>Participant residences</li>
            <li>Community centers</li>
            <li>Libraries</li>
            <li>Public resource locations</li>
            <li>Educational settings</li>
            <li>Employment settings</li>
            <li>Provider offices when appropriate</li>
            <li>Other approved community settings</li>
          </ul>
          <p>
            The purpose of community-based service delivery is to help participants practice and apply
            skills in real-life environments.
          </p>
        </>
      ),
    },
    {
      id: 'participant-responsibilities',
      heading: 'Participant Responsibilities',
      tocHeading: 'Participant Responsibilities',
      body: (
        <>
          <p>Participation in PRP is a partnership.</p>
          <p>Participants are expected to:</p>
          <ul>
            <li>Participate actively in rehabilitation planning</li>
            <li>Communicate their needs, concerns, and goals</li>
            <li>Provide accurate information during assessments</li>
            <li>Treat staff and others respectfully</li>
            <li>Follow agreed-upon safety guidelines</li>
            <li>Notify Healing Horizons of relevant changes in contact information</li>
            <li>Communicate safety concerns promptly</li>
            <li>Participate in scheduled services to the extent possible</li>
          </ul>
          <p>
            Participants may ask questions about their services and are encouraged to communicate
            when their needs or goals change.
          </p>
        </>
      ),
    },
    {
      id: 'respectful-safe-environment',
      heading: 'Respectful & Safe Environment',
      tocHeading: 'Respectful & Safe Environment',
      body: (
        <>
          <p>
            Healing Horizons is committed to providing services in an environment that protects
            participant dignity, safety, autonomy, and rights.
          </p>
          <p>Participants have the right to services that are:</p>
          <ul>
            <li>Person-centered</li>
            <li>Recovery-oriented</li>
            <li>Trauma-informed</li>
            <li>Culturally responsive</li>
            <li>Respectful</li>
            <li>Free from abuse, neglect, exploitation, and discrimination</li>
          </ul>
          <p>Participants may raise concerns or file grievances without retaliation.</p>
        </>
      ),
    },
    {
      id: 'privacy-confidentiality',
      heading: '🔒 Privacy & Confidentiality',
      tocHeading: 'Privacy & Confidentiality',
      cardTone: 'accent',
      body: (
        <>
          <p>
            <strong>
              Healing Horizons protects participant information in accordance with applicable
              privacy and confidentiality requirements, including HIPAA.
            </strong>
          </p>
          <p>
            Participant information is generally accessed only by authorized personnel who need the
            information to perform their responsibilities. Information may be disclosed with
            appropriate authorization or when disclosure is permitted or required by law.
          </p>
          <p>This may include circumstances involving:</p>
          <ul>
            <li>Medical emergencies</li>
            <li>Suspected abuse, neglect, or exploitation</li>
            <li>Court orders or lawful subpoenas</li>
            <li>Serious and imminent threats to safety</li>
            <li>Required regulatory or oversight activities</li>
          </ul>
          <p>
            For additional information, please review our{' '}
            <Link to={paths.privacy}>Privacy Policy &amp; Notice of Privacy Practices</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'medication-support',
      heading: 'Medication Support',
      tocHeading: 'Medication Support',
      body: (
        <>
          <p>
            Healing Horizons may provide education and rehabilitation support related to prescribed
            psychiatric medications. This may include helping participants:
          </p>
          <ul>
            <li>Understand prescribed medications</li>
            <li>Develop medication routines</li>
            <li>Recognize potential side effects to report to their provider</li>
            <li>Coordinate with prescribing clinicians</li>
          </ul>
          <p style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>
            Healing Horizons does not prescribe medications.
          </p>
          <p>
            Medication decisions remain with the participant and their authorized prescribing
            healthcare professionals.
          </p>
        </>
      ),
    },
    {
      id: 'crisis-emergency',
      heading: '🚨 Crisis & Emergency Situations',
      tocHeading: 'Crisis & Emergency Situations',
      cardTone: 'warning',
      body: (
        <>
          <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>
            PRP services are not an emergency medical or psychiatric service.
          </p>
          <p>
            If a participant experiences an immediate emergency or presents an imminent risk of harm,
            emergency and crisis services may be contacted as appropriate. Healing Horizons&apos; crisis
            procedures include coordination with appropriate emergency and behavioral health resources.
          </p>
          <p>Examples of situations requiring emergency intervention may include:</p>
          <ul>
            <li>Immediate danger to self or others</li>
            <li>Suicidal intent or serious self-harm risk</li>
            <li>Homicidal threats</li>
            <li>Severe psychiatric decompensation</li>
            <li>Serious medical emergencies</li>
            <li>Unsafe behavior that cannot be managed in the community</li>
          </ul>
          <div
            style={{
              padding: 'var(--space-3) var(--space-4)',
              backgroundColor: 'var(--surface-raised)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-default)',
              marginTop: 'var(--space-4)',
            }}
          >
            <p style={{ margin: 0, fontWeight: 'var(--weight-bold)' }}>
              For an immediate emergency, call <strong>911</strong>.
              <br />
              For a behavioral health crisis, participants may call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline, 24/7 free &amp; confidential).
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'service-documentation',
      heading: 'Service Documentation',
      tocHeading: 'Service Documentation',
      body: (
        <>
          <p>
            Healing Horizons maintains documentation related to PRP services as required by
            applicable regulations, payer requirements, and organizational policies.
          </p>
          <p>Participant records may include:</p>
          <ul>
            <li>Referral documentation</li>
            <li>Intake assessments</li>
            <li>Eligibility documentation</li>
            <li>Consent forms</li>
            <li>Individual Rehabilitation Plans</li>
            <li>Progress notes</li>
            <li>Periodic reviews</li>
            <li>Incident reports when applicable</li>
            <li>Discharge documentation</li>
          </ul>
          <p>
            Progress notes document the services provided, rehabilitation goals addressed,
            participant response, progress, and next steps.
          </p>
        </>
      ),
    },
    {
      id: 'service-authorization-payment',
      heading: 'Service Authorization & Payment',
      tocHeading: 'Service Authorization & Payment',
      body: (
        <>
          <p>The availability, frequency, and intensity of PRP services may depend on:</p>
          <ul>
            <li>Participant needs</li>
            <li>Rehabilitation goals</li>
            <li>Functional impairment</li>
            <li>The Individual Rehabilitation Plan</li>
            <li>Applicable authorization requirements</li>
            <li>Medicaid or other payer requirements</li>
          </ul>
          <p>
            Not every service is automatically covered simply because it is listed as a PRP service.
            Participants may contact Healing Horizons to discuss eligibility, authorization,
            insurance, or payment questions.
          </p>
        </>
      ),
    },
    {
      id: 'changes-to-services',
      heading: 'Changes to Services',
      tocHeading: 'Changes to Services',
      body: (
        <>
          <p>
            Services may be modified when participant needs, goals, authorization requirements, or
            circumstances change.
          </p>
          <p>The IRP may be reviewed and updated when:</p>
          <ul>
            <li>Participant needs change</li>
            <li>Goals are achieved or revised</li>
            <li>A hospitalization or crisis occurs</li>
            <li>Service requirements change</li>
            <li>Discharge planning begins</li>
          </ul>
          <p>
            Participants are involved in service planning and should communicate when their
            circumstances or goals change.
          </p>
        </>
      ),
    },
    {
      id: 'discharge-transition',
      heading: 'Discharge & Transition',
      tocHeading: 'Discharge & Transition',
      body: (
        <>
          <p>PRP services may end when:</p>
          <ul>
            <li>Rehabilitation goals have been achieved</li>
            <li>The participant no longer meets PRP eligibility requirements</li>
            <li>The participant chooses to withdraw</li>
            <li>A higher level of care is required</li>
            <li>The participant relocates</li>
            <li>The participant transfers services</li>
          </ul>
          <p>
            When appropriate, discharge planning includes transition planning and referrals to other
            services or supports.
          </p>
        </>
      ),
    },
    {
      id: 'participant-rights',
      heading: '🛡️ Participant Rights',
      tocHeading: 'Participant Rights',
      cardTone: 'accent',
      body: (
        <>
          <p>
            Nothing in these Terms of Service limits participant rights provided by applicable law or
            regulation.
          </p>
          <p>Participants have the right to:</p>
          <ul>
            <li>Receive respectful services</li>
            <li>Participate in service planning</li>
            <li>Ask questions</li>
            <li>Provide informed consent</li>
            <li>Decline specific services</li>
            <li>Maintain privacy and confidentiality</li>
            <li>Access applicable records</li>
            <li>File grievances</li>
            <li>Request assistance with grievances</li>
            <li>Appeal applicable decisions</li>
            <li>Receive referrals when appropriate</li>
          </ul>
          <p style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>
            Healing Horizons prohibits retaliation against participants who raise concerns or
            exercise their rights.
          </p>
        </>
      ),
    },
    {
      id: 'grievances-complaints',
      heading: 'Grievances & Complaints',
      tocHeading: 'Grievances & Complaints',
      body: (
        <>
          <p>Participants may raise concerns about:</p>
          <ul>
            <li>Service quality</li>
            <li>Staff conduct</li>
            <li>Privacy</li>
            <li>Access to services</li>
            <li>Discrimination</li>
            <li>Safety</li>
            <li>Program decisions</li>
            <li>Discharge</li>
            <li>Participant rights</li>
          </ul>
          <p>
            A grievance may be submitted verbally or in writing. Participants may speak with a
            Rehabilitation Specialist, Program Director, or Clinical Director.
          </p>
          <p>
            Healing Horizons provides a formal grievance and appeals process and prohibits retaliation
            for filing a complaint.
          </p>
        </>
      ),
    },
    {
      id: 'professional-boundaries',
      heading: 'Professional Boundaries',
      tocHeading: 'Professional Boundaries',
      body: (
        <>
          <p>
            Healing Horizons staff are expected to maintain appropriate professional boundaries while
            providing services. Participants and staff are expected to communicate respectfully and
            maintain a professional service relationship.
          </p>
          <p>
            Staff are required to follow applicable organizational policies, ethical requirements,
            confidentiality standards, and safety procedures.
          </p>
        </>
      ),
    },
    {
      id: 'no-guarantee',
      heading: 'No Guarantee of Specific Outcomes',
      tocHeading: 'No Guarantee of Specific Outcomes',
      body: (
        <>
          <p>
            Healing Horizons provides rehabilitation services intended to support participant goals
            and functional improvement. However, individual outcomes vary.
          </p>
          <p>
            Participation in PRP does not guarantee a particular clinical, employment, educational,
            housing, or other outcome. Services are individualized based on participant needs, goals,
            circumstances, and applicable authorization requirements.
          </p>
        </>
      ),
    },
    {
      id: 'changes-to-terms',
      heading: 'Changes to These Terms',
      tocHeading: 'Changes to These Terms',
      body: (
        <>
          <p>
            Healing Horizons may update these Terms of Service when program requirements,
            organizational policies, laws, regulations, or service practices change.
          </p>
          <p>
            The current version will be made available on this website. The Effective Date and Last
            Updated dates at the beginning of this page identify the current version.
          </p>
        </>
      ),
    },
    {
      id: 'contact-us',
      heading: 'Contact Healing Horizons',
      tocHeading: 'Contact Healing Horizons',
      body: (
        <>
          <p>
            If you have questions about these Terms of Service, your PRP services, eligibility,
            privacy, or participant rights, please contact us:
          </p>
          <div
            style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--surface-sunken)',
              border: '1px solid var(--border-default)',
              marginTop: 'var(--space-4)',
            }}
          >
            <p style={{ margin: 0, fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>
              Healing Horizons Behavioral Health, LLC
            </p>
            <p style={{ margin: 'var(--space-1) 0 0' }}>
              Waldorf, Maryland
              <br />
              Phone: <a href="tel:4434139692">443-413-9692</a>
              <br />
              Email: <a href="mailto:info@healinghorizonsbhs.com">info@healinghorizonsbhs.com</a>
              <br />
              Privacy questions:{' '}
              <a href="mailto:privacy@healinghorizonsbhs.com">privacy@healinghorizonsbhs.com</a>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      eyebrow="LEGAL · HEALING HORIZONS"
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      intro={intro}
      customNotice={customNotice}
      sections={sections}
    >
      <div
        style={{
          marginTop: 'var(--space-10)',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--surface-sunken)',
          border: '1px solid var(--border-default)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        <p style={{ margin: 0, fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>
          Important
        </p>
        <p style={{ margin: 'var(--space-2) 0 0' }}>
          These Terms of Service are intended as a website-facing summary of program terms. They do
          not replace Healing Horizons&apos; internal policies, participant rights documentation, consent
          forms, Individual Rehabilitation Plans, HIPAA Notice of Privacy Practices, or applicable
          Maryland and federal requirements.
        </p>
      </div>
    </LegalLayout>
  );
}

export default TermsPage;
