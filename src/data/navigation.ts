import {
  Baby,
  BookOpen,
  Briefcase,
  CalendarDays,
  CircleHelp,
  ClipboardCheck,
  ClipboardList,
  Compass,
  FileCheck,
  GraduationCap,
  Home,
  Info,
  Landmark,
  ListChecks,
  Network,
  Palette,
  Pencil,
  Phone,
  Quote,
  School,
  ScrollText,
  Smile,
  Target,
  Trophy,
  Users,
  Wallet,
  Wrench,
  Award,
  BookMarked,
  Backpack,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
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
      { label: "Présentation", href: "/ecole/presentation", icon: Info, description: "Découvrez l'histoire et l'identité de l'ISTM" },
      { label: "Mot de la direction", href: "/ecole/mot-de-la-direction", icon: Quote, description: "Le message de notre directrice générale" },
      { label: "Mission, vision et valeurs", href: "/ecole/valeurs", icon: Target, description: "Ce qui nous guide au quotidien" },
      { label: "Notre équipe", href: "/ecole/equipe", icon: Users, description: "Direction, enseignants et personnel administratif" },
      // { label: "Infrastructures et équipements", href: "/ecole/infrastructures", icon: Building2, description: "Salles de classe, laboratoires, bibliothèque" },
      { label: "Partenaires", href: "/ecole/partenaires", icon: Network, description: "Entreprises et institutions partenaires" },
    ],
  },
  {
    // Primaire + Secondaire + Supérieur fusionnés : au survol de "Formations",
    // on voit les 3 cycles ; au survol d'un cycle, on voit ses pages.
    label: "Formations",
    href: "/formations",
    icon: GraduationCap,
    megaMenu: true,
    description: "Du primaire au supérieur",
    children: [
      {
        label: "Primaire",
        href: "/primaire",
        icon: Backpack,
        description: "De la maternelle au CM2",
        children: [
          { label: "Cycle préparatoire (CP1-CP2)", href: "/primaire/cycle-preparatoire", icon: Baby, description: "Fondations des apprentissages" },
          { label: "Cycle élémentaire (CE1-CE2)", href: "/primaire/cycle-elementaire", icon: Pencil, description: "Consolidation des savoirs de base" },
          { label: "Cycle moyen (CM1-CM2)", href: "/primaire/cycle-moyen", icon: BookOpen, description: "Préparation au secondaire" },
          { label: "Vie de l'élève", href: "/primaire/vie-de-l-eleve", icon: Smile, description: "Activités d'éveil et sécurité" },
        ],
      },
      {
        label: "Secondaire",
        href: "/secondaire",
        icon: BookMarked,
        description: "Collège et lycée",
        children: [
          { label: "Collège", href: "/secondaire/college", icon: School, description: "De la 6ème à la 3ème" },
          { label: "Lycée", href: "/secondaire/lycee", icon: Landmark, description: "Séries F, G1 et G2" },
          { label: "Préparation aux examens", href: "/secondaire/preparation-examens", icon: FileCheck, description: "BEPC et Baccalauréat" },
          { label: "Orientation", href: "/secondaire/orientation", icon: Compass, description: "Conseils pour l'après-bac" },
        ],
      },
      {
        label: "Supérieur",
        href: "/superieur",
        icon: Award,
        description: "BTS, BT, Licence et Master",
        children: [
          { label: "BTS", href: "/superieur/bts", icon: Briefcase, description: "Brevet de Technicien Supérieur" },
          { label: "BT", href: "/superieur/bt", icon: Wrench, description: "Brevet de Technicien" },
          { label: "Licence", href: "/superieur/licence", icon: GraduationCap, description: "Licence professionnelle" },
          { label: "Master", href: "/superieur/master", icon: BadgeCheck, description: "Master professionnel" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: ClipboardList,
    megaMenu: true,
    children: [
      { label: "Conditions d'admission", href: "/admissions/conditions", icon: ClipboardCheck, description: "Qui peut s'inscrire à l'ISTM" },
      { label: "Procédure d'inscription", href: "/admissions/procedure", icon: ListChecks, description: "Étapes pour s'inscrire" },
      { label: "Frais de scolarité", href: "/admissions/frais", icon: Wallet, description: "Tarifs par cycle et par filière" },
      { label: "Calendrier", href: "/admissions/calendrier", icon: CalendarDays, description: "Dates clés de l'année" },
      { label: "FAQ", href: "/admissions/faq", icon: CircleHelp, description: "Questions fréquentes" },
    ],
  },
  {
    label: "Vie scolaire",
    href: "/vie-scolaire",
    icon: Users,
    megaMenu: true,
    children: [
      { label: "Clubs et activités", href: "/vie-scolaire/clubs", icon: Palette, description: "Clubs scientifiques, culturels, sportifs" },
      { label: "Sport", href: "/vie-scolaire/sport", icon: Trophy, description: "Équipes et compétitions" },
      { label: "Bibliothèque et informatique", href: "/vie-scolaire/bibliotheque", icon: BookMarked, description: "Ressources et accès numérique" },
      { label: "Règlement intérieur", href: "/vie-scolaire/reglement", icon: ScrollText, description: "Vie en communauté et discipline" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

// Helper: une route est active si on est dessus ou sur une de ses sous-pages
export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Helper: une rubrique est active si elle ou un de ses enfants l'est
export function isSectionActive(item: NavItem, pathname: string): boolean {
  return (
    isActiveRoute(pathname, item.href) ||
    (item.children?.some((child) => isSectionActive(child, pathname)) ?? false)
  );
}

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
