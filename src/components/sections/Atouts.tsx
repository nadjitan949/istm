"use client";

import Image from "next/image";
import { Stagger } from "@/components/motion/Stagger";
import { ShieldCheck, Users, BookOpen, Handshake, TrendingUp, Laptop } from "lucide-react";
import { images } from "@/data/images";

const atouts = [
  {
    title: "Corps enseignant qualifié",
    description: "Des professeurs expérimentés et passionnés, à l'écoute de chaque élève.",
    icon: Users,
  },
  {
    title: "Pédagogie pratique",
    description: "Une approche concrète avec des travaux dirigés, des études de cas et des projets.",
    icon: BookOpen,
  },
  {
    title: "Équipements modernes",
    description: "Salles informatiques, laboratoires, bibliothèque et espaces de travail adaptés.",
    icon: Laptop,
  },
  {
    title: "Suivi personnalisé",
    description: "Un accompagnement individuel pour chaque apprenant tout au long de son parcours.",
    icon: ShieldCheck,
  },
  {
    title: "Partenariats entreprises",
    description: "Des conventions avec des entreprises pour des stages et des opportunités d'emploi.",
    icon: Handshake,
  },
  {
    title: "Insertion professionnelle",
    description: "Un taux d'insertion élevé grâce à des formations alignées sur le marché du travail.",
    icon: TrendingUp,
  },
];

export const Atouts = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Nos atouts
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-istm-900 md:text-4xl">
              Pourquoi l&apos;ISTM inspire confiance ?
            </h2>
            <p className="mt-6 text-base leading-7 text-istm-600">
              Au-delà des programmes, c&apos;est l&apos;expérience globale qui fait la différence :
              qualité du suivi, cadre de travail, professionnalisation et culture du résultat.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.atouts}
              alt="Séance de travail encadrée"
              width={1200}
              height={780}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/70 via-istm-900/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-5 text-white">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-red-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Cadre de réussite
                </p>
              </div>
              <p className="mt-3 max-w-md text-base leading-6 text-white/90">
                Un environnement clair, rassurant et exigeant pour aider chacun à donner le meilleur.
              </p>
            </div>
          </div>
        </div>

        <Stagger>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {atouts.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="group rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-istm-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{a.description}</p>
                </div>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
};