"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-istm-600/90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08854caf25c?w=1920&q=80')] bg-cover bg-center opacity-60" />
      <div className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 text-red-200 text-sm font-medium mb-6">
            Inscriptions ouvertes pour la rentrée 2026-2027
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Former les <br className="hidden md:block" />
            leaders de demain
          </h1>
          <p className="text-lg md:text-xl text-istm-100 mb-10 max-w-2xl mx-auto">
            L'ISTM propose un enseignement d'excellence du primaire au Master,
            avec des filières professionnalisantes en BTS, BT, Licence et Master.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" href="/ecole/presentation">
              <ArrowRight className="mr-2 h-5 w-5" /> Découvrir nos formations
            </Button>
            <Button
              variant="red"
              size="lg"
              className="w-full sm:w-auto"
              href="/admissions/pre-inscription"
            >
              <PlayCircle className="mr-2 h-5 w-5" /> Demander une inscription
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};