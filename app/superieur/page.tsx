import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, GraduationCap, Wrench } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFilieresByDiplome } from "@/data/filieres";
import { images } from "@/data/images";

export const metadata = {
  title: "Supérieur - ISTM",
  description: "BTS, BT, Licence et Master.",
};

const diplomes = [
  { code: "BTS", icon: Briefcase },
  { code: "BT", icon: Wrench },
  { code: "Licence", icon: GraduationCap },
  { code: "Master", icon: Award },
];

export default function SuperieurPage() {
  return (
    <PageTemplate title="Supérieur" href="/superieur" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Enseignement supérieur
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              L&apos;ISTM propose des formations supérieures professionnalisantes du post-bac au
              Bac+5 : BTS, BT, Licence et Master.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Des filières variées et recherchées par les entreprises.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.superieur}
              alt="Étudiants du supérieur à l'ISTM"
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
            <h2 className="text-xl font-semibold text-istm-900">Nos diplômes</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(diplomes.length).padStart(2, "0")} diplômes
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {diplomes.map((d, index) => {
              const Icon = d.icon;
              const filieres = getFilieresByDiplome(d.code);
              return (
                <Link
                  key={d.code}
                  href={`/superieur/${d.code.toLowerCase()}/informatique-gestion`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium tabular-nums text-istm-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-istm-900">{d.code}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-istm-600">
                    {filieres.length} filière{filieres.length > 1 ? "s" : ""} disponible
                    {filieres.length > 1 ? "s" : ""}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                    <span>Découvrir les filières</span>
                    <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}