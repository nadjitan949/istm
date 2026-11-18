import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Mission, vision et valeurs - ISTM",
  description: "Ce qui nous guide au quotidien.",
};

export default function ValeursPage() {
  return (
    <PageTemplate title="Mission, vision et valeurs" href="/ecole/valeurs" showSubNav>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Mission",
              text: "Former des professionnels compétents, responsables et prêts à l'emploi.",
              icon: "🎯",
            },
            {
              title: "Vision",
              text: "Être un établissement de référence pour l'excellence pédagogique et l'insertion professionnelle.",
              icon: "🔭",
            },
            {
              title: "Valeurs",
              text: "Rigueur, travail, intégrité, excellence et ouverture sur le monde.",
              icon: "💎",
            },
          ].map((v) => (
            <div key={v.title} className="p-6 rounded-xl border border-istm-200 bg-white text-center">
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h3 className="text-lg font-bold text-istm-900 mb-2">{v.title}</h3>
              <p className="text-sm text-istm-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}