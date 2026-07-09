import { siteMeta } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-site flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
        <p className="font-display font-semibold tracking-wide text-ink">
          WordPress · Shopify · GoHighLevel
        </p>
        <a href="#home" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
