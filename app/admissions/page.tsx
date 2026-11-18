import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Admissions - ISTM",
  description: "Conditions d'admission, procédure et frais de scolarité.",
};

export default function AdmissionsPage() {
  return (
    <PageTemplate title="Admissions" href="/admissions" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Rejoindre l'ISTM, c'est choisir une formation de qualité du primaire
          au supérieur. Découvrez nos conditions d'admission, notre procédure
          d'inscription et nos frais de scolarité.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Conditions d'admission",
              href: "/admissions/conditions",
              desc: "Qui peut s'inscrire à l'ISTM",
            },
            {
              title: "Procédure d'inscription",
              href: "/admissions/procedure",
              desc: "Étapes pour s'inscrire",
            },
            {
              title: "Frais de scolarité",
              href: "/admissions/frais",
              desc: "Tarifs par cycle et par filière",
            },
            {
              title: "Calendrier",
              href: "/admissions/calendrier",
              desc: "Dates clés de l'année",
            },
            {
              title: "FAQ",
              href: "/admissions/faq",
              desc: "Questions fréquentes",
            },
            {
              title: "Pré-inscription en ligne",
              href: "/admissions/pre-inscription",
              desc: "Formulaire de pré-inscription",
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