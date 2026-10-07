import { Section, Chips, Points } from "./ui";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))" }}>
        {PROJECTS.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p style={{ margin: "0 0 14px" }}>{p.description}</p>
            <Chips items={p.stack} />
            <div style={{ height: 14 }} />
            <Points items={p.points} />
          </div>
        ))}
      </div>
    </Section>
  );
}
