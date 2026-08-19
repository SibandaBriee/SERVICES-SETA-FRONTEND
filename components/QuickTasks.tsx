import type { ReactNode } from "react";
import Link from "next/link";
import { quickTasks } from "../data/homeData";

const taskIcons: Record<string, ReactNode> = {
  "Find my sector / SIC code": (
    <>
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),

  "Submit WSP/ATR": (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M12 11v6" />
      <path d="m9.5 14 2.5 3 2.5-3" />
    </>
  ),

  "Find funding": (
    <>
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M8 7V5h8v2" />
      <circle cx="12" cy="13" r="2.5" />
      <path d="M12 10v6" />
    </>
  ),

  "Find a learning programme": (
    <>
      <path d="m3 9 9-5 9 5-9 5z" />
      <path d="M7 11v5c3 2 7 2 10 0v-5" />
      <path d="M21 9v6" />
    </>
  ),

  "Find a qualification": (
    <>
      <path d="M6 3h12v18H6z" />
      <path d="M9 7h6M9 11h6" />
      <circle cx="12" cy="16" r="2" />
      <path d="m10.8 17.7-.8 2.3 2-1 2 1-.8-2.3" />
    </>
  ),

  "Find an accredited provider": (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5h8v2" />
      <path d="m8.5 13 2.2 2.2 4.8-4.8" />
    </>
  ),

  "Access a system": (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),

  "Find a form or guideline": (
    <>
      <path d="M6 2h9l3 3v17H6z" />
      <path d="M14 2v5h5" />
      <path d="M9 11h6M9 15h4" />
      <circle cx="16.5" cy="17.5" r="2.5" />
      <path d="m18.5 19.5 2 2" />
    </>
  ),

  "Get help with a programme": (
    <>
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13h3v6H5a1 1 0 0 1-1-1z" />
      <path d="M20 13h-3v6h2a1 1 0 0 0 1-1z" />
      <path d="M17 19c0 2-2 3-4 3h-1" />
    </>
  ),

  "Lodge an enquiry": (
    <>
      <path d="M4 5h16v11H8l-4 4z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
};

function TaskIcon({ title }: { title: string }) {
  const icon = taskIcons[title] ?? (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4M12 16h.01" />
    </>
  );

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default function QuickTasks() {
  return (
    <section className="tasks-section" id="tasks">
      <div className="container task-wrap">
        <div className="task-title">
          <h2>What do you need to do?</h2>

          <p>
            Quick access to common Services SETA tasks and services.
          </p>
        </div>

        <div className="task-scroller">
          {quickTasks.map((task) => (
            <Link
              className="quick-task-card"
              href={task.href}
              key={task.title}
            >
              <span className="quick-task-icon">
                <TaskIcon title={task.title} />
              </span>

              <strong className="quick-task-title">
                {task.title}
              </strong>

              <span className="quick-task-arrow">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}