import { Avatar, Badge, Button, Card, Icon, SectionHeading, StatusBadge } from '../ui';
import { team } from '../../data/team';
import paths from '../../routes/paths';
import styles from './TeamPreview.module.css';

const PREVIEW_COUNT = 4;

/**
 * TeamPreview — four clinicians, with their real current availability.
 *
 * Showing someone who is closed to new clients is deliberate. A directory
 * where everyone is always available is the kind of thing people notice after
 * they have already been disappointed once.
 */
export function TeamPreview() {
  const members = team.slice(0, PREVIEW_COUNT);

  return (
    <section
      className={`section section--sunken ${styles.teamSection}`}
      aria-labelledby="team-heading"
    >
      <div className="container">
        <SectionHeading
          id="team-heading"
          eyebrow="Who you would be talking to"
          title="Our therapists"
          intro="Every clinician here is independently licensed and has their own areas of focus. You can read a full profile before you decide, or let our intake coordinator suggest a match."
        />

        <ul className={styles.grid}>
          {members.map((member) => (
            <li key={member.slug} className={styles.cell}>
              <Card to={paths.therapist(member.slug)} padding="md" className={styles.card}>
                <Avatar
                  initials={member.initials}
                  accent={member.accent}
                  size="md"
                  alt=""
                  aria-hidden="true"
                />

                <div className={styles.identity}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.credentials}>{member.credentials}</p>
                  <p className={styles.pronouns}>{member.pronouns}</p>
                </div>

                <ul className={styles.focus}>
                  {member.focus.slice(0, 3).map((area) => (
                    <li key={area}>
                      <Badge tone="brand" size="sm">
                        {area}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <StatusBadge available={member.acceptingClients}>
                    {member.availability}
                  </StatusBadge>
                  <span className={styles.more}>
                    Read profile
                    <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </Card>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Button to={paths.therapists} variant="secondary" iconRight="arrowRight">
            Meet all {team.length} therapists
          </Button>
          <p className={styles.footerNote}>
            If the fit is not right after a session or two, say so. Changing therapists inside the
            practice is normal, and we make it easy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;
