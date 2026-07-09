import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/content";

export default function Skills() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
    });

    const rows = scope.current.querySelectorAll("[data-row]");
    gsap.set(rows, { y: 32, opacity: 0 });
    ScrollTrigger.batch(rows, {
      start: "top 88%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }),
    });
  });

  return (
    <section id="skills" ref={scope} aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index="04" kicker="Skills" title="The toolbox." id="skills-title" />

        <div className="border-t border-line">
          {skillGroups.map(({ label, items }) => (
            <div
              key={label}
              data-row
              className="grid gap-3 border-b border-line py-8 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <h3 className="font-display text-sm font-bold tracking-[0.15em] text-ink uppercase">
                {label}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <li key={skill} className="chip cursor-default hover:border-accent hover:text-accent">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
