export default function SectionHeading({ index, kicker, title, id }) {
  return (
    <div data-reveal className="mb-12 md:mb-16">
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-accent" />
        {kicker}
      </p>
      <h2 id={id} className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
