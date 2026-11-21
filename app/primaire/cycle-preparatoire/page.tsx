import Image from "next/image";
import { BookOpen, Calculator, Check, Mic, Palette } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Cycle préparatoire (CP1-CP2) - ISTM",
  description: "Fondations des apprentissages.",
};

const objectifs = [
  { label: "Apprendre à lire et à écrire", icon: BookOpen },
  { label: "Maîtriser les nombres et le calcul de base", icon: Calculator },
  { label: "Développer l'expression orale", icon: Mic },
];

export default function CyclePreparatoirePage() {
  return (
    <PageTemplate
      title="Cycle préparatoire (CP1-CP2)"
      href="/primaire/cycle-preparatoire"
      showSubNav
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                CP1 - CP2
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le cycle préparatoire (CP1 et CP2) pose les bases des apprentissages fondamentaux :
              lecture, écriture, calcul.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Nous accompagnons chaque enfant dans sa découverte du monde scolaire avec patience
              et bienveillance.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.primaire}
              alt="Élèves du cycle préparatoire en classe"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-istm-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Objectifs
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
              {objectifs.map((o) => {
                const Icon = o.icon;
                return (
                  <li key={o.label} className="flex items-center gap-4 py-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-istm-900">{o.label}</span>
                    <Check className="h-4 w-4 shrink-0 text-red-600" />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-istm-200 bg-white">
            <div className="relative h-44 overflow-hidden">
              <Image
                src={images.primaire}
                alt="Activités d'éveil : dessin, chant et jeux éducatifs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-red-600 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-istm-900">Activités d&apos;éveil</h3>
              <p className="mt-2 text-sm leading-6 text-istm-600">
                Dessin, chant, manipulation et jeux éducatifs pour stimuler la créativité et la
                motricité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}