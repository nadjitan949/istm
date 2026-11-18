"use client";

import Link from "next/link";
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
                <Link href={f.href}>
                  <div className="bg-white border border-istm-200 rounded-xl p-8 text-center hover:bg-istm-50 hover:border-istm-600 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-istm-100 text-istm-600 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-istm-900 mb-2">
                      {f.label}
                    </h3>
                    <p className="text-sm text-istm-600 mb-6">
                      {f.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      Découvrir
                    </Button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};