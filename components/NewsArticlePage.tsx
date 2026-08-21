import Image from "next/image";
import Link from "next/link";
import {
  formatNewsDate,
  getPreviousNewsArticle,
  newsArticles,
  newsroomArchives,
  newsroomCategories,
  newsroomPopularTags,
  type NewsArticle,
} from "../data/newsData";
import NewsroomHero from "./NewsroomHero";
import styles from "./NewsArticlePage.module.css";

type NewsArticlePageProps = {
  article: NewsArticle;
};

type CategoryIconProps = {
  value: string;
};

function CategoryIcon({ value }: CategoryIconProps) {
  const iconProps = {
    "aria-hidden": true,
    fill: "none",
    focusable: false,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
    viewBox: "0 0 32 32",
  };

  switch (value) {
    case "All":
      return (
        <svg {...iconProps}>
          <path d="M5 12h22v15H5z" />
          <path d="m5 14 11 7 11-7" />
          <path d="M10 5h12v11H10z" fill="#fff" />
          <path d="M12.5 8.5h7M12.5 11.5h7M12.5 14.5h4.5" />
        </svg>
      );

    case "Announcement":
      return (
        <svg {...iconProps}>
          <path d="M5 13.5h5l11-5v15l-11-5H5z" />
          <path d="m9.5 18.5 2.2 7h4.2l-2.8-5.7" />
          <path d="M24 11.5 27 9M24.5 16h3M24 20.5l3 2.5" />
        </svg>
      );

    case "Governance":
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="9" r="3.2" />
          <circle cx="8" cy="13" r="2.5" />
          <circle cx="24" cy="13" r="2.5" />
          <path d="M10.5 25v-5a5.5 5.5 0 0 1 11 0v5" />
          <path d="M3.8 24v-3.5a4.2 4.2 0 0 1 5.8-3.9M28.2 24v-3.5a4.2 4.2 0 0 0-5.8-3.9" />
          <path d="M7 25h18" />
        </svg>
      );

    case "Newsletter":
      return (
        <svg {...iconProps}>
          <path d="M7 5h14l4 4v18H7z" />
          <path d="M21 5v5h5" />
          <path d="M11 12h7M11 16h10M11 20h10M11 24h6" />
        </svg>
      );

    case "Notice":
      return (
        <svg {...iconProps}>
          <path d="M7 7h18v15H7z" />
          <path d="M11 11h10M11 15h7" />
          <path d="m13 22-2 5 5-3 5 3-2-5" />
          <circle cx="23.5" cy="8.5" r="3.5" fill="#fff" />
          <path d="M23.5 6.8v2.4M23.5 10.8h.01" />
        </svg>
      );

    case "Opportunity":
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="13" r="7" />
          <path d="m12 19-2 8 6-3 6 3-2-8" />
          <path d="m16 9 1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" />
        </svg>
      );

    default:
      return (
        <svg {...iconProps}>
          <path d="M8 5h16v22H8z" />
          <path d="M12 10h8M12 15h8M12 20h6" />
        </svg>
      );
  }
}

export default function NewsArticlePage({ article }: NewsArticlePageProps) {
  const previousArticle = getPreviousNewsArticle(article.slug);

  return (
    <>
      <NewsroomHero showBreadcrumbs />

      <section className={styles.section}>
        <div className={`container ${styles.layout}`}>
          <article className={styles.articleCard}>
            <div className={styles.featuredImage}>
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 850px) 100vw, 66vw"
              />
            </div>

            <div className={styles.articleBody}>
              <span className={styles.category}>{article.category}</span>

              <time className={styles.date} dateTime={article.date}>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    d="M7 3v3m10-3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12H4V7a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
                {formatNewsDate(article.date)}
              </time>

              <h1>{article.title}</h1>
              <p className={styles.lead}>{article.excerpt}</p>

              <div className={styles.content}>
                {article.sections.map((section, index) => (
                  <section key={`${article.slug}-section-${index}`}>
                    {section.heading && <h2>{section.heading}</h2>}

                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.bullets && (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className={styles.tags} aria-label="Article tags">
                {article.tags.map((tag) => (
                  <Link
                    href={`/stakeholder-notices?tag=${encodeURIComponent(tag)}`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <div className={styles.articleNavigation}>
                {previousArticle ? (
                  <div>
                    <span>Previous post</span>
                    <strong>{previousArticle.title}</strong>
                    <Link
                      href={`/stakeholder-notices/${previousArticle.slug}`}
                    >
                      <span aria-hidden="true">←</span> Previous post
                    </Link>
                  </div>
                ) : (
                  <div>
                    <span>Back to newsroom</span>
                    <strong>Browse all Services SETA updates</strong>
                    <Link href="/stakeholder-notices">
                      <span aria-hidden="true">←</span> View newsroom
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </article>

          <aside className={styles.sidebar} aria-label="Newsroom navigation">
            <form className={styles.search} action="/stakeholder-notices">
              <label className="sr-only" htmlFor="newsroom-search">
                Search the newsroom
              </label>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.7"
                />
              </svg>
              <input
                id="newsroom-search"
                name="q"
                placeholder="Search..."
              />
            </form>

            <div className={styles.sidebarCard}>
              <h2>Category</h2>
              <div className={styles.underLine} />
              <nav aria-label="Newsroom categories">
                {newsroomCategories.map((category) => {
                  const count =
                    category.value === "All"
                      ? newsArticles.length
                      : newsArticles.filter(
                          (item) => item.category === category.value,
                        ).length;

                  return (
                    <Link
                      href={
                        category.value === "All"
                          ? "/stakeholder-notices"
                          : `/stakeholder-notices?category=${encodeURIComponent(category.value)}`
                      }
                      key={category.value}
                    >
                      <span className={styles.categoryIcon} aria-hidden="true">
                        <CategoryIcon value={category.value} />
                      </span>
                      <span>{category.label}</span>
                      <small>{count}</small>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className={styles.sidebarCard}>
              <h2>Archives</h2>
              <div className={styles.underLine} />
              <nav aria-label="Newsroom archives">
                {newsroomArchives.map((archive) => (
                  <Link
                    href={`/stakeholder-notices?archive=${archive.value}`}
                    key={archive.value}
                  >
                    <span>{archive.label}</span>
                    {archive.value === article.date.slice(0, 7) && (
                      <b aria-hidden="true">→</b>
                    )}
                  </Link>
                ))}
              </nav>

              <Link className={styles.viewArchives} href="/stakeholder-notices">
                View all archives
              </Link>
            </div>

            <div className={styles.sidebarCard}>
              <h2>Popular tags</h2>
              <div className={styles.underLine} />
              <div className={styles.tagCloud}>
                {newsroomPopularTags.map((tag) => (
                  <Link
                    href={`/stakeholder-notices?tag=${encodeURIComponent(tag)}`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}