import { MetadataRoute } from "next";
import { getAllRoutes, navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { filieres } from "@/data/filieres";

export default function sitemap(): MetadataRoute.Sitemap {
  // Toutes les pages de la navigation, à tous les niveaux (sans l'accueil, ajouté plus bas)
  const routes = Array.from(new Set(getAllRoutes(navigation)))
    .filter((href) => href !== "/")
    .map((href) => ({
      url: `${site.url}${href}`,
      lastModified: new Date(),
    }));

  const filieresRoutes = filieres.map((f) => ({
    url: `${site.url}/superieur/${f.diplome.toLowerCase()}/${f.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: site.url, lastModified: new Date() },
    ...routes,
    ...filieresRoutes,
  ];
}
