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
    <nav
      className="mb-8 flex flex-wrap items-center gap-1 text-xs uppercase tracking-[0.16em] text-istm-500"
      aria-label="Fil d'Ariane"
    >
      {items.map((item, idx) => (
        <React.Fragment key={item.href}>
          {idx > 0 && <ChevronRight className="h-3 w-3 mx-1" aria-hidden="true" />}
          {idx < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-istm-900 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-istm-900 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};