import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Orientation - ISTM",
  description: "Conseils pour l'après-bac.",
};

export default function OrientationPage() {
  return (
    <PageTemplate title="Orientation" href="/secondaire/orientation" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le service d'orientation de l'ISTM accompagne les lycéens dans leurs
          choix post-bac : poursuite d'études supérieures, filières
          professionnelles ou insertion directe dans la vie active.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Accompagnement</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li>Entretiens d'orientation individuels</li>
              <li>Salons et forums des métiers</li>
              <li>Présentation des filières BTS, BT, Licence et Master</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Poursuite d'études</h3>
            <p className="text-sm text-istm-600">
              Nos étudiants peuvent poursuivre leurs études à l'ISTM en BTS,
              BT, Licence ou Master dans de nombreuses filières.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}