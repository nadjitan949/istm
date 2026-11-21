import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { InfrastructureGallery } from "@/components/sections/InfrastructureGallery";
import { images } from "@/data/images";

export const metadata = {
  title: "Infrastructures et équipements - ISTM",
  description: "Salles de classe, laboratoires, bibliothèque.",
};

export default function InfrastructuresPage() {
  return (
    <PageTemplate title="Infrastructures et équipements" href="/ecole/infrastructures" showSubNav>
      <div className="space-y-14">
        <div className="relative overflow-hidden rounded-lg border border-istm-200">
          <Image
            src={images.presentation}
            alt="Campus de l'ISTM"
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
                Cadre d&apos;apprentissage
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-white/95">
              L&apos;ISTM met à disposition de ses étudiants des infrastructures modernes et
              adaptées pour un apprentissage dans les meilleures conditions.
            </p>
          </div>
        </div>

        <InfrastructureGallery />
      </div>
    </PageTemplate>
  );
}