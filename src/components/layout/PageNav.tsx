import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { navigation, getSiblings } from "@/data/navigation";

interface PageNavProps {
  currentHref: string;
}

export const PageNav = ({ currentHref }: PageNavProps) => {
  let siblings: { prev?: (typeof navigation)[number]; next?: (typeof navigation)[number] } = {
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
    <nav className="mt-12 border-t border-istm-200 pt-8" aria-label="Navigation entre pages">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4">
          {siblings.prev && (
            <Link
              href={siblings.prev.href}
              className="group inline-flex items-center gap-2 rounded-md border border-istm-200 px-4 py-2.5 text-sm font-medium text-istm-700 transition-colors duration-200 hover:border-istm-400 hover:text-istm-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4 text-istm-400 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:text-red-600" />
              {siblings.prev.label}
            </Link>
          )}
          {siblings.next && (
            <Link
              href={siblings.next.href}
              className="group ml-auto inline-flex items-center gap-2 rounded-md border border-istm-200 px-4 py-2.5 text-sm font-medium text-istm-700 transition-colors duration-200 hover:border-istm-400 hover:text-istm-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
            >
              {siblings.next.label}
              <ChevronRight className="h-4 w-4 text-istm-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export const CtaBanner = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-istm-900 px-6 py-12 text-center md:px-12 md:py-14">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-red-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-100">
              Admission
            </span>
            <span className="h-px w-8 bg-red-500" />
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
            Prêt à rejoindre l&apos;ISTM ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-istm-100/80">
            Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans
            votre choix de formation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-istm-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
