"use client";

import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { User, GraduationCap, Building2, Award } from "lucide-react";

const figures = [
  {
    value: 2500,
    label: "Élèves et étudiants",
    icon: User,
    suffix: "+",
  },
  {
    value: 16,
    label: "Années d'expérience",
    icon: Building2,
  },
  {
    value: 24,
    label: "Filières proposées",
    icon: GraduationCap,
  },
  {
    value: 92,
    label: "Taux de réussite aux examens",
    icon: Award,
    suffix: "%",
  },
];

export const KeyFigures = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-istm-900 px-6 py-10 md:px-10 md:py-12">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-red-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-100">
                  Chiffres clés
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Des résultats qui rassurent les familles et valorisent les parcours.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-istm-100/80">
              Des années d&apos;expérience, un haut niveau d&apos;exigence et une vraie continuité
              pédagogique.
            </p>
          </div>

          <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {figures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="rounded-md border border-white/10 bg-white/5 p-6 text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-red-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <Counter
                    value={f.value}
                    label={f.label}
                    suffix={f.suffix}
                    className="mt-6"
                    valueClassName="text-white text-4xl font-semibold tabular-nums"
                    labelClassName="mt-1 text-white/70 text-sm leading-6"
                  />
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};