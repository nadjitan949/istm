import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Infrastructures et équipements - ISTM",
  description: "Salles de classe, laboratoires, bibliothèque.",
};

export default function InfrastructuresPage() {
  return (
    <PageTemplate title="Infrastructures et équipements" href="/ecole/infrastructures" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'ISTM met à disposition de ses étudiants des infrastructures
          modernes et adaptées pour un apprentissage dans les meilleures
          conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Salles de classe", desc: "Espaces lumineux et équipés." },
            { title: "Laboratoires", desc: "Informatique et sciences." },
            { title: "Bibliothèque", desc: "Ressources documentaires et numériques." },
          ].map((i) => (
            <div key={i.title} className="p-6 rounded-xl border border-istm-200 bg-white">
              <h3 className="text-lg font-bold text-istm-900 mb-2">{i.title}</h3>
              <p className="text-sm text-istm-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}