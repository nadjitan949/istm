"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

function getParentSection(pathname: string) {
  return navigation.find(
    (section) =>
      section.children?.length &&
      (pathname === section.href || pathname.startsWith(`${section.href}/`))
  );
}

function isChildActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const SubNav = () => {
  const pathname = usePathname();
  const parentSection = getParentSection(pathname);

  if (!parentSection?.children?.length) {
    return null;
  }

  return (
    <nav className="hidden w-full lg:flex lg:flex-col" aria-label="Navigation secondaire">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-istm-900">
        {parentSection.label}
      </h2>

      <div className="space-y-1">
        {parentSection.children.map((child) => {
          const active = isChildActive(pathname, child.href);

          return (
            <Link
              key={child.href}
              href={child.href}
              className={[
                "block rounded-xl px-4 py-2.5 text-sm transition-colors",
                active
                  ? "border-r-2 border-red-600 bg-red-50 text-red-600"
                  : "text-istm-600 hover:bg-istm-50 hover:text-istm-900",
              ].join(" ")}
              aria-current={active ? "page" : undefined}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const MobileSubNav = () => {
  const pathname = usePathname();
  const parentSection = getParentSection(pathname);

  if (!parentSection?.children?.length) {
    return null;
  }

  return (
    <div className="pb-4 lg:hidden">
      <div className="inline-flex gap-2 overflow-x-auto">
        {parentSection.children.map((child) => {
          const active = isChildActive(pathname, child.href);

          return (
            <Link
              key={child.href}
              href={child.href}
              className={[
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-red-600 text-white"
                  : "bg-istm-100 text-istm-700 hover:bg-istm-200",
              ].join(" ")}
              aria-current={active ? "page" : undefined}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
