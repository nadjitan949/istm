import { PageTemplate } from "@/components/layout/PageTemplate";
import Link from "next/link";
import { actualites } from "@/data/actualites";

export const metadata = {
  title: "Actualités - ISTM",
  description: "Toutes les nouvelles de l'ISTM.",
};

export default function ActualitesPage() {
  return (
    <PageTemplate title="Actualités" href="/actualites" showSubNav={false}>
      <div className="space-y-8">
        <div className="flex gap-2 mb-8">
          {["Toutes", "Actualité", "Événement"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm border border-istm-200 text-istm-600 hover:bg-istm-50 hover:text-istm-900 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actualites.map((a) => (
            <div key={a.slug} className="bg-white rounded-xl border border-istm-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48">
                <img
                  src={a.image}
                  alt={a.titre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-red-600 uppercase tracking-wider">
                  {a.categorie === "evenement" ? "Événement" : "Actualité"}
                </span>
                <Link href={`/actualites/${a.slug}`}>
                  <h3 className="text-lg font-bold text-istm-900 mt-2 mb-2">
                    {a.titre}
                  </h3>
                </Link>
                <p className="text-sm text-istm-600 mb-4 line-clamp-2">
                  {a.resume}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-istm-500">{a.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}