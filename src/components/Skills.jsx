import { Section, Chips } from "./ui";
import { SKILLS, EDUCATION } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills and learning">
      <div className="grid">
        {SKILLS.map(([title, items]) => (
          <div className="card" key={title}>
            <h3>{title}</h3>
            <Chips items={items} />
          </div>
        ))}
        <div className="card">
          <h3>Education</h3>
          {EDUCATION.map((e, i) => (
            <p key={e.degree} style={{ margin: i === 0 ? "0 0 8px" : 0 }}>
              <b>{e.degree}</b><br />{e.school}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
