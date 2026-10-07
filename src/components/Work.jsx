import { Section, Points } from "./ui";
import { WHAT_I_DO, JOBS } from "../data/portfolio";

export default function Work() {
  return (
    <Section id="work" title="What I do">
      <div className="grid">
        {WHAT_I_DO.map(([title, text]) => (
          <div className="card" key={title}>
            <h3>{title}</h3>
            <p style={{ margin: 0, color: "var(--mute)" }}>{text}</p>
          </div>
        ))}
      </div>
      <h3 style={{ margin: "44px 0 22px", fontSize: 24 }}>Where I've worked</h3>
      <ol className="tl">
        {JOBS.map((j) => (
          <li key={j.title}>
            <h3>{j.title}</h3>
            <p className="meta">{j.company} · {j.period}</p>
            <Points items={j.points} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
