import { REASONS } from "./reasons";
import "./reasonwhyusepmu.scss";

const ReasonsWhyUsePmu = () => (
  <section className="reasons-section" aria-labelledby="reasons-title">
    <div className="reasons-container">
      <h2 className="reasons-title" id="reasons-title">
        Why artists switch to PMU Forms
      </h2>
      <ul className="reasons-grid">
        {REASONS.map((reason) => (
          <li key={reason.title} className="reason-card">
            <div className="reason-icon">{reason.icon}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ReasonsWhyUsePmu;
