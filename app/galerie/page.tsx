import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Galerie - ISTM",
  description: "Photos du campus, des cours et des événements.",
};

export default function GaleriePage() {
  const categories = Object.keys(images.galerie) as (keyof typeof images.galerie)[];
  const [activeCat, setActiveCat] = React.useState<keyof typeof images.galerie>("campus");

  const allImages = categories.flatMap((cat) =>
    images.galerie[cat].map((src, i) => ({ src, cat, i }))
  );
  const filtered = allImages.filter((img) => img.cat === activeCat);

  return (
    <PageTemplate title="Galerie" href="/galerie" showSubNav={false}>
      <div className="space-y-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCat === cat
                  ? "bg-istm-600 text-white border-istm-600"
                  : "bg-white text-istm-600 border-istm-200 hover:bg-istm-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((img) => (
            <div key={`${img.cat}-${img.i`}`} className="aspect-square rounded-xl overflow-hidden border border-istm-200">
              <img
                src={img.src}
                alt={img.cat}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}

import React from "react";