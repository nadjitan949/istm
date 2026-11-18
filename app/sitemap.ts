import { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { actualites } from "@/data/actualites";
import { filieres } from "@/data/filieres";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = navigation.flatMap((item) => {
    const children = item.children || [];
    return [
      { url: `${site.url}${item.href}`, lastModified: new Date() },
      ...children.map((child) => ({
        url: `${site.url}${child.href}`,
        lastModified: new Date(),
      })),
    ];
  });

  const articlesRoutes = actualites.map((article) => ({
    url: `${site.url}/actualites/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  const filieresRoutes = filieres.map((f) => ({
    url: `${site.url}/superieur/${f.diplome.toLowerCase()}/${f.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: site.url, lastModified: new Date() },
    ...routes,
    ...articlesRoutes,
    ...filieresRoutes,
  ];
}