import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section occupies mid-viewport.
  useEffect(() => {
    const triggers = navLinks
      .map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive(id);
          },
        });
      })
      .filter(Boolean);

    const hero = document.getElementById("hero");
    if (hero) {
      triggers.push(
        ScrollTrigger.create({
          trigger: hero,
          start: "top top",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive("");
          },
        })
      );
    }

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-site flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          christian<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  active === id ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                    active === id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-80 border-t border-line" : "max-h-0"
        }`}
      >
        <ul className="container-site flex flex-col gap-1 py-4">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === id ? "text-accent" : "text-muted hover:bg-raise hover:text-ink"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
