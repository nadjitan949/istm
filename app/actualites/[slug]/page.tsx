import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, UserRound } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { actualites } from "@/data/actualites";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return actualites.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const article = actualites.find((a) => a.slug === slug);
  return {
    title: article ? `${article.titre} - ISTM` : "Actualité - ISTM",
    description: article?.resume,
  };
}

const isEvent = (categorie: string) => categorie === "evenement";

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = actualites.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageTemplate title="Article non trouvé" href="/actualites" showSubNav={false}>
        <div className="max-w-xl rounded-lg border border-istm-200 bg-white p-6">
          <p className="text-base leading-7 text-istm-600">
            L&apos;article demandé n&apos;existe pas ou n&apos;est plus disponible.
          </p>
          <Link
            href="/actualites"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Retour aux actualités
          </Link>
        </div>
      </PageTemplate>
    );
  }

  const paragraphs = article.contenu.split(/\n{2,}/).filter(Boolean);
  const related = actualites.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <PageTemplate title={article.titre} href={`/actualites/${article.slug}`} showSubNav={false}>
      <div className="space-y-14">
        <article className="mx-auto max-w-3xl space-y-8">
          <Link
            href="/actualites"
            className="group inline-flex items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
          >
            <ArrowLeft className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:text-red-600" />
            Toutes les actualités
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-istm-200 py-4 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              {isEvent(article.categorie) ? "Événement" : "Actualité"}
            </span>
            <span className="inline-flex items-center gap-2 text-istm-600">
              <CalendarDays className="h-4 w-4 text-istm-400" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-2 text-istm-600">
              <UserRound className="h-4 w-4 text-istm-400" />
              {article.auteur}
            </span>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={article.image}
              alt={article.titre}
              width={1200}
              height={640}
              className="h-64 w-full object-cover md:h-96"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="space-y-5 text-base leading-8 text-istm-700">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg leading-8 text-istm-900" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section aria-labelledby="related-title">
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
              <h2 id="related-title" className="text-xl font-semibold text-istm-900">
                À lire aussi
              </h2>
              <Link
                href="/actualites"
                className="group inline-flex items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
              >
                Toutes les actualités
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/actualites/${a.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-istm-200 bg-white transition-colors duration-200 hover:border-istm-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
                >
                  <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.titre}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                      <span className="text-red-600">
                        {isEvent(a.categorie) ? "Événement" : "Actualité"}
                      </span>
                      <span className="text-istm-300">/</span>
                      <span className="text-istm-500">{a.date}</span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-istm-900">
                      {a.titre}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageTemplate>
  );
}