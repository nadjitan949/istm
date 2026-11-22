import Image from "next/image";
import { Award, DoorOpen, Presentation, Trophy } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { evenements } from "@/data/actualites";
import { images } from "@/data/images";

export const metadata = {
  title: "Événements à venir - ISTM",
  description: "Agenda des événements de l'ISTM.",
};

const types = [
  { label: "Journées portes ouvertes", icon: DoorOpen },
  { label: "Forums", icon: Presentation },
  { label: "Compétitions", icon: Trophy },
  { label: "Cérémonies de remise de diplômes", icon: Award },
];

function splitDate(date: string) {
  const [day, ...rest] = date.split(" ");
  return { day, rest: rest.join(" ") };
}

export default function EvenementsPage() {
  return (
    <PageTemplate title="Événements à venir" href="/actualites/evenements" showSubNav={false}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Agenda
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Retrouvez tous les événements à venir à l&apos;ISTM : journées portes ouvertes,
              forums, compétitions, cérémonies de remise de diplômes.
            </p>

            <ul className="divide-y divide-istm-200 overflow-hidden rounded-md border border-istm-200 bg-white">
              {types.map((t) => {
                const Icon = t.icon;
                return (
                  <li key={t.label} className="flex items-center gap-3 px-4 py-3.5">
                    <Icon className="h-4 w-4 shrink-0 text-red-600" />
                    <span className="text-sm font-medium text-istm-900">{t.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Événements à l'ISTM"
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
            <h2 className="text-xl font-semibold text-istm-900">Prochains rendez-vous</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(evenements.length).padStart(2, "0")} événement
              {evenements.length > 1 ? "s" : ""}
            </span>
          </div>

          {evenements.length === 0 ? (
            <div className="rounded-lg border border-istm-200 bg-white p-8 text-center">
              <p className="text-sm text-istm-600">
                Aucun événement n&apos;est programmé pour le moment.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {evenements.map((e) => {
                const { day, rest } = splitDate(e.date);
                return (
                  <li
                    key={e.slug}
                    className="group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-istm-200 bg-white p-5 transition-colors duration-200 hover:border-istm-400 sm:flex-row sm:items-center md:gap-6 md:p-6"
                  >
                    <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-red-600 transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-md bg-istm-900 text-white">
                      <span className="text-2xl font-semibold leading-none tabular-nums">{day}</span>
                      <span className="mt-1.5 px-1 text-center text-[11px] font-medium uppercase leading-tight tracking-[0.12em] text-istm-100">
                        {rest}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold leading-snug text-istm-900">
                        {e.titre}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-istm-600">{e.resume}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}