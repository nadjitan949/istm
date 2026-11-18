"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { navigation, getSiblings, findNavItem } from "@/data/navigation";

interface PageNavProps {
  currentHref: string;
}

export const PageNav = ({ currentHref }: PageNavProps) => {
  // Find the section that contains the current page
  let siblings: { prev?: typeof navigation[number]; next?: typeof navigation[number] } = {
    prev: undefined,
    next: undefined,
  };

  for (const section of navigation) {
    if (section.children && section.children.some((c) => c.href === currentHref)) {
      siblings = getSiblings(section.children, currentHref);
      break;
    }
    if (section.children) {
      for (const child of section.children) {
        if (child.children && child.children.some((c) => c.href === currentHref)) {
          siblings = getSiblings(child.children, currentHref);
          break;
        }
      }
      if (siblings.prev || siblings.next) break;
    }
  }

  return (
    <nav className="mt-12 border-t border-istm-200 pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {siblings.prev && (
            <Link
              href={siblings.prev.href}
              className="flex items-center gap-2 text-istm-600 hover:text-red-600 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> {siblings.prev.label}
            </Link>
          )}
          {siblings.next && (
            <Link
              href={siblings.next.href}
              className="flex items-center gap-2 text-istm-600 hover:text-red-600 transition-colors"
            >
              {siblings.next.label} <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export const CtaBanner = () => {
  return (
    <section className="bg-istm-600 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Prêt à rejoindre l'ISTM ?
        </h2>
        <p className="text-istm-100 mb-8 max-w-xl mx-auto text-lg">
          Inscrivez-vous dès aujourd'hui et devenez un leader de demain.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/admissions/pre-inscription"
            className="bg-red-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Pré-inscription en ligne
          </a>
          <a
            href="/contact"
            className="bg-white text-istm-900 px-8 py-3 rounded-xl font-medium hover:bg-istm-50 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
};