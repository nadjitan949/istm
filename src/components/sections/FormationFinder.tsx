"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Mail, School } from "lucide-react";

const formations = [
  {
    label: "Je suis en primaire",
    href: "/primaire",
    icon: School,
    description: "Cycle préparatoire, élémentaire et moyen.",
  },
  {
    label: "Je suis collégien ou lycéen",
    href: "/secondaire",
    icon: GraduationCap,
    description: "Collège, lycée et préparation aux examens.",
  },
  {
    label: "Je suis bachelier",
    href: "/superieur",
    icon: Briefcase,
    description: "BTS, BT, Licence et Master.",
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: Mail,
    description: "Conditions, procédure et frais de scolarité.",
  },
];

export const FormationFinder = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Orientation
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-istm-900 md:text-4xl">
              Trouver le bon parcours, au bon moment.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-istm-600">
            Quel que soit l&apos;âge ou le projet, nous avons structuré l&apos;offre ISTM pour
            guider les familles, les bacheliers et les futurs professionnels avec clarté.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {formations.map((f, index) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <Link
                  href={f.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
                >
                  {/* Filet d'accent au survol */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium tabular-nums text-istm-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-istm-900">{f.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-istm-600">
                    {f.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                    <span>Découvrir</span>
                    <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
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