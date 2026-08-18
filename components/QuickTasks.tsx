import Link from "next/link";
import { quickTasks } from "../data/homeData";

export default function QuickTasks() {
  return (
    <section className="tasks-section" id="tasks">
      <div className="container task-wrap">
        <div className="task-title">
          <p className="eyebrow">Quick access</p>
          <h2>I want to…</h2>
          <p>Go straight to the most-used services.</p>
        </div>

        <div className="task-scroller">
          {quickTasks.map((task) => (
            <Link href={task.href} key={task.title}>
              <span>{task.icon}</span>
              <strong>{task.title}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
