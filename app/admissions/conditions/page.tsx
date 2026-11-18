import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Conditions d'admission - ISTM",
  description: "Qui peut s'inscrire à l'ISTM.",
};

export default function ConditionsPage() {
  return (
    <PageTemplate title="Conditions d'admission" href="/admissions/conditions" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'ISTM accueille des élèves et étudiants de tous horizons, dans le
          respect des conditions d'admission de chaque cycle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Primaire",
              desc: "Ouvert à tous les enfants en âge scolaire.",
            },
            {
              title: "Secondaire",
              desc: "Admission sur dossier et entretien.",
            },
            {
              title: "Supérieur",
              desc: "Baccalauréat requis (ou équivalent selon le diplôme).",
            },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-istm-200 bg-white text-center">
              <h3 className="text-lg font-bold text-istm-900 mb-2">{c.title}</h3>
              <p className="text-sm text-istm-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}