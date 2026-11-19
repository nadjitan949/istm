"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Image as ImageIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/data/navigation";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";

const featuredByParent: Record<
  string,
  { title: string; href: string; image: string; description: string }
> = {
  "/ecole": {
    title: "Découvrir l'ISTM",
    href: "/ecole/presentation",
    image: images.pageHero["/ecole/presentation"],
    description: "Présentation, direction, valeurs et partenaires de l'établissement.",
  },
  "/primaire": {
    title: "Cycle primaire",
    href: "/primaire/cycle-preparatoire",
    image: images.pageHero["/primaire"],
    description: "Des bases solides pour apprendre, grandir et s'épanouir dès les premières années.",
  },
  "/secondaire": {
    title: "Collège & lycée",
    href: "/secondaire/college",
    image: images.pageHero["/secondaire"],
    description: "Préparer les examens, l'orientation et la poursuite d'études dans un cadre exigeant.",
  },
  "/superieur": {
    title: "Formations supérieures",
    href: "/superieur/bts",
    image: images.pageHero["/superieur"],
    description: "BTS, BT, Licence et Master pour construire un parcours professionnalisant.",
  },
  "/admissions": {
    title: "Admissions & inscription",
    href: "/admissions/procedure",
    image: images.pageHero["/admissions"],
    description: "Retrouvez les conditions, la procédure, les frais et le calendrier d'inscription.",
  },
  "/vie-scolaire": {
    title: "Vie scolaire",
    href: "/vie-scolaire/clubs",
    image: images.pageHero["/vie-scolaire"],
    description: "Clubs, sport, bibliothèque et cadre de vie au quotidien.",
  },
};

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function splitColumns(items: NavItem[]) {
  if (items.length <= 4) {
    return [items];
  }

  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  parentItem: NavItem;
  pathname: string;
}

export const MegaMenu = React.forwardRef<HTMLDivElement, MegaMenuProps>(
  ({ isOpen, onClose, parentItem, pathname }, ref) => {
    const children = parentItem.children ?? [];
    const columns = splitColumns(children);
    const featured =
      featuredByParent[parentItem.href] ?? {
        title: parentItem.label,
        href: parentItem.href,
        image: images.hero,
        description: parentItem.description ?? "Explorez cette rubrique.",
      };

    return (
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full hidden border-t border-istm-200 bg-white shadow-[0_26px_60px_-40px_rgba(8,44,78,0.45)] lg:block"
          >
            <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)]">
              <div className={`grid gap-4 ${columns.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
                {columns.map((column, index) => (
                  <div key={`${parentItem.href}-${index}`} className="rounded-3xl border border-istm-100 bg-white p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-istm-900">{parentItem.label}</p>
                        <p className="text-xs text-istm-500">{parentItem.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {column.map((child) => {
                        const active = isActiveRoute(pathname, child.href);

                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className={[
                                "group flex items-start gap-3 rounded-2xl px-3 py-3 transition",
                                active
                                  ? "bg-red-50 text-red-600"
                                  : "hover:bg-istm-50 text-istm-700 hover:text-istm-900",
                              ].join(" ")}
                              aria-current={active ? "page" : undefined}
                            >
                              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-istm-50 text-istm-600 group-hover:bg-white">
                                <ImageIcon className="h-4 w-4" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-medium">{child.label}</span>
                                {child.description ? (
                                  <span className="mt-1 block text-xs leading-relaxed text-istm-500 group-hover:text-istm-600">
                                    {child.description}
                                  </span>
                                ) : null}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-3xl border border-istm-100 bg-istm-900 text-white">
                <Link href={featured.href} onClick={onClose} className="block">
                  <div className="relative h-56">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 320px"
                      className="object-cover opacity-55"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-istm-900 via-istm-900/65 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5">
                      <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                        {parentItem.label}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                        {featured.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 px-5 py-5">
                    <p className="text-sm leading-relaxed text-istm-200">{featured.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                      En savoir plus
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }
);
MegaMenu.displayName = "MegaMenu";

interface DesktopNavProps {
  pathname: string;
  activeItem: NavItem | null;
  onOpen: (item: NavItem) => void;
  onClose: () => void;
}

const DesktopNav = React.forwardRef<HTMLDivElement, DesktopNavProps>(
  ({ pathname, activeItem, onOpen, onClose }, ref) => {
    return (
      <nav ref={ref} className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
        {navigation.map((item) => {
          const active = isActiveRoute(pathname, item.href);

          if (!item.megaMenu || !item.children?.length) {
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={onClose}
                className={[
                  "rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-istm-900 text-white"
                    : "text-istm-700 hover:bg-istm-50 hover:text-istm-900",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          }

          const open = activeItem?.href === item.href;

          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => onOpen(item)}
            >
              <button
                type="button"
                onClick={() => (open ? onClose() : onOpen(item))}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  open || active
                    ? "bg-istm-900 text-white"
                    : "text-istm-700 hover:bg-istm-50 hover:text-istm-900",
                ].join(" ")}
                aria-expanded={open}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown className={[
                  "h-4 w-4 transition-transform",
                  open ? "rotate-180" : "",
                ].join(" ")} />
              </button>

              <MegaMenu
                isOpen={open}
                onClose={onClose}
                parentItem={item}
                pathname={pathname}
              />
            </div>
          );
        })}
      </nav>
    );
  }
);
DesktopNav.displayName = "DesktopNav";

export const Header = React.forwardRef<HTMLDivElement>((_, ref) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = React.useState<NavItem | null>(null);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-40 border-b border-istm-200 bg-white/95 backdrop-blur"
      onMouseLeave={() => setActiveItem(null)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={images.logo}
            alt={`Logo ${site.shortName}`}
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden text-xl font-bold tracking-tight text-istm-900 sm:block">
            {site.shortName}
          </span>
        </Link>

        <DesktopNav
          pathname={pathname}
          activeItem={activeItem}
          onOpen={setActiveItem}
          onClose={() => setActiveItem(null)}
        />

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="red" size="sm" href="/admissions/pre-inscription">
            S'inscrire
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-istm-200 text-istm-600 transition hover:border-istm-300 hover:bg-istm-50 hover:text-istm-900 md:hidden"
          aria-label="Ouvrir le menu mobile"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
});
Header.displayName = "Header";