import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Préparation aux examens - ISTM",
  description: "BEPC et Baccalauréat.",
};

export default function PreparationExamensPage() {
  return (
    <PageTemplate title="Préparation aux examens" href="/secondaire/preparation-examens" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'ISTM propose une préparation intensive aux examens d'État (BEPC et
          Baccalauréat) avec des cours de soutien, des examens blancs et un
          accompagnement méthodologique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <h3 className="text-lg font-bold text-istm-900 mb-2">BEPC</h3>
            <p className="text-sm text-istm-600 mb-2">
              Révision des programmes de 3ème, annales corrigées, simulations
              d'épreuves.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Baccalauréat</h3>
            <p className="text-sm text-istm-600 mb-2">
              Préparation aux épreuves écrites et orales, méthodologie,
              gestion du stress et planning de révision.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}