import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Présentation - ISTM",
  description: "Découvrez l'histoire et l'identité de l'ISTM.",
};

export default function PresentationPage() {
  return (
    <PageTemplate title="Présentation" href="/ecole/presentation" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'Institut Supérieur de Technologies et de Management (ISTM) a été
          fondé pour répondre à un besoin croissant de formation de qualité,
          alliant excellence académique et insertion professionnelle.
        </p>
        <p className="text-istm-600 leading-relaxed text-lg">
          Notre établissement accueille des apprenants du primaire au supérieur,
          avec une pédagogie centrée sur la pratique, l'encadrement
          personnalisé et l'ouverture sur le monde de l'entreprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Notre histoire</h3>
            <p className="text-sm text-istm-600">
              Depuis plus de 15 ans, l'ISTM forme des générations
              d'étudiants et les prépare à réussir dans leur vie professionnelle.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Notre identité</h3>
            <p className="text-sm text-istm-600">
              Un établissement engagé pour la réussite de chaque apprenant,
              dans un cadre bienveillant et exigeant.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}