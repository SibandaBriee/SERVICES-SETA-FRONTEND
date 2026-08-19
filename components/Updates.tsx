"use client";

import { useEffect, useRef, useState } from "react";
import { importantDates, notices } from "../data/homeData";

const dateStatuses = [
  { label: "Closing soon", tone: "urgent" },
  { label: "Upcoming", tone: "upcoming" },
  { label: "Critical", tone: "critical" },
];

export default function Updates() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  function closeCalendar() {
    setCalendarOpen(false);
  }

  useEffect(() => {
    if (!calendarOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeCalendar();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [calendarOpen]);

  return (
    <>
      <section className="updates-section" id="notices">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stay informed</p>
              <h2>Current information, clearly marked</h2>
            </div>

            <a href="/stakeholder-notices">View all notices →</a>
          </div>

          <div className="updates-grid">
            <article className="panel notice-panel">
              <div className="panel-head">
                <h3>Latest notices</h3>
                <a href="/stakeholder-notices">View all</a>
              </div>

              {notices.map((notice) => (
                <a
                  className="notice"
                  href={notice.href}
                  key={notice.title}
                >
                  <span className={`badge ${notice.tone}`}>
                    {notice.type}
                  </span>

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

                <button
                  type="button"
                  className="calendar-trigger"
                  onClick={() => setCalendarOpen(true)}
                >
                  Full calendar
                </button>
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
                Tell us what you need help with and we’ll guide you to the
                right information, system or support channel.
              </p>

              <div className="support-actions">
                <a href="/support">Get guided help →</a>
                <a href="/contact">Lodge an enquiry</a>
              </div>

              <div className="response-note">
                <span>●</span> Customer care available Monday–Friday
              </div>
            </article>
          </div>
        </div>
      </section>

      {calendarOpen && (
        <div
          className="calendar-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCalendar();
            }
          }}
        >
          <section
            className="calendar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="calendar-title"
          >
            <header className="calendar-modal-head">
              <div>
                <p className="eyebrow">Services SETA calendar</p>
                <h2 id="calendar-title">Critical dates and deadlines</h2>

                <p>
                  Review upcoming actions and access the relevant guidance
                  before each deadline.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="modal-close"
                onClick={closeCalendar}
                aria-label="Close calendar"
              >
                ×
              </button>
            </header>

            <div className="calendar-list">
              {importantDates.map((importantDate, index) => {
                const status =
                  dateStatuses[index] ?? dateStatuses[1];

                return (
                  <article
                    className="calendar-event"
                    key={`${importantDate.day}-${importantDate.month}-${importantDate.title}`}
                  >
                    <div className="calendar-date">
                      <strong>{importantDate.day}</strong>
                      <span>{importantDate.month}</span>
                    </div>

                    <div className="calendar-event-copy">
                      <span
                        className={`calendar-status ${status.tone}`}
                      >
                        {status.label}
                      </span>

                      <h3>{importantDate.title}</h3>
                      <p>{importantDate.description}</p>
                    </div>

                    <a href="/support">View guidance →</a>
                  </article>
                );
              })}
            </div>

            <footer className="calendar-modal-foot">
              <span>
                Dates shown are sample content and require business
                confirmation.
              </span>

              <button type="button" onClick={closeCalendar}>
                Close calendar
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}