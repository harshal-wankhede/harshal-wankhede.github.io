import { Section, Points } from "./ui";
import { SERVICENOW, TRAINING } from "../data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid">
        <div className="card sn">
          <h3>ServiceNow</h3>
          <p style={{ margin: "0 0 4px" }}><b>{SERVICENOW.suite}</b></p>
          <p className="meta" style={{ margin: 0 }}>Earned through these micro-certifications</p>
          <ul className="micro">
            {SERVICENOW.micro.map((m) => (
              <li key={m}><span>Micro-Certification</span>{m}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Training and courses</h3>
          <Points items={TRAINING} />
        </div>
      </div>
    </Section>
  );
}
