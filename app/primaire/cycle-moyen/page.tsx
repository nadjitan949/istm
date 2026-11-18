import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Cycle moyen (CM1-CM2) - ISTM",
  description: "Préparation au secondaire.",
};

export default function CycleMoyenPage() {
  return (
    <PageTemplate title="Cycle moyen (CM1-CM2)" href="/primaire/cycle-moyen" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le cycle moyen (CM1 et CM2) prépare les élèves au passage au
          secondaire. Ils acquièrent l'autonomie et la méthodologie nécessaires
          pour réussir au collège.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Objectifs</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li>Consolider les compétences en français et mathématiques</li>
              <li>Développer l'autonomie et l'organisation</li>
              <li>Préparer l'entrée en 6ème</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Sécurité</h3>
            <p className="text-sm text-istm-600">
              Un encadrement attentif assure la sécurité des élèves à l'école
              et lors des activités périscolaires.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}