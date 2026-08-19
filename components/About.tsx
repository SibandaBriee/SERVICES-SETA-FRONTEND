

import type { ReactNode } from "react";

import {
  aboutValues,
  administrator,
  executiveManagement as executiveTeam,
  nationalSkillsOutcomes,
  type AboutValue,
  type ExecutiveMember,
} from "../data/aboutData";

import styles from "../app/About.module.css";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-5.5 9.5-5.5S21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.7" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="14" r="7" />
      <circle cx="10" cy="14" r="3" />
      <path d="M14 10 21 3" />
      <path d="M16 3h5v5" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10v42M18 18h28M12 18l-8 18h16L12 18Zm40 0-8 18h16L52 18ZM20 54h24" />
    </svg>
  );
}

function ValueIcon({ icon }: { icon: AboutValue["icon"] }) {
  if (icon === "accountability") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="25" cy="23" r="13" />
        <path d="M34 33 49 48M13 52h24M42 31v17M49 37v11M56 26v22" />
      </svg>
    );
  }

  if (icon === "innovation") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 31c0-12 8-20 19-20s19 8 19 20c0 8-4 13-10 18H30c-6-5-10-10-10-18Z" />
        <path d="M31 54h16M34 60h10M39 4v7M15 13l7 6M61 13l-7 6" />
        <path d="M5 39c8-4 12-3 18 1" />
      </svg>
    );
  }

  if (icon === "integrity") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 9v43M18 17h28M11 17 4 34h14L11 17Zm42 0-7 17h14l-7-17Z" />
        <path d="M15 53h34M8 39c6 8 12 11 24 14M56 39C50 47 44 50 32 53" />
      </svg>
    );
  }

  if (icon === "inclusivity") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="m8 29 13-11 12 8 10-7 13 11" />
        <path d="m15 31 13 13c3 3 7 3 10 0l12-12" />
        <path d="m22 38 7-7 6 6 8-8M16 50l7 7M48 50l-7 7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="20" cy="20" r="8" />
      <circle cx="44" cy="20" r="8" />
      <circle cx="32" cy="15" r="9" />
      <path d="M5 53c1-12 7-18 15-18s14 6 15 18M29 53c1-12 7-18 15-18s14 6 15 18M17 53c1-15 7-22 15-22s14 7 15 22" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .replace(/^Ms\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function PersonCard({
  person,
  featured = false,
}: {
  person: ExecutiveMember;
  featured?: boolean;
}) {
  return (
    <article
      className={`${styles.personCard} ${featured ? styles.personCardFeatured : ""}`}
    >
      <div className={styles.personAvatar} aria-hidden={!person.image}>
        {person.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.image} alt={person.name} />
        ) : (
          <span>{getInitials(person.name)}</span>
        )}
      </div>

      <h3>{person.name}</h3>
      <p>{person.role}</p>
    </article>
  );
}

const valuePositionClasses: Record<AboutValue["icon"], string> = {
  accountability: styles.valueTopLeft,
  innovation: styles.valueTopRight,
  integrity: styles.valueBottomLeft,
  inclusivity: styles.valueCenter,
  professionalism: styles.valueBottomRight,
};

export default function About() {
  return (
    <>
      <section className={styles.banner} id="content">
        <div className={`container ${styles.bannerInner}`}>
          <h1>ABOUT US</h1>
        </div>
      </section>

      <section className={styles.whatWeDo} id="what-we-do">
        <div className={`container ${styles.readingWidth}`}>
          <SectionTitle>What We Do</SectionTitle>

          <div className={styles.prose}>
            <p>
              Our primary function is to facilitate skills development through
              learning programmes such as learnerships, skills programmes,
              internships and other learning programmes. We do this by
              disbursing grants to employers and skills development providers
              to offer training to employed and unemployed learners. As
              delegated by the Quality Council for Trades and Occupations
              (QCTO), our role includes overseeing occupation-based training.
              People of all ages need to learn new skills. Others are already
              working but need to develop their skills and advance their
              careers. Others require new skills to gain employment.
            </p>

            <p>
              The services sector contributes more than a quarter of South
              Africa&apos;s GDP, with more than three million people employed.
              For the sector to thrive and grow, it requires competent and
              skilled workers.
            </p>

            <p>
              By facilitating and funding programmes that build the skill sets
              required by services industries and the workplace, Services SETA
              bridges the gap between formal education and training. To fulfil
              its functions, Services SETA partners with public and private
              learning institutions to deliver the training required.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.purposeSection}>
        <div className={`container ${styles.readingWidth}`}>
          <SectionTitle>Our Vision, Mission &amp; Values</SectionTitle>

          <div className={styles.statementStack}>
            <article className={styles.statementCard}>
              <span className={styles.statementIcon}>
                <EyeIcon />
              </span>
              <div>
                <h3>Our Vision</h3>
                <p>
                  A flourishing services sector that creates economic growth
                  and inclusive opportunities for all South Africans.
                </p>
              </div>
            </article>

            <article className={styles.statementCard}>
              <span className={styles.statementIcon}>
                <TargetIcon />
              </span>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To facilitate skills development for employment and
                  entrepreneurship in the services sector, fostering economic
                  growth.
                </p>
              </div>
            </article>
          </div>

          <h3 className={styles.valuesHeading}>
            THE SERVICES SETA UPHOLDS THE FOLLOWING VALUES
          </h3>

          <div className={styles.valuesDiagram}>
            {aboutValues.map((value) => (
              <article
                className={`${styles.valueItem} ${valuePositionClasses[value.icon]}`}
                key={value.title}
              >
                <span className={styles.valueIcon}>
                  <ValueIcon icon={value.icon} />
                </span>
                <strong>{value.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.legislationSection} id="legislation">
        <div className={`container ${styles.readingWidth}`}>
          <SectionTitle>Legislation Framework</SectionTitle>

          <div className={styles.prose}>
            <p>
              Sector Education and Training Authorities (SETAs) are highly
              regulated entities.
            </p>

            <p>
              SETAs are established by the Skills Development Act No. 97 of
              1998. The funding of SETAs is regulated by the Skills Development
              Levies Act No. 9 of 1999. Services SETA must manage these funds in
              accordance with the Public Finance Management Act (PFMA), related
              regulations and Supply Chain Management Regulations. These Acts
              are amended from time to time and such amendments must be
              reflected in the work of Services SETA.
            </p>

            <p>
              Services SETA&apos;s work is also guided by the South African
              Qualifications Act No. 58 of 1995. Under the Act, SETAs can be
              Education and Training Quality Assurers (ETQAs).
            </p>
          </div>

          <div className={styles.frameworkCard}>
            <div className={styles.frameworkIntro}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Services SETA" />

              <p>
                The National Qualifications Framework Act No. 67 of 2008 and
                amendments to the Skills Development Act established the
                Quality Council for Trades and Occupations (QCTO). Services
                SETA contributes to the country&apos;s National Development Plan
                2030, which emphasises the need for a skilled labour force to
                reduce poverty and promote equality. The National Skills
                Development Plan 2030 supports the NDP and has eight intended
                outcomes.
              </p>

              <span className={styles.scaleIcon}>
                <ScaleIcon />
              </span>
            </div>

            <div className={styles.outcomesBox}>
              <ul>
                {nationalSkillsOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.leadershipSection} id="leadership">
        <div className="container">
          <div className={styles.administratorWrap}>
            <PersonCard person={administrator} featured />
          </div>

          <SectionTitle>Executive Management</SectionTitle>

          <div className={styles.executiveGrid}>
            {executiveTeam.map((person) => (
              <PersonCard person={person} key={person.name} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}