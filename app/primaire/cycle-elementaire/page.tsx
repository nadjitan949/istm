import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Cycle élémentaire (CE1-CE2) - ISTM",
  description: "Consolidation des savoirs de base.",
};

export default function CycleElementairePage() {
  return (
    <PageTemplate title="Cycle élémentaire (CE1-CE2)" href="/primaire/cycle-elementaire" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le cycle élémentaire (CE1 et CE2) consolide les acquis du cycle
          préparatoire. Les élèves approfondissent leurs compétences en
          français, mathématiques et découvrent de nouvelles matières.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Matières enseignées</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li>Français (lecture, grammaire, écriture)</li>
              <li>Mathématiques (calcul, géométrie)</li>
              <li>Éveil scientifique</li>
              <li>Éducation civique</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Suivi pédagogique</h3>
            <p className="text-sm text-istm-600">
              Un suivi régulier est assuré avec les parents pour accompagner
              chaque enfant dans sa progression.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}