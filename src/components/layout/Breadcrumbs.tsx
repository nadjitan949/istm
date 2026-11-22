"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation, findNavItem } from "@/data/navigation";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  // Build breadcrumb path from navigation
  const items: { label: string; href: string }[] = [];
  let current: string | undefined = pathname;

  while (current) {
    const item = findNavItem(navigation, current);
    if (!item) break;
    items.unshift({ label: item.label, href: item.href });

    // Try to find parent - check if current item is a child of something
    let foundParent = false;
    for (const navItem of navigation) {
      if (navItem.children && navItem.children.some((c) => c.href === current)) {
        current = navItem.href;
        foundParent = true;
        break;
      }
      if (navItem.children) {
        for (const child of navItem.children) {
          if (child.children && child.children.some((c) => c.href === current)) {
            current = child.href;
            foundParent = true;
            break;
          }
        }
        if (foundParent) break;
      }
    }
    if (!foundParent) break;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 md:pt-8">
      <nav
        className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-[0.16em] text-istm-500"
        aria-label="Fil d'Ariane"
      >
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            {idx > 0 && <ChevronRight className="mx-1 h-3 w-3" aria-hidden="true" />}
            {idx < items.length - 1 ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-istm-900"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-istm-900">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};
