"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { importantDates, notices } from "../data/homeData";

type CalendarTone = "red" | "amber" | "green";

type CalendarEvent = {
  day: string;
  month: string;
  title: string;
  description: string;
  status: string;
  tone: CalendarTone;
  href: string;
};

const calendarEvents: CalendarEvent[] = [
  {
    ...importantDates[0],
    status: "Closing soon",
    tone: "red",
    href: "/stakeholder-notices",
  },
  {
    ...importantDates[1],
    status: "Registration open",
    tone: "green",
    href: "/funding/mandatory-grants",
  },
  {
    ...importantDates[2],
    status: "Upcoming",
    tone: "amber",
    href: "/funding",
  },
  {
    day: "15",
    month: "NOV",
    title: "Provider accreditation information session",
    description:
      "Information session covering requirements, applications and ongoing compliance.",
    status: "Upcoming",
    tone: "amber",
    href: "/accreditation",
  },
];

export default function Updates() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!calendarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setCalendarOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [calendarOpen]);

  return (
    <section className="updates-section" id="notices">
      <div className="container">
        <div className="section-heading updates-heading">
          <div>
            <p className="eyebrow">Stay informed</p>
            <h2>Current information, clearly marked</h2>
          </div>

          <Link href="/stakeholder-notices">View all notices →</Link>
        </div>

        <div className="updates-grid">
          <article className="panel notice-panel">
            <div className="panel-head">
              <h3>Latest notices</h3>
              <Link href="/stakeholder-notices">View all</Link>
            </div>

            {notices.map((notice) => (
              <Link
                className="notice"
                href={
                  notice.href && notice.href !== "#"
                    ? notice.href
                    : "/stakeholder-notices"
                }
                key={notice.title}
              >
                <span className={`badge ${notice.tone}`}>{notice.type}</span>
                <span className="notice-copy">
                  <strong>{notice.title}</strong>
                  <small>{notice.close}</small>
                </span>
                <b aria-hidden="true">→</b>
              </Link>
            ))}
          </article>

          <article className="panel dates-panel">
            <div className="panel-head">
              <h3>Important dates</h3>

              <button
                ref={openerRef}
                className="calendar-open-button"
                type="button"
                onClick={() => setCalendarOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={calendarOpen}
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
                <div className="date-copy">
                  <strong>{importantDate.title}</strong>
                  <small>{importantDate.description}</small>
                </div>
              </div>
            ))}
          </article>

          <article className="panel support-panel" id="support">
            <span className="support-symbol" aria-hidden="true">
              ?
            </span>
            <p className="eyebrow">Help and support</p>
            <h3>Not sure where to start?</h3>
            <p>
              Tell us what you need help with and we’ll guide you to the right
              information, system or support channel.
            </p>
            <div className="support-actions">
              <Link href="/support">Get guided help →</Link>
              <Link href="/contact">Lodge an enquiry</Link>
            </div>
            <div className="response-note">
              <span aria-hidden="true">●</span> Customer care available
              Monday–Friday
            </div>
          </article>
        </div>
      </div>

      {calendarOpen && (
        <div
          className="calendar-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setCalendarOpen(false);
            }
          }}
        >
          <section
            className="calendar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="calendar-modal-title"
            aria-describedby="calendar-modal-description"
          >
            <div className="calendar-modal-head">
              <div>
                <p className="eyebrow">Services SETA calendar</p>
                <h2 id="calendar-modal-title">Important dates and events</h2>
                <p id="calendar-modal-description">
                  Review upcoming funding deadlines, submission clinics and
                  stakeholder information sessions.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                className="modal-close"
                type="button"
                onClick={() => setCalendarOpen(false)}
                aria-label="Close calendar"
              >
                ×
              </button>
            </div>

            <div className="calendar-list">
              {calendarEvents.map((event) => (
                <article
                  className="calendar-event"
                  key={`${event.day}-${event.month}-${event.title}`}
                >
                  <div className="calendar-date" aria-hidden="true">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>

                  <div className="calendar-event-copy">
                    <span className={`calendar-status ${event.tone}`}>
                      {event.status}
                    </span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>

                  <Link href={event.href} onClick={() => setCalendarOpen(false)}>
                    View details →
                  </Link>
                </article>
              ))}
            </div>

            <div className="calendar-modal-foot">
              <span>
                Dates may be updated. Open the relevant notice for the latest
                requirements.
              </span>
              <button type="button" onClick={() => setCalendarOpen(false)}>
                Close calendar
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
