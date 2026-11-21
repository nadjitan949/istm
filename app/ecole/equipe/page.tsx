import Image from "next/image";
import { BookOpen, ClipboardList, Landmark } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Notre équipe - ISTM",
  description: "Direction, enseignants et personnel administratif.",
};

const members = [
  {
    role: "Direction",
    desc: "Pilotage stratégique de l'établissement.",
    icon: Landmark,
    image: images.presentation,
    alt: "La direction de l'ISTM",
  },
  {
    role: "Enseignants",
    desc: "Professeurs qualifiés et expérimentés.",
    icon: BookOpen,
    image: images.atouts,
    alt: "Enseignants de l'ISTM en séance de travail",
  },
  {
    role: "Administration",
    desc: "Accueil, scolarité et services aux étudiants.",
    icon: ClipboardList,
    image: images.superieur,
    alt: "Le personnel administratif de l'ISTM",
  },
];

export default function EquipePage() {
  return (
    <PageTemplate title="Notre équipe" href="/ecole/equipe" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Les personnes derrière l&apos;ISTM
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              L&apos;ISTM s&apos;appuie sur une équipe pédagogique et administrative qualifiée,
              dévouée à la réussite de chaque apprenant.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.atouts}
              alt="L'équipe de l'ISTM"
              width={1000}
              height={640}
              className="h-64 w-full object-cover md:h-72"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {members.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.role}
                className="group overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    width={600}
                    height={360}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t-2 border-red-600 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-istm-900">{m.role}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
}