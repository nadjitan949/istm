import Image from "next/image";
import { Award } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Lycée - ISTM",
  description: "Séries F, G1 et G2 du Baccalauréat.",
};

const series = [
  { letter: "F", title: "Filière industrielle (F1 à F4)" },
  { letter: "G1", title: "Techniques administratives" },
  { letter: "G2", title: "Techniques quantitatives de gestion" },
];

export default function LyceePage() {
  return (
    <PageTemplate title="Lycée" href="/secondaire/lycee" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                2nde - Terminale
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le lycée de l&apos;ISTM propose les séries F, G1 et G2.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Nos étudiants sont préparés au Baccalauréat et à l&apos;orientation vers
              l&apos;enseignement supérieur.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.secondaire}
              alt="Lycéens de l'ISTM"
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
                Séries proposées
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
              {series.map((s) => (
                <li key={s.letter} className="flex items-center gap-4 py-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-base font-semibold text-istm-700">
                    {s.letter}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-500">
                      Série {s.letter}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-istm-900">{s.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-istm-200 bg-white">
            <div className="relative h-44 overflow-hidden">
              <Image
                src={images.secondaire}
                alt="Préparation au Baccalauréat, examen blanc"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-red-600 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-istm-900">Baccalauréat</h3>
              <p className="mt-2 text-sm leading-6 text-istm-600">
                Une préparation complète aux épreuves du Bac, avec des examens blancs et un suivi
                personnalisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
