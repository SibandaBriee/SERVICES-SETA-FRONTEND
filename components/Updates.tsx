import Link from "next/link";

export default function Updates() {
  return (
    <section className="updates-section" id="notices">
      <div className="container">
        <div className="updates-header">
          <div>
            <p className="updates-kicker">Stay informed</p>
            <h2>Current information, clearly marked</h2>
          </div>

          <Link href="/stakeholder-notices" className="updates-view-all">
            View all notices →
          </Link>
        </div>

        <div className="updates-grid">
          <article className="updates-card">
            <div className="updates-card-head">
              <h3>Latest notices</h3>
              <Link href="/stakeholder-notices">View all</Link>
            </div>

            <div className="notice-item">
              <span className="notice-tag funding">Funding notice</span>
              <div className="notice-copy">
                <h4>Discretionary Grants Funding Window 2026/27</h4>
                <p>Closes 30 September 2026</p>
              </div>
              <span className="notice-arrow">→</span>
            </div>

            <div className="notice-item">
              <span className="notice-tag tender">Tender</span>
              <div className="notice-copy">
                <h4>Appointment of a digital learning service provider</h4>
                <p>Closes 18 September 2026</p>
              </div>
              <span className="notice-arrow">→</span>
            </div>

            <div className="notice-item">
              <span className="notice-tag vacancy">Vacancy</span>
              <div className="notice-copy">
                <h4>Learning Programme Coordinator</h4>
                <p>Closes 25 September 2026</p>
              </div>
              <span className="notice-arrow">→</span>
            </div>
          </article>

          <article className="updates-card">
            <div className="updates-card-head">
              <h3>Important dates</h3>
              <Link href="/calendar">Full calendar</Link>
            </div>

            <div className="date-item">
              <div className="date-box">
                <strong>30</strong>
                <span>Sep</span>
              </div>
              <div className="date-copy">
                <h4>Funding window closes</h4>
                <p>View details and requirements</p>
              </div>
            </div>

            <div className="date-item">
              <div className="date-box">
                <strong>07</strong>
                <span>Oct</span>
              </div>
              <div className="date-copy">
                <h4>WSP/ATR submission clinic</h4>
                <p>View details and requirements</p>
              </div>
            </div>

            <div className="date-item">
              <div className="date-box">
                <strong>28</strong>
                <span>Oct</span>
              </div>
              <div className="date-copy">
                <h4>Mandatory Grant claims deadline</h4>
                <p>View details and requirements</p>
              </div>
            </div>
          </article>

          <aside className="support-card">
            <p className="support-kicker">Help and support</p>
            <h3>Not sure where to start?</h3>
            <p className="support-text">
              Tell us what you need help with and we’ll guide you to the right
              information, system or support channel.
            </p>

            <div className="support-actions">
              <Link href="/support" className="support-button">
                Get guided help →
              </Link>

              <Link href="/contact" className="support-link">
                Lodge an enquiry
              </Link>
            </div>

            <div className="support-meta">
              <span className="support-dot" />
              <p>Customer care available Monday–Friday</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}