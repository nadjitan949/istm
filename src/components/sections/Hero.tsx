"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=1920&q=80`;

// Photos du carousel : remplace l'identifiant "photo-..." pour changer une image
const slides = [
  { src: unsplash("photo-1541339907198-e08854caf25c"), alt: "Le campus de l'ISTM" },
  { src: unsplash("photo-1523050854058-8df90110c9f1"), alt: "Étudiants diplômés" },
  { src: unsplash("photo-1522202176988-66273c2fd55f"), alt: "Étudiants qui travaillent ensemble" },
  { src: unsplash("photo-1503676260728-1c00da094a0b"), alt: "Élèves en classe" },
];

const stats = [
  { value: "2 500+", label: "apprenants" },
  { value: "92%", label: "de réussite aux examens" },
  { value: "24", label: "filières" },
];

const AUTOPLAY_MS = 6000;

export const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const reduceMotion = useReducedMotion();

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length);

  // Défilement automatique (désactivé au survol et si l'utilisateur limite les animations)
  React.useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, index]);

  return (
    <section
      className="relative overflow-hidden bg-istm-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Photos de l'ISTM"
    >
      {/* Carousel : fondu entre les images */}
      <div className="absolute inset-0" aria-live="off">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={i === index ? slide.alt : ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Voile sombre : le texte blanc reste lisible quelle que soit la photo */}
      <div className="absolute inset-0 bg-istm-900/35" />
      <div className="absolute inset-0 bg-linear-to-r from-istm-900/75 via-istm-900/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 md:pb-32 md:pt-28 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
            <span className="h-0.5 w-10 bg-red-500" aria-hidden="true" />
            Inscriptions ouvertes · Rentrée 2026–2027
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Une identité forte pour faire grandir chaque talent.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Un enseignement d&apos;excellence du primaire au Master, avec des parcours
            structurés et de vrais débouchés.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="red" size="lg" className="w-full rounded-md sm:w-auto" href="/formations">
              Explorer nos formations
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-md border-white bg-transparent text-white hover:bg-white hover:text-istm-900 sm:w-auto"
              href="/contact"
            >
              Contact
            </Button>
          </div>

          {/* Chiffres clés encadrés et centrés */}
          <div className="mt-14 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/40 bg-istm-900/20 text-center backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-2 py-4 md:px-5 md:py-5 ${
                  i > 0 ? "border-l border-white/30" : ""
                }`}
              >
                <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-white/80 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Commandes du carousel */}
      <div className="absolute inset-x-0 bottom-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2" role="group" aria-label="Choisir une image">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Image ${i + 1} sur ${slides.length}`}
                aria-current={i === index}
                className="group py-3"
              >
                <span
                  className={`block h-0.5 w-8 transition-colors md:w-10 ${
                    i === index ? "bg-white" : "bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Image précédente"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/50 text-white transition-colors hover:bg-white hover:text-istm-900"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Image suivante"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/50 text-white transition-colors hover:bg-white hover:text-istm-900"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
