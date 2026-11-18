import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFilieresByDiplome } from "@/data/filieres";
import Link from "next/link";

export const metadata = {
  title: "BTS - ISTM",
  description: "Brevet de Technicien Supérieur.",
};

export default function BtsPage() {
  const filieres = getFilieresByDiplome("BTS");
  return (
    <PageTemplate title="BTS" href="/superieur/bts" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le BTS (Brevet de Technicien Supérieur) est un diplôme national qui
          prépare à l'insertion professionnelle en deux ans après le baccalauréat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filieres.map((f) => (
            <div key={f.slug} className="p-6 rounded-xl border border-istm-200 bg-white">
              <Link href={`/superieur/bts/${f.slug}`}>
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