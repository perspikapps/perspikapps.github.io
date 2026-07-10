import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroIllustration from "@/assets/undraw-mobile-user.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Tone = "success" | "info" | "warning";

const toneStyles: Record<Tone, string> = {
  success: "bg-[var(--success-100)] text-[var(--success-500)]",
  info: "bg-[var(--info-100)] text-[var(--info-500)]",
  warning: "bg-[var(--warning-100)] text-[var(--warning-500)]",
};

function Badge({ tone = "info", children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[6px] border border-[var(--border-subtle)] bg-[var(--surface-sunken)] px-2 py-0.5 font-mono text-xs text-[var(--text-body)]">
      {children}
    </span>
  );
}

const platforms: { name: string; desc: string; status: string; tone: Tone }[] = [
  { name: "Taskadabra", desc: "Task & project tracking for distributed teams.", status: "Live", tone: "success" },
  { name: "Deskale", desc: "Desk and resource scheduling for hybrid offices.", status: "Live", tone: "success" },
  { name: "SynoPkgHub", desc: "A GitHub-to-Synology package repository for DSM.", status: "Beta", tone: "info" },
];

const repos = [
  { name: "klick-deploy", desc: "One-click deployment CLI for PHP apps.", tags: ["php", "cli"] },
  { name: "laravel-envribbon", desc: "Visible environment ribbon for Laravel apps.", tags: ["laravel", "php"] },
  { name: "php-easy-deployer", desc: "Lightweight zero-downtime PHP deploy scripts.", tags: ["php", "devops"] },
];

function Hero() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:gap-16 md:px-12 md:py-24">
      <div className="flex-1">
        <div className="mb-5">
          <Badge tone="info">Software development studio</Badge>
        </div>
        <h1 className="mb-6 font-display text-4xl leading-[1.1] tracking-tight text-[var(--text-heading)] md:text-[3.75rem]">
          Pragmatic solutions for platforms that ship.
        </h1>
        <p className="mb-8 max-w-[480px] text-[1.125rem] leading-[1.55] text-[var(--text-body)]">
          Perspikapps designs, builds and operates Taskadabra, Deskale and SynoPkgHub — and
          open-sources the deployment tooling that keeps them running.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-on-brand)] shadow-xs transition-all hover:bg-[var(--brand-primary-hover)] active:scale-[0.98]"
          >
            Talk to us
          </a>
          <a
            href="#platforms"
            className="inline-flex items-center rounded-md bg-[var(--brand-secondary)] px-6 py-3 text-sm font-semibold text-[var(--text-on-brand)] shadow-xs transition-all hover:bg-[var(--brand-secondary-hover)] active:scale-[0.98]"
          >
            View platforms
          </a>
        </div>
      </div>
      <img src={heroIllustration} alt="" className="w-full max-w-[420px] flex-1" />
    </section>
  );
}

function Platforms() {
  return (
    <section id="platforms" className="bg-card">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-20">
        <h2 className="mb-3 font-display text-3xl text-[var(--text-heading)] md:text-[2.2rem]">
          Platforms we run
        </h2>
        <p className="mb-10 max-w-[560px] text-[var(--text-muted)]">
          Three products, one operations discipline. Each one runs on the same deployment
          pipeline we open-source below.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {platforms.map((p) => (
            <article
              key={p.name}
              className="group rounded-lg border border-[var(--border-subtle)] bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-[1.4rem] text-[var(--text-heading)]">{p.name}</h3>
                <Badge tone={p.tone}>{p.status}</Badge>
              </div>
              <p className="text-sm leading-[1.55] text-[var(--text-muted)]">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section id="open-source">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-20">
        <h2 className="mb-2 font-display text-3xl text-[var(--text-heading)] md:text-[2.2rem]">
          Open source
        </h2>
        <p className="mb-10 max-w-[560px] text-[var(--text-muted)]">
          We publish the internal tools we build to keep our own platforms deploying smoothly.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {repos.map((r) => (
            <article
              key={r.name}
              className="rounded-lg border border-[var(--border-subtle)] bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h4 className="mb-2 font-mono text-[1.125rem] font-semibold text-[var(--text-heading)]">
                {r.name}
              </h4>
              <p className="mb-4 text-sm text-[var(--text-muted)]">{r.desc}</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-card">
      <div className="mx-auto max-w-[760px] px-6 py-16 text-center md:py-20">
        <h2 className="mb-4 font-display text-3xl text-[var(--text-heading)] md:text-[2.2rem]">
          About the studio
        </h2>
        <p className="text-[1.125rem] leading-[1.55] text-[var(--text-body)]">
          We're a small software studio, part of{" "}
          <a
            href="https://alaudida.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--text-link)] underline-offset-4 hover:underline"
          >
            alaudida.fr
          </a>
          . We build and operate our own platforms, and we ship the deployment tooling that
          keeps them running as open source. No hype, no vaporware — just engineering that
          respects your time.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [email, setEmail] = useState("");
  return (
    <section id="contact" className="bg-[var(--navy-800)]">
      <div className="mx-auto max-w-[640px] px-6 py-20 text-center md:py-24">
        <h2 className="mb-3 font-display text-3xl text-[var(--text-on-brand)] md:text-[2.2rem]">
          Let's build something.
        </h2>
        <p className="mb-8 text-white/70">
          Tell us about your platform and we'll get back within a day.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3 rounded-lg bg-card p-4 shadow-md sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-[var(--border-subtle)] bg-white px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-focus)] focus:outline-none focus:ring-4 focus:ring-[rgba(46,117,182,0.25)]"
          />
          <button
            type="submit"
            className="rounded-md bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-on-brand)] transition-colors hover:bg-[var(--brand-primary-hover)] active:scale-[0.98]"
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Platforms />
        <OpenSource />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
