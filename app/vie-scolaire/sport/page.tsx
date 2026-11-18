import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Sport - ISTM",
  description: "Équipes et compétitions sportives.",
};

export default function SportPage() {
  return (
    <PageTemplate title="Sport" href="/vie-scolaire/sport" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le sport occupe une place importante à l'ISTM. Nos équipes
          participent aux compétitions inter-écoles et nos élèves bénéficient
          d'un encadrement sportif de qualité.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Football", desc: "Équipes garçons et filles" },
            { title: "Basketball", desc: "Compétitions inter-écoles" },
            { title: "Athlétisme", desc: "Courses et sauts" },
            { title: "Handball", desc: "Entraînement hebdomadaire" },
            { title: "Volleyball", desc: "Loisir et compétition" },
            { title: "Tennis de table", desc: "Salle dédiée" },
          ].map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-istm-200 bg-white text-center">
              <h3 className="text-lg font-bold text-istm-900 mb-2">{s.title}</h3>
              <p className="text-sm text-istm-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}