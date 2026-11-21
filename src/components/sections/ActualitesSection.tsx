import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { actualites } from "@/data/actualites";

export const ActualitesSection = () => {
  const featured = actualites.slice(0, 3);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                À la une
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-istm-900 md:text-4xl">
              Actualités, événements et temps forts du campus.
            </h2>
            <p className="mt-5 text-base leading-7 text-istm-600">
              Une sélection éditoriale pour mettre en valeur les annonces importantes, les succès
              et les moments de rencontre.
            </p>
          </div>
          <Link
            href="/actualites"
            className="group inline-flex items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
          >
            Voir toutes les actualités
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/actualites/${article.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
            >
              <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.titre}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={400}
                  height={250}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="text-red-600">
                    {article.categorie === "evenement" ? "Événement" : "Actualité"}
                  </span>
                  <span className="text-istm-300">/</span>
                  <span className="text-istm-500">{article.date}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-istm-900">
                  {article.titre}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-istm-600">
                  {article.resume}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-istm-100 pt-4">
                  <span className="text-xs text-istm-500">{article.auteur}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-istm-700">
                    Lire la suite
                    <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};