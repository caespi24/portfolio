import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import { siteMeta } from "../data/content";

export default function Contact() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: scope.current, start: "top 70%", once: true },
    });
  });

  return (
    <section id="contact" ref={scope} aria-labelledby="contact-title" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-14rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-site text-center">
        <p data-reveal className="eyebrow flex items-center justify-center gap-3">
          <span aria-hidden="true">07</span>
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          Contact
        </p>

        <h2
          id="contact-title"
          data-reveal
          className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          Let&apos;s build something <span className="text-accent">great</span> together.
        </h2>

        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Have a website, funnel, or workflow in mind? I&apos;m currently available for freelance
          projects — tell me what you&apos;re building.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${siteMeta.email}`} className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            Email me
          </a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
            LinkedIn
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p data-reveal className="mt-8 text-sm text-muted">
          Or call / text{" "}
          <a href={`tel:${siteMeta.phone}`} className="font-medium text-ink transition-colors hover:text-accent">
            {siteMeta.phonePretty}
          </a>
        </p>
      </div>
    </section>
  );
}
