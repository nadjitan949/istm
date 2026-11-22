import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, School, Wallet } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Frais de scolarité - ISTM",
  description: "Tarifs par cycle et par filière.",
};

const tarifs = [
  { label: "Primaire", frais: "À REMPLACER", icon: School },
  { label: "Secondaire (Collège)", frais: "À REMPLACER", icon: BookOpen },
  { label: "Secondaire (Lycée)", frais: "À REMPLACER", icon: GraduationCap },
  { label: "BTS / BT", frais: "À REMPLACER", icon: Briefcase },
  { label: "Licence", frais: "À REMPLACER", icon: GraduationCap },
  { label: "Master", frais: "À REMPLACER", icon: GraduationCap },
];

export default function FraisPage() {
  return (
    <PageTemplate title="Frais de scolarité" href="/admissions/frais" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Tarifs
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Les frais de scolarité varient selon le cycle et la filière choisie.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Des facilités de paiement sont possibles sur demande.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Service des admissions de l'ISTM"
              width={1000}
              height={720}
              className="h-56 w-full object-cover md:h-64"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Barème par cycle</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(tarifs.length).padStart(2, "0")} niveaux
            </span>
          </div>

          <div className="overflow-hidden rounded-lg border border-istm-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-105 border-collapse text-left">
                <thead>
                  <tr className="border-b border-istm-200 bg-istm-50">
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-istm-600"
                    >
                      Cycle / Filière
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-istm-600"
                    >
                      Frais (par année)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-istm-100">
                  {tarifs.map((t) => {
                    const Icon = t.icon;
                    return (
                      <tr key={t.label} className="transition-colors duration-200 hover:bg-istm-50">
                        <th scope="row" className="px-5 py-4 text-left font-normal">
                          <div className="flex items-center gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium text-istm-900">{t.label}</span>
                          </div>
                        </th>
                        <td className="px-5 py-4 text-sm font-medium tabular-nums text-istm-700">
                          {t.frais}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-lg border border-istm-200 border-l-2 border-l-red-600 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
              <Wallet className="h-5 w-5" />
            </div>
            <p className="text-sm leading-6 text-istm-600">
              À REMPLACER : Les frais sont indicatifs. Contactez le service des admissions pour le
              barème exact.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
          >
            Nous contacter
            <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}