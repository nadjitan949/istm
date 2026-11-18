"use client";

import { Counter } from "@/components/motion/Counter";
import { User, GraduationCap, Building2, Award } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

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
    label: "% de réussite aux examens",
    icon: Award,
    suffix: "%",
  },
];

export const KeyFigures = () => {
  return (
    <section className="py-20 bg-istm-600">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {figures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="text-center p-6 rounded-xl bg-white/10 border border-white/20"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Icon className="h-6 w-6 text-red-600" />
                  <Counter value={f.value} label={f.label} suffix={f.suffix} />
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};