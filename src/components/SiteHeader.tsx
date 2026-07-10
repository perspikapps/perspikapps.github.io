import logoText from "@/assets/logo-text.svg";

const nav = [
  { href: "#", label: "Home", active: true },
  { href: "#platforms", label: "Platforms" },
  { href: "#open-source", label: "Open Source" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border-subtle)] bg-card">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="flex items-center">
          <img src={logoText} alt="Perspikapps" className="h-8" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--text-body)] transition-colors hover:text-[var(--brand-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-on-brand)] transition-colors hover:bg-[var(--brand-primary-hover)]"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
