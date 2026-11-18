import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Bibliothèque et informatique - ISTM",
  description: "Ressources et accès numérique.",
};

export default function BibliothequePage() {
  return (
    <PageTemplate title="Bibliothèque et informatique" href="/vie-scolaire/bibliotheque" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          La bibliothèque de l'ISTM met à disposition des étudiants des
          ressources documentaires, des manuels scolaires et un accès
          numérique pour leurs recherches et travaux.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Bibliothèque</h3>
            <p className="text-sm text-istm-600 mb-2">
              Manuels, livres de référence, espaces de lecture et de travail.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Salle informatique</h3>
            <p className="text-sm text-istm-600 mb-2">
              Postes connectés, internet haut débit, logiciels pédagogiques.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}