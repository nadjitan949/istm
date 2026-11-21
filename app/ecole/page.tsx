import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageSquareQuote, School } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "L'ISTM - Présentation de l'établissement",
  description:
    "Découvrez l'Institut Supérieur de Technologies et de Management, son histoire et ses valeurs.",
};

const items = [
  {
    title: "Présentation",
    href: "/ecole/presentation",
    description: "Histoire, identité et chiffres clés de l'ISTM.",
    icon: School,
    image: images.presentation,
    alt: "Campus de l'ISTM",
  },
  {
    title: "Mot de la direction",
    href: "/ecole/mot-de-la-direction",
    description: "Le message de notre directrice générale.",
    icon: MessageSquareQuote,
    image: images.atouts,
    alt: "La direction de l'ISTM",
  },
  {
    title: "Valeurs",
    href: "/ecole/valeurs",
    description: "Mission, vision et valeurs qui nous guident.",
    icon: Compass,
    image: images.superieur,
    alt: "Étudiants de l'ISTM",
  },
];

export default function EcolePage() {
  return (
    <PageTemplate title="L'ISTM" href="/ecole" showSubNav>
      <div className="space-y-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                L&apos;établissement
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              L&apos;Institut Supérieur de Technologies et de Management (ISTM) est un
              établissement d&apos;enseignement privé qui accueille des élèves et des étudiants du
              primaire au supérieur.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Depuis sa création, l&apos;ISTM s&apos;est donné pour mission de former des
              professionnels compétents, responsables et prêts à relever les défis du monde du
              travail.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Campus de l'ISTM"
              width={1000}
              height={720}
              className="h-64 w-full object-cover md:h-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-5 text-sm font-medium tabular-nums text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-t from-istm-900/60 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-istm-100 text-istm-600 transition-colors duration-200 group-hover:bg-istm-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-istm-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-istm-600">{item.description}</p>

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
    </PageTemplate>
  );
}