import { Section } from "./ui";
import { PROFILE } from "../data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Let's talk">
      <div className="contact">
        <p style={{ margin: "0 0 14px", color: "var(--mute)", maxWidth: "52ch" }}>
          Hiring for a DevOps or release role, or want to talk pipelines? Email is the fastest way to reach me.
        </p>
        <a className="row" href={"mailto:" + PROFILE.email}><span>Email</span>{PROFILE.email}</a>
        <a className="row" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>linkedin.com/in/harshal-w</a>
        <a className="row" href={PROFILE.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span>github.com/harshal-wankhede</a>
      </div>
    </Section>
  );
}
