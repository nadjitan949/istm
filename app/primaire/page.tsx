import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Shapes, Sprout } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Primaire - ISTM",
  description: "Cycle préparatoire, élémentaire et moyen.",
};

const cycles = [
  {
    title: "CP1 - CP2",
    href: "/primaire/cycle-preparatoire",
    desc: "Fondations des apprentissages",
    icon: Sprout,
    image: images.primaire,
    alt: "Élèves du cycle préparatoire",
  },
  {
    title: "CE1 - CE2",
    href: "/primaire/cycle-elementaire",
    desc: "Consolidation des savoirs de base",
    icon: Shapes,
    image: images.primaire,
    alt: "Élèves du cycle élémentaire",
  },
  {
    title: "CM1 - CM2",
    href: "/primaire/cycle-moyen",
    desc: "Préparation au secondaire",
    icon: BookOpenCheck,
    image: images.primaire,
    alt: "Élèves du cycle moyen",
  },
];

export default function PrimairePage() {
  return (
    <PageTemplate title="Primaire" href="/primaire" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Cycle primaire
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le cycle primaire de l&apos;ISTM accueille les enfants du CP1 au CM2 dans un cadre
              bienveillant, sécurisé et stimulant.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Notre pédagogie met l&apos;accent sur l&apos;éveil, la curiosité et la confiance en
              soi.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.primaire}
              alt="Élèves du primaire à l'ISTM"
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
            <h2 className="text-xl font-semibold text-istm-900">Les trois niveaux</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(cycles.length).padStart(2, "0")} cycles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {cycles.map((c, index) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
                >
                  <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-istm-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-5 text-sm font-medium tabular-nums text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-istm-900">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-istm-600">{c.desc}</p>

                    <div className="mt-5 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                      <span>En savoir plus</span>
                      <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}