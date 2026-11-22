import { PageTemplate } from "@/components/layout/PageTemplate";
import { ActualitesList } from "@/components/sections/ActualitesList";

export const metadata = {
  title: "Actualités - ISTM",
  description: "Toutes les nouvelles de l'ISTM.",
};

export default function ActualitesPage() {
  return (
    <PageTemplate title="Actualités" href="/actualites" showSubNav={false}>
      <ActualitesList />
    </PageTemplate>
  );
}