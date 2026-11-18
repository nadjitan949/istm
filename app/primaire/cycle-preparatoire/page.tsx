import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Cycle préparatoire (CP1-CP2) - ISTM",
  description: "Fondations des apprentissages.",
};

export default function CyclePreparatoirePage() {
  return (
    <PageTemplate title="Cycle préparatoire (CP1-CP2)" href="/primaire/cycle-preparatoire" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le cycle préparatoire (CP1 et CP2) pose les bases des apprentissages
          fondamentaux : lecture, écriture, calcul. Nous accompagnons chaque
          enfant dans sa découverte du monde scolaire avec patience et
          bienveillance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Objectifs</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li>Apprendre à lire et à écrire</li>
              <li>Maîtriser les nombres et le calcul de base</li>
              <li>Développer l'expression orale</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Activités d'éveil</h3>
            <p className="text-sm text-istm-600">
              Dessin, chant, manipulation et jeux éducatifs pour stimuler la
              créativité et la motricité.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}