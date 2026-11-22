"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

type Category = keyof typeof images.galerie;

const CATEGORY_LABELS: Record<Category, string> = {
  campus: "Campus",
  cours: "Cours",
  evenements: "Événements",
  sport: "Sport",
};

const pad = (n: number) => String(n).padStart(2, "0");

export function GalerieClient() {
  const categories = Object.keys(images.galerie) as Category[];
  const [activeCategory, setActiveCategory] = React.useState<Category>("campus");
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const lastFocus = React.useRef<HTMLElement | null>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const touchX = React.useRef<number | null>(null);

  // Après
const photos: readonly ImageProps["src"][] = images.galerie[activeCategory];
  const total = photos.length;
  const label = CATEGORY_LABELS[activeCategory];

  const open = (index: number) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setOpenIndex(index);
  };

  const close = React.useCallback(() => {
    setOpenIndex(null);
    lastFocus.current?.focus();
  }, []);

  const go = React.useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) => (i === null ? i : (i + dir + total) % total));
    },
    [total]
  );

  const isOpen = openIndex !== null;

  React.useEffect(() => {
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

  return (
    <PageTemplate title="Galerie" href="/galerie" showSubNav={false}>
      <div className="space-y-10">
        <div
          role="group"
          aria-label="Filtrer par catégorie"
          className="flex gap-6 overflow-x-auto border-b border-istm-200"
        >
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`relative -mb-px flex shrink-0 items-center gap-2 border-b-2 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2 ${
                  active
                    ? "border-red-600 text-istm-900"
                    : "border-transparent text-istm-500 hover:text-istm-900"
                }`}
              >
                {CATEGORY_LABELS[category]}
                <span className="text-xs tabular-nums text-istm-400">
                  {pad(images.galerie[category].length)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 pb-6 md:grid-cols-3 md:gap-5 md:pb-12">
          {photos.map((src, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="max-md:even:translate-y-5 md:nth-[3n+2]:translate-y-10"
            >
              <button
                type="button"
                onClick={() => open(index)}
                aria-label={`Agrandir : ${label} ${index + 1}`}
                className="group relative block aspect-square w-full overflow-hidden rounded-md border border-istm-200 text-left transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
              >
                <Image
                  src={src}
                  alt={`${label} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-istm-900/85 px-3 py-2.5 text-sm font-medium text-white">
                  {label}
                  <span className="tabular-nums text-white/70">{pad(index + 1)}</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {isOpen && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${label} : photo ${openIndex + 1} sur ${total}`}
          className="fixed inset-0 z-100 flex flex-col bg-istm-900/95"
          onClick={close}
        >
          <div
            className="flex items-start justify-between gap-4 px-4 py-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-100/70">
                Galerie
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {label} {pad(openIndex + 1)}
              </p>
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
                key={`${activeCategory}-${openIndex}`}
                src={photos[openIndex]}
                alt={`${label} ${openIndex + 1}`}
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
              {pad(openIndex + 1)} / {pad(total)}
            </span>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}