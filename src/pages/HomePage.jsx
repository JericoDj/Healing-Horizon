import { usePageMeta } from '../hooks/usePageMeta';
import ClosingCta from '../components/sections/ClosingCta';
import FaqPreview from '../components/sections/FaqPreview';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import ReflectionsSection from '../components/sections/ReflectionsSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import TeamPreview from '../components/sections/TeamPreview';
import TrustStrip from '../components/sections/TrustStrip';
import styles from './HomePage.module.css';

/**
 * HomePage — composed entirely from section components so each block can be
 * read, reviewed and changed on its own.
 *
 * No `title` is passed: usePageMeta falls back to "Healing Horizon — <tagline>"
 * for a falsy title, which is what the home page should announce.
 *
 * Section order is deliberate. Reassurance (what this costs, who you talk to)
 * comes before persuasion, because the reader is usually anxious rather than
 * unconvinced.
 */
export function HomePage() {
  usePageMeta({
    description:
      'Community-based Psychiatric Rehabilitation Program (PRP) in Maryland. Empowering adults and youth with independent living skills, wellness management, and care coordination.',
  });

  return (
    <div className={styles.page}>
      <Hero />
      <ServicesPreview />
      <TrustStrip />
      {/* 
      <HowItWorks />
      <TeamPreview />
      <ReflectionsSection />
      <FaqPreview />
      <ClosingCta />
      */}
    </div>
  );
}

export default HomePage;
