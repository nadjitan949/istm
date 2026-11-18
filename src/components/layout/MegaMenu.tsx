"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, NavItem } from "@/data/navigation";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

const MEGA_MENU_ICONS: Record<string, React.ElementType> = {
  Présentation: ImageIcon,
  "Mot de la direction": ImageIcon,
  "Mission, vision et valeurs": ImageIcon,
  "Notre équipe": ImageIcon,
  "Infrastructures et équipements": ImageIcon,
  Partenaires: ImageIcon,
  "Cycle préparatoire (CP1-CP2)": ImageIcon,
  "Cycle élémentaire (CE1-CE2)": ImageIcon,
  "Cycle moyen (CM1-CM2)": ImageIcon,
  "Vie de l'élève": ImageIcon,
  Collège: ImageIcon,
  Lycée: ImageIcon,
  "Préparation aux examens": ImageIcon,
  Orientation: ImageIcon,
  BTS: ImageIcon,
  BT: ImageIcon,
  Licence: ImageIcon,
  Master: ImageIcon,
  "Toutes les filières": ImageIcon,
  "Conditions d'admission": ImageIcon,
  "Procédure d'inscription": ImageIcon,
  "Frais de scolarité": ImageIcon,
  Calendrier: ImageIcon,
  FAQ: ImageIcon,
  "Pré-inscription en ligne": ImageIcon,
  "Clubs et activités": ImageIcon,
  Sport: ImageIcon,
  "Bibliothèque et informatique": ImageIcon,
  "Règlement intérieur": ImageIcon,
};

const MEGA_MENU_FEATURED: Record<string, { title: string; href: string; image: string }> = {
  "/ecole": {
    title: "Découvrir l'ISTM",
    href: "/ecole/presentation",
    image: images.pageHero["/ecole/presentation"],
  },
  "/primaire": {
    title: "Cycle Primaire",
    href: "/primaire/cycle-preparatoire",
    image: images.pageHero["/primaire"],
  },
  "/secondaire": {
    title: "Collège & Lycée",
    href: "/secondaire/college",
    image: images.pageHero["/secondaire"],
  },
  "/superieur": {
    title: "Formations Supérieures",
    href: "/superieur/bts/informatique-gestion",
    image: images.pageHero["/superieur"],
  },
  "/admissions": {
    title: "S'inscrire à l'ISTM",
    href: "/admissions/procedure",
    image: images.pageHero["/admissions"],
  },
  "/vie-scolaire": {
    title: "Vie Scolaire",
    href: "/vie-scolaire/clubs",
    image: images.pageHero["/vie-scolaire"],
  },
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  parentItem: NavItem;
}

export const MegaMenu = React.forwardRef<HTMLDivElement, MegaMenuProps>(
  ({ isOpen, onClose, parentItem }, ref) => {
    const pathname = usePathname();
    const children = parentItem.children || [];
    const columns: NavItem[][] = [];
    for (let i = 0; i < children.length; i += 3) {
      columns.push(children.slice(i, i + 3));
    }
    const featured = MEGA_MENU_FEATURED[parentItem.href];

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 top-16 left-0 right-0 border-b border-istm-200 bg-white/95 backdrop-blur shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 lg:w-3/5 space-y-6">
                  {columns.map((column, colIdx) => (
                    <div key={colIdx} className="space-y-4">
                      {column.map((item) => {
                        const Icon = MEGA_MENU_ICONS[item.label] || ImageIcon;
                        const isActive = pathname === item.href;
                        return (
                          <div
                            key={item.href}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-istm-50 transition-colors"
                          >
                            <Icon className="h-4 w-4 text-istm-600 group-hover:text-red-600" />
                            <Link
                              href={item.href}
                              className={[
                                "flex-1 text-sm font-medium transition-colors",
                                isActive ? "text-red-600" : "text-istm-700 hover:text-istm-900",
                              ].join(" ")}
                            >
                              {item.label}
                            </Link>
                            <p className="text-xs text-istm-500 group-hover:text-istm-700 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
                {featured && (
                  <div className="lg:w-2/5 rounded-xl border border-istm-200 bg-istm-50 overflow-hidden">
                    <Link href={featured.href} className="block">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6">
                      <Link
                        href={featured.href}
                        className="text-xl font-semibold text-istm-900 hover:text-red-600 transition-colors"
                      >
                        {featured.title}
                      </Link>
                      <p className="mt-2 text-sm text-istm-600">
                        Découvrez tout ce que l'ISTM vous réserve.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-istm-500 hover:text-istm-900"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
interface NavItemButtonProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}

const NavItemButton = React.forwardRef<HTMLButtonElement, NavItemButtonProps>(
  ({ item, isOpen, onToggle }, ref) => {
    const Icon = item.icon;
    const isMega = item.megaMenu;

    return (
      <button
        ref={ref}
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-3 rounded-xl text-istm-700 hover:bg-istm-50 hover:text-istm-900 transition-colors group"
        aria-expanded={isOpen}
        aria-haspopup={isMega ? "true" : "false"}
      >
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        <span className="text-sm font-medium">{item.label}</span>
        {isMega && <ChevronDown className="h-3.5 w-3.5 text-istm-500 group-hover:text-istm-900 transition-transform" />}
      </button>
    );
  }
);
NavItemButton.displayName = "NavItemButton";

interface DesktopNavProps {
  isMegaOpen: boolean;
  megaItem: NavItem | null;
  setMegaItem: (item: NavItem | null) => void;
  closeAll: () => void;
}

export const DesktopNav = React.forwardRef<HTMLDivElement, DesktopNavProps>(
  ({ isMegaOpen, megaItem, setMegaItem, closeAll }, ref) => {
    const pathname = usePathname();

    return (
      <nav
        ref={ref}
        className="flex items-center gap-2"
        aria-label="Navigation principale"
      >
        {navigation.map((item) => {
          if (!item.megaMenu) {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "text-istm-600 hover:bg-istm-50 hover:text-istm-900",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {item.label}
              </Link>
            );
          }

          return (
            <div key={item.href} className="relative">
              <NavItemButton
                item={item}
                isOpen={isMegaOpen && megaItem?.href === item.href}
                onToggle={() => {
                  if (isMegaOpen && megaItem?.href === item.href) {
                    closeAll();
                  } else {
                    setMegaItem(item);
                  }
                }}
              />
              {isMegaOpen && megaItem?.href === item.href && (
                <MegaMenu isOpen={true} onClose={closeAll} parentItem={item} />
              )}
            </div>
          );
        })}
      </nav>
    );
  }
);
DesktopNav.displayName = "DesktopNav";

interface HeaderProps {}
export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (props, ref) => {
    const [isMegaOpen, setIsMegaOpen] = React.useState(false);
    const [megaItem, setMegaItem] = React.useState<NavItem | null>(null);
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    const closeAll = () => {
      setIsMegaOpen(false);
      setMegaItem(null);
    };

    const toggleMega = (item: NavItem) => {
      if (isMegaOpen && megaItem?.href === item.href) {
        closeAll();
      } else {
        setMegaItem(item);
        setIsMegaOpen(true);
      }
    };

    return (
      <div ref={ref} className="sticky top-0 z-40 border-b border-istm-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={images.logo}
              alt="Logo ISTM"
              className="h-10 w-auto"
              loading="eager"
            />
            <span className="font-bold text-xl text-istm-900 tracking-tight">ISTM</span>
          </Link>

          <DesktopNav
            isMegaOpen={isMegaOpen}
            megaItem={megaItem}
            setMegaItem={toggleMega}
            closeAll={closeAll}
          />

          <Button variant="red" size="sm" asChild href="/admissions/pre-inscription">
            S'inscrire
          </Button>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 text-istm-600 hover:text-istm-900"
            aria-label="Ouvrir le menu mobile"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }
);
Header.displayName = "Header";