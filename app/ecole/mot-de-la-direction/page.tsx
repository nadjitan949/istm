import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Mot de la direction - ISTM",
  description: "Le message du Directeur Général de l'ISTM.",
};

export default function DirectionPage() {
  return (
    <PageTemplate title="Mot de la direction" href="/ecole/mot-de-la-direction" showSubNav>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-14">
        <div className="order-2 space-y-5 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-istm-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
              Message de la direction
            </span>
          </div>

          <p className="text-lg font-medium leading-8 text-istm-900">
            Chers parents, chers élèves et chers étudiants,
          </p>
          <p className="text-base leading-7 text-istm-600">
            Bienvenue à l&apos;ISTM. Notre établissement s&apos;engage à offrir une éducation de
            qualité, du primaire au supérieur, dans un environnement propice à l&apos;épanouissement
            et à la réussite de chacun.
          </p>
          <p className="text-base leading-7 text-istm-600">
            Nous croyons fermement que l&apos;éducation est le levier principal du développement
            individuel et collectif. C&apos;est pourquoi nous mettons tout en œuvre pour former des
            citoyens responsables, compétents et ouverts sur le monde.
          </p>

          <blockquote className="mt-8 rounded-lg border border-istm-200 border-l-2 border-l-red-600 bg-white p-6">
            <p className="text-lg leading-8 text-istm-900">
              « Ensemble, construisons l&apos;avenir de nos jeunes. »
            </p>
            <footer className="mt-4 text-sm font-semibold text-istm-700">
              Le Directeur Général
            </footer>
          </blockquote>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-lg border border-istm-200 lg:sticky lg:top-28">
            <Image
              src={images.presentation}
              alt="Le Directeur Général de l'ISTM"
              width={640}
              height={800}
              className="aspect-4/5 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
              priority
            />
            <div className="border-t-2 border-red-600 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-istm-900">MOUNI Ouyi</p>
              <p className="mt-0.5 text-xs text-istm-500">
                Le Directeur Général
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
