import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-[var(--text-body)]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
        <h1 className="mb-8 text-3xl font-bold text-[var(--text-heading)] md:text-4xl">{title}</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed md:text-base [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--text-heading)] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[var(--text-heading)] [&_a]:text-[var(--brand-primary)] [&_a]:underline">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
