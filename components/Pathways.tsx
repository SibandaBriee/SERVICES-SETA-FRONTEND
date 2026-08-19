import type { ReactNode } from "react";
import Link from "next/link";

import { pathways } from "../data/homeData";

const pathwayIcons: Record<string, ReactNode> = {
  Learner: (
    <>
      <path d="m3 9 9-5 9 5-9 5z" />
      <path d="M7 11.5V16c3 2 7 2 10 0v-4.5" />
      <path d="M21 9v6" />
    </>
  ),

  "Employer / SDF": (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5h8v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </>
  ),

  "Skills Development Provider": (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-5h6v5" />
      <path d="M8 9h.01" />
      <path d="M12 9h.01" />
      <path d="M16 9h.01" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
    </>
  ),

  "Government / Public Entity": (
    <>
      <path d="m3 9 9-5 9 5" />
      <path d="M5 10h14" />
      <path d="M6 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M18 10v8" />
      <path d="M4 18h16" />
      <path d="M3 21h18" />
    </>
  ),
};

function PathwayIcon({ title }: { title: string }) {
  const icon = pathwayIcons[title] ?? (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  );

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default function Pathways() {
  return (
    <section className="pathway-section" id="explore">
      <div className="container">
        <div className="pathway-heading">
          <p className="pathway-kicker">Start with who you are</p>

          <h2>I am a...</h2>

          <p className="pathway-heading-description">
            Choose your pathway to find relevant information, services,
            actions and support.
          </p>

          <Link className="pathway-all-link" href="/stakeholders">
            View all pathways
            <ArrowIcon />
          </Link>
        </div>

        <div className="pathway-grid">
          {pathways.map((pathway) => (
            <Link
              className="pathway-card"
              href={pathway.href}
              key={pathway.title}
              aria-label={`Explore the ${pathway.title} pathway`}
            >
              <span className="pathway-icon-shell">
                <PathwayIcon title={pathway.title} />
              </span>

              <div className="pathway-card-copy">
                <h3>{pathway.title}</h3>
                <p>{pathway.text}</p>
              </div>

              <span className="pathway-card-action">
                Explore pathway
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}