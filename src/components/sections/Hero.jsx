import { useUI } from '../../context/UIContext';
import { Button, Icon, StatusBadge } from '../ui';
import { site } from '../../data/site';
import { team } from '../../data/team';
import paths from '../../routes/paths';
import styles from './Hero.module.css';

/**
 * Hero — the first thing anyone sees, and the only <h1> on the page.
 *
 * The right-hand visual is drawn inline rather than loaded as an image: it
 * costs no network request, scales to any size, and takes its colours from the
 * design tokens, so a palette change moves it too. Everything it communicates
 * is also stated in text, so it is marked decorative.
 */
export function Hero() {
  const { openBooking } = useUI();
  const acceptingCount = team.filter((member) => member.acceptingClients).length;

  return (
    <section className={`section ${styles.hero}`} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            {/* Statewide only for now. The street address is still marked
                "to be confirmed" in site.js, so printing address.line1 here
                would read "Street address to be confirmed, Waldorf".
                Restore when the address is settled:
                {site.address.line1}, {site.address.city} <dot> ... */}
            <p className={styles.eyebrow}>
              Psychiatric Rehabilitation Program (PRP) · {site.serviceAreas.join(' & ')}
            </p>

            <h1 id="hero-heading" className={styles.title}>
              Empowering Independence, Recovery & Community Living
            </h1>

            <p className={styles.intro}>
              Person-centered, community-based Psychiatric Rehabilitation Program (PRP) services across Maryland. Supporting adults and transitional-age youth to build essential life skills, manage wellness, and thrive.
            </p>

            <div className={styles.actions}>
              <Button type="button" size="lg" iconRight="arrowRight" onClick={openBooking}>
                Make a referral / Get started
              </Button>
              <Button to={paths.services} size="lg" variant="outline">
                Explore PRP services
              </Button>
            </div>

            <p className={styles.reassure}>
              <Icon name="shieldCheck" size={18} />
              <span>Maryland Medicaid & BHA Authorized · In-Home & Community-Based</span>
            </p>
          </div>

          <div className={styles.visual}>
            <HorizonArt className={styles.art} />

            <p className={styles.licence}>
              <Icon name="shieldCheck" size={18} />
              <span>CARF-Aligned · Licensed in {site.serviceAreas.join(' & ')}</span>
            </p>

            <div className={styles.availability}>
              <StatusBadge available>Accepting new referrals</StatusBadge>
              <p className={styles.availabilityText}>
                Accepting new participants & referrals for adults and youth across Maryland with flexible scheduling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The horizon composition: an arch cut through a sunrise. Colours live in the
 * stylesheet as classes rather than presentation attributes, because `var()`
 * is not reliable inside SVG presentation attributes.
 */
function HorizonArt({ className }) {
  const arch =
    'M20 490V280a240 240 0 0 1 480 0v210a30 30 0 0 1-30 30H50a30 30 0 0 1-30-30Z';

  return (
    <svg className={className} viewBox="0 0 520 520" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="hh-hero-arch">
          <path d={arch} />
        </clipPath>

        <linearGradient id="hh-hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className={styles.skyTop} />
          <stop offset="0.52" className={styles.skyMid} />
          <stop offset="1" className={styles.skyLow} />
        </linearGradient>

        <radialGradient id="hh-hero-sun" cx="0.5" cy="0.42" r="0.62">
          <stop offset="0" className={styles.sunCore} />
          <stop offset="1" className={styles.sunEdge} />
        </radialGradient>

        <radialGradient id="hh-hero-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" className={styles.glowIn} />
          <stop offset="1" className={styles.glowOut} />
        </radialGradient>
      </defs>

      {/* Loose satellites, outside the arch */}
      <g className={styles.satellites}>
        <circle cx="62" cy="98" r="27" className={styles.ring} />
        <circle cx="466" cy="134" r="9" className={styles.dot} />
        <circle cx="103" cy="186" r="4.5" className={styles.dot} />
      </g>

      <g clipPath="url(#hh-hero-arch)">
        <rect x="0" y="0" width="520" height="520" fill="url(#hh-hero-sky)" />
        <circle cx="260" cy="316" r="212" fill="url(#hh-hero-glow)" />

        {/* Rising sun, echoing the practice mark */}
        <g className={styles.sun}>
          <circle cx="260" cy="320" r="76" fill="url(#hh-hero-sun)" />
          <g className={styles.rays}>
            <path d="M260 226v-32" />
            <path d="m196 256-22-22" />
            <path d="m324 256 22-22" />
            <path d="M170 320h-30" />
            <path d="M350 320h30" />
          </g>
        </g>

        {/* Drifting motes */}
        <g className={styles.motes}>
          <circle cx="120" cy="150" r="3.5" />
          <circle cx="398" cy="206" r="4.5" />
          <circle cx="330" cy="120" r="2.5" />
          <circle cx="152" cy="262" r="2.5" />
        </g>

        {/* Layered horizon */}
        <path d="M0 372C110 336 410 336 520 372V520H0Z" className={styles.bandFar} />
        <path d="M0 412C150 380 350 400 520 386V520H0Z" className={styles.bandMid} />
        <path d="M0 412C150 380 350 400 520 386" className={styles.bandEdge} />
        <path d="M0 456C140 428 360 452 520 430V520H0Z" className={styles.bandNear} />
        <path d="M0 498C170 474 330 494 520 476V520H0Z" className={styles.bandFront} />
      </g>

      <path d={arch} className={styles.archOutline} />
    </svg>
  );
}

export default Hero;
