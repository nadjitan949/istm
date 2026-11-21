import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { images } from "@/data/images";

export const Presentation = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg border border-istm-200">
              <Image
                src={images.presentation}
                alt="Campus de l'ISTM"
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={900}
                height={720}
              />
              <div className="absolute inset-0 bg-linear-to-t from-istm-900/50 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-4 max-w-sm rounded-lg border border-istm-200 border-l-2 border-l-red-600 bg-white p-5 md:left-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-700">
                    Une école de parcours
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-istm-600">
                    Un accompagnement progressif, du socle académique jusqu&apos;à l&apos;insertion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Institution
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-istm-900 md:text-4xl">
              Une école pensée pour durer, progresser et professionnaliser.
            </h2>
            <p className="mt-6 text-base leading-7 text-istm-600">
              L&apos;Institut Supérieur de Technologies et de Management (ISTM) est un
              établissement d&apos;enseignement privé qui accueille des élèves et des étudiants
              du primaire au supérieur. Depuis sa création, l&apos;ISTM s&apos;engage à offrir une
              formation de qualité, alliant excellence académique et ouverture sur le monde
              professionnel.
            </p>
            <p className="mt-4 text-base leading-7 text-istm-600">
              Notre pédagogie repose sur des valeurs de rigueur, de travail et d&apos;insertion
              professionnelle. Nous préparons nos apprenants à réussir aux examens d&apos;État et
              à s&apos;insérer durablement dans la vie active.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-istm-200 bg-white p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-istm-900">Exigence académique</h3>
                <p className="mt-2 text-sm leading-6 text-istm-600">
                  Des contenus structurés, un encadrement constant et une progression lisible.
                </p>
              </div>
              <div className="rounded-lg border border-istm-200 bg-white p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-istm-900">
                  Projection professionnelle
                </h3>
                <p className="mt-2 text-sm leading-6 text-istm-600">
                  Des formations tournées vers les compétences concrètes et l&apos;employabilité.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/ecole/presentation"
                className="group inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};