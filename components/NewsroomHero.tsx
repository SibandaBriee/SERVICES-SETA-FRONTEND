import Image from "next/image";
import Link from "next/link";
import styles from "./NewsroomHero.module.css";

type NewsroomHeroProps = {
  showBreadcrumbs?: boolean;
};

export default function NewsroomHero({
  showBreadcrumbs = false,
}: NewsroomHeroProps) {
  return (
    <section className={styles.hero} id="content">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          {showBreadcrumbs && (
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">→</span>
              <Link href="/stakeholder-notices">Newsroom</Link>
            </div>
          )}

          <p className="eyebrow">Latest from Services SETA</p>
          <h1>Newsroom</h1>
          <p>
            Stay informed with the latest updates, announcements and insights
            from Services SETA.
          </p>
        </div>

        <div className={styles.artwork} aria-hidden="true">
          <Image
            src="/newsroom/hero-illustration.png"
            alt=""
            fill
            priority
            sizes="280px"
          />
        </div>
      </div>
    </section>
  );
}
