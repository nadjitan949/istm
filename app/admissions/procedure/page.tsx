import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

export const metadata = {
  title: "Procédure d'inscription - ISTM",
  description: "Étapes pour s'inscrire.",
};

const steps = [
  "Retirer le dossier d'inscription auprès du service des admissions",
  "Déposer le dossier complet au service des admissions",
  "Passer un entretien de motivation (supérieur)",
  "Recevoir la réponse d'admission",
  "Payer les frais d'inscription et finaliser l'inscription",
];

export default function ProcedurePage() {
  return (
    <PageTemplate title="Procédure d'inscription" href="/admissions/procedure" showSubNav>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-istm-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
              {String(steps.length).padStart(2, "0")} étapes
            </span>
          </div>
          <p className="mt-4 text-lg leading-8 text-istm-700">
            Voici les étapes pour s&apos;inscrire à l&apos;ISTM :
          </p>

          <ol className="mt-8">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <li
                  key={step}
                  className={`relative pl-16 ${isLast ? "" : "pb-4"} ${
                    isLast
                      ? ""
                      : "before:absolute before:left-5 before:top-12 before:bottom-0 before:w-px before:bg-istm-200"
                  }`}
                >
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-md bg-istm-600 text-sm font-semibold tabular-nums text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="rounded-lg border border-istm-200 bg-white px-5 py-4">
                    <p className="text-sm font-medium leading-6 text-istm-900">{step}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Service des admissions de l'ISTM"
              width={800}
              height={1000}
              className="aspect-4/5 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
