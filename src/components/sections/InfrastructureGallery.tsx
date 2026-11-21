"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Library,
  School,
  X,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/data/images";

type Photo = { src: ImageProps["src"]; title: string };

type Category = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  photos: Photo[];
};

// Remplace les src par tes vraies photos (une clé par image dans data/images)
const categories: Category[] = [
  {
    id: "salles",
    title: "Salles de classe",
    description: "Espaces lumineux et équipés.",
    icon: School,
    photos: [
      { src: images.primaire, title: "Salle de cours" },
      { src: images.secondaire, title: "Espace de travail" },
      { src: images.atouts, title: "Travaux dirigés" },
      { src: images.superieur, title: "Salle du supérieur" },
      { src: images.presentation, title: "Cour et accès" },
      { src: images.primaire, title: "Salle du primaire" },
    ],
  },
  {
    id: "laboratoires",
    title: "Laboratoires",
    description: "Informatique et sciences.",
    icon: FlaskConical,
    photos: [
      { src: images.superieur, title: "Salle informatique" },
      { src: images.atouts, title: "Poste de travail" },
      { src: images.secondaire, title: "Laboratoire de sciences" },
      { src: images.presentation, title: "Équipements" },
      { src: images.superieur, title: "Séance pratique" },
      { src: images.atouts, title: "Projet en groupe" },
    ],
  },
  {
    id: "bibliotheque",
    title: "Bibliothèque",
    description: "Ressources documentaires et numériques.",
    icon: Library,
    photos: [
      { src: images.secondaire, title: "Salle de lecture" },
      { src: images.atouts, title: "Espace de révision" },
      { src: images.superieur, title: "Ressources numériques" },
      { src: images.presentation, title: "Rayonnages" },
      { src: images.primaire, title: "Coin lecture" },
      { src: images.secondaire, title: "Travail individuel" },
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export const InfrastructureGallery = () => {
  const [active, setActive] = useState<{ cat: number; index: number } | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const open = (cat: number, index: number) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setActive({ cat, index });
  };

  const close = useCallback(() => {
    setActive(null);
    lastFocus.current?.focus();
  }, []);

  const go = useCallback((dir: 1 | -1) => {
    setActive((a) => {
      if (!a) return a;
      const total = categories[a.cat].photos.length;
      return { cat: a.cat, index: (a.index + dir + total) % total };
    });
  }, []);

  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, go]);

  const category = active ? categories[active.cat] : null;
  const photo = category && active ? category.photos[active.index] : null;

  return (
    <>
      <div className="space-y-16">
        {categories.map((c, catIndex) => {
          const Icon = c.icon;
          return (
            <section key={c.id} aria-labelledby={`gallery-${c.id}`}>
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 id={`gallery-${c.id}`} className="text-xl font-semibold text-istm-900">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-istm-600">{c.description}</p>
                  </div>
                </div>
                <span className="text-sm font-medium tabular-nums text-istm-400">
                  {pad(c.photos.length)} photos
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-6 md:grid-cols-3 md:gap-5 md:pb-12">
                {c.photos.map((p, index) => (
                  <div
                    key={`${c.id}-${index}`}
                    className="max-md:even:translate-y-5 md:nth-[3n+2]:translate-y-10"
                  >
                    <button
                      type="button"
                      onClick={() => open(catIndex, index)}
                      aria-label={`Agrandir : ${p.title}`}
                      className="group relative block aspect-square w-full overflow-hidden rounded-md border border-istm-200 text-left transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
                    >
                      <Image
                        src={p.src}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />
                      <span className="absolute inset-x-0 bottom-0 bg-istm-900/85 px-3 py-2.5 text-sm font-medium text-white">
                        {p.title}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {category && photo && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${category.title} : ${photo.title}`}
          className="fixed inset-0 z-100 flex flex-col bg-istm-900/95"
          onClick={close}
        >
          <div
            className="flex items-start justify-between gap-4 px-4 py-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-100/70">
                {category.title}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{photo.title}</p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            }}
          >
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-istm-900/70 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              className="absolute inset-y-0 inset-x-4 md:inset-x-24"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={`${category.id}-${active.index}`}
                src={photo.src}
                alt={photo.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              aria-label="Photo suivante"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-istm-900/70 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex items-center gap-3 px-4 py-4 text-white md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="h-px w-8 bg-red-500" />
            <span className="text-sm font-medium tabular-nums">
              {pad(active.index + 1)} / {pad(category.photos.length)}
            </span>
          </div>
        </div>
      )}
    </>
  );
};