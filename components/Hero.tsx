import Link from "next/link";

const heroPopularSearches = [
  {
    label: "SIC Code",
    href: "/industries/sic-code-finder",
  },
  {
    label: "Learnerships",
    href: "/learning-programmes",
  },
  {
    label: "Qualifications",
    href: "/qualifications",
  },
  {
    label: "Funding",
    href: "/funding",
  },
] as const;

export default function Hero() {
  return (
    <section
      className="hero services-seta-hero"
      id="content"
      aria-labelledby="hero-heading"
    >
      <div className="container hero-grid">
        <div className="hero-copy">
          {/* <p className="eyebrow hero-eyebrow">
            Your gateway to skills &amp; opportunities
          </p> */}

          <h1 id="hero-heading">
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

          {/* <p className="hero-intro">
            Find clear, trusted guidance for learning, funding, accreditation
            and skills development—then take the next step.
          </p> */}

          <form
            className="search-box"
            action="/search"
            method="get"
            role="search"
          >
            <label className="sr-only" htmlFor="site-search">
              What are you looking for?
            </label>

            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="What are you looking for?"
              autoComplete="off"
            />

            <button type="submit" aria-label="Search">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.2 4.2" />
              </svg>
            </button>
          </form>

          <nav className="popular" aria-label="Popular searches">
            <span className="popular-label">Popular:</span>

            {heroPopularSearches.map((item, index) => (
              <span className="popular-item" key={item.href}>
                {index > 0 && (
                  <span
                    className="popular-separator"
                    aria-hidden="true"
                  />
                )}

                <Link className="popular-link" href={item.href}>
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}