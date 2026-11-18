import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFilieresByDiplome } from "@/data/filieres";
import Link from "next/link";

export const metadata = {
  title: "Licence - ISTM",
  description: "Licence professionnelle en 3 ans.",
};

export default function LicencePage() {
  const filieres = getFilieresByDiplome("Licence");
  return (
    <PageTemplate title="Licence" href="/superieur/licence" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          La Licence professionnelle est une formation de trois ans après le
          baccalauréat qui combine enseignements théoriques et périodes en
          entreprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filieres.map((f) => (
            <div key={f.slug} className="p-6 rounded-xl border border-istm-200 bg-white">
              <Link href={`/superieur/licence/${f.slug}`}>
                <h3 className="text-lg font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">
                  {f.nom}
                </h3>
              </Link>
              <p className="text-sm text-istm-600 line-clamp-2">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}