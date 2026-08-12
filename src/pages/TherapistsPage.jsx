import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Icon,
  SectionHeading,
  StatusBadge,
} from '../components/ui';
import { focusAreas, team, therapistMatchesFocusArea } from '../data/team';
import { site } from '../data/site';
import paths from '../routes/paths';
import styles from './TherapistsPage.module.css';

const ALL_FOCUS = 'all';

/**
 * TherapistsPage — the clinician directory.
 *
 * The filter is deliberately plain state: two values, no URL sync, no library.
 * Everything it does is announced in a live region, because a filter that
 * silently rewrites the page below it is useless to anyone not watching it.
 */
export function TherapistsPage() {
  usePageMeta({
    title: 'Our Therapists',
    description:
      'Meet the clinicians at Healing Horizon. Filter by area of focus or availability, or let our intake coordinator match you on a free 15-minute call.',
  });

  const [activeFocus, setActiveFocus] = useState(ALL_FOCUS);
  const [acceptingOnly, setAcceptingOnly] = useState(false);

  // Eight curated areas rather than the two dozen raw focus labels — see the
  // comment on `focusAreas` in src/data/team.js for why.
  const focusOptions = useMemo(
    () => [
      { id: ALL_FOCUS, label: 'All' },
      ...focusAreas.filter((area) => team.some((m) => therapistMatchesFocusArea(m, area.id))),
    ],
    [],
  );

  const visible = useMemo(
    () =>
      team.filter((member) => {
        const matchesFocus =
          activeFocus === ALL_FOCUS || therapistMatchesFocusArea(member, activeFocus);
        const matchesAvailability = !acceptingOnly || member.acceptingClients;
        return matchesFocus && matchesAvailability;
      }),
    [activeFocus, acceptingOnly],
  );

  const isFiltered = activeFocus !== ALL_FOCUS || acceptingOnly;

  const clearFilters = () => {
    setActiveFocus(ALL_FOCUS);
    setAcceptingOnly(false);
  };

  const coordinator = team.find((member) => /intake/i.test(member.role)) ?? null;
  const coordinatorFirstName = coordinator ? coordinator.name.split(' ')[0] : 'our intake coordinator';

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="therapists-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">The team</p>
            <h1 id="therapists-heading">Our therapists</h1>
            <p className={styles.lead}>
              What the research on therapy keeps returning to is fit — whether you and your
              therapist agree on what you are working on, and whether you can be honest in the
              room. It predicts more about how therapy goes than the method on the wall does.
            </p>
            <p className={styles.leadSecondary}>
              So read these profiles the way you would read a room. Notice who you could imagine
              saying the awkward part to. And if choosing feels like one decision too many this
              week, you do not have to: tell us roughly what is going on and {coordinatorFirstName},
              who runs intake here, will suggest one or two names on a free 15-minute call.
            </p>
            <div className={styles.heroActions}>
              <Button to={paths.book} variant="primary" size="lg" iconRight="arrowRight">
                Book a 15-minute consultation
              </Button>
              <Button to={paths.contact} variant="outline" size="lg">
                Ask us to match you
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Directory */}
      <section className="section section--sunken" aria-labelledby="directory-heading">
        <div className="container">
          <SectionHeading
            id="directory-heading"
            eyebrow="Browse"
            title="Find someone whose training fits"
            intro="Filter by what you are bringing, or by who has room right now. Availability is updated by hand and changes most weeks — if the person you want is full, ask about the waitlist anyway."
          />

          <div className={styles.filters}>
            <div className={styles.filterBlock}>
              <p className={styles.filterLabel} id="focus-filter-label">
                Area of focus
              </p>
              <div className={styles.chips} role="group" aria-labelledby="focus-filter-label">
                {focusOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={styles.chip}
                    aria-pressed={activeFocus === option.id}
                    onClick={() => setActiveFocus(option.id)}
                  >
                    {activeFocus === option.id ? (
                      <Icon name="check" size={14} strokeWidth={2.4} />
                    ) : null}
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterBlock}>
              <p className={styles.filterLabel} id="availability-filter-label">
                Availability
              </p>
              <div className={styles.chips} role="group" aria-labelledby="availability-filter-label">
                <button
                  type="button"
                  className={styles.chip}
                  aria-pressed={acceptingOnly}
                  onClick={() => setAcceptingOnly((previous) => !previous)}
                >
                  {acceptingOnly ? <Icon name="check" size={14} strokeWidth={2.4} /> : null}
                  Accepting new clients
                </button>
              </div>
            </div>
          </div>

          <div className={styles.resultBar}>
            <p className={styles.count} role="status" aria-live="polite" aria-atomic="true">
              Showing {visible.length} of {team.length}{' '}
              {visible.length === 1 ? 'therapist' : 'therapists'}
            </p>
            {isFiltered ? (
              <button type="button" className={styles.clearButton} onClick={clearFilters}>
                <Icon name="close" size={15} />
                Clear filters
              </button>
            ) : null}
          </div>

          {visible.length === 0 ? (
            <Card tone="outline" padding="lg" className={styles.empty}>
              <h3 className={styles.emptyTitle}>Nobody matches that combination right now</h3>
              <p className={styles.emptyBody}>
                Caseloads move week to week, and clinicians sometimes hold slots that never reach
                this page. Clear the filters to see everyone, or tell us what you are looking for
                and we will say honestly whether we have someone — or refer you out if we do not.
              </p>
              <div className={styles.emptyActions}>
                <Button variant="secondary" onClick={clearFilters}>
                  Clear filters
                </Button>
                <Button variant="outline" to={paths.contact}>
                  Ask about the waitlist
                </Button>
              </div>
            </Card>
          ) : (
            <ul className={styles.grid}>
              {visible.map((member) => (
                <li key={member.slug} className={styles.gridItem}>
                  <Card as="article" tone="raised" padding="md" interactive className={styles.person}>
                    <div className={styles.personTop}>
                      <div className={styles.personMedia}>
                        <Avatar
                          size="lg"
                          initials={member.initials}
                          accent={member.accent}
                          alt=""
                          aria-hidden="true"
                        />
                      </div>
                      <div className={styles.personIdentity}>
                        <h3 className={styles.personName}>
                          <Link to={paths.therapist(member.slug)} className={styles.personLink}>
                            {member.name}
                          </Link>
                        </h3>
                        <p className={styles.personCredentials}>{member.credentials}</p>
                        <p className={styles.personRole}>
                          {member.role} · {member.pronouns}
                        </p>
                      </div>
                    </div>

                    <div className={styles.personStatus}>
                      <StatusBadge available={member.acceptingClients}>
                        {member.acceptingClients ? 'Accepting new clients' : 'Not accepting new clients'}
                      </StatusBadge>
                      <span className={styles.availability}>
                        <Icon name="clock" size={15} />
                        {member.availability}
                      </span>
                    </div>

                    <p className={styles.personBio}>{member.shortBio}</p>

                    <ul className={styles.focusList}>
                      {member.focus.map((item) => (
                        <li key={item}>
                          <Badge tone="brand" size="sm">
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    <dl className={styles.personMeta}>
                      <dt>Speaks</dt>
                      <dd>{member.languages.join(', ')}</dd>
                    </dl>

                    <p className={styles.personCta} aria-hidden="true">
                      Read full profile
                      <Icon name="arrowRight" size={16} />
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------- Matching */}
      <section className="section" aria-labelledby="matching-heading">
        <div className="container">
          <SectionHeading
            id="matching-heading"
            eyebrow="If you would rather not choose"
            title="How matching works"
            intro="Most people arrive unsure who to ask for. That is the normal starting point, not a failure to do your homework."
          />

          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                1
              </span>
              <h3 className={styles.stepTitle}>Tell us roughly what is going on</h3>
              <p className={styles.stepBody}>
                A few sentences through the contact form is enough — what brought this up, and what
                you would like to be different. Keep clinical detail out of the form; that
                conversation belongs on the phone or in session.
              </p>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                2
              </span>
              <h3 className={styles.stepTitle}>We suggest one or two names</h3>
              <p className={styles.stepBody}>
                {coordinator ? coordinator.name.split(' ')[0] : 'Our intake coordinator'} reads it
                and replies {site.responseTime} with the clinicians whose training and availability
                actually fit. If nobody here is the right person, you will be told that, and pointed
                somewhere else.
              </p>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                3
              </span>
              <h3 className={styles.stepTitle}>You meet them, and you can change your mind</h3>
              <p className={styles.stepBody}>
                The consultation call is 15 minutes and free. If the fit is not right after a
                session or two, say so — moving to a different therapist inside the practice is
                ordinary, and we handle the handover so you are not starting from scratch.
              </p>
            </li>
          </ol>

          <div className={styles.matchingActions}>
            <Button to={paths.book} variant="primary" size="lg" iconRight="arrowRight">
              Book a consultation
            </Button>
            <p className={styles.matchingNote}>
              No charge, no obligation to book anything afterwards.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Closing CTA */}
      <section className="section section--inverse" aria-labelledby="therapists-cta-heading">
        <div className="container">
          <SectionHeading
            id="therapists-cta-heading"
            align="center"
            eyebrow="Start small"
            title="Still not sure who to ask for?"
            intro="That is the most common place to begin. One short call and we will do the choosing with you."
          />
          <div className={styles.ctaActions}>
            <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
              Book a 15-minute call
            </Button>
            <Button href={site.contact.phoneHref} variant="inverseOutline" size="lg" iconLeft="phone">
              {site.contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TherapistsPage;
