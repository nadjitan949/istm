"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, isActiveRoute, type NavItem } from "@/data/navigation";

// Trouve la liste de pages à afficher dans le menu latéral pour la page courante
function useSubNavContext(): { label: string; items: NavItem[] } | null {
  const pathname = usePathname();

  for (const section of navigation) {
    // Les pages d'accueil de rubrique affichent aussi leurs liens enfants.
    if (section.href === pathname && section.children?.length) {
      return { label: section.label, items: section.children };
    }

    for (const child of section.children ?? []) {
      // Ex : /primaire/cycle-moyen -> on affiche les pages du Primaire
      if (child.children?.length && isActiveRoute(pathname, child.href)) {
        return { label: child.label, items: child.children };
      }
    }
    if (section.children?.some((c) => c.href === pathname)) {
      return { label: section.label, items: section.children };
    }
  }
  return null;
}

export const SubNav = () => {
  const pathname = usePathname();
  const context = useSubNavContext();

  if (!context) return null;

  return (
    <nav className="w-full space-y-1" aria-label="Navigation secondaire">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-istm-900">
        {context.label}
      </h2>
      {context.items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2.5 text-sm underline-offset-8 decoration-red-600 decoration-2 transition-colors ${
              active
                ? "text-istm-900 underline"
                : "text-istm-600 hover:text-istm-900 hover:underline"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

// Mobile horizontal subnav selector
export const MobileSubNav = () => {
  const pathname = usePathname();
  const context = useSubNavContext();

  if (!context) return null;

  return (
    <div className="overflow-x-auto pb-4 lg:hidden">
      <div className="inline-flex space-x-2">
        {context.items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-red-600 text-white"
                  : "bg-istm-100 text-istm-700 hover:bg-istm-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
