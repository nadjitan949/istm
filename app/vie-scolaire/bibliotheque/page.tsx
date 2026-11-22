import Image from "next/image";
import { BookOpen, Laptop, Library, MonitorSmartphone } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Bibliothèque et informatique - ISTM",
  description: "Ressources et accès numérique.",
};

const ressources = [
  { label: "Ressources documentaires", icon: Library },
  { label: "Manuels scolaires", icon: BookOpen },
  { label: "Accès numérique", icon: MonitorSmartphone },
];

const espaces = [
  {
    title: "Bibliothèque",
    desc: "Manuels, livres de référence, espaces de lecture et de travail.",
    icon: Library,
    image: images.secondaire,
    alt: "Espace de lecture de la bibliothèque de l'ISTM",
  },
  {
    title: "Salle informatique",
    desc: "Postes connectés, internet haut débit, logiciels pédagogiques.",
    icon: Laptop,
    image: images.superieur,
    alt: "Salle informatique de l'ISTM",
  },
];

export default function BibliothequePage() {
  return (
    <PageTemplate
      title="Bibliothèque et informatique"
      href="/vie-scolaire/bibliotheque"
      showSubNav
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Ressources
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              La bibliothèque de l&apos;ISTM met à disposition des étudiants des ressources
              documentaires, des manuels scolaires et un accès numérique pour leurs recherches et
              travaux.
            </p>

            <ul className="divide-y divide-istm-200 overflow-hidden rounded-md border border-istm-200 bg-white">
              {ressources.map((r) => {
                const Icon = r.icon;
                return (
                  <li key={r.label} className="flex items-center gap-3 px-4 py-3.5">
                    <Icon className="h-4 w-4 shrink-0 text-red-600" />
                    <span className="text-sm font-medium text-istm-900">{r.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Bibliothèque de l'ISTM"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {espaces.map((e, index) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                className="group relative overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-istm-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-5 text-sm font-medium tabular-nums text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-istm-900">{e.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
}