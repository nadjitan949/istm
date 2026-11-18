import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Procédure d'inscription - ISTM",
  description: "Étapes pour s'inscrire.",
};

export default function ProcedurePage() {
  return (
    <PageTemplate title="Procédure d'inscription" href="/admissions/procedure" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Voici les étapes pour s'inscrire à l'ISTM :
        </p>
        <div className="space-y-4">
          {[
            "Retirer ou remplir le formulaire d'inscription en ligne",
            "Déposer le dossier complet au service des admissions",
            "Passer un entretien de motivation (supérieur)",
            "Recevoir la réponse d'admission",
            "Payer les frais d'inscription et finaliser l'inscription",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-istm-200 bg-white">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-istm-600 text-white text-center text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-istm-600 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}