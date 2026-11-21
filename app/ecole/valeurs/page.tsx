import Image from "next/image";
import { Compass, Gem, Target } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Mission, vision et valeurs - ISTM",
  description: "Ce qui nous guide au quotidien.",
};

const pillars = [
  {
    title: "Mission",
    text: "Former des professionnels compétents, responsables et prêts à l'emploi.",
    icon: Target,
  },
  {
    title: "Vision",
    text: "Être un établissement de référence pour l'excellence pédagogique et l'insertion professionnelle.",
    icon: Compass,
  },
  {
    title: "Valeurs",
    text: "Rigueur, travail, intégrité, excellence et ouverture sur le monde.",
    icon: Gem,
  },
];

const valeurs = ["Rigueur", "Travail", "Intégrité", "Excellence", "Ouverture"];

export default function ValeursPage() {
  return (
    <PageTemplate title="Mission, vision et valeurs" href="/ecole/valeurs" showSubNav>
      <div className="space-y-12">
        <div className="relative overflow-hidden rounded-lg border border-istm-200">
          <Image
            src={images.atouts}
            alt="Étudiants de l'ISTM en séance de travail"
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
                Ce qui nous guide
              </p>
            </div>
            <p className="mt-3 max-w-xl text-lg leading-7 text-white/95">
              Une ligne claire, partagée par toute l&apos;équipe, pour chaque apprenant.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-istm-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-istm-600">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-lg border border-istm-200 bg-istm-50 p-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-istm-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
              Nos cinq valeurs
            </span>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-istm-200 bg-istm-200 sm:grid-cols-3 lg:grid-cols-5">
            {valeurs.map((v, i) => (
              <li key={v} className="bg-white px-4 py-4">
                <span className="text-xs font-medium tabular-nums text-istm-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-base font-semibold text-istm-900">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}