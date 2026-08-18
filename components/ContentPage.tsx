"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PageData } from "../data/pages";

type ContentPageProps = {
  data: PageData;
};

export default function ContentPage({ data }: ContentPageProps) {
  const [query, setQuery] = useState("");

  const visibleCards = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) {
      return data.cards;
    }

    return data.cards.filter((card) =>
      `${card.title} ${card.text} ${card.meta ?? ""}`
        .toLowerCase()
        .includes(searchText),
    );
  }, [data.cards, query]);

  return (
    <>
      <section className="inner-hero" id="content">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>→</span>
            <span>{data.title}</span>
          </div>

          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>

          {data.actions && (
            <div className="hero-actions">
              {data.actions.map((action, index) => (
                <Link
                  className={index === 0 ? "button" : "button secondary"}
                  href={action.href}
                  key={action.href}
                >
                  {action.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-tools">
            <div>
              <p className="eyebrow">Find, understand and act</p>
              <h2>Explore this section</h2>
            </div>

            <label className="filter-search">
              <span className="sr-only">Filter results</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter this page…"
              />
              <b>⌕</b>
            </label>
          </div>

          <div className="content-card-grid">
            {visibleCards.map((card, index) => (
              <Link
                className="content-card"
                href={card.href ?? "/support"}
                key={card.title}
              >
                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {card.meta && <small>{card.meta}</small>}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <b>Learn more →</b>
              </Link>
            ))}
          </div>

          {visibleCards.length === 0 && (
            <div className="empty-state">
              <strong>No matching items</strong>
              <p>Try a broader search term or clear the filter.</p>
              <button type="button" onClick={() => setQuery("")}>
                Clear filter
              </button>
            </div>
          )}

          {data.help && (
            <aside className="page-help">
              <div>
                <p className="eyebrow">Need support?</p>
                <h2>{data.help}</h2>
              </div>
              <Link className="button" href="/support">
                Get guided help →
              </Link>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
