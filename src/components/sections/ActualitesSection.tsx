"use client";

import Link from "next/link";
import Image from "next/image";
import { actualites } from "@/data/actualites";
import { images } from "@/data/images";

export const ActualitesSection = () => {
  const featured = actualites.slice(0, 3);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-istm-900 mb-2">
              Actualités
            </h2>
            <p className="text-istm-600">Toutes les nouvelles de l'ISTM</p>
          </div>
          <Link href="/actualites" className="text-istm-600 hover:text-red-600 font-medium">
            Voir toutes →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article) => (
            <div key={article.slug} className="bg-white rounded-xl border border-istm-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40">
                <Image
                  src={article.image}
                  alt={article.titre}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-red-600 uppercase tracking-wider">
                  {article.categorie === "evenement" ? "Événement" : "Actualité"}
                </span>
                <h3 className="text-lg font-bold text-istm-900 mt-2 mb-2">
                  {article.titre}
                </h3>
                <p className="text-sm text-istm-600 mb-4 line-clamp-2">
                  {article.resume}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-istm-500">{article.date}</span>
                  <Link href={`/actualites/${article.slug}`} className="text-sm font-medium text-istm-600 hover:text-red-600">
                    Lire la suite →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};