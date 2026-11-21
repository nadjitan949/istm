"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import {
  navigation,
  isActiveRoute,
  isSectionActive,
  type NavItem,
} from "@/data/navigation";

const LOGO_SRC = "/brand/istm-logo.jpeg";

// Pas de fond : soulignement rouge pour l'élément actif
function labelClass(active: boolean) {
  return `underline-offset-8 decoration-red-600 decoration-2 ${
    active ? "text-istm-900 underline" : "text-istm-700"
  }`;
}

interface MobileNavItemProps {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
  depth?: number;
}

// Récursif : Formations -> Primaire -> Cycle moyen
const MobileNavItem = ({ item, pathname, onNavigate, depth = 0 }: MobileNavItemProps) => {
  const [open, setOpen] = React.useState(() => isSectionActive(item, pathname));
  const Icon = item.icon;
  const hasChildren = Boolean(item.children?.length);
  const active = isSectionActive(item, pathname);
  const isTop = depth === 0;

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
          className={`flex flex-1 items-center gap-3 ${
            isTop ? "py-3 text-base font-medium" : "py-2.5 text-sm"
          }`}
        >
          {Icon ? (
            <Icon
              className={`${isTop ? "h-5 w-5" : "h-4 w-4"} ${active ? "text-red-600" : "text-istm-400"}`}
              aria-hidden="true"
            />
          ) : null}
          <span className={labelClass(active)}>{item.label}</span>
        </Link>

        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={`Afficher les pages de ${item.label}`}
            className="p-2 text-istm-500 hover:text-red-600"
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        ) : null}
      </div>

      <AnimatePresence initial={false}>
        {hasChildren && open ? (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2.5 overflow-hidden border-l border-istm-200 pl-4"
          >
            {item.children?.map((child) => (
              <MobileNavItem
                key={child.href}
                item={child}
                pathname={pathname}
                onNavigate={onNavigate}
                depth={depth + 1}
              />
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </li>
  );
};

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const MobileDrawer = ({ isOpen, onClose, pathname }: MobileDrawerProps) => {
  // Empêche la page de défiler derrière le menu
  React.useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 xl:hidden"
        >
          <div className="absolute inset-0 bg-istm-900/40" onClick={onClose} aria-hidden="true" />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-istm-100 px-6 py-4">
              <Link href="/" onClick={onClose} aria-label="ISTM - Accueil">
                <Image
                  src={LOGO_SRC}
                  alt="Logo ISTM"
                  width={200}
                  height={56}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-istm-500 hover:text-red-600"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="px-6 py-4" aria-label="Navigation mobile">
              <ul className="divide-y divide-istm-100">
                {navigation.map((item) => (
                  <MobileNavItem key={item.href} item={item} pathname={pathname} onNavigate={onClose} />
                ))}
              </ul>
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};