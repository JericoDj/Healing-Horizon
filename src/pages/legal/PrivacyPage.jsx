import { usePageMeta } from '../../hooks/usePageMeta';
import LegalLayout from './LegalLayout';

const LAST_UPDATED = 'April 2026';
const EFFECTIVE_DATE = '2026-04-01';

export function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy & Notice of Privacy Practices | Healing Horizons Behavioral Health',
    description:
      'Notice of Privacy Practices and Privacy Policy for Healing Horizons Behavioral Health, LLC Psychiatric Rehabilitation Program (PRP) in Waldorf, Maryland.',
  });

  const intro = (
    <>
      <p style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--text-lg)' }}>
        Your Privacy Matters
      </p>
      <p>
        Healing Horizons Behavioral Health, LLC is committed to protecting the privacy, dignity, and
        confidentiality of individuals who receive Psychiatric Rehabilitation Program (PRP) services.
      </p>
      <p>
        This notice explains how we protect Protected Health Information (PHI), how information may
        be used or disclosed, your privacy rights, and how you can contact us with questions or
        concerns. This notice applies to information maintained by Healing Horizons in connection
        with PRP services.
      </p>
      <p style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
        THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW
        YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
      </p>
    </>
  );

  const customNotice = (
    <p>
      This Privacy Notice describes Healing Horizons Behavioral Health, LLC&apos;s privacy practices
      for Protected Health Information and should be reviewed and approved by the organization&apos;s
      privacy/compliance leadership or legal counsel before publication. This notice is not intended
      to replace any separate website privacy, cookie, analytics, or technology disclosures that may
      be required based on the tools and services used by the website.
    </p>
  );

  const sections = [
    {
      id: 'our-responsibilities',
      heading: 'Our Privacy Responsibilities',
      body: (
        <>
          <span id="hipaa" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }} />
          <p>
            Healing Horizons maintains safeguards designed to protect participant information and
            comply with applicable privacy and confidentiality requirements, including:
          </p>
          <ul>
            <li>The Health Insurance Portability and Accountability Act (HIPAA)</li>
            <li>Applicable Maryland confidentiality and behavioral health requirements</li>
            <li>CARF Behavioral Health Standards</li>
            <li>Applicable professional and ethical standards</li>
          </ul>
          <p>
            We are required by law to maintain the privacy and security of Protected Health
            Information and to follow the privacy practices described in this notice.
          </p>
          <p>
            Our staff receive confidentiality and HIPAA training during onboarding and on an ongoing
            basis.
          </p>
        </>
      ),
    },
    {
      id: 'what-is-phi',
      heading: 'What Is Protected Health Information?',
      body: (
        <>
          <p>
            Protected Health Information (PHI) is information that identifies an individual and
            relates to their physical or mental health, treatment, services, or payment for
            healthcare.
          </p>
          <p>Examples may include:</p>
          <ul>
            <li>Diagnosis and clinical history</li>
            <li>Intake and assessment information</li>
            <li>Individual Rehabilitation Plans (IRPs)</li>
            <li>Progress notes</li>
            <li>Medication information</li>
            <li>Insurance and Medicaid information</li>
            <li>Participant contact information</li>
            <li>Information about services received</li>
          </ul>
        </>
      ),
    },
    {
      id: 'uses-and-disclosures',
      heading: 'How We May Use and Disclose Your Information',
      body: (
        <>
          <p>Healing Horizons may use or disclose PHI as permitted or required by applicable law.</p>

          <h3>Treatment</h3>
          <p>
            We may use or share information to provide, coordinate, or manage your rehabilitation
            services. For example, information may be shared with members of your authorized care
            team or other providers involved in your care when permitted by law.
          </p>

          <h3>Payment</h3>
          <p>
            We may use or disclose information as necessary to obtain payment for services. This may
            include communicating with Medicaid, health plans, or other authorized payers regarding
            eligibility, authorization, claims, or payment.
          </p>

          <h3>Health Care Operations</h3>
          <p>
            We may use or disclose information for activities necessary to operate and improve our
            program, including:
          </p>
          <ul>
            <li>Quality improvement</li>
            <li>Compliance activities</li>
            <li>Staff supervision</li>
            <li>Documentation review</li>
            <li>Program administration</li>
            <li>Audits and accreditation activities</li>
          </ul>
          <p>We limit access to information based on staff roles and job responsibilities.</p>
        </>
      ),
    },
    {
      id: 'authorization-required',
      heading: 'When Your Authorization Is Required',
      body: (
        <>
          <p>
            For uses or disclosures that require your written authorization, Healing Horizons will
            obtain the appropriate authorization before sharing your information.
          </p>
          <p>A Release of Information (ROI) may identify:</p>
          <ul>
            <li>Your name and identifying information</li>
            <li>The specific information to be released</li>
            <li>The person or organization receiving the information</li>
            <li>The purpose of the disclosure</li>
            <li>The expiration date</li>
            <li>
              Your signature and date, or the signature of an authorized representative
            </li>
          </ul>
          <p>
            You may revoke an authorization in writing, subject to limitations that may apply under
            law.
          </p>
        </>
      ),
    },
    {
      id: 'disclosures-without-authorization',
      heading: 'When Information May Be Shared Without Authorization',
      body: (
        <>
          <p>
            Information may be disclosed without written authorization when permitted or required by
            applicable law. Examples may include:
          </p>
          <ul>
            <li>Medical emergencies</li>
            <li>Suspected abuse, neglect, or exploitation</li>
            <li>Court orders or lawful subpoenas</li>
            <li>Serious and imminent threats to safety</li>
            <li>Certain regulatory or oversight activities</li>
            <li>Other disclosures required or permitted by law</li>
          </ul>
          <p>
            Healing Horizons documents disclosures made under applicable legal requirements.
          </p>
        </>
      ),
    },
    {
      id: 'community-based-privacy',
      heading: 'Privacy in Community-Based Services',
      body: (
        <>
          <p>
            Because PRP services may be provided in homes and community settings, we take additional
            precautions to protect privacy. Staff are expected to:
          </p>
          <ul>
            <li>Avoid unnecessary discussions of PHI in public areas</li>
            <li>Use discretion during home and community visits</li>
            <li>Confirm participant identity before sharing information</li>
            <li>Protect service notes and other records from unauthorized viewing</li>
            <li>Maintain appropriate professional boundaries</li>
            <li>Take reasonable steps to protect confidentiality during community-based services</li>
          </ul>
          <p>
            Our PRP program is primarily community-based, and services may occur in participant
            residences, community centers, libraries, educational or employment settings, provider
            offices when appropriate, and other approved locations.
          </p>
        </>
      ),
    },
    {
      id: 'your-privacy-rights',
      heading: 'Your Privacy Rights',
      body: (
        <>
          <p>
            You have rights regarding your Protected Health Information, subject to applicable law.
            You may have the right to:
          </p>
          <ul>
            <li>
              <strong>Access Your Records:</strong> Request access to your health information and
              records as permitted by HIPAA and applicable law.
            </li>
            <li>
              <strong>Request Corrections:</strong> Request correction of information that you
              believe is inaccurate or incomplete.
            </li>
            <li>
              <strong>Request Confidential Communications:</strong> Request that we communicate with
              you about your health information in a particular way or at a particular location when
              permitted by law.
            </li>
            <li>
              <strong>Request Restrictions:</strong> Request restrictions on certain uses or
              disclosures of your health information, subject to applicable legal requirements.
            </li>
            <li>
              <strong>Request an Accounting of Disclosures:</strong> Request information about
              certain disclosures of your PHI, subject to applicable exceptions.
            </li>
            <li>
              <strong>Receive a Copy of This Notice:</strong> Request a paper or electronic copy of
              this Privacy Notice at any time.
            </li>
            <li>
              <strong>Choose a Personal Representative:</strong> Where legally authorized, a
              personal representative such as a guardian may exercise applicable privacy rights on
              your behalf.
            </li>
            <li>
              <strong>File a Complaint:</strong> You may file a privacy complaint with Healing
              Horizons or with the U.S. Department of Health and Human Services Office for Civil
              Rights.
            </li>
          </ul>
          <p>
            Healing Horizons will not retaliate against you for filing a privacy complaint.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-protect-information',
      heading: 'How We Protect Your Information',
      body: (
        <>
          <p>
            Healing Horizons maintains safeguards designed to protect participant information from
            unauthorized access, use, disclosure, alteration, or loss.
          </p>

          <h3>Physical Records</h3>
          <p>Physical records are:</p>
          <ul>
            <li>Stored in secure locations</li>
            <li>Accessible only to authorized personnel</li>
            <li>Protected from unauthorized removal or access</li>
          </ul>

          <h3>Electronic Records</h3>
          <p>
            Electronic information is maintained using security measures appropriate to the systems
            in use, which may include:
          </p>
          <ul>
            <li>Password-protected systems</li>
            <li>Role-based access</li>
            <li>User authentication</li>
            <li>Secure backups</li>
            <li>Encryption where appropriate</li>
          </ul>
          <p>
            Access to participant information is limited to authorized personnel who need the
            information to perform their responsibilities.
          </p>
        </>
      ),
    },
    {
      id: 'workforce-training',
      heading: 'Confidentiality Training & Workforce Responsibilities',
      body: (
        <>
          <p>
            Healing Horizons requires staff to protect participant confidentiality. Staff receive
            training regarding:
          </p>
          <ul>
            <li>HIPAA and confidentiality requirements</li>
            <li>Handling Protected Health Information</li>
            <li>Release of Information procedures</li>
            <li>Community-based privacy practices</li>
            <li>Reporting privacy incidents</li>
            <li>Professional boundaries and ethical responsibilities</li>
          </ul>
          <p>Privacy and confidentiality requirements apply across all service settings.</p>
        </>
      ),
    },
    {
      id: 'privacy-incidents-breaches',
      heading: 'Privacy Incidents & Breaches',
      body: (
        <>
          <p>
            A privacy breach may occur when Protected Health Information is accessed, used, or
            disclosed improperly. Examples may include:
          </p>
          <ul>
            <li>Unauthorized access to participant information</li>
            <li>Sharing records without proper authorization</li>
            <li>Improper discussion of participant information</li>
            <li>Loss of unsecured participant documentation</li>
          </ul>
          <p>
            When a potential breach is identified, Healing Horizons will take appropriate steps,
            which may include:
          </p>
          <ul>
            <li>Securing the affected information</li>
            <li>Notifying appropriate leadership or compliance personnel</li>
            <li>Investigating the incident</li>
            <li>Documenting findings and corrective actions</li>
            <li>Notifying affected individuals when required</li>
            <li>Reporting to regulatory authorities when legally required</li>
          </ul>
        </>
      ),
    },
    {
      id: 'participant-records',
      heading: 'Participant Records & Confidentiality',
      body: (
        <>
          <p>
            Healing Horizons maintains participant records in accordance with applicable
            requirements. Records may include:
          </p>
          <ul>
            <li>Referral information</li>
            <li>Intake assessments</li>
            <li>Eligibility documentation</li>
            <li>Consent and authorization forms</li>
            <li>Participant rights acknowledgments</li>
            <li>Individual Rehabilitation Plans</li>
            <li>Service encounter documentation</li>
            <li>Progress notes</li>
            <li>Reviews and updates</li>
            <li>Incident documentation when applicable</li>
            <li>Discharge and transition documentation</li>
          </ul>
          <p>
            Records are maintained securely and accessed only by authorized personnel with a
            legitimate need for the information.
          </p>
        </>
      ),
    },
    {
      id: 'commitment-to-privacy',
      heading: 'Our Commitment to Privacy',
      body: (
        <>
          <p>
            Healing Horizons Behavioral Health, LLC is committed to protecting participant privacy
            while providing recovery-oriented, person-centered psychiatric rehabilitation services.
          </p>
          <p>
            Our program is designed around dignity, independence, community integration, and
            participant-centered care.
          </p>
          <p>
            We review our privacy and confidentiality practices regularly and update them as
            necessary to reflect applicable HIPAA requirements, Maryland behavioral health
            requirements, CARF standards, and organizational practices.
          </p>
        </>
      ),
    },
    {
      id: 'changes-to-notice',
      heading: 'Changes to This Notice',
      body: (
        <>
          <p>
            We may update this Privacy Notice when our privacy practices or applicable requirements
            change. The current version will be made available on our website and upon request.
          </p>
          <p>
            The effective date shown at the beginning of this notice identifies the current version.
          </p>
        </>
      ),
    },
    {
      id: 'questions-and-contacts',
      heading: 'Questions, Privacy Requests & Complaints',
      body: (
        <>
          <p>
            If you have questions about this notice, want to request access to your records, or have
            a privacy concern, please contact Healing Horizons Behavioral Health, LLC.
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
            <p style={{ fontWeight: 'var(--weight-bold)', margin: 0, color: 'var(--text-primary)' }}>
              Privacy Contact
            </p>
            <p style={{ margin: 'var(--space-1) 0 0' }}>
              <strong>Healing Horizons Behavioral Health, LLC</strong>
              <br />
              Waldorf, Maryland
              <br />
              Phone: <a href="tel:4434139692">443-413-9692</a>
              <br />
              Email:{' '}
              <a href="mailto:privacy@healinghorizonsbhs.com">privacy@healinghorizonsbhs.com</a>
            </p>
          </div>
          <p style={{ marginTop: 'var(--space-3)' }}>
            You may also contact us to request a paper copy of this notice.
          </p>
        </>
      ),
    },
    {
      id: 'hhs-complaints',
      heading: 'Complaints to the U.S. Department of Health & Human Services',
      body: (
        <>
          <p>You may also submit a complaint to the:</p>
          <p>
            <strong>U.S. Department of Health and Human Services</strong>
            <br />
            Office for Civil Rights
          </p>
          <p>
            You have the right to file a complaint if you believe your privacy rights have been
            violated. Healing Horizons will not retaliate against you for filing a complaint.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Privacy Policy & Notice of Privacy Practices"
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      intro={intro}
      customNotice={customNotice}
      sections={sections}
    />
  );
}

export default PrivacyPage;
