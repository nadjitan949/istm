import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Règlement intérieur - ISTM",
  description: "Vie en communauté et discipline.",
};

export default function ReglementPage() {
  return (
    <PageTemplate title="Règlement intérieur" href="/vie-scolaire/reglement" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le règlement intérieur de l'ISTM définit les droits et les devoirs
          de chacun pour garantir un climat de travail serein et respectueux.
        </p>
        <div className="space-y-4">
          {[
            "Ponctualité et assiduité aux cours",
            "Port de l'uniforme obligatoire",
            "Respect du personnel et des camarades",
            "Interdiction des téléphones en classe",
            "Respect des locaux et du matériel",
            "Respect des horaires de la bibliothèque et de l'informatique",
          ].map((r) => (
            <div key={r} className="flex items-start gap-3 p-3 rounded-xl border border-istm-200 bg-istm-50">
              <span className="flex-shrink-0 text-red-600">•</span>
              <p className="text-sm text-istm-600">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}