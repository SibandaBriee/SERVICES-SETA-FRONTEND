"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { sicChambers, sicCodeSummary } from "../data/sicCodes";
import styles from "../app/SicCode.module.css";

const allChamberIds = sicChambers.map((chamber) => chamber.id);

function countCodes(
  chamber: (typeof sicChambers)[number],
): number {
  return chamber.subSectors.reduce(
    (total, subSector) => total + subSector.codes.length,
    0,
  );
}

export default function SicCode() {
  const [query, setQuery] = useState("");
  const [selectedChamber, setSelectedChamber] = useState("all");
  const [expandedChambers, setExpandedChambers] = useState<string[]>([
    sicChambers[0].id,
  ]);

  const normalizedQuery = query.trim().toLowerCase();

  const visibleChambers = useMemo(() => {
    return sicChambers
      .filter(
        (chamber) =>
          selectedChamber === "all" || chamber.id === selectedChamber,
      )
      .map((chamber) => {
        const chamberMatches = chamber.name
          .toLowerCase()
          .includes(normalizedQuery);

        const subSectors = chamber.subSectors
          .map((subSector) => {
            const subSectorMatches = subSector.name
              .toLowerCase()
              .includes(normalizedQuery);

            const codes = subSector.codes.filter((item) => {
              if (!normalizedQuery || chamberMatches || subSectorMatches) {
                return true;
              }

              return `${item.code} ${item.descriptor}`
                .toLowerCase()
                .includes(normalizedQuery);
            });

            return {
              ...subSector,
              codes,
            };
          })
          .filter((subSector) => subSector.codes.length > 0);

        return {
          ...chamber,
          subSectors,
        };
      })
      .filter((chamber) => chamber.subSectors.length > 0);
  }, [normalizedQuery, selectedChamber]);

  const visibleCodeCount = visibleChambers.reduce(
    (total, chamber) =>
      total +
      chamber.subSectors.reduce(
        (subTotal, subSector) => subTotal + subSector.codes.length,
        0,
      ),
    0,
  );

  const forceExpanded = Boolean(
    normalizedQuery || selectedChamber !== "all",
  );

  function selectChamber(chamberId: string) {
    setSelectedChamber(chamberId);

    if (chamberId !== "all") {
      setExpandedChambers([chamberId]);
    }
  }

  function toggleChamber(chamberId: string) {
    setExpandedChambers((current) =>
      current.includes(chamberId)
        ? current.filter((id) => id !== chamberId)
        : [...current, chamberId],
    );
  }

  function clearFilters() {
    setQuery("");
    setSelectedChamber("all");
    setExpandedChambers([sicChambers[0].id]);
  }

  return (
    <>
      <section className={styles.hero} id="content">
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">→</span>
            <Link href="/industries">Industries we serve</Link>
            <span aria-hidden="true">→</span>
            <span>Find your sector and SIC code</span>
          </div>

          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Self-service tool</p>
              <h1>Find your sector and SIC code</h1>
              <p>
                Search the Services SETA chamber and sub-sector list by SIC
                code, industry activity, sub-sector or chamber.
              </p>
            </div>

            {/* <aside className={styles.guidanceCard}>
              <span className={styles.guidanceIcon} aria-hidden="true">
                i
              </span>
              <div>
                <strong>Use this as a guide</strong>
                <p>
                  Select the closest description, then confirm the final
                  classification through the appropriate Services SETA process.
                </p>
              </div>
            </aside> */}
          </div>

          <div className={styles.stats} aria-label="SIC code directory summary">
            <div>
              <strong>{sicCodeSummary.chamberCount}</strong>
              <span>Chambers</span>
            </div>
            <div>
              <strong>{sicCodeSummary.subSectorCount}</strong>
              <span>Sub-sectors</span>
            </div>
            <div>
              <strong>{sicCodeSummary.codeCount}</strong>
              <span>SIC codes</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directorySection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Search and browse</p>
              <h2>Explore all SIC codes</h2>
              <p>
                Enter a code such as <strong>88910</strong>, or search a phrase
                such as <strong>real estate</strong>, <strong>cleaning</strong>
                or <strong>beauty</strong>.
              </p>
            </div>

            <a
              className={styles.sourceButton}
              href="/documents/SERVICES-SETA-CHAMBER-AND-SUB-SECTORS-SIC-Codes.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2h9l5 5v15H6z" />
                <path d="M14 2v6h6" />
                <path d="M9 13h6M9 17h6" />
              </svg>
              View source PDF
            </a>
          </div>

          <div className={styles.searchPanel}>
            <label className={styles.searchField}>
              <span className="sr-only">Search SIC codes</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by code, service, sub-sector or chamber..."
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </label>

            <div className={styles.chamberFilters} aria-label="Filter by chamber">
              <button
                type="button"
                className={selectedChamber === "all" ? styles.activeFilter : ""}
                onClick={() => selectChamber("all")}
              >
                All chambers
              </button>

              {sicChambers.map((chamber) => (
                <button
                  type="button"
                  className={
                    selectedChamber === chamber.id ? styles.activeFilter : ""
                  }
                  onClick={() => selectChamber(chamber.id)}
                  key={chamber.id}
                >
                  {chamber.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultBar} aria-live="polite">
            <p>
              Showing <strong>{visibleCodeCount}</strong>{" "}
              {visibleCodeCount === 1 ? "code" : "codes"}
              {normalizedQuery && (
                <>
                  {" "}
                  for <span>“{query.trim()}”</span>
                </>
              )}
            </p>

            <div className={styles.resultActions}>
              {!forceExpanded && (
                <>
                  <button
                    type="button"
                    onClick={() => setExpandedChambers(allChamberIds)}
                  >
                    Expand all
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpandedChambers([])}
                  >
                    Collapse all
                  </button>
                </>
              )}

              {(query || selectedChamber !== "all") && (
                <button type="button" onClick={clearFilters}>
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {visibleChambers.length > 0 ? (
            <div className={styles.chamberList}>
              {visibleChambers.map((chamber) => {
                const chamberCodeCount = countCodes(chamber);
                const isExpanded =
                  forceExpanded || expandedChambers.includes(chamber.id);

                return (
                  <article className={styles.chamberCard} key={chamber.id}>
                    <button
                      className={styles.chamberToggle}
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`chamber-${chamber.id}`}
                      onClick={() => toggleChamber(chamber.id)}
                    >
                      <span className={styles.chamberNumber} aria-hidden="true">
                        {String(
                          sicChambers.findIndex(
                            (item) => item.id === chamber.id,
                          ) + 1,
                        ).padStart(2, "0")}
                      </span>

                      <span className={styles.chamberTitle}>
                        <small>Services SETA chamber</small>
                        <strong>{chamber.name}</strong>
                      </span>

                      <span className={styles.chamberMeta}>
                        {chamber.subSectors.length}{" "}
                        {chamber.subSectors.length === 1
                          ? "sub-sector"
                          : "sub-sectors"}
                        <b>•</b>
                        {chamberCodeCount} codes
                      </span>

                      <svg
                        className={isExpanded ? styles.chevronOpen : ""}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div
                        className={styles.chamberBody}
                        id={`chamber-${chamber.id}`}
                      >
                        {chamber.subSectors.map((subSector) => (
                          <section
                            className={styles.subSector}
                            key={`${chamber.id}-${subSector.name}`}
                          >
                            <div className={styles.subSectorHeading}>
                              <h3>{subSector.name}</h3>
                              <span>
                                {subSector.codes.length}{" "}
                                {subSector.codes.length === 1 ? "code" : "codes"}
                              </span>
                            </div>

                            <div className={styles.codeGrid}>
                              {subSector.codes.map((item) => (
                                <article
                                  className={styles.codeCard}
                                  key={`${chamber.id}-${subSector.name}-${item.code}`}
                                >
                                  <span className={styles.codeBadge}>
                                    {item.code}
                                  </span>
                                  <p>{item.descriptor}</p>
                                </article>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <span aria-hidden="true">⌕</span>
              <h2>No matching SIC codes</h2>
              <p>
                Try a shorter code, a broader service description, or clear the
                selected chamber.
              </p>
              <button type="button" onClick={clearFilters}>
                Clear search and filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
