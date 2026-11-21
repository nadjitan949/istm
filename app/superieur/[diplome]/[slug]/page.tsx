import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Check,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Target,
} from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFiliereBySlug } from "@/data/filieres";

type Params = Promise<{ diplome: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { diplome, slug } = await params;
  const filiere = getFiliereBySlug(diplome, slug);
  return {
    title: filiere ? `${filiere.nom} (${filiere.diplome}) - ISTM` : "Filière - ISTM",
    description: filiere?.description,
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-istm-600" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
        {children}
      </h2>
    </div>
  );
}

export default async function FilierePage({ params }: { params: Params }) {
  const { diplome, slug } = await params;
  const filiere = getFiliereBySlug(diplome, slug);

  if (!filiere) {
    return (
      <PageTemplate title="Filière non trouvée" href="/superieur" showSubNav={false}>
        <div className="max-w-xl rounded-lg border border-istm-200 bg-white p-6">
          <p className="text-base leading-7 text-istm-600">
            La filière demandée n&apos;existe pas ou n&apos;est plus proposée.
          </p>
          <Link
            href="/superieur"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Retour aux formations supérieures
          </Link>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate
      title={filiere.nom}
      href={`/superieur/${filiere.diplome.toLowerCase()}/${filiere.slug}`}
      showSubNav
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
                {filiere.diplome}
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">{filiere.description}</p>

            <ul className="divide-y divide-istm-200 overflow-hidden rounded-md border border-istm-200 bg-white">
              <li className="flex items-center gap-3 px-4 py-3.5">
                <GraduationCap className="h-4 w-4 shrink-0 text-red-600" />
                <span className="text-sm font-medium text-istm-900">{filiere.diplome}</span>
              </li>
              <li className="flex items-center gap-3 px-4 py-3.5">
                <Clock className="h-4 w-4 shrink-0 text-red-600" />
                <span className="text-sm font-medium text-istm-900">{filiere.duree}</span>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={filiere.image}
              alt={filiere.nom}
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-80"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Conditions et compétences */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-istm-200 bg-white p-6">
            <SectionLabel>Conditions d&apos;accès</SectionLabel>
            <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
              {filiere.conditions.map((c) => (
                <li key={c} className="flex items-center gap-4 py-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                    <ClipboardCheck className="h-4 w-4" />
                  </div>
                  <span className="min-w-0 flex-1 text-sm font-medium text-istm-900">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-istm-200 bg-white p-6">
            <SectionLabel>Compétences visées</SectionLabel>
            <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
              {filiere.competences.map((c) => (
                <li key={c} className="flex items-center gap-4 py-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                    <Target className="h-4 w-4" />
                  </div>
                  <span className="min-w-0 flex-1 text-sm font-medium text-istm-900">{c}</span>
                  <Check className="h-4 w-4 shrink-0 text-red-600" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Débouchés */}
        <div>
          <div className="mb-6 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Débouchés</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(filiere.debouches.length).padStart(2, "0")} métier
              {filiere.debouches.length > 1 ? "s" : ""}
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-istm-200 bg-istm-200 sm:grid-cols-2 lg:grid-cols-3">
            {filiere.debouches.map((d) => (
              <li key={d} className="flex items-center gap-3 bg-white px-5 py-4">
                <Briefcase className="h-4 w-4 shrink-0 text-red-600" />
                <span className="min-w-0 text-sm font-medium text-istm-900">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Programme */}
        <div>
          <div className="mb-6 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Programme par semestre</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(filiere.programme.length).padStart(2, "0")} semestre
              {filiere.programme.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filiere.programme.map((semestre) => (
              <div
                key={semestre.numero}
                className="group relative overflow-hidden rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                    Semestre {semestre.numero}
                  </h3>
                  <span className="text-sm font-medium tabular-nums text-istm-400">
                    {String(semestre.modules.length).padStart(2, "0")} modules
                  </span>
                </div>

                <ul className="mt-4 divide-y divide-istm-100 border-y border-istm-100">
                  {semestre.modules.map((m) => (
                    <li key={m} className="flex items-start gap-3 py-2.5 text-sm text-istm-700">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-red-600" />
                      <span className="min-w-0">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}