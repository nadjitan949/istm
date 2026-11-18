import Image from "next/image";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { actualites } from "@/data/actualites";

export const metadata = {
  title: "Actualité - ISTM",
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = actualites.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageTemplate title="Article non trouvé" href="/actualites" showSubNav={false}>
        <p className="text-istm-600">Article non trouvé.</p>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title={article.titre} href={`/actualites/${article.slug}`} showSubNav={false}>
      <div className="space-y-8 max-w-3xl mx-auto">
        <Image
          src={article.image}
          alt={article.titre}
          width={1200}
          height={512}
          className="w-full h-64 object-cover rounded-xl"
          priority
        />
        <span className="text-xs font-medium text-red-600 uppercase tracking-wider">
          {article.categorie === "evenement" ? "Événement" : "Actualité"}
        </span>
        <h1 className="text-3xl font-bold text-istm-900 mb-4">{article.titre}</h1>
        <p className="text-sm text-istm-500 mb-6">
          {article.date} • Par {article.auteur}
        </p>
        <div className="text-istm-600 leading-relaxed space-y-4">
          <p>{article.contenu}</p>
        </div>
      </div>
    </PageTemplate>
  );
}