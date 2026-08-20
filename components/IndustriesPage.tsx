import Image from "next/image";
import type { CSSProperties } from "react";
import Link from "next/link";
import { industrySectors } from "../data/industries";
import styles from "./IndustriesPage.module.css";

export default function IndustriesPage() {
  return (
    <>
      <section className={styles.hero} id="content">
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">-&gt;</span>
            <span>Industries we serve</span>
          </div>

          <div className={styles.heroContent}>
            <p className="eyebrow">Industries we serve</p>
            {/* <h1>Find where your organisation fits</h1> */}
               <h1 id="industries-heading">Explore our industries</h1>
          
<p>
              Choose an industry to view its sub-sectors,
              recommended subjects and employment opportunities.
            </p>
            
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="industries-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className="eyebrow">Find, understand and act</p>
            <h2 id="industries-heading"></h2>
            
          </header>

          <div className={styles.grid}>
            {industrySectors.map((industry, index) => (
              <Link
                className={styles.card}
                href={`/industries/${industry.slug}`}
                key={industry.slug}
                style={{ "--card-accent": industry.accent } as CSSProperties}
              >
                <div className={styles.imageWrap}>
                  <Image
                    alt={`${industry.title} industry placeholder`}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    src={industry.image}
                  />
                  <span className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {industry.comingSoon && (
                    <span className={styles.pendingBadge}>Content pending</span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  {/* <p className={styles.cardEyebrow}>Industry pathway</p> */}
                  <h3>{industry.cardTitle}</h3>
                  <p>{industry.description}</p>

                  <div className={styles.cardFooter}>
                    <span>
                      {industry.subsectors.length}{" "}
                      {industry.subsectors.length === 1 ? "sub-sector" : "sub-sectors"}
                    </span>
                    <strong>
                      Explore sector <span aria-hidden="true">-&gt;</span>
                    </strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <aside className={styles.supportBand}>
            <div>
              <p className="eyebrow">Not sure which industry applies?</p>
              <h2>Use the SIC code finder or contact our support team.</h2>
            </div>
            <div className={styles.supportActions}>
              <Link href="/industries/sic-code-finder">Find my SIC code</Link>
              <Link href="/support">Get help</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
