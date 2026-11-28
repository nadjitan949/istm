import Image from "next/image";
import { Award } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Collège - ISTM",
  description: "De la 6ème à la 3ème.",
};

const classes = ["6ème", "5ème", "4ème", "3ème"];

export default function CollegePage() {
  return (
    <PageTemplate title="Collège" href="/secondaire/college" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                6ème - 3ème
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le collège de l&apos;ISTM accueille les élèves de la 6ème à la 3ème.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Nous leur offrons un encadrement rigoureux et une préparation solide au BEPC.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src="https://images.unsplash.com/photo-1687794504223-8bdc02e25ef6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Élèves du collège de l'ISTM"
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
                Classes
              </h2>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-istm-200 bg-istm-200">
              {classes.map((c, i) => (
                <li key={c} className="bg-white px-4 py-5">
                  <span className="text-xs font-medium tabular-nums text-istm-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-xl font-semibold text-istm-900">{c}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-istm-200 bg-white">
            <div className="relative h-44 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1627423894921-c55a18a2de90?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Préparation au BEPC en classe de 3ème"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-red-600 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-istm-900">BEPC</h3>
              <p className="mt-2 text-sm leading-6 text-istm-600">
                Une préparation intensive est proposée aux élèves de 3ème pour réussir le Brevet
                d&apos;Étude du Premier Cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}