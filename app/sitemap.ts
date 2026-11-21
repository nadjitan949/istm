import { MetadataRoute } from "next";
import { getAllRoutes, navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { actualites } from "@/data/actualites";
import { filieres } from "@/data/filieres";

const MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

// Les dates des articles sont en français ("15 juin 2026") : new Date() ne les comprend pas
function parseDateFr(value: string): Date {
  const match = value
    .trim()
    .toLowerCase()
    .match(/^(\d{1,2})(?:er)?\s+([a-zéû]+)\s+(\d{4})$/);
  const mois = match ? MOIS.indexOf(match[2]) : -1;

  if (match && mois >= 0) {
    return new Date(Date.UTC(Number(match[3]), mois, Number(match[1])));
  }

  const fallback = new Date(value);
  return Number.isNaN(fallback.getTime()) ? new Date() : fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Toutes les pages de la navigation, à tous les niveaux (sans l'accueil, ajouté plus bas)
  const routes = Array.from(new Set(getAllRoutes(navigation)))
    .filter((href) => href !== "/")
    .map((href) => ({
      url: `${site.url}${href}`,
      lastModified: new Date(),
    }));

  const articlesRoutes = actualites.map((article) => ({
    url: `${site.url}/actualites/${article.slug}`,
    lastModified: parseDateFr(article.date),
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