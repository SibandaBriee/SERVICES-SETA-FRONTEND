// "use client";

// import { useState } from "react";
// import type { FormEvent } from "react";
// import { opportunities, popularSearches } from "../data/homeData";

// export default function Hero() {
//   const [query, setQuery] = useState("");
//   const [message, setMessage] = useState("");

//   function runSearch(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     setMessage(
//       query.trim()
//         ? `Showing guided results for “${query.trim()}”`
//         : "Type what you need help with.",
//     );
//   }

//   function selectPopularSearch(searchTerm: string) {
//     setQuery(searchTerm);
//     setMessage(`Showing guided results for “${searchTerm}”`);
//   }

//   return (
//     <section className="hero" id="content">
//       <div className="container hero-grid">
//         <div className="hero-copy">
//           <p className="eyebrow">
//             Your skills development journey starts here
//           </p>
//           <h1>
//             Developing skills.
//             <br />
//             Growing careers.
//             <br />
//             <em>
//               Strengthening the
//               <br />
//               services sector.
//             </em>
//           </h1>
//           <p className="hero-intro">
//             Find clear, trusted guidance for learning, funding, accreditation
//             and skills development—then take the next step.
//           </p>

//           <form className="search-box" onSubmit={runSearch} role="search">
//             <label className="sr-only" htmlFor="site-search">
//               What are you looking for?
//             </label>
//             <input
//               id="site-search"
//               value={query}
//               onChange={(event) => setQuery(event.target.value)}
//               placeholder="What are you looking for?"
//             />
//             <button type="submit" aria-label="Search">
//               ⌕
//             </button>
//           </form>

//           {message && (
//             <p className="search-message" aria-live="polite">
//               {message}
//             </p>
//           )}

//           <div className="popular">
//             <span>Popular:</span>
//             {popularSearches.map((searchTerm) => (
//               <button
//                 type="button"
//                 key={searchTerm}
//                 onClick={() => selectPopularSearch(searchTerm)}
//               >
//                 {searchTerm}
//               </button>
//             ))}
//           </div>
//         </div>

//         <aside className="opportunity-card" aria-label="Current opportunities">
//           <div className="card-heading">
//             <span>◉</span>
//             <div>
//               <small>Current opportunities</small>
//               <strong>Open now</strong>
//             </div>
//           </div>

//           {opportunities.map((opportunity) => (
//             <a href={opportunity.href} key={opportunity.title}>
//               <span className="opp-icon">{opportunity.icon}</span>
//               <span>
//                 <strong>{opportunity.title}</strong>
//                 <small>{opportunity.description}</small>
//               </span>
//               <b>→</b>
//             </a>
//           ))}

//           <a className="all-opportunities" href="#notices">
//             View all opportunities <b>→</b>
//           </a>
//         </aside>
//       </div>
//     </section>
//   );
// }



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
    <section className="hero" id="content">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            Your gateway to skills &amp; opportunities
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
                  <span className="popular-separator" aria-hidden="true" />
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
