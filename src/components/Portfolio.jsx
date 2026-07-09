import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";
import SectionHeading from "./SectionHeading";
import { projects, moreProjects } from "../data/content";

function ProjectVisual({ project, index }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of the ${project.title} project`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${project.title} — placeholder artwork`}
      className={`relative h-full w-full bg-linear-to-br ${project.gradient} transition-transform duration-500 will-change-transform group-hover:scale-105`}
    >
      <span
        aria-hidden="true"
        className="absolute top-5 right-6 font-display text-sm font-bold tracking-[0.3em] text-white/70"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold tracking-tight text-white/25 md:text-8xl"
      >
        {project.mark}
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border-[20px] border-white/10"
      />
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article data-card className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
        <ProjectVisual project={project} index={index} />
        <span className="absolute top-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
          {project.category}
        </span>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
        <p className="mt-3 text-sm font-medium text-ink">
          <span className="text-accent">Role</span> — {project.role}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="chip group-hover:border-accent/40">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const scope = useGsap(() => {
    gsap.from("[data-reveal]", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: scope.current, start: "top 72%", once: true },
    });

    const cards = scope.current.querySelectorAll("[data-card]");
    gsap.set(cards, { y: 48, opacity: 0 });
    ScrollTrigger.batch(cards, {
      start: "top 85%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
    });

    const rows = scope.current.querySelectorAll("[data-row]");
    gsap.set(rows, { x: -32, opacity: 0 });
    ScrollTrigger.batch(rows, {
      start: "top 88%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }),
    });
  });

  return (
    <section id="work" ref={scope} aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index="02" kicker="Selected Work" title="Projects that shipped." id="work-title" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <h3 data-reveal className="mt-20 font-display text-xl font-bold text-ink">
          More builds
        </h3>
        <ul className="mt-6 border-y border-line">
          {moreProjects.map((item, i) => (
            <li key={item.title} data-row className={i > 0 ? "border-t border-line" : ""}>
              <div className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 px-2 py-5 transition-colors duration-300 hover:bg-raise">
                <span aria-hidden="true" className="font-display text-xs font-semibold text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-base font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </p>
                <p className="text-sm text-muted">{item.type}</p>
                <ul className="ml-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
