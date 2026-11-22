import Image from "next/image";
import {
  ClipboardCheck,
  DoorOpen,
  Flag,
  Gift,
  Lock,
  School,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Calendrier - ISTM",
  description: "Dates clés de l'année.",
};

const calendrier: { date: string; event: string; icon: LucideIcon }[] = [
  { date: "15 juin 2026", event: "Ouverture des inscriptions", icon: ClipboardCheck },
  { date: "5 juillet 2026", event: "Journées portes ouvertes", icon: DoorOpen },
  { date: "15 septembre 2026", event: "Clôture des inscriptions", icon: Lock },
  { date: "5 octobre 2026", event: "Rentrée scolaire", icon: School },
  { date: "15 décembre 2026", event: "Vacances de Noël", icon: Gift },
  { date: "5 avril 2027", event: "Vacances de Pâques", icon: Sun },
  { date: "30 juin 2027", event: "Fin de l'année scolaire", icon: Flag },
];

function splitDate(date: string) {
  const [day, month, year] = date.split(" ");
  return { day, month, year };
}

export default function CalendrierPage() {
  return (
    <PageTemplate title="Calendrier" href="/admissions/calendrier" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Année académique
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Retrouvez les dates importantes de l&apos;année académique 2026-2027.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Campus de l'ISTM"
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
            <h2 className="text-xl font-semibold text-istm-900">Dates clés</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(calendrier.length).padStart(2, "0")} dates
            </span>
          </div>

          <ol>
            {calendrier.map((item, i) => {
              const { day, month, year } = splitDate(item.date);
              const Icon = item.icon;
              const isLast = i === calendrier.length - 1;

              return (
                <li
                  key={item.event}
                  className={`relative pl-24 ${isLast ? "" : "pb-4"} ${
                    isLast
                      ? ""
                      : "before:absolute before:left-8 before:top-16 before:bottom-0 before:w-px before:bg-istm-200"
                  }`}
                >
                  <div className="absolute left-0 top-0 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-istm-900 text-white">
                    <span className="text-xl font-semibold leading-none tabular-nums">{day}</span>
                    <span className="mt-1 text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-istm-100">
                      {month}
                    </span>
                  </div>

                  <div className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-istm-200 bg-white px-5 py-4 transition-colors duration-200 hover:border-istm-400 sm:min-h-16">
                    <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-red-600 transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-6 text-istm-900">{item.event}</p>
                      <p className="text-xs tabular-nums text-istm-500">
                        {day} {month} {year}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </PageTemplate>
  );
}