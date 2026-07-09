import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import SectionHeading from "./SectionHeading";
import { siteMeta } from "../data/content";

const contactRows = [
  {
    label: "Email",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: siteMeta.phonePretty,
    href: `tel:${siteMeta.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "LinkedIn",
    value: "espiridion-christian",
    href: siteMeta.linkedin,
    external: true,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Location",
    value: "Cabuyao City, Laguna, PH",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function About() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
    });
  });

  return (
    <section id="about" ref={scope} aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index="01" kicker="About" title="Engineer's logic, designer's eye." id="about-title" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div data-reveal className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a Computer Engineering graduate with hands-on experience across software
              development, web technologies, AI-related training, and workflow automation. I build
              responsive applications, design digital systems, and implement technical solutions
              using Python, Java, WordPress, and modern development tools.
            </p>
            <p>
              These days, that means building conversion-focused sites and funnels on{" "}
              <span className="font-medium text-ink">WordPress</span>,{" "}
              <span className="font-medium text-ink">Shopify</span>, and{" "}
              <span className="font-medium text-ink">GoHighLevel</span> — and wiring up the
              automations behind them so businesses can follow up, book, and sell on autopilot.
            </p>
          </div>

          <aside data-reveal className="h-fit rounded-2xl border border-line bg-raise p-8">
            <div className="mb-8 flex items-center gap-4 border-b border-line pb-8">
              <img
                src={siteMeta.portrait}
                alt={`Portrait of ${siteMeta.name}`}
                loading="lazy"
                width="80"
                height="80"
                className="h-20 w-20 shrink-0 rounded-full border-2 border-accent/60 object-cover object-top"
              />
              <div>
                <p className="font-display text-base font-bold text-ink">{siteMeta.name}</p>
                <p className="mt-0.5 text-sm text-muted">{siteMeta.role}</p>
              </div>
            </div>
            <h3 className="font-display text-xs font-bold tracking-[0.22em] text-muted uppercase">
              Direct lines
            </h3>
            <ul className="mt-6 space-y-5">
              {contactRows.map(({ label, value, href, external, icon }) => (
                <li key={label} className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-[18px] w-[18px]"
                    >
                      {icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="block truncate text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
