import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { navigation } from "@/data/navigation";
import { images } from "@/data/images";

export const metadata = {
  title: "Formations - ISTM",
  description:
    "Primaire, secondaire et supérieur : découvrez toutes les formations de l'ISTM.",
};

function getCycleImage(href: string) {
  if (href.includes("primaire")) return images.primaire;
  if (href.includes("secondaire")) return images.secondaire;
  if (href.includes("superieur")) return images.superieur;
  return images.presentation;
}

export default function FormationsPage() {
  const cycles = navigation.find((item) => item.href === "/formations")?.children ?? [];

  return (
    <PageTemplate title="Formations" href="/formations">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-istm-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
              Nos cycles
            </span>
          </div>
          <p className="text-lg leading-8 text-istm-700">
            Du primaire au Master, l&apos;ISTM accompagne chaque élève et chaque étudiant vers la
            réussite. Choisissez un cycle pour découvrir ses programmes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cycles.map((cycle, index) => {
            const Icon = cycle.icon;
            return (
              <div
                key={cycle.href}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <Link
                  href={cycle.href}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="relative block h-48 overflow-hidden"
                >
                  <Image
                    src={getCycleImage(cycle.href)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-istm-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 text-sm font-medium tabular-nums text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    {Icon ? (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    ) : null}
                    <h2 className="text-xl font-semibold text-istm-900">{cycle.label}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-istm-600">{cycle.description}</p>

                  {cycle.children && cycle.children.length > 0 ? (
                    <ul className="mt-5 divide-y divide-istm-100 border-y border-istm-100">
                      {cycle.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="group/item flex items-center justify-between gap-3 py-2.5 text-sm text-istm-700 transition-colors hover:text-istm-900"
                          >
                            {child.label}
                            <ArrowRight
                              className="h-4 w-4 text-istm-300 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-red-600"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <Link
                    href={cycle.href}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
                  >
                    Voir le {cycle.label.toLowerCase()}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
}
