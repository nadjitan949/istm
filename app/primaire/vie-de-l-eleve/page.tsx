import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Vie de l'élève primaire - ISTM",
  description: "Activités d'éveil et sécurité.",
};

export default function VieElevePage() {
  return (
    <PageTemplate title="Vie de l'élève" href="/primaire/vie-de-l-eleve" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          La vie de l'élève à l'école primaire de l'ISTM est rythmée par des
          activités d'éveil, des sorties éducatives et un suivi attentif de la
          sécurité.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Activités d'éveil</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li>Ateliers artistiques et manuels</li>
              <li>Éducation sportive</li>
              <li>Sorties pédagogiques</li>
              <li>Éducation à l'environnement</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Sécurité et lien avec les parents</h3>
            <p className="text-sm text-istm-600">
              Un personnel dédié veille à la sécurité des enfants. Les parents
              sont régulièrement informés de la vie scolaire de leur enfant.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}