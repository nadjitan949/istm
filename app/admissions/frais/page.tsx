import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Frais de scolarité - ISTM",
  description: "Tarifs par cycle et par filière.",
};

export default function FraisPage() {
  return (
    <PageTemplate title="Frais de scolarité" href="/admissions/frais" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Les frais de scolarité varient selon le cycle et la filière choisie.
          Des facilités de paiement sont possibles sur demande.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-istm-200">
                <th className="pb-3 text-left text-istm-900 font-semibold">Cycle / Filière</th>
                <th className="pb-3 text-left text-istm-900 font-semibold">Frais (par année)</th>
              </tr>
            </thead>
            <tbody className="text-istm-600">
              <tr className="border-b border-istm-100">
                <td className="py-3">Primaire</td>
                <td className="py-3">À REMPLACER</td>
              </tr>
              <tr className="border-b border-istm-100">
                <td className="py-3">Secondaire (Collège)</td>
                <td className="py-3">À REMPLACER</td>
              </tr>
              <tr className="border-b border-istm-100">
                <td className="py-3">Secondaire (Lycée)</td>
                <td className="py-3">À REMPLACER</td>
              </tr>
              <tr className="border-b border-istm-100">
                <td className="py-3">BTS / BT</td>
                <td className="py-3">À REMPLACER</td>
              </tr>
              <tr className="border-b border-istm-100">
                <td className="py-3">Licence</td>
                <td className="py-3">À REMPLACER</td>
              </tr>
              <tr className="border-b border-istm-100">
                <td className="py-3">Master</td>
                <td className="py-3">À REMPLACER</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-istm-500 mt-4">
          À REMPLACER : Les frais sont indicatifs. Contactez le service des
          admissions pour le barème exact.
        </p>
      </div>
    </PageTemplate>
  );
}