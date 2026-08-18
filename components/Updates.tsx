import { importantDates, notices } from "../data/homeData";

export default function Updates() {
  return (
    <section className="updates-section" id="notices">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Stay informed</p>
            <h2>Current information, clearly marked</h2>
          </div>
          <a href="#">View all notices →</a>
        </div>

        <div className="updates-grid">
          <article className="panel notice-panel">
            <div className="panel-head">
              <h3>Latest notices</h3>
              <a href="#">View all</a>
            </div>

            {notices.map((notice) => (
              <a className="notice" href={notice.href} key={notice.title}>
                <span className={`badge ${notice.tone}`}>{notice.type}</span>
                <span>
                  <strong>{notice.title}</strong>
                  <small>{notice.close}</small>
                </span>
                <b>→</b>
              </a>
            ))}
          </article>

          <article className="panel">
            <div className="panel-head">
              <h3>Important dates</h3>
              <a href="#">Full calendar</a>
            </div>

            {importantDates.map((importantDate) => (
              <div
                className="date-row"
                key={`${importantDate.day}-${importantDate.month}`}
              >
                <div className="date">
                  <strong>{importantDate.day}</strong>
                  <span>{importantDate.month}</span>
                </div>
                <div>
                  <strong>{importantDate.title}</strong>
                  <small>{importantDate.description}</small>
                </div>
              </div>
            ))}
          </article>

          <article className="panel support-panel" id="support">
            <span className="support-symbol">?</span>
            <p className="eyebrow">Help and support</p>
            <h3>Not sure where to start?</h3>
            <p>
              Tell us what you need help with and we’ll guide you to the right
              information, system or support channel.
            </p>
            <div className="support-actions">
              <a href="#">Get guided help →</a>
              <a href="#">Lodge an enquiry</a>
            </div>
            <div className="response-note">
              <span>●</span> Customer care available Monday–Friday
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
