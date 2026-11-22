import Image from "next/image";
import { BookOpen, Drama, FlaskConical, Laptop, Leaf, Music } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Clubs et activités - ISTM",
  description: "Clubs scientifiques, culturels, sportifs.",
};

const clubs = [
  { title: "Club scientifique", desc: "Expériences et découvertes", icon: FlaskConical },
  { title: "Club littéraire", desc: "Lecture et écriture", icon: BookOpen },
  { title: "Club informatique", desc: "Coding et numérique", icon: Laptop },
  { title: "Club théâtre", desc: "Expression artistique", icon: Drama },
  { title: "Club musique", desc: "Chant et instruments", icon: Music },
  { title: "Club écologie", desc: "Protection de l'environnement", icon: Leaf },
];

export default function ClubsPage() {
  return (
    <PageTemplate title="Clubs et activités" href="/vie-scolaire/clubs" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Périscolaire
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Participez à la vie de l&apos;établissement à travers nos clubs et activités
              périscolaires.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.atouts}
              alt="Élèves de l'ISTM en activité de club"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-72"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Nos clubs</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(clubs.length).padStart(2, "0")} clubs
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {clubs.map((c, index) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
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

                  <h3 className="mt-5 text-lg font-semibold text-istm-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}