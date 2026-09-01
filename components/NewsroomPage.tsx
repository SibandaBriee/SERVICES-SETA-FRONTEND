import Image from "next/image";
import Link from "next/link";
import {
  formatNewsDate,
  newsArticles,
} from "../data/newsData";
import NewsroomHero from "./NewsroomHero";
import styles from "./NewsroomPage.module.css";

type NewsroomPageProps = {
  query?: string;
  category?: string;
  archive?: string;
  tag?: string;
};

function normalize(value?: string) {
  return value?.trim().toLowerCase() ?? "";
}

export default function NewsroomPage({
  query,
  category,
  archive,
  tag,
}: NewsroomPageProps) {
  const normalizedQuery = normalize(query);
  const normalizedCategory = normalize(category);
  const normalizedTag = normalize(tag);

  const filteredArticles = newsArticles.filter((article) => {
    const queryMatches =
      !normalizedQuery ||
      [
        article.title,
        article.excerpt,
        article.category,
        article.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    const categoryMatches =
      !normalizedCategory ||
      normalizedCategory === "all" ||
      article.category.toLowerCase() === normalizedCategory;

    const archiveMatches = !archive || article.date.startsWith(archive);

    const tagMatches =
      !normalizedTag ||
      article.tags.some((articleTag) =>
        articleTag.toLowerCase().includes(normalizedTag),
      );

    return queryMatches && categoryMatches && archiveMatches && tagMatches;
  });

  const hasFilters = Boolean(query || category || archive || tag);

  return (
    <>
      <NewsroomHero />

      <section className={styles.section} aria-labelledby="newsroom-list-heading">
        <div className="container">
          <div className={styles.listHeading}>
            <div>
              <p className="eyebrow">News, notices and publications</p>
              <h2 id="newsroom-list-heading">Latest updates</h2>
            </div>

            {hasFilters && (
              <div className={styles.filterSummary}>
                <span>
                  Showing {filteredArticles.length} filtered result
                  {filteredArticles.length === 1 ? "" : "s"}
                </span>
                <Link href="/stakeholder-notices">Clear filters</Link>
              </div>
            )}
          </div>

          {filteredArticles.length > 0 ? (
            <div className={styles.list}>
              {filteredArticles.map((article) => (
                <article className={styles.card} key={article.slug}>
                  <Link
                    className={styles.imageLink}
                    href={`/stakeholder-notices/${article.slug}`}
                    aria-label={`Open ${article.title}`}
                  >
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 720px) 100vw, 43vw"
                    />
                  </Link>

                  <div className={styles.cardContent}>
                    <span className={styles.category}>{article.category}</span>
                    <h3>
                      <Link href={`/stakeholder-notices/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <time dateTime={article.date}>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M7 3v3m10-3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12H4V7a2 2 0 0 1 2-2Zm2 7h2v2H8v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8 4h2v2H8v-2Zm4 0h2v2h-2v-2Z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                        {formatNewsDate(article.date)}
                      </time>

                      <Link
                        className={styles.action}
                        href={`/stakeholder-notices/${article.slug}`}
                      >
                        {article.actionLabel ?? "Read article"}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <strong>No newsroom items match those filters.</strong>
              <p>Return to the complete newsroom and try another search.</p>
              <Link href="/stakeholder-notices">View all newsroom items</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
