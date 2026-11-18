"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const cycles = [
  {
    title: "Primaire",
    href: "/primaire",
    description:
      "Cycle préparatoire, élémentaire et moyen. Des apprentissages fondés sur l'éveil, la curiosité et la confiance en soi.",
    image: images.primaire,
  },
  {
    title: "Secondaire",
    href: "/secondaire",
    description:
      "Collège et lycée (séries A, C, D, G). Préparation aux examens et orientation vers l'enseignement supérieur.",
    image: images.secondaire,
  },
  {
    title: "Supérieur",
    href: "/superieur",
    description:
      "BTS, BT, Licence et Master. Des filières professionnalisantes pour une insertion rapide sur le marché du travail.",
    image: images.superieur,
  },
];

export const Cycles = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-istm-900 mb-4">
            Nos trois cycles
          </h2>
          <p className="text-istm-600 max-w-xl mx-auto">
            Du primaire au Master, un parcours éducatif complet et cohérent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cycles.map((c) => (
            <div
              key={c.href}
              className="bg-white rounded-xl overflow-hidden border border-istm-200 hover:shadow-md transition-shadow group"
            >
              <div className="relative h-48">
                <Image
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-istm-600/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <Link href={c.href}>
                  <h3 className="text-xl font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">
                    {c.title}
                  </h3>
                </Link>
                <p className="text-sm text-istm-600 mb-6">{c.description}</p>
                <Link href={c.href}>
                  <Button variant="outline" size="sm" asChild>
                    <ArrowRight className="h-4 w-4 mr-1" /> En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};