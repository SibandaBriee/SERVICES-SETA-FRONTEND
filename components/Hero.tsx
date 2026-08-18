"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { opportunities, popularSearches } from "../data/homeData";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  function runSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      query.trim()
        ? `Showing guided results for “${query.trim()}”`
        : "Type what you need help with.",
    );
  }

  function selectPopularSearch(searchTerm: string) {
    setQuery(searchTerm);
    setMessage(`Showing guided results for “${searchTerm}”`);
  }

  return (
    <section className="hero" id="content">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Your skills development journey starts here
          </p>
          <h1>
            Developing skills.
            <br />
            Growing careers.
            <br />
            <em>
              Strengthening the
              <br />
              services sector.
            </em>
          </h1>
          <p className="hero-intro">
            Find clear, trusted guidance for learning, funding, accreditation
            and skills development—then take the next step.
          </p>

          <form className="search-box" onSubmit={runSearch} role="search">
            <label className="sr-only" htmlFor="site-search">
              What are you looking for?
            </label>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What are you looking for?"
            />
            <button type="submit" aria-label="Search">
              ⌕
            </button>
          </form>

          {message && (
            <p className="search-message" aria-live="polite">
              {message}
            </p>
          )}

          <div className="popular">
            <span>Popular:</span>
            {popularSearches.map((searchTerm) => (
              <button
                type="button"
                key={searchTerm}
                onClick={() => selectPopularSearch(searchTerm)}
              >
                {searchTerm}
              </button>
            ))}
          </div>
        </div>

        <aside className="opportunity-card" aria-label="Current opportunities">
          <div className="card-heading">
            <span>◉</span>
            <div>
              <small>Current opportunities</small>
              <strong>Open now</strong>
            </div>
          </div>

          {opportunities.map((opportunity) => (
            <a href={opportunity.href} key={opportunity.title}>
              <span className="opp-icon">{opportunity.icon}</span>
              <span>
                <strong>{opportunity.title}</strong>
                <small>{opportunity.description}</small>
              </span>
              <b>→</b>
            </a>
          ))}

          <a className="all-opportunities" href="#notices">
            View all opportunities <b>→</b>
          </a>
        </aside>
      </div>
    </section>
  );
}
