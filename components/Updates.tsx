"use client";

import Link from "next/link";
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
    if (!calendarOpen) {
      return;
    }

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
          <div className="updates-header">
            <div>
              <p className="updates-kicker">Stay informed</p>
              <h2>Current information, clearly marked</h2>
            </div>

            <Link
              href="/stakeholder-notices"
              className="updates-view-all"
            >
              View all notices →
            </Link>
          </div>

          <div className="updates-grid">
            <article className="updates-card">
              <div className="updates-card-head">
                <h3>Latest notices</h3>

                <Link href="/stakeholder-notices">
                  View all
                </Link>
              </div>

              {notices.map((notice) => (
                <Link
                  className="notice-item"
                  href={notice.href}
                  key={notice.title}
                >
                  <span
                    className={`notice-tag ${notice.tone}`}
                  >
                    {notice.type}
                  </span>

                  <div className="notice-copy">
                    <h4>{notice.title}</h4>
                    <p>{notice.close}</p>
                  </div>

                  <span
                    className="notice-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </article>

            <article className="updates-card">
              <div className="updates-card-head">
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
                  className="date-item"
                  key={`${importantDate.day}-${importantDate.month}-${importantDate.title}`}
                >
                  <div className="date-box">
                    <strong>{importantDate.day}</strong>
                    <span>{importantDate.month}</span>
                  </div>

                  <div className="date-copy">
                    <h4>{importantDate.title}</h4>
                    <p>{importantDate.description}</p>
                  </div>
                </div>
              ))}
            </article>

            <aside className="support-card" id="support">
              <p className="support-kicker">
                Help and support
              </p>

              <h3>Not sure where to start?</h3>

              <p className="support-text">
                Tell us what you need help with and we’ll guide
                you to the right information, system or support
                channel.
              </p>

              <div className="support-actions">
                <Link
                  href="/support"
                  className="support-button"
                >
                  Get guided help →
                </Link>

                <Link
                  href="/contact"
                  className="support-link"
                >
                  Lodge an enquiry
                </Link>
              </div>

              <div className="support-meta">
                <span className="support-dot" />
                <p>
                  Customer care available Monday–Friday
                </p>
              </div>
            </aside>
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
                <p className="eyebrow">
                  Services SETA calendar
                </p>

                <h2 id="calendar-title">
                  Critical dates and deadlines
                </h2>

                <p>
                  Review upcoming actions and access the relevant
                  guidance before each deadline.
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

                    <Link href="/support">
                      View guidance →
                    </Link>
                  </article>
                );
              })}
            </div>

            <footer className="calendar-modal-foot">
              <span>
                Dates shown are sample content and require
                business confirmation.
              </span>

              <button
                type="button"
                onClick={closeCalendar}
              >
                Close calendar
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}