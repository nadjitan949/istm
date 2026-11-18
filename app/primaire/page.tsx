import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Primaire - ISTM",
  description: "Cycle préparatoire, élémentaire et moyen.",
};

export default function PrimairePage() {
  return (
    <PageTemplate title="Primaire" href="/primaire" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le cycle primaire de l'ISTM accueille les enfants du CP1 au CM2 dans
          un cadre bienveillant, sécurisé et stimulant. Notre pédagogie met
          l'accent sur l'éveil, la curiosité et la confiance en soi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "CP1 - CP2",
              href: "/primaire/cycle-preparatoire",
              desc: "Fondations des apprentissages",
            },
            {
              title: "CE1 - CE2",
              href: "/primaire/cycle-elementaire",
              desc: "Consolidation des savoirs de base",
            },
            {
              title: "CM1 - CM2",
              href: "/primaire/cycle-moyen",
              desc: "Préparation au secondaire",
            },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow group">
              <h3 className="text-lg font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">{c.title}</h3>
              <p className="text-sm text-istm-600 mb-4">{c.desc}</p>
              <a href={c.href} className="text-sm font-medium text-istm-600 hover:text-red-600">
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}