import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/politique-de-confidentialite")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Perspikapps" },
      { name: "description", content: "Comment Perspikapps collecte, utilise et protège vos données personnelles conformément au RGPD." },
      { property: "og:title", content: "Politique de confidentialité — Perspikapps" },
      { property: "og:description", content: "Traitement des données personnelles sur perspikapps.fr." },
      { property: "og:url", content: "https://perspikapps.fr/politique-de-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "https://perspikapps.fr/politique-de-confidentialite" }],
  }),
});

function Privacy() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>Dernière mise à jour : 27 juillet 2026.</p>
      <p>
        La présente politique décrit comment Perspikapps (« nous ») traite les données personnelles
        collectées via le site <strong>perspikapps.fr</strong>, conformément au Règlement général
        sur la protection des données (RGPD) et à la loi « Informatique et Libertés ».
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>ALAUDIDA</strong> (SAS), 15 rue des Halles,
        75001 Paris, France — SIREN 888 799 194. Contact :{" "}
        <a href="mailto:contact@perspikapps.fr">contact@perspikapps.fr</a>.
      </p>

      <h2>Données collectées</h2>
      <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Adresse e-mail lorsque vous nous contactez via le formulaire ou par courriel ;</li>
        <li>Contenu des messages que vous nous adressez ;</li>
        <li>Données techniques minimales nécessaires au fonctionnement du site (voir la politique cookies).</li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Répondre à vos demandes de contact — base : intérêt légitime / exécution de mesures précontractuelles ;</li>
        <li>Assurer la sécurité et le bon fonctionnement du site — base : intérêt légitime.</li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Les messages sont conservés pendant la durée nécessaire au traitement de votre demande,
        puis au maximum 3 ans à des fins de suivi commercial.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données ne sont ni vendues ni louées. Elles sont accessibles uniquement à l'équipe de
        Perspikapps et à nos sous-traitants techniques (hébergement Cloudflare via Lovable),
        soumis à des obligations de confidentialité équivalentes.
      </p>

      <h2>Transferts hors UE</h2>
      <p>
        Certains prestataires techniques peuvent traiter des données hors Union européenne. Le cas
        échéant, ces transferts sont encadrés par les clauses contractuelles types de la Commission
        européenne.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
        d'opposition et de portabilité sur vos données, ainsi que le droit de définir des
        directives post-mortem. Pour exercer ces droits, écrivez à{" "}
        <a href="mailto:contact@perspikapps.fr">contact@perspikapps.fr</a>. Vous pouvez également
        introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr">www.cnil.fr</a>).
      </p>
    </LegalPage>
  );
}
