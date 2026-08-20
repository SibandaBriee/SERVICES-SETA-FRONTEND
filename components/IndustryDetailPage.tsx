"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import type {
  IndustryContentBlock,
  IndustryInfoSection,
  IndustrySector,
  IndustrySubsector,
} from "../data/industries";
import styles from "./IndustryDetailPage.module.css";

type IndustryDetailPageProps = {
  industry: IndustrySector;
};

type ContentBlocksProps = {
  blocks: IndustryContentBlock[];
  compact?: boolean;
};

function ContentBlocks({ blocks, compact = false }: ContentBlocksProps) {
  return (
    <div className={compact ? styles.compactBlocks : styles.contentBlocks}>
      {blocks.map((block, index) => (
        <section className={styles.contentBlock} key={`${block.heading ?? "text"}-${index}`}>
          {block.heading && <h4>{block.heading}</h4>}

          {block.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {block.items && (
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

function InformationSection({ section }: { section: IndustryInfoSection }) {
  return (
    <section className={styles.infoSection}>
      <h4>{section.title}</h4>

      {section.text && <p>{section.text}</p>}

      {section.items && (
        <ul>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function sectionColumn(section: IndustryInfoSection) {
  const title = section.title.toLowerCase();

  if (
    title.includes("recommended") ||
    title.includes("employment") ||
    title.includes("statutory")
  ) {
    return "right";
  }

  return "left";
}

function InformationGrid({ sections }: { sections: IndustryInfoSection[] }) {
  const leftSections = sections.filter(
    (section) => sectionColumn(section) === "left",
  );
  const rightSections = sections.filter(
    (section) => sectionColumn(section) === "right",
  );

  return (
    <div className={styles.infoGrid}>
      <div className={styles.infoColumn}>
        {leftSections.map((section) => (
          <InformationSection key={section.title} section={section} />
        ))}
      </div>

      <div className={styles.infoColumn}>
        {rightSections.map((section) => (
          <InformationSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

const squareImageIds = new Set([
  "real-estate",
  "project-management",
  "labour-recruitment-service",
  "contact-centre",
  "marketing",
  "cleaning-services",
]);

function SectorImage({ subsector }: { subsector: IndustrySubsector }) {
  const isSquare = squareImageIds.has(subsector.id);

  return (
    <div
      className={`${styles.sectorImage} ${
        isSquare ? styles.sectorImageSquare : ""
      }`}
    >
      <Image
        alt={`${subsector.title} image`}
        fill
        sizes="(max-width: 720px) 100vw, 380px"
        src={subsector.image}
      />
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="m6.75 9 5.25 5.25L17.25 9" />
      </svg>
    </span>
  );
}

function StaticIndustry({ industry }: { industry: IndustrySector }) {
  const subsector = industry.subsectors[0];

  if (!subsector) {
    return null;
  }

  return (
    <section className={styles.staticSection}>
      <div className={styles.contentContainer}>
        <article className={styles.staticArticle}>
          <h2>{subsector.title}</h2>

          <div className={styles.staticRule} />

          <div className={styles.staticIntroGrid}>
            <SectorImage subsector={subsector} />

            <div className={styles.introCopy}>
              <p className={styles.orangeLabel}>About the Sector</p>
              <ContentBlocks blocks={subsector.introBlocks} compact />
            </div>
          </div>

          {subsector.detailBlocks && (
            <ContentBlocks blocks={subsector.detailBlocks} />
          )}

          {subsector.note && <p className={styles.note}>{subsector.note}</p>}

          <InformationGrid sections={subsector.sections} />

          {industry.downloadLabel && industry.downloadHref && (
            <div className={styles.downloadBand}>
              <span className={styles.mailIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48" role="presentation">
                  <circle cx="24" cy="24" r="21" />
                  <path d="M12 16h24v17H12z" />
                  <path d="m13 17 11 9 11-9" />
                </svg>
              </span>

              <Link href={industry.downloadHref}>{industry.downloadLabel}</Link>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default function IndustryDetailPage({
  industry,
}: IndustryDetailPageProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  function toggleItem(id: string) {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  const pageStyle = {
    "--sector-accent": industry.accent,
  } as CSSProperties;

  return (
    <div className={styles.page} style={pageStyle}>
      <section className={styles.heroSection} id="content">
        <div className={styles.heroCard}>
          <div className={styles.heroCopy}>
            <h1>{industry.title}</h1>
            <p>{industry.intro}</p>
          </div>

          <div className={styles.heroArtwork}>
            <Image
              alt={`${industry.title} sector`}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 430px"
              src={industry.heroImage}
            />
          </div>
        </div>
      </section>

      {industry.layout === "static" ? (
        <StaticIndustry industry={industry} />
      ) : (
        <section className={styles.accordionSection}>
          <div className={styles.contentContainer}>
            <div className={styles.accordionList}>
              {industry.subsectors.map((subsector) => {
                const isOpen = openItems.includes(subsector.id);
                const buttonId = `${industry.slug}-${subsector.id}-button`;
                const panelId = `${industry.slug}-${subsector.id}-panel`;

                return (
                  <article
                    className={`${styles.accordionCard} ${
                      isOpen ? styles.accordionCardOpen : ""
                    }`}
                    key={subsector.id}
                  >
                    <h2 className={styles.accordionHeading}>
                      <button
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        id={buttonId}
                        onClick={() => toggleItem(subsector.id)}
                        type="button"
                      >
                        <span>{subsector.title}</span>
                        <Chevron open={isOpen} />
                      </button>
                    </h2>

                    {isOpen && (
                      <div
                        aria-labelledby={buttonId}
                        className={styles.panel}
                        id={panelId}
                        role="region"
                      >
                        <div className={styles.panelIntroGrid}>
                          <SectorImage subsector={subsector} />

                          <div className={styles.introCopy}>
                            <p className={styles.orangeLabel}>About the Sector</p>
                            <ContentBlocks
                              blocks={subsector.introBlocks}
                              compact
                            />
                          </div>
                        </div>

                        {subsector.detailBlocks && (
                          <ContentBlocks blocks={subsector.detailBlocks} />
                        )}

                        {subsector.note && (
                          <p className={styles.note}>{subsector.note}</p>
                        )}

                        <InformationGrid sections={subsector.sections} />

                        <div className={styles.collapseRow}>
                          <button
                            onClick={() => toggleItem(subsector.id)}
                            type="button"
                          >
                            Collapse <span aria-hidden="true">⌃</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}