"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { actualites } from "@/data/actualites";

type Filter = "toutes" | "actualite" | "evenement";

const filters: { id: Filter; label: string }[] = [
  { id: "toutes", label: "Toutes" },
  { id: "actualite", label: "Actualités" },
  { id: "evenement", label: "Événements" },
];

const isEvent = (categorie: string) => categorie === "evenement";

export const ActualitesList = () => {
  const [filter, setFilter] = useState<Filter>("toutes");

  const counts: Record<Filter, number> = {
    toutes: actualites.length,
    actualite: actualites.filter((a) => !isEvent(a.categorie)).length,
    evenement: actualites.filter((a) => isEvent(a.categorie)).length,
  };

  const visible = actualites.filter((a) => {
    if (filter === "toutes") return true;
    return filter === "evenement" ? isEvent(a.categorie) : !isEvent(a.categorie);
  });

  return (
    <div className="space-y-10">
      <div
        role="group"
        aria-label="Filtrer par catégorie"
        className="flex gap-6 overflow-x-auto border-b border-istm-200"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className={`relative -mb-px flex shrink-0 items-center gap-2 border-b-2 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2 ${
                active
                  ? "border-red-600 text-istm-900"
                  : "border-transparent text-istm-500 hover:text-istm-900"
              }`}
            >
              {f.label}
              <span className="text-xs tabular-nums text-istm-400">
                {String(counts[f.id]).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-lg border border-istm-200 bg-white p-8 text-center">
          <p className="text-sm text-istm-600">
            Aucun article dans cette catégorie pour le moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((a) => (
            <Link
              key={a.slug}
              href={`/actualites/${a.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
            >
              <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="relative h-52 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.titre}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="text-red-600">
                    {isEvent(a.categorie) ? "Événement" : "Actualité"}
                  </span>
                  <span className="text-istm-300">/</span>
                  <span className="text-istm-500">{a.date}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-istm-900">
                  {a.titre}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-istm-600">
                  {a.resume}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                  <span>Lire la suite</span>
                  <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};