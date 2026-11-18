import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Partenaires - ISTM",
  description: "Entreprises et institutions partenaires.",
};

export default function PartenairesPage() {
  return (
    <PageTemplate title="Partenaires" href="/ecole/partenaires" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          L'ISTM collabore avec des entreprises et institutions pour offrir des
          stages, des opportunités d'emploi et des projets concrets à ses
          étudiants.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.partenaires.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Partenaire ${i + 1}`}
              className="h-16 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}