/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { newsItems } from "../data/homeData";

export default function LatestNews() {
  return (
    <section className="latest-news-section" id="latest-news">
      <div className="container">
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">Latest from Services SETA</p>
            <h2>News and announcements</h2>
            <p>
              Keep up with programme updates, opportunities, publications and
              important organisational announcements.
            </p>
          </div>

          <Link className="section-link" href="/stakeholder-notices">
            View all news <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="news-card-grid">
          {newsItems.map((newsItem) => (
            <article className="news-card" key={newsItem.title}>
              <Link className="news-card-link" href={newsItem.href}>
                <div className="news-card-media">
                  <img
                    src={newsItem.image}
                    alt={newsItem.imageAlt}
                    loading="lazy"
                  />

                  <time
                    className="news-date-badge"
                    dateTime={newsItem.date}
                  >
                    <strong>{newsItem.day}</strong>
                    <span>{newsItem.month}</span>
                  </time>
                </div>

                <div className="news-card-body">
                  <span className="news-category">
                    {newsItem.category}
                  </span>

                  <h3>{newsItem.title}</h3>

                  <p>{newsItem.summary}</p>

                  <span className="news-read-more">
                    Read more <b aria-hidden="true">→</b>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}