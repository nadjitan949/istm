import Image from "next/image";
import { Bus, Check, Leaf, Palette, ShieldCheck, Trophy } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Vie de l'élève primaire - ISTM",
  description: "Activités d'éveil et sécurité.",
};

const activites = [
  { label: "Ateliers artistiques et manuels", icon: Palette },
  { label: "Éducation sportive", icon: Trophy },
  { label: "Sorties pédagogiques", icon: Bus },
  { label: "Éducation à l'environnement", icon: Leaf },
];

export default function VieElevePage() {
  return (
    <PageTemplate title="Vie de l'élève" href="/primaire/vie-de-l-eleve" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Vie à l&apos;école
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              La vie de l&apos;élève à l&apos;école primaire de l&apos;ISTM est rythmée par des
              activités d&apos;éveil, des sorties éducatives et un suivi attentif de la sécurité.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.primaire}
              alt="Élèves du primaire pendant une activité"
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
                Activités d&apos;éveil
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
              {activites.map((a) => {
                const Icon = a.icon;
                return (
                  <li key={a.label} className="flex items-center gap-4 py-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-istm-900">{a.label}</span>
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
                alt="Encadrement des enfants et échange avec les parents"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-red-600 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-istm-900">
                Sécurité et lien avec les parents
              </h3>
              <p className="mt-2 text-sm leading-6 text-istm-600">
                Un personnel dédié veille à la sécurité des enfants. Les parents sont régulièrement
                informés de la vie scolaire de leur enfant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}