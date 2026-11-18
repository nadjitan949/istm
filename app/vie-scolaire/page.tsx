import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Vie scolaire - ISTM",
  description: "Clubs, sport, bibliothèque et règlement intérieur.",
};

export default function VieScolairePage() {
  return (
    <PageTemplate title="Vie scolaire" href="/vie-scolaire" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          La vie scolaire à l'ISTM est riche et variée. Clubs, sport,
          bibliothèque, informatique et règlement intérieur contribuent à
          l'épanouissement de chaque élève.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Clubs et activités",
              href: "/vie-scolaire/clubs",
              desc: "Clubs scientifiques, culturels, sportifs",
            },
            {
              title: "Sport",
              href: "/vie-scolaire/sport",
              desc: "Équipes et compétitions",
            },
            {
              title: "Bibliothèque et informatique",
              href: "/vie-scolaire/bibliotheque",
              desc: "Ressources et accès numérique",
            },
            {
              title: "Règlement intérieur",
              href: "/vie-scolaire/reglement",
              desc: "Vie en communauté et discipline",
            },
          ].map((item) => (
            <div key={item.href} className="p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-istm-600 mb-4">{item.desc}</p>
              <a href={item.href} className="text-sm font-medium text-istm-600 hover:text-red-600">
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}