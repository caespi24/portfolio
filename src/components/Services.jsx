import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

const icons = {
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  bag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  funnel: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  zap: <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />,
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </>
  ),
};

export default function Services() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
    });

    const cards = scope.current.querySelectorAll("[data-card]");
    gsap.set(cards, { y: 40, opacity: 0 });
    ScrollTrigger.batch(cards, {
      start: "top 85%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.09 }),
    });
  });

  return (
    <section id="services" ref={scope} aria-labelledby="services-title" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index="03" kicker="Services" title="What I do." id="services-title" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map(({ icon, title, description }, i) => (
            <article
              key={title}
              data-card
              className="group rounded-2xl border border-line p-7 transition-[border-color,background-color,translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-raise"
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {icons[icon]}
                  </svg>
                </span>
                <span aria-hidden="true" className="font-display text-sm font-semibold text-muted/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
