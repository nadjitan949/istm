import { Home, School, GraduationCap, Users, Mail, Phone, BookOpen, Award, Mail as MailIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  children?: NavItem[];
  megaMenu?: boolean;
};

export const navigation: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
    icon: Home,
  },
  {
    label: "L'école",
    href: "/ecole",
    icon: School,
    megaMenu: true,
    children: [
      { label: "Présentation", href: "/ecole/presentation", description: "Découvrez l'histoire et l'identité de l'ISTM" },
      { label: "Mot de la direction", href: "/ecole/mot-de-la-direction", description: "Le message de notre directrice générale" },
      { label: "Mission, vision et valeurs", href: "/ecole/valeurs", description: "Ce qui nous guide au quotidien" },
      { label: "Notre équipe", href: "/ecole/equipe", description: "Direction, enseignants et personnel administratif" },
      { label: "Infrastructures et équipements", href: "/ecole/infrastructures", description: "Salles de classe, laboratoires, bibliothèque" },
      { label: "Partenaires", href: "/ecole/partenaires", description: "Entreprises et institutions partenaires" },
    ],
  },
  {
    label: "Primaire",
    href: "/primaire",
    icon: BookOpen,
    megaMenu: true,
    children: [
      { label: "Cycle préparatoire (CP1-CP2)", href: "/primaire/cycle-preparatoire", description: "Fondations des apprentissages" },
      { label: "Cycle élémentaire (CE1-CE2)", href: "/primaire/cycle-elementaire", description: "Consolidation des savoirs de base" },
      { label: "Cycle moyen (CM1-CM2)", href: "/primaire/cycle-moyen", description: "Préparation au secondaire" },
      { label: "Vie de l'élève", href: "/primaire/vie-de-l-eleve", description: "Activités d'éveil et sécurité" },
    ],
  },
  {
    label: "Secondaire",
    href: "/secondaire",
    icon: GraduationCap,
    megaMenu: true,
    children: [
      { label: "Collège", href: "/secondaire/college", description: "De la 6ème à la 3ème" },
      { label: "Lycée", href: "/secondaire/lycee", description: "Séries A, C, D, G" },
      { label: "Préparation aux examens", href: "/secondaire/preparation-examens", description: "BEPC et Baccalauréat" },
      { label: "Orientation", href: "/secondaire/orientation", description: "Conseils pour l'après-bac" },
    ],
  },
  {
    label: "Supérieur",
    href: "/superieur",
    icon: Award,
    megaMenu: true,
    children: [
      { label: "BTS", href: "/superieur/bts", description: "Brevet de Technicien Supérieur" },
      { label: "BT", href: "/superieur/bt", description: "Brevet de Technicien" },
      { label: "Licence", href: "/superieur/licence", description: "Licence professionnelle" },
      { label: "Master", href: "/superieur/master", description: "Master professionnel" },
      { label: "Toutes les filières", href: "/superieur/bts/informatique-gestion", description: "Détail de chaque filière" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: MailIcon,
    megaMenu: true,
    children: [
      { label: "Conditions d'admission", href: "/admissions/conditions", description: "Qui peut s'inscrire à l'ISTM" },
      { label: "Procédure d'inscription", href: "/admissions/procedure", description: "Étapes pour s'inscrire" },
      { label: "Frais de scolarité", href: "/admissions/frais", description: "Tarifs par cycle et par filière" },
      { label: "Calendrier", href: "/admissions/calendrier", description: "Dates clés de l'année" },
      { label: "FAQ", href: "/admissions/faq", description: "Questions fréquentes" },
      { label: "Pré-inscription en ligne", href: "/admissions/pre-inscription", description: "Formulaire de pré-inscription" },
    ],
  },
  {
    label: "Vie scolaire",
    href: "/vie-scolaire",
    icon: Users,
    megaMenu: true,
    children: [
      { label: "Clubs et activités", href: "/vie-scolaire/clubs", description: "Clubs scientifiques, culturels, sportifs" },
      { label: "Sport", href: "/vie-scolaire/sport", description: "Équipes et compétitions" },
      { label: "Bibliothèque et informatique", href: "/vie-scolaire/bibliotheque", description: "Ressources et accès numérique" },
      { label: "Règlement intérieur", href: "/vie-scolaire/reglement", description: "Vie en communauté et discipline" },
    ],
  },
  {
    label: "Actualités",
    href: "/actualites",
    icon: Mail,
  },
  {
    label: "Galerie",
    href: "/galerie",
    icon: Award,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

// Helper: get all routes from navigation (recursive) for sitemap and verification
export function getAllRoutes(items: NavItem[]): string[] {
  let routes: string[] = [];
  for (const item of items) {
    routes.push(item.href);
    if (item.children) {
      routes = routes.concat(getAllRoutes(item.children));
    }
  }
  return routes;
}

// Helper: find a nav item by href
export function findNavItem(items: NavItem[], href: string): NavItem | undefined {
  for (const item of items) {
    if (item.href === href) return item;
    if (item.children) {
      const found = findNavItem(item.children, href);
      if (found) return found;
    }
  }
  return undefined;
}

// Helper: get siblings (same level) for previous/next navigation
export function getSiblings(items: NavItem[], currentHref: string): { prev?: NavItem; next?: NavItem } {
  let prev: NavItem | undefined;
  let next: NavItem | undefined;
  let found = false;
  for (const item of items) {
    if (item.href === currentHref) {
      found = true;
      continue;
    }
    if (!found) prev = item;
    else if (found && !next) next = item;
  }
  return { prev, next };
}