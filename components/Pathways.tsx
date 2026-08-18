import Link from "next/link";
import { pathways } from "../data/homeData";

export default function Pathways() {
  return (
    <section className="pathway-section" id="explore">
      <div className="container section-grid">
        <div className="section-intro">
          <p className="eyebrow">Start with who you are</p>
          <h2>I am a…</h2>
          <p>
            Choose your pathway for relevant information, actions and support.
          </p>
          <a href="#tasks">View all pathways →</a>
        </div>

        <div className="pathway-grid">
          {pathways.map((pathway) => (
            <Link
              className="pathway-card"
              href={pathway.href}
              key={pathway.title}
            >
              <span className="path-icon">{pathway.icon}</span>
              <h3>{pathway.title}</h3>
              <p>{pathway.text}</p>
              <b>→</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
