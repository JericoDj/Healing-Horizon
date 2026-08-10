import { site } from '../../data/site';
import { usePageMeta } from '../../hooks/usePageMeta';
import LegalLayout from './LegalLayout';

const LAST_UPDATED = '1 August 2026';
const EFFECTIVE_DATE = '2026-08-01';

/**
 * AccessibilityPage
 *
 * An accessibility statement is only useful if it is honest. The "known
 * limitations" section is the one that matters — a statement that claims
 * everything is perfect tells a disabled user nothing, and is usually false.
 */
export function AccessibilityPage() {
  usePageMeta({
    title: 'Accessibility',
    description: `How ${site.name} approaches digital and physical accessibility, what we have done, what we know is still imperfect, and how to ask for an accommodation.`,
  });

  const sections = [
    {
      id: 'commitment',
      heading: 'Our commitment',
      body: (
        <>
          <p>
            Mental health care should not be harder to reach because of how a website is built, how
            a building is laid out, or how a document is formatted. We take that seriously, and we
            treat accessibility as part of clinical access rather than as a compliance exercise.
          </p>
          <p>
            <strong>
              Our target is the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.
            </strong>{' '}
            We exceed it in some places and we know we do not meet every point in others; those are
            listed honestly in <a href="#limitations">section 4</a>.
          </p>
          <p>
            If any part of this practice is difficult for you to use, that is information we want.
            Telling us is not a complaint we will find inconvenient — it is the fastest way for us
            to fix something.
          </p>
        </>
      ),
    },
    {
      id: 'website',
      heading: 'What we have built into this website',
      body: (
        <>
          <h3>Structure and navigation</h3>
          <ul>
            <li>Semantic HTML with proper landmark regions on every page.</li>
            <li>
              One clear page heading per page, with heading levels that never skip — so screen
              reader users can navigate by heading.
            </li>
            <li>
              A &ldquo;skip to main content&rdquo; link as the first item you reach with the Tab
              key.
            </li>
            <li>
              The page title and browser history update on every route change, so back and forward
              behave as expected.
            </li>
          </ul>

          <h3>Keyboard and focus</h3>
          <ul>
            <li>Every interactive element can be reached and operated with a keyboard alone.</li>
            <li>
              A high-contrast focus ring is always visible, and we never remove focus outlines.
            </li>
            <li>The mobile menu closes with the Escape key and returns you where you were.</li>
            <li>Menus, accordions and multi-step forms follow standard keyboard patterns.</li>
          </ul>

          <h3>Colour and contrast</h3>
          <ul>
            <li>
              Body text sits at a contrast ratio of about 12.5:1 against the page background —
              comfortably above the 4.5:1 that AA requires, and above the 7:1 required for AAA.
            </li>
            <li>Links and interface controls meet or exceed AA contrast requirements.</li>
            <li>
              Meaning is never carried by colour alone. Every status that has a colour also has
              text.
            </li>
          </ul>

          <h3>Text and layout</h3>
          <ul>
            <li>Body text is never smaller than 16 pixels, with generous line spacing.</li>
            <li>
              The layout reflows to a 320-pixel-wide screen without horizontal scrolling, and
              remains usable at 200% zoom.
            </li>
            <li>
              Text is real text, not images of text, so it can be resized, restyled and read aloud.
            </li>
          </ul>

          <h3>Forms</h3>
          <ul>
            <li>
              Every field has a visible label. We do not use placeholder text as a label, because
              it disappears the moment you start typing.
            </li>
            <li>
              Required and optional fields are marked in the label, not only by colour or an
              asterisk.
            </li>
            <li>
              Errors appear next to the field, are announced to screen readers, and say what to do
              rather than only what is wrong.
            </li>
            <li>Validation runs when you leave a field, not while you are mid-word.</li>
            <li>
              <strong>There is no CAPTCHA anywhere on this site.</strong> Requiring someone to
              solve a visual puzzle to contact a therapist is not acceptable to us, so we use an
              invisible method instead.
            </li>
          </ul>

          <h3>Motion</h3>
          <ul>
            <li>
              If your device is set to reduce motion, we honour it — animations and transitions are
              switched off, not merely shortened.
            </li>
            <li>Nothing auto-plays, flashes, or moves without your action.</li>
            <li>
              There are no pop-ups, no exit-intent overlays and no interruptions while you are
              reading.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'assistive-tech',
      heading: 'Assistive technology',
      body: (
        <>
          <p>
            This site is built to standards that work with current assistive technology, including
            screen readers such as VoiceOver, NVDA, JAWS and TalkBack, screen magnification, voice
            control, and browser reading modes.
          </p>
          <p>
            We test with keyboard navigation and with VoiceOver as part of our normal process.
            Formal testing with a wider range of tools, and with disabled users, is something we
            intend to do rather than something we claim to have completed.
          </p>
          <p>
            If you use assistive technology and something here does not work with it, please tell
            us which tool and which page. That detail makes a fix far quicker.
          </p>
        </>
      ),
    },
    {
      id: 'limitations',
      heading: 'Known limitations',
      body: (
        <>
          <p>
            We would rather tell you what is imperfect than let you discover it. As of the date of
            this statement:
          </p>
          <ul>
            <li>
              <strong>Third-party systems.</strong> Our scheduling, payment and telehealth
              platforms are operated by other companies. We chose them partly on accessibility, but
              we do not control their interfaces. If one of them is a barrier for you, tell us and
              we will complete the task with you another way — by phone, in person, or on paper.
            </li>
            <li>
              <strong>Documents.</strong> Some intake and insurance forms originate as PDFs from
              third parties and are not all fully tagged for screen readers. We can provide any of
              them in an accessible format, in large print, or complete them with you verbally.
            </li>
            <li>
              <strong>Formal audit.</strong> This site has not yet had an independent third-party
              accessibility audit. Our conformance claim is based on our own testing.
            </li>
            <li>
              <strong>Captions.</strong> We do not currently publish video. If we do, it will ship
              with accurate captions and a transcript from the day it goes live.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'office',
      heading: 'Our office',
      body: (
        <>
          <p>
            Our practice is at {site.address.line1}, {site.address.line2}, {site.address.city},{' '}
            {site.address.state} {site.address.postalCode}.
          </p>
          <ul>
            <li>
              <strong>Entrance.</strong> Step-free from the street. No kerb to negotiate at the
              main door.
            </li>
            <li>
              <strong>Lift.</strong> Serves all floors, including our suite on the third floor.
            </li>
            <li>
              <strong>Restroom.</strong> An accessible restroom is on our floor.
            </li>
            <li>
              <strong>Doorways and corridors.</strong> Wide enough for a wheelchair throughout the
              suite, including consulting rooms.
            </li>
            <li>
              <strong>Parking.</strong> Metered street parking on the same block, and a public
              garage with accessible bays adjacent to the building.
            </li>
            <li>
              <strong>Transit.</strong> Several bus routes and the light rail stop within a short,
              step-free walk.
            </li>
            <li>
              <strong>Waiting area.</strong> Seating with and without arms, adjustable lighting,
              and a quieter corner away from the door.
            </li>
            <li>
              <strong>Service animals</strong> are welcome anywhere in the practice.
            </li>
          </ul>
          <p>
            If you would like to see the space before your first appointment, or want a specific
            detail confirmed, call us and we will walk you through it — or arrange for you to visit
            without an appointment.
          </p>
        </>
      ),
    },
    {
      id: 'accommodations',
      heading: 'Accommodations we can arrange',
      body: (
        <>
          <p>
            <strong>You do not need to explain why you need something.</strong> Ask, and we will
            arrange it if we can.
          </p>
          <ul>
            <li>
              <strong>Interpreters</strong>, including ASL, arranged in advance at no cost to you.
              Please give us as much notice as you can so we can book a qualified interpreter
              rather than an available one.
            </li>
            <li>
              <strong>Documents</strong> in large print, plain language, or an accessible digital
              format.
            </li>
            <li>
              <strong>Extra time</strong> at the start of an appointment for paperwork, or help
              completing it.
            </li>
            <li>
              <strong>Telehealth</strong> instead of travelling, where clinically appropriate.
            </li>
            <li>
              <strong>Sensory adjustments</strong> — lighting, seating position, a quieter time of
              day, or waiting somewhere other than the main waiting area.
            </li>
            <li>
              <strong>A support person</strong> present, where that helps and is clinically
              workable.
            </li>
            <li>
              <strong>Communication preferences</strong> — text instead of phone, no voicemail,
              email only, or a specific number.
            </li>
          </ul>
          <p>
            Mention anything you need when you first contact us, or at any point afterwards. It
            goes in your file so you never have to ask twice.
          </p>
        </>
      ),
    },
    {
      id: 'feedback',
      heading: 'Telling us about a problem',
      body: (
        <>
          <p>
            If you hit a barrier on this website, in our building, or in any document we send you,
            please tell us. Include the page or place, what you were trying to do, and what
            happened — and the browser or assistive technology you were using, if that is relevant.
          </p>
          <ul>
            <li>
              <strong>Phone:</strong> <a href={site.contact.phoneHref}>{site.contact.phone}</a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <strong>Post:</strong> {site.legalName}, {site.address.line1},{' '}
              {site.address.line2}, {site.address.city}, {site.address.state}{' '}
              {site.address.postalCode}
            </li>
          </ul>
          <p>
            <strong>We aim to acknowledge accessibility reports within two business days</strong>{' '}
            and to tell you what we are doing about it within ten. If a fix will take longer, we
            will say so and offer another way to do what you were trying to do in the meantime.
          </p>
        </>
      ),
    },
    {
      id: 'formal-complaints',
      heading: 'If our response is not enough',
      body: (
        <>
          <p>
            We would like the chance to put things right ourselves. If we do not, or if you would
            rather go elsewhere, you can raise a complaint with:
          </p>
          <ul>
            <li>
              The <strong>U.S. Department of Health and Human Services, Office for Civil Rights</strong>,
              which handles disability discrimination complaints against healthcare providers.
            </li>
            <li>
              The <strong>U.S. Department of Justice</strong>, which enforces the Americans with
              Disabilities Act.
            </li>
            <li>
              The <strong>Oregon Bureau of Labor and Industries Civil Rights Division</strong>, for
              complaints under Oregon law.
            </li>
          </ul>
          <p>
            <strong>
              Making a complaint will never affect the care you receive here, and we will not
              retaliate in any way.
            </strong>
          </p>
        </>
      ),
    },
    {
      id: 'review',
      heading: 'How this statement is maintained',
      body: (
        <>
          <p>
            This statement was prepared on {LAST_UPDATED} and reflects the site as it is today.
          </p>
          <p>
            We review it at least once a year, and again whenever we make a significant change to
            the website or the office. Accessibility is checked as part of building any new page,
            rather than audited afterwards, which is the only approach that actually holds over
            time.
          </p>
          <p>
            When we fix something listed under <a href="#limitations">known limitations</a>, we
            update this page and change the date at the top.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Accessibility"
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
      intro={
        <>
          <p>
            This statement sets out how we approach accessibility — online and in our building —
            what we have done, what we know is still imperfect, and how to ask for something you
            need.
          </p>
          <p>
            We would rather be asked than have you work around us.
          </p>
        </>
      }
    />
  );
}

export default AccessibilityPage;
