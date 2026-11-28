import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Présentation - ISTM",
  description: "Découvrez l'histoire et l'identité de l'ISTM.",
};

const blocks = [
  {
    title: "Notre histoire",
    text: "Depuis plus de 15 ans, l'ISTM forme des générations d'étudiants et les prépare à réussir dans leur vie professionnelle.",
    image: "https://images.unsplash.com/photo-1519406596751-0a3ccc4937fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Séance de travail encadrée à l'ISTM",
  },
  {
    title: "Notre identité",
    text: "Un établissement engagé pour la réussite de chaque apprenant, dans un cadre bienveillant et exigeant.",
    image: "https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Étudiants de l'ISTM",
  },
];

export default function PresentationPage() {
  return (
    <PageTemplate title="Présentation" href="/ecole/presentation" showSubNav>
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
              L&apos;Institut Supérieur de Technologies et de Management (ISTM) a été fondé pour
              répondre à un besoin croissant de formation de qualité, alliant excellence
              académique et insertion professionnelle.
            </p>
            <p className="text-base leading-7 text-istm-600">
              Notre établissement accueille des apprenants du primaire au supérieur, avec une
              pédagogie centrée sur la pratique, l&apos;encadrement personnalisé et l&apos;ouverture
              sur le monde de l&apos;entreprise.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.ecole.presentation}
              alt="Campus de l'ISTM"
              width={900}
              height={720}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="overflow-hidden rounded-lg border border-istm-200 bg-white"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.alt}
                  width={800}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="border-t-2 border-red-600 p-6">
                <h3 className="text-lg font-semibold text-istm-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-istm-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
