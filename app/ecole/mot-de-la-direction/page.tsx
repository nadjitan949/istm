import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Mot de la direction - ISTM",
  description: "Le message de notre directrice générale.",
};

export default function DirectionPage() {
  return (
    <PageTemplate title="Mot de la direction" href="/ecole/mot-de-la-direction" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Chers parents, chers élèves et chers étudiants,
        </p>
        <p className="text-istm-600 leading-relaxed text-lg">
          Bienvenue à l'ISTM. Notre établissement s'engage à offrir une
          éducation de qualité, du primaire au supérieur, dans un environnement
          propice à l'épanouissement et à la réussite de chacun.
        </p>
        <p className="text-istm-600 leading-relaxed text-lg">
          Nous croyons fermement que l'éducation est le levier principal du
          développement individuel et collectif. C'est pourquoi nous mettons
          tout en œuvre pour former des citoyens responsables, compétents et
          ouverts sur le monde.
        </p>
        <div className="p-6 rounded-xl border border-istm-200 bg-white">
          <p className="text-istm-600 leading-relaxed italic">
            "Ensemble, construisons l'avenir de nos jeunes."
          </p>
          <p className="mt-4 text-right font-semibold text-istm-900">
            La Directrice Générale
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}