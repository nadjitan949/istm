import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const cycles = [
  {
    title: "Primaire",
    href: "/primaire",
    description:
      "Cycle préparatoire, élémentaire et moyen. Des apprentissages fondés sur l'éveil, la curiosité et la confiance en soi.",
    image: images.home.primaire,
  },
  {
    title: "Secondaire",
    href: "/secondaire",
    description:
      "Collège et lycée (séries F, G1 et G2). Préparation aux examens et orientation vers l'enseignement supérieur.",
    image: images.home.secondaire,
  },
  {
    title: "Supérieur",
    href: "/superieur",
    description:
      "BTS, BT, Licence et Master. Des filières professionnalisantes pour une insertion rapide sur le marché du travail.",
    image: images.home.superieur,
  },
];

export const Cycles = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Parcours
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-istm-900 md:text-4xl">
              Trois cycles, une même ambition éducative.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-istm-600">
            Du primaire au supérieur, chaque étape est conçue pour renforcer les bases,
            affirmer les projets et sécuriser la progression des apprenants.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cycles.map((c, index) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
            >
              <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-linear-to-t from-istm-900/70 via-istm-900/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-5 flex items-end justify-between text-white">
                  <h3 className="text-2xl font-semibold text-white">{c.title}</h3>
                  <span className="text-sm font-medium tabular-nums text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-6 text-istm-600">{c.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                  <span>En savoir plus</span>
                  <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
