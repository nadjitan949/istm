import Image from "next/image";
import { BriefcaseBusiness, Building2, Handshake, Laptop, Rocket, Users } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { site } from "@/data/site";
import { images } from "@/data/images";

export const metadata = {
  title: "Partenaires - ISTM",
  description: "Entreprises et institutions partenaires.",
};

const icons = [Handshake, Building2, BriefcaseBusiness, Laptop] as const;

const apports = [
  { label: "Stages", icon: Users },
  { label: "Opportunités d'emploi", icon: BriefcaseBusiness },
  { label: "Projets concrets", icon: Rocket },
];

export default function PartenairesPage() {
  return (
    <PageTemplate title="Partenaires" href="/ecole/partenaires" showSubNav>
      <div className="space-y-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Réseau
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              L&apos;ISTM collabore avec des entreprises et institutions pour offrir des stages,
              des opportunités d&apos;emploi et des projets concrets à ses étudiants.
            </p>

            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-istm-200 bg-istm-200 sm:grid-cols-3">
              {apports.map((a) => {
                const Icon = a.icon;
                return (
                  <li key={a.label} className="flex items-center gap-3 bg-white px-4 py-4">
                    <Icon className="h-4 w-4 shrink-0 text-red-600" />
                    <span className="text-sm font-medium text-istm-900">{a.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.superieur}
              alt="Étudiants de l'ISTM en contexte professionnel"
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
            <h2 className="text-xl font-semibold text-istm-900">Domaines de partenariat</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(site.partnershipDomains.length).padStart(2, "0")} domaines
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {site.partnershipDomains.map((partner, index) => {
              const Icon = icons[index] ?? Handshake;

              return (
                <div
                  key={partner.title}
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

                  <h3 className="mt-5 text-lg font-semibold text-istm-900">{partner.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-istm-600">{partner.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}