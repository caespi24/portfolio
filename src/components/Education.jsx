import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "../data/content";

export default function Education() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
    });

    const items = scope.current.querySelectorAll("[data-item]");
    gsap.set(items, { y: 28, opacity: 0 });
    ScrollTrigger.batch(items, {
      start: "top 88%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.07 }),
    });
  });

  return (
    <section id="education" ref={scope} aria-labelledby="education-title" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index="06"
          kicker="Education & Credentials"
          title="Foundations."
          id="education-title"
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 data-reveal className="font-display text-xs font-bold tracking-[0.22em] text-muted uppercase">
              Education
            </h3>
            <ul className="mt-6">
              {education.map(({ credential, school, year, note }) => (
                <li
                  key={credential}
                  data-item
                  className="flex items-start justify-between gap-6 border-b border-line py-6 first:pt-0"
                >
                  <div>
                    <p className="font-display text-lg font-bold text-ink">{credential}</p>
                    <p className="mt-1 text-sm text-muted">
                      {school}
                      {note && (
                        <>
                          {" · "}
                          <span className="font-medium text-accent">{note}</span>
                        </>
                      )}
                    </p>
                  </div>
                  <span className="chip shrink-0">{year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 data-reveal className="font-display text-xs font-bold tracking-[0.22em] text-muted uppercase">
              Certifications & Trainings
            </h3>
            <ul className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <li key={cert} data-item className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm leading-relaxed text-muted">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
