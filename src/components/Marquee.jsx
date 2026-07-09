import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import { marqueeItems } from "../data/content";

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li
          key={item}
          className="flex items-center font-display text-sm font-semibold tracking-[0.25em] whitespace-nowrap text-muted uppercase"
        >
          <span className="px-5">{item}</span>
          <span className="text-accent" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  const scope = useGsap(() => {
    // Track holds two identical rows; sliding -50% then looping reads as infinite.
    gsap.to("[data-marquee-track]", { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
  });

  return (
    <div ref={scope} aria-label="Platforms and tools I work with" className="overflow-hidden border-y border-line py-5">
      <div data-marquee-track className="flex w-max will-change-transform">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
