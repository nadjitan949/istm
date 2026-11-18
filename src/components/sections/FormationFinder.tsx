"use client";

import { Button } from "@/components/ui/Button";
import { School, GraduationCap, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

const formations = [
  {
    label: "Je suis en primaire",
    href: "/primaire",
    icon: School,
    description: "Cycle préparatoire, élémentaire et moyen",
  },
  {
    label: "Je suis collégien ou lycéen",
    href: "/secondaire",
    icon: GraduationCap,
    description: "Collège, lycée et préparation aux examens",
  },
  {
    label: "Je suis bachelier",
    href: "/superieur",
    icon: Briefcase,
    description: "BTS, BT, Licence et Master",
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: Mail,
    description: "Conditions, procédure et frais de scolarité",
  },
];

export const FormationFinder = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-istm-900 mb-4">
            Trouver votre formation
          </h2>
          <p className="text-istm-600 max-w-xl mx-auto">
            Quel que soit votre âge ou votre projet, l'ISTM a une filière pour
            vous.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={f.href}
              >
                <div className="rounded-xl border border-istm-200 bg-white p-8 text-center transition-all hover:border-istm-600 hover:bg-istm-50">
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-istm-100 text-istm-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-istm-900">{f.label}</h3>
                  <p className="mb-6 text-sm text-istm-600">{f.description}</p>
                  <Button variant="outline" size="sm" href={f.href}>
                    Découvrir
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};