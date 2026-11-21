import Image from "next/image";
import { Check, GraduationCap, Layers, Presentation, UserRound } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Orientation - ISTM",
  description: "Conseils pour l'après-bac.",
};

const accompagnement = [
  { label: "Entretiens d'orientation individuels", icon: UserRound },
  { label: "Salons et forums des métiers", icon: Presentation },
  { label: "Présentation des filières BTS, BT, Licence et Master", icon: Layers },
];

export default function OrientationPage() {
  return (
    <PageTemplate title="Orientation" href="/secondaire/orientation" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Après le bac
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le service d&apos;orientation de l&apos;ISTM accompagne les lycéens dans leurs choix
              post-bac.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Poursuite d&apos;études supérieures, filières professionnelles ou insertion directe
              dans la vie active.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.secondaire}
              alt="Entretien d'orientation avec un lycéen"
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
                Accompagnement
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
              {accompagnement.map((a) => {
                const Icon = a.icon;
                return (
                  <li key={a.label} className="flex items-center gap-4 py-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="min-w-0 flex-1 text-sm font-medium text-istm-900">
                      {a.label}
                    </span>
                    <Check className="h-4 w-4 shrink-0 text-red-600" />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-istm-200 bg-white">
            <div className="relative h-44 overflow-hidden">
              <Image
                src={images.superieur}
                alt="Étudiants de l'ISTM en filière supérieure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-red-600 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-istm-900">Poursuite d&apos;études</h3>
              <p className="mt-2 text-sm leading-6 text-istm-600">
                Nos étudiants peuvent poursuivre leurs études à l&apos;ISTM en BTS, BT, Licence ou
                Master dans de nombreuses filières.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}