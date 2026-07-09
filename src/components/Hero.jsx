import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import { heroStats, siteMeta } from "../data/content";

export default function Hero() {
  const scope = useGsap(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from("[data-hero-pill]", { y: 24, opacity: 0, duration: 0.5 })
      .from("[data-hero-line] > span", { yPercent: 110, duration: 0.7, stagger: 0.09 }, "-=0.2")
      .from("[data-hero-sub]", { y: 24, opacity: 0, duration: 0.5 }, "-=0.35")
      .from("[data-hero-cta] > *", { y: 20, opacity: 0, duration: 0.45, stagger: 0.08 }, "-=0.3")
      .from("[data-hero-stats]", { y: 24, opacity: 0, duration: 0.5 }, "-=0.2")
      .from(
        "[data-count]",
        { textContent: 0, duration: 1, snap: { textContent: 1 }, stagger: 0.12 },
        "<0.1"
      );
  });

  return (
    <section
      id="hero"
      ref={scope}
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24"
    >
      {/* Soft accent glow — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-site">
        <p
          data-hero-pill
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-raise/60 px-4 py-2 text-xs font-semibold tracking-wide text-muted uppercase"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {siteMeta.role}
        </p>

        <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[1.04] font-bold tracking-tight">
          <span data-hero-line className="block overflow-hidden">
            <span className="block">I build websites</span>
          </span>
          <span data-hero-line className="block overflow-hidden">
            <span className="block">&amp; funnels that turn</span>
          </span>
          <span data-hero-line className="block overflow-hidden">
            <span className="block text-accent">clicks into clients.</span>
          </span>
        </h1>

        <p data-hero-sub className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m <strong className="font-semibold text-ink">{siteMeta.name}</strong>, a Computer
          Engineering graduate building responsive websites, sales funnels, and automated workflows
          with WordPress, Shopify, and GoHighLevel — based in {siteMeta.location}.
        </p>

        <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn btn-primary">
            View Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
              <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>

        <dl data-hero-stats className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 md:mt-20 md:gap-10">
          {heroStats.map(({ value, suffix, label }) => (
            <div key={label}>
              <dd className="font-display text-3xl font-bold text-ink md:text-4xl">
                <span data-count>{value}</span>
                {suffix}
              </dd>
              <dt className="mt-1 text-xs text-muted md:text-sm">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
