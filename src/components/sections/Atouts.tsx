"use client";

import { Stagger } from "@/components/motion/Stagger";
import { ShieldCheck, Users, BookOpen, Handshake, TrendingUp, Laptop } from "lucide-react";

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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-istm-900 mb-4">
            Pourquoi choisir l'ISTM ?
          </h2>
          <p className="text-istm-600 max-w-xl mx-auto">
            Six atouts qui font la différence pour votre réussite.
          </p>
        </div>
        <Stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {atouts.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="text-center p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-istm-50 text-istm-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-istm-900 mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-istm-600 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
};