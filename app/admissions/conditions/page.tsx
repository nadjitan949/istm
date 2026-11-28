import Image from "next/image";
import { Briefcase, GraduationCap, School } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Conditions d'admission - ISTM",
  description: "Qui peut s'inscrire à l'ISTM.",
};

const conditions = [
  {
    title: "Primaire",
    desc: "Ouvert à tous les enfants en âge scolaire.",
    icon: School,
    image: images.formationCycles.primaire,
    alt: "Enfants du primaire à l'ISTM",
  },
  {
    title: "Secondaire",
    desc: "Admission sur dossier et entretien.",
    icon: GraduationCap,
    image: images.formationCycles.secondaire,
    alt: "Élèves du secondaire à l'ISTM",
  },
  {
    title: "Supérieur",
    desc: "Baccalauréat requis (ou équivalent selon le diplôme).",
    icon: Briefcase,
    image: images.formationCycles.superieur,
    alt: "Étudiants du supérieur à l'ISTM",
  },
];

export default function ConditionsPage() {
  return (
    <PageTemplate title="Conditions d'admission" href="/admissions/conditions" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Admission
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              L&apos;ISTM accueille des élèves et étudiants de tous horizons, dans le respect des
              conditions d&apos;admission de chaque cycle.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src="https://images.unsplash.com/photo-1559998653-8d54ecd591c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Accueil des futurs élèves à l'ISTM"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-72"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {conditions.map((c, index) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-istm-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-5 text-sm font-medium tabular-nums text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-istm-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
}
