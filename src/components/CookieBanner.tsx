import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "perspikapps.cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "refused") => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-lg border border-[var(--border-subtle)] bg-card p-5 shadow-lg">
        <h2 className="text-sm font-semibold text-[var(--text-heading)]">Cookies</h2>
        <p className="mt-2 text-sm text-[var(--text-body)]">
          Nous utilisons uniquement les cookies strictement nécessaires au fonctionnement du site.
          Aucun cookie de mesure d'audience ni de publicité n'est déposé sans votre accord.{" "}
          <Link to="/politique-cookies" className="underline hover:text-[var(--brand-primary)]">
            En savoir plus
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-md bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-[var(--text-on-brand)] transition-colors hover:bg-[var(--brand-primary-hover)]"
          >
            Tout accepter
          </button>
          <button
            type="button"
            onClick={() => decide("refused")}
            className="rounded-md border border-[var(--border-subtle)] bg-background px-4 py-2 text-sm font-semibold text-[var(--text-body)] transition-colors hover:bg-[var(--surface-muted,theme(colors.slate.100))]"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
