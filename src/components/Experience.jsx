import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
    });

    gsap.from("[data-entry]", {
      y: 48,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: { trigger: "[data-timeline]", start: "top 78%", once: true },
    });

    // Accent line draws down the timeline as it scrolls through the viewport.
    gsap.from("[data-timeline-line]", {
      scaleY: 0,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: "[data-timeline]",
        start: "top 75%",
        end: "bottom 55%",
        scrub: 0.5,
      },
    });
  });

  return (
    <section id="experience" ref={scope} aria-labelledby="experience-title" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index="05" kicker="Experience" title="Where I've been." id="experience-title" />

        <ol data-timeline className="relative ml-2 space-y-14 border-l border-line pl-8 md:pl-12">
          <span
            data-timeline-line
            aria-hidden="true"
            className="absolute top-0 -left-px h-full w-px bg-accent"
          />
          {experience.map(({ period, role, org, blurb }) => (
            <li key={role} data-entry className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-surface -left-[38.5px] md:-left-[54.5px]"
              />
              <p className="font-display text-sm font-semibold tracking-[0.15em] text-accent uppercase">
                {period}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{role}</h3>
              <p className="mt-0.5 font-medium text-muted">{org}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
