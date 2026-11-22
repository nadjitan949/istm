import Image from "next/image";
import { Clock, Handshake, Library, PhoneOff, School, Shirt } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Règlement intérieur - ISTM",
  description: "Vie en communauté et discipline.",
};

const regles = [
  { label: "Ponctualité et assiduité aux cours", icon: Clock },
  { label: "Port de l'uniforme obligatoire", icon: Shirt },
  { label: "Respect du personnel et des camarades", icon: Handshake },
  { label: "Interdiction des téléphones en classe", icon: PhoneOff },
  { label: "Respect des locaux et du matériel", icon: School },
  { label: "Respect des horaires de la bibliothèque et de l'informatique", icon: Library },
];

export default function ReglementPage() {
  return (
    <PageTemplate title="Règlement intérieur" href="/vie-scolaire/reglement" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Vie en communauté
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le règlement intérieur de l&apos;ISTM définit les droits et les devoirs de chacun
              pour garantir un climat de travail serein et respectueux.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Élèves de l'ISTM dans l'enceinte de l'école"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-72"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Les règles essentielles</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(regles.length).padStart(2, "0")} règles
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {regles.map((r, index) => {
              const Icon = r.icon;
              return (
                <li
                  key={r.label}
                  className="flex items-center gap-4 rounded-lg border border-istm-200 border-l-2 border-l-red-600 bg-white p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium tabular-nums text-istm-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-0.5 text-sm font-medium leading-6 text-istm-900">{r.label}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}