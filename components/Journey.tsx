import { journeySteps } from "../data/homeData";

export default function Journey() {
  return (
    <section className="journey-band">
      <div className="container">
        <p>One connected Services SETA experience</p>
        <div className="journey-steps">
          {journeySteps.map((step, index) => (
            <span key={step}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
