import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Notre équipe - ISTM",
  description: "Direction, enseignants et personnel administratif.",
};

export default function EquipePage() {
  return (
    <PageTemplate title="Notre équipe" href="/ecole/equipe" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'ISTM s'appuie sur une équipe pédagogique et administrative
          qualifiée, dévouée à la réussite de chaque apprenant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              role: "Direction",
              desc: "Pilotage stratégique de l'établissement.",
            },
            {
              role: "Enseignants",
              desc: "Professeurs qualifiés et expérimentés.",
            },
            {
              role: "Administration",
              desc: "Accueil, scolarité et services aux étudiants.",
            },
          ].map((m) => (
            <div key={m.role} className="p-6 rounded-xl border border-istm-200 bg-white text-center">
              <h3 className="text-lg font-bold text-istm-900 mb-2">{m.role}</h3>
              <p className="text-sm text-istm-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}