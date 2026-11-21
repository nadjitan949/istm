import { BriefcaseBusiness, Building2, GraduationCap, Handshake } from "lucide-react";
import { site } from "@/data/site";

const icons = [Handshake, Building2, BriefcaseBusiness, GraduationCap] as const;

export const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Réseau
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-istm-900 md:text-4xl">
              Des partenariats utiles, au service des débouchés.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-istm-600">
            L&apos;ISTM développe des liens avec les organisations qui comptent pour exposer les
            apprenants à des situations professionnelles concrètes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.partnershipDomains.map((partner, index) => {
            const Icon = icons[index] ?? Handshake;

            return (
              <div
                key={partner.title}
                className="group rounded-lg border border-istm-200 bg-white p-6 transition-colors duration-200 hover:border-istm-400"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-istm-900">{partner.title}</h3>
                <p className="mt-2 text-sm leading-6 text-istm-600">{partner.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};