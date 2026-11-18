"use client";

import Image from "next/image";
import { images } from "@/data/images";

export const PartnersSection = () => {
  return (
    <section className="py-20 border-y border-istm-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-istm-900 mb-4">
            Nos partenaires
          </h2>
          <p className="text-istm-600">
            Des entreprises et institutions qui nous font confiance.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
          {images.partenaires.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Partenaire"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};