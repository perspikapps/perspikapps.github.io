import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/mentions-legales")({
  component: MentionsLegales,
  head: () => ({
    meta: [
      { title: "Mentions légales — Perspikapps" },
      { name: "description", content: "Mentions légales du site Perspikapps : éditeur, hébergeur et informations de contact." },
      { property: "og:title", content: "Mentions légales — Perspikapps" },
      { property: "og:description", content: "Mentions légales du site Perspikapps." },
      { property: "og:url", content: "https://perspikapps.fr/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "https://perspikapps.fr/mentions-legales" }],
  }),
});

function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <p>Dernière mise à jour : 27 juillet 2026.</p>

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>perspikapps.fr</strong> est édité par <strong>ALAUDIDA</strong>, société par
        actions simplifiée (SAS) au capital de 1 000 €.
        <br />
        Siège social : 15 rue des Halles, 75001 Paris, France
        <br />
        SIREN : 888 799 194 — SIRET : 888 799 194 00012
        <br />
        RCS Paris — Code APE : 62.02A (Conseil en systèmes et logiciels informatiques)
        <br />
        N° TVA intracommunautaire : FR96 888 799 194
        <br />
        Contact : <a href="mailto:contact@perspikapps.fr">contact@perspikapps.fr</a>
        <br />
        Directeur de la publication : le représentant légal d'ALAUDIDA
      </p>
      <p>
        Perspikapps est une marque et un studio de développement logiciel opérés par ALAUDIDA.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Lovable</strong> sur l'infrastructure de{" "}
        <strong>Cloudflare, Inc.</strong> — 101 Townsend Street, San Francisco, CA 94107,
        États-Unis.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, graphismes, logos, icônes, images)
        est la propriété exclusive d'ALAUDIDA, sauf mention contraire. Toute reproduction,
        représentation ou diffusion, totale ou partielle, est interdite sans autorisation écrite
        préalable.
      </p>

      <h2>Responsabilité</h2>
      <p>
        ALAUDIDA s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
        ce site, mais ne saurait garantir l'absence d'erreurs ou d'omissions. L'utilisation des
        informations se fait sous la seule responsabilité de l'utilisateur.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative au site, vous pouvez nous écrire à{" "}
        <a href="mailto:contact@perspikapps.fr">contact@perspikapps.fr</a>.
      </p>
    </LegalPage>
  );
}
