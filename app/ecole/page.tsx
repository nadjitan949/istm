import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "L'ISTM - Présentation de l'établissement",
  description: "Découvrez l'Institut Supérieur de Technologies et de Management, son histoire et ses valeurs.",
};

export default function EcolePage() {
  return (
    <PageTemplate title="L'ISTM" href="/ecole" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'Institut Supérieur de Technologies et de Management (ISTM) est un
          établissement d'enseignement privé qui accueille des élèves et des
          étudiants du primaire au supérieur. Depuis sa création, l'ISTM s'est
          donné pour mission de former des professionnels compétents,
          responsables et prêts à relever les défis du monde du travail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Présentation",
              href: "/ecole/presentation",
              description:
                "Histoire, identité et chiffres clés de l'ISTM.",
            },
            {
              title: "Mot de la direction",
              href: "/ecole/mot-de-la-direction",
              description:
                "Le message de notre directrice générale.",
            },
            {
              title: "Valeurs",
              href: "/ecole/valeurs",
              description:
                "Mission, vision et valeurs qui nous guident.",
            },
          ].map((item) => (
            <div key={item.href} className="p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-istm-900 mb-2">{item.title}</h3>
              <p className="text-sm text-istm-600 mb-4">{item.description}</p>
              <a
                href={item.href}
                className="text-sm font-medium text-istm-600 hover:text-red-600"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}