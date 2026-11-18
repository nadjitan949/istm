import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFilieresByDiplome } from "@/data/filieres";

export const metadata = {
  title: "Supérieur - ISTM",
  description: "BTS, BT, Licence et Master.",
};

export default function SuperieurPage() {
  return (
    <PageTemplate title="Supérieur" href="/superieur" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'ISTM propose des formations supérieures professionnalisantes du
          post-bac au Bac+5 : BTS, BT, Licence et Master dans des filières
          variées et recherchées par les entreprises.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["BTS", "BT", "Licence", "Master"].map((diplome) => {
            const filieres = getFilieresByDiplome(diplome);
            return (
              <div key={diplome} className="p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow group">
                <h3 className="text-lg font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">
                  {diplome}
                </h3>
                <p className="text-sm text-istm-600 mb-4">
                  {filieres.length} filière{filieres.length > 1 ? "s" : ""} disponible{filieres.length > 1 ? "s" : ""}
                </p>
                <a
                  href={`/superieur/${diplome.toLowerCase()}/informatique-gestion`}
                  className="text-sm font-medium text-istm-600 hover:text-red-600"
                >
                  Découvrir les filières →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
}