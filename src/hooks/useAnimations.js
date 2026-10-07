import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Page-wide GSAP + ScrollTrigger animations and Lenis smooth scrolling.
export default function useAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const cleanups = [];
    const ctx = gsap.context(() => {
      gsap.set(".card,.tl>li", { opacity: 0 });
      gsap.set(".tl", { "--p": 0 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".w", { yPercent: 115, duration: 1, stagger: 0.09 })
        .from(".roles,.cta", { y: 20, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=.5")
        .from(".photo", { clipPath: "inset(0 0 100% 0)", scale: 1.12, duration: 1.3, ease: "power4.inOut" }, 0.1)
        .from(".pipe", { y: 40, opacity: 0, duration: 0.9 }, "-=.6");

      gsap.fromTo(".bar", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
      gsap.to(".mq-in", { xPercent: -50, duration: 32, ease: "none", repeat: -1 });

      gsap.utils.toArray("section>.wrap>h2").forEach((el) =>
        gsap.from(el, {
          clipPath: "inset(0 100% 0 0)", x: -24, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        })
      );

      gsap.from(".aphoto", {
        clipPath: "inset(0 0 100% 0)", duration: 1.2, ease: "power4.inOut",
        scrollTrigger: { trigger: ".aphoto", start: "top 82%" },
      });

      gsap.to(".tl", {
        "--p": 1, ease: "none",
        scrollTrigger: { trigger: ".tl", start: "top 70%", end: "bottom 70%", scrub: true },
      });

      ScrollTrigger.batch(".card,.tl>li", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, startAt: { y: 36 }, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: true }),
      });

      // magnetic primary buttons
      document.querySelectorAll(".btn.pri").forEach((el) => {
        const x = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
        const y = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
        const move = (e) => {
          const r = el.getBoundingClientRect();
          x((e.clientX - r.left - r.width / 2) * 0.3);
          y((e.clientY - r.top - r.height / 2) * 0.3);
        };
        const leave = () => { x(0); y(0); };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}
