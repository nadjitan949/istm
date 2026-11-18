import { PageTemplate } from "@/components/layout/PageTemplate";
import { evenements } from "@/data/actualites";

export const metadata = {
  title: "Événements à venir - ISTM",
  description: "Agenda des événements de l'ISTM.",
};

export default function EvenementsPage() {
  return (
    <PageTemplate title="Événements à venir" href="/actualites/evenements" showSubNav={false}>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Retrouvez tous les événements à venir à l'ISTM : journées portes
          ouvertes, forums, compétitions, cérémonies de remise de diplômes.
        </p>
        <div className="space-y-4">
          {evenements.map((e) => (
            <div key={e.slug} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-istm-200 bg-white">
              <div className="text-center w-20 md:w-auto">
                <span className="block text-2xl font-bold text-istm-600">
                  {e.date.split(" ")[0]}
                </span>
                <span className="block text-xs text-istm-500 uppercase">
                  {e.date.split(" ").slice(1).join(" ")}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-istm-900 mb-2">{e.titre}</h3>
                <p className="text-sm text-istm-600 mb-4">{e.resume}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}