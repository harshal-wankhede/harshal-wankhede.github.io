import Pipeline from "./Pipeline";
import photo from "../assets/profile.jpg";

const words = (text) =>
  text.split(" ").map((w, i) => (
    <span className="wm" key={i}><span className="w">{w}</span></span>
  ));

export default function Hero() {
  return (
    <header className="wrap">
      <div className="hero">
        <div>
          <h1>{words("I make software releases routine.")}</h1>
          <p className="roles">
            I'm Harshal, a DevOps and build/release engineer in Pune. I keep a core banking product shipping every week.
          </p>
          <div className="cta">
            <a className="btn pri" href="#contact">Get in touch</a>
            <a className="btn" href="#projects">See my projects</a>
          </div>
        </div>
        <img className="photo" src={photo} alt="Portrait of Harshal Wankhede" />
      </div>
      <Pipeline />
    </header>
  );
}
