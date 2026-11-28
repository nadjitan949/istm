import Image from "next/image";
import { BookOpen, Check, Compass, GraduationCap, ShieldCheck } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Cycle moyen (CM1-CM2) - ISTM",
  description: "Préparation au secondaire.",
};

const objectifs = [
  { label: "Consolider les compétences en français et mathématiques", icon: BookOpen },
  { label: "Développer l'autonomie et l'organisation", icon: Compass },
  { label: "Préparer l'entrée en 6ème", icon: GraduationCap },
];

export default function CycleMoyenPage() {
  return (
    <PageTemplate title="Cycle moyen (CM1-CM2)" href="/primaire/cycle-moyen" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                CM1 - CM2
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le cycle moyen (CM1 et CM2) prépare les élèves au passage au secondaire.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Ils acquièrent l&apos;autonomie et la méthodologie nécessaires pour réussir au
              collège.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.primaireCycles.moyen[0]}
              alt="Élèves du cycle moyen en classe"
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
                src={images.primaireCycles.moyen[1]}
                alt="Encadrement des élèves dans l'enceinte de l'école"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-red-600 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-istm-900">Sécurité</h3>
              <p className="mt-2 text-sm leading-6 text-istm-600">
                Un encadrement attentif assure la sécurité des élèves à l&apos;école et lors des
                activités périscolaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
