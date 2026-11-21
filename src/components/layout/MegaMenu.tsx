"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight, Menu, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  navigation,
  isActiveRoute,
  isSectionActive,
  type NavItem,
} from "@/data/navigation";
import { site } from "@/data/site";
import { MobileDrawer } from "./MobileDrawer";

const LOGO_SRC = "/brand/istm-logo.jpeg";

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80`;

type Featured = { image: string; title: string; href: string; description: string };

// Image affichée dans chaque sous-menu (clé = lien de la rubrique ou du cycle)
// Pour changer une photo : remplace l'identifiant "photo-..." par celui d'Unsplash
const FEATURED: Record<string, Featured> = {
  "/ecole": {
    image: unsplash("photo-1541339907198-e08854caf25c"),
    title: "Découvrir l'ISTM",
    href: "/ecole/presentation",
    description: "Présentation, direction, valeurs et partenaires de l'établissement.",
  },
  "/primaire": {
    image: unsplash("photo-1503676260728-1c00da094a0b"),
    title: "Cycle primaire",
    href: "/primaire",
    description: "Des bases solides pour apprendre, grandir et s'épanouir dès les premières années.",
  },
  "/secondaire": {
    image: unsplash("photo-1522202176988-66273c2fd55f"),
    title: "Collège & lycée",
    href: "/secondaire",
    description: "Préparer les examens, l'orientation et la poursuite d'études dans un cadre exigeant.",
  },
  "/superieur": {
    image: unsplash("photo-1523050854058-8df90110c9f1"),
    title: "Formations supérieures",
    href: "/superieur",
    description: "BTS, BT, Licence et Master pour construire un parcours professionnalisant.",
  },
  "/admissions": {
    image: unsplash("photo-1544717297-fa652477776c"),
    title: "Admissions & inscription",
    href: "/admissions",
    description: "Conditions, procédure, frais et calendrier d'inscription.",
  },
  "/vie-scolaire": {
    image: unsplash("photo-1522202176988-66273c2fd55f"),
    title: "Vie scolaire",
    href: "/vie-scolaire",
    description: "Clubs, sport, bibliothèque et cadre de vie au quotidien.",
  },
  "/actualites": {
    image: unsplash("photo-1556761175-5973dc0f32e7"),
    title: "À la une",
    href: "/actualites",
    description: "Les dernières nouvelles et les événements de l'ISTM.",
  },
};

interface OpenMenu {
  item: NavItem;
  offset: number;
}

function hasSubLevels(item: NavItem) {
  return Boolean(item.children?.some((child) => child.children?.length));
}

// Largeur du menu (en rem) : jamais pleine largeur
function menuWidthRem(item: NavItem) {
  if (hasSubLevels(item)) return 52;
  return FEATURED[item.href] ? 40 : 26;
}

// Décalage horizontal pour que le menu reste entièrement visible à l'écran
function computeOffset(item: NavItem, anchor: HTMLElement) {
  const margin = 16;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const width = Math.min(menuWidthRem(item) * rem, window.innerWidth - margin * 2);
  const rect = anchor.getBoundingClientRect();
  const left = Math.max(margin, Math.min(rect.left, window.innerWidth - width - margin));
  return left - rect.left;
}

// Lien de la barre principale : pas de fond, simple trait rouge en dessous
function navLinkClass(underlined: boolean) {
  return [
    "relative flex h-full items-center gap-2 px-3 text-sm font-medium transition-colors",
    "after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-red-600 after:transition-transform after:duration-200",
    underlined
      ? "text-istm-900 after:scale-x-100"
      : "text-istm-600 hover:text-istm-900 after:scale-x-0 hover:after:scale-x-100",
  ].join(" ");
}

interface FeaturedCardProps {
  featured: Featured;
  label: string;
  onClick: () => void;
}

const FeaturedCard = ({ featured, label, onClick }: FeaturedCardProps) => (
  <Link
    href={featured.href}
    onClick={onClick}
    className="group relative block min-h-72 overflow-hidden bg-istm-900"
  >
    <Image
      key={featured.image}
      src={featured.image}
      alt={featured.title}
      fill
      sizes="240px"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-istm-900 via-istm-900/45 to-transparent" />
    <div className="absolute inset-x-4 bottom-4 text-white">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">{label}</span>
      <h3 className="mt-1 text-lg font-bold leading-tight">{featured.title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-white/80">{featured.description}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium decoration-red-500 decoration-2 underline-offset-4 group-hover:underline">
        En savoir plus
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
  </Link>
);

interface MenuLinkProps {
  item: NavItem;
  active: boolean;
  onClick: () => void;
  fallbackIcon?: LucideIcon;
}

// Une ligne du menu : icône + titre souligné au survol + description
const MenuLink = ({ item, active, onClick, fallbackIcon }: MenuLinkProps) => {
  const Icon = item.icon ?? fallbackIcon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="group flex items-start gap-3 py-2.5"
    >
      {Icon ? (
        <Icon
          className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${
            active ? "text-red-600" : "text-istm-400 group-hover:text-red-600"
          }`}
          aria-hidden="true"
        />
      ) : null}
      <span className="min-w-0">
        <span
          className={`block text-sm font-medium underline-offset-4 decoration-red-600 decoration-2 ${
            active ? "text-istm-900 underline" : "text-istm-700 group-hover:text-istm-900 group-hover:underline"
          }`}
        >
          {item.label}
        </span>
        {item.description ? (
          <span className="mt-0.5 block text-xs leading-relaxed text-istm-500">{item.description}</span>
        ) : null}
      </span>
    </Link>
  );
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  parentItem: NavItem;
  pathname: string;
  offset: number;
}

export const MegaMenu = ({ isOpen, onClose, parentItem, pathname, offset }: MegaMenuProps) => {
  const children = parentItem.children ?? [];
  // Menu à deux niveaux (ex : Formations -> Primaire -> ses pages)
  const twoLevels = hasSubLevels(parentItem);
  const [hoveredHref, setHoveredHref] = React.useState<string | null>(null);

  const selected = twoLevels
    ? (children.find((child) => child.href === hoveredHref) ??
      children.find((child) => isSectionActive(child, pathname)) ??
      children[0])
    : null;

  const featured = FEATURED[selected?.href ?? parentItem.href] ?? FEATURED[parentItem.href];
  const ParentIcon = parentItem.icon;

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          style={{ left: offset, width: `${menuWidthRem(parentItem)}rem` }}
          className="absolute top-full hidden max-w-[calc(100vw-2rem)] overflow-hidden rounded-b-2xl border border-t-0 border-istm-200 bg-white shadow-xl xl:block"
        >
          {twoLevels && selected ? (
            <div
              className={`grid ${
                featured ? "grid-cols-[14rem_minmax(0,1fr)_15rem]" : "grid-cols-[14rem_minmax(0,1fr)]"
              }`}
            >
              {/* Niveau 1 : les cycles */}
              <ul className="space-y-1 border-r border-istm-100 p-5">
                {children.map((child) => {
                  const isSelected = child.href === selected.href;
                  const Icon = child.icon;

                  return (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onClose}
                        onMouseEnter={() => setHoveredHref(child.href)}
                        onFocus={() => setHoveredHref(child.href)}
                        className="group flex items-center gap-3 py-2.5"
                      >
                        {Icon ? (
                          <Icon
                            className={`h-5 w-5 shrink-0 transition-colors ${
                              isSelected ? "text-red-600" : "text-istm-400"
                            }`}
                            aria-hidden="true"
                          />
                        ) : null}
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block text-sm font-medium underline-offset-4 decoration-red-600 decoration-2 ${
                              isSelected ? "text-istm-900 underline" : "text-istm-700"
                            }`}
                          >
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-istm-500">{child.description}</span>
                          ) : null}
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 shrink-0 transition-opacity ${
                            isSelected ? "text-red-600 opacity-100" : "opacity-0"
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Niveau 2 : les pages du cycle survolé */}
              <div className="p-5">
                <p className="mb-2 border-b border-istm-100 pb-3 text-sm font-semibold text-istm-900">
                  {selected.label}
                </p>
                <ul>
                  {selected.children?.map((page) => (
                    <li key={page.href}>
                      <MenuLink
                        item={page}
                        active={isActiveRoute(pathname, page.href)}
                        onClick={onClose}
                        fallbackIcon={selected.icon}
                      />
                    </li>
                  ))}
                </ul>
                <Link
                  href={selected.href}
                  onClick={onClose}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-red-600 underline-offset-4 hover:underline"
                >
                  Voir le {selected.label.toLowerCase()}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              {featured ? (
                <FeaturedCard featured={featured} label={selected.label} onClick={onClose} />
              ) : null}
            </div>
          ) : (
            <div className={`grid ${featured ? "grid-cols-[minmax(0,1fr)_15rem]" : "grid-cols-1"}`}>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 border-b border-istm-100 pb-3">
                  {ParentIcon ? <ParentIcon className="h-5 w-5 text-red-600" aria-hidden="true" /> : null}
                  <p className="text-sm font-semibold text-istm-900">{parentItem.label}</p>
                </div>
                <ul>
                  {children.map((child) => (
                    <li key={child.href}>
                      <MenuLink
                        item={child}
                        active={isActiveRoute(pathname, child.href)}
                        onClick={onClose}
                        fallbackIcon={ParentIcon}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {featured ? (
                <FeaturedCard featured={featured} label={parentItem.label} onClick={onClose} />
              ) : null}
            </div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

interface DesktopNavProps {
  pathname: string;
  items: NavItem[];
  openMenu: OpenMenu | null;
  onOpen: (item: NavItem, anchor: HTMLElement) => void;
  onClose: () => void;
}

const DesktopNav = ({ pathname, items, openMenu, onOpen, onClose }: DesktopNavProps) => (
  <nav className="hidden h-full items-center xl:flex" aria-label="Navigation principale">
    {items.map((item) => {
      const Icon = item.icon;
      const hasMenu = Boolean(item.megaMenu && item.children?.length);
      const open = openMenu?.item.href === item.href;
      const active = isSectionActive(item, pathname);

      return (
        <div
          key={item.href}
          className="relative flex h-full items-center"
          onMouseEnter={(event) => (hasMenu ? onOpen(item, event.currentTarget) : onClose())}
        >
          <Link
            href={item.href}
            onClick={onClose}
            onFocus={(event) =>
              hasMenu
                ? onOpen(item, event.currentTarget.parentElement ?? event.currentTarget)
                : onClose()
            }
            aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
            className={navLinkClass(active || open)}
          >
            {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
            {item.label}
            {hasMenu ? (
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            ) : null}
          </Link>

          {hasMenu ? (
            <MegaMenu
              isOpen={open}
              onClose={onClose}
              parentItem={item}
              pathname={pathname}
              offset={open ? openMenu.offset : 0}
            />
          ) : null}
        </div>
      );
    })}
  </nav>
);

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState<OpenMenu | null>(null);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleOpen = (item: NavItem, anchor: HTMLElement) => {
    setOpenMenu({ item, offset: computeOffset(item, anchor) });
  };

  return (
    <header
      className="sticky top-0 z-40 border-b border-istm-200 bg-white shadow-sm"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between gap-6 px-4">
        <Link
          href="/"
          onClick={() => setOpenMenu(null)}
          className="flex shrink-0 items-center"
          aria-label={`${site.shortName} - Accueil`}
        >
          <Image
            src={LOGO_SRC}
            alt={`Logo ${site.shortName}`}
            width={200}
            height={56}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <DesktopNav
          pathname={pathname}
          items={navigation}
          openMenu={openMenu}
          onOpen={handleOpen}
          onClose={() => setOpenMenu(null)}
        />

        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center text-istm-700 hover:text-red-600 xl:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}