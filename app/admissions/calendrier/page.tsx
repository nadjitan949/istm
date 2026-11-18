import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Calendrier - ISTM",
  description: "Dates clés de l'année.",
};

export default function CalendrierPage() {
  return (
    <PageTemplate title="Calendrier" href="/admissions/calendrier" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Retrouvez les dates importantes de l'année académique 2026-2027.
        </p>
        <div className="space-y-4">
          {[
            { date: "15 juin 2026", event: "Ouverture des inscriptions" },
            { date: "5 juillet 2026", event: "Journées portes ouvertes" },
            { date: "15 septembre 2026", event: "Clôture des inscriptions" },
            { date: "5 octobre 2026", event: "Rentrée scolaire" },
            { date: "15 décembre 2026", event: "Vacances de Noël" },
            { date: "5 avril 2027", event: "Vacances de Pâques" },
            { date: "30 juin 2027", event: "Fin de l'année scolaire" },
          ].map((item) => (
            <div key={item.event} className="flex justify-between p-4 rounded-xl border border-istm-200 bg-white">
              <span className="font-semibold text-istm-900">{item.event}</span>
              <span className="text-istm-600">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}