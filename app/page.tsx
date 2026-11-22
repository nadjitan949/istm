import { Hero } from "@/components/sections/Hero";
import { FormationFinder } from "@/components/sections/FormationFinder";
import { Presentation } from "@/components/sections/Presentation";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { Cycles } from "@/components/sections/Cycles";
import { Atouts } from "@/components/sections/Atouts";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CtaBanner } from "@/components/layout/PageNav";

export const metadata = {
  title: "ISTM - Institut Supérieur de Technologies et de Management",
  description:
    "Établissement d'enseignement du primaire, secondaire et supérieur (BTS, BT, Licence, Master). Formons les leaders de demain.",
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FormationFinder />
      <Presentation />
      <KeyFigures />
      <Cycles />
      <Atouts />
      <PartnersSection />
      <CtaBanner />
    </main>
  );
}
