import Image from "next/image";
import { Activity, Footprints, Goal, Medal, Timer, Trophy } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Sport - ISTM",
  description: "Équipes et compétitions sportives.",
};

const sports = [
  { title: "Football", desc: "Équipes garçons et filles", icon: Goal },
  { title: "Basketball", desc: "Compétitions inter-écoles", icon: Trophy },
  { title: "Athlétisme", desc: "Courses et sauts", icon: Footprints },
  { title: "Handball", desc: "Entraînement hebdomadaire", icon: Activity },
  { title: "Volleyball", desc: "Loisir et compétition", icon: Medal },
  { title: "Tennis de table", desc: "Salle dédiée", icon: Timer },
];

export default function SportPage() {
  return (
    <PageTemplate title="Sport" href="/vie-scolaire/sport" showSubNav>
      <div className="space-y-12">
        <div className="relative overflow-hidden rounded-lg border border-istm-200">
          <Image
            src={images.secondaire}
            alt="Équipes sportives de l'ISTM"
            width={1400}
            height={560}
            className="h-64 w-full object-cover md:h-80"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-istm-900/70 via-istm-900/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-5 text-white md:inset-x-8 md:bottom-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-red-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Sport à l&apos;ISTM
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-white/95">
              Le sport occupe une place importante à l&apos;ISTM. Nos équipes participent aux
              compétitions inter-écoles et nos élèves bénéficient d&apos;un encadrement sportif de
              qualité.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Disciplines</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(sports.length).padStart(2, "0")} disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {sports.map((s, index) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400"
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

                  <h3 className="mt-5 text-lg font-semibold text-istm-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}