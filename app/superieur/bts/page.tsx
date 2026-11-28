import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFilieresByDiplome } from "@/data/filieres";

export const metadata = {
  title: "BTS - ISTM",
  description: "Brevet de Technicien Supérieur.",
};

export default function BtsPage() {
  const filieres = getFilieresByDiplome("BTS");

  return (
    <PageTemplate title="BTS" href="/superieur/bts" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Brevet de Technicien Supérieur
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le BTS (Brevet de Technicien Supérieur) est un diplôme national qui prépare à
              l&apos;insertion professionnelle en deux ans après le baccalauréat.
            </p>

            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-istm-200 bg-istm-200 sm:grid-cols-2">
              <li className="flex items-center gap-3 bg-white px-4 py-4">
                <Clock className="h-4 w-4 shrink-0 text-red-600" />
                <span className="text-sm font-medium text-istm-900">2 ans après le bac</span>
              </li>
              <li className="flex items-center gap-3 bg-white px-4 py-4">
                <GraduationCap className="h-4 w-4 shrink-0 text-red-600" />
                <span className="text-sm font-medium text-istm-900">Diplôme national</span>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Étudiants en BTS à l'ISTM"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Filières BTS</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(filieres.length).padStart(2, "0")} filière{filieres.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filieres.map((f, index) => (
              <Link
                key={f.slug}
                href={`/superieur/bts/${f.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <span className="text-sm font-medium tabular-nums text-istm-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-istm-900">{f.nom}</h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-istm-600">
                  {f.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                  <span>Voir la filière</span>
                  <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}