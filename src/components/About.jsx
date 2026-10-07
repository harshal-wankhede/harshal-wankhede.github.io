import { Section } from "./ui";
import sunset from "../assets/sunset.jpg";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <img className="aphoto" src={sunset} alt="Harshal at a hilltop viewpoint at sunset" loading="lazy" />
        <div className="about">
          <p>I've spent nearly three years behind the releases of K3one, an enterprise core banking product. My days are GitLab, pipelines, merge requests and coordinating builds with Development, QA and Operations.</p>
          <p>I started as a front-end developer and hold an M.Sc. in Computer Science from North Maharashtra University. That's why I can read the C#, ASP.NET MVC and SQL behind a defect, not just the pipeline around it.</p>
          <p>Away from the terminal I like a good viewpoint and a sunset.</p>
        </div>
      </div>
    </Section>
  );
}
