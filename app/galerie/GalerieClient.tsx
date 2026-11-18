"use client";

import * as React from "react";
import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

const CATEGORY_LABELS: Record<keyof typeof images.galerie, string> = {
  campus: "Campus",
  cours: "Cours",
  evenements: "Événements",
  sport: "Sport",
};

export function GalerieClient() {
  const categories = Object.keys(images.galerie) as (keyof typeof images.galerie)[];
  const [activeCategory, setActiveCategory] = React.useState<keyof typeof images.galerie>("campus");

  const filteredImages = images.galerie[activeCategory].map((src, index) => ({
    src,
    index,
    category: activeCategory,
  }));

  return (
    <PageTemplate title="Galerie" href="/galerie" showSubNav={false}>
      <div className="space-y-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-istm-600 bg-istm-600 text-white"
                    : "border-istm-200 bg-white text-istm-600 hover:bg-istm-50",
                ].join(" ")}
              >
                {CATEGORY_LABELS[category]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {filteredImages.map((image) => (
            <div
              key={`${image.category}-${image.index}`}
              className="relative aspect-square overflow-hidden rounded-xl border border-istm-200"
            >
              <Image
                src={image.src}
                alt={`${CATEGORY_LABELS[image.category]} ${image.index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}