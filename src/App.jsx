import useAnimations from "./hooks/useAnimations";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { PROFILE } from "./data/portfolio";

export default function App() {
  useAnimations();
  return (
    <>
      <div className="bar" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer>
        <div className="wrap">© {new Date().getFullYear()} {PROFILE.name} · Pune, India</div>
      </footer>
    </>
  );
}
