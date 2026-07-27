import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/politique-cookies")({
  component: Cookies,
  head: () => ({
    meta: [
      { title: "Politique cookies — Perspikapps" },
      { name: "description", content: "Comment perspikapps.fr utilise les cookies et comment gérer votre consentement." },
      { property: "og:title", content: "Politique cookies — Perspikapps" },
      { property: "og:description", content: "Gestion des cookies sur perspikapps.fr." },
      { property: "og:url", content: "https://perspikapps.fr/politique-cookies" },
    ],
    links: [{ rel: "canonical", href: "https://perspikapps.fr/politique-cookies" }],
  }),
});

function Cookies() {
  const reset = () => {
    try {
      localStorage.removeItem("perspikapps.cookie-consent");
      window.location.reload();
    } catch {
      /* ignore */
    }
  };

  return (
    <LegalPage title="Politique cookies">
      <p>Dernière mise à jour : 27 juillet 2026.</p>
      <p>
        Un cookie est un petit fichier déposé sur votre terminal lors de la consultation d'un site.
        La présente politique explique quels cookies sont utilisés sur <strong>perspikapps.fr</strong>{" "}
        et comment vous pouvez les gérer.
      </p>

      <h2>Cookies utilisés</h2>
      <h3>Cookies strictement nécessaires</h3>
      <p>
        Ces cookies sont indispensables au fonctionnement du site (mémorisation de vos préférences
        de consentement, sécurité). Ils ne nécessitent pas votre accord préalable.
      </p>
      <h3>Cookies de mesure d'audience et de publicité</h3>
      <p>
        Nous n'utilisons actuellement <strong>aucun</strong> cookie de mesure d'audience, de suivi
        publicitaire ou de réseau social sans votre consentement explicite.
      </p>

      <h2>Gérer votre consentement</h2>
      <p>
        Vous pouvez à tout moment retirer votre consentement ou modifier vos choix en cliquant
        ci-dessous. La bannière de consentement s'affichera à nouveau lors de votre prochaine
        visite.
      </p>
      <p>
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-[var(--text-on-brand)] no-underline transition-colors hover:bg-[var(--brand-primary-hover)]"
        >
          Modifier mes préférences cookies
        </button>
      </p>

      <h2>Configurer votre navigateur</h2>
      <p>
        Vous pouvez également paramétrer votre navigateur pour bloquer ou supprimer les cookies :
        chaque navigateur propose des instructions spécifiques dans son menu d'aide.
      </p>
    </LegalPage>
  );
}
