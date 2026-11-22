import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookMarked, GraduationCap } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Secondaire - ISTM",
  description: "Collège, lycée et séries F, G1 et G2.",
};

const niveaux = [
  {
    title: "Collège",
    href: "/secondaire/college",
    description: "De la 6ème à la 3ème. Préparation au BEPC.",
    icon: BookMarked,
    image: images.secondaire,
    alt: "Élèves du collège de l'ISTM",
  },
  {
    title: "Lycée",
    href: "/secondaire/lycee",
    description: "Séries F, G1 et G2. Préparation au Baccalauréat.",
    icon: GraduationCap,
    image: images.secondaire,
    alt: "Lycéens de l'ISTM",
  },
];

export default function SecondairePage() {
  return (
    <PageTemplate title="Secondaire" href="/secondaire" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Cycle secondaire
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Le secondaire de l&apos;ISTM comprend le collège (6ème à 3ème) et le lycée (2nde à
              Terminale) avec les séries F, G1 et G2.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Nous préparons nos élèves aux examens d&apos;État et à l&apos;orientation post-bac.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.secondaire}
              alt="Élèves du secondaire à l'ISTM"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {niveaux.map((n, index) => {
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                  <h3 className="mt-4 text-lg font-semibold text-istm-900">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-istm-600">{n.description}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-istm-100 pt-4 text-sm font-medium text-istm-700">
                    <span>Découvrir</span>
                    <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageTemplate>
  );
}
