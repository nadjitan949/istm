 use client;

import * as React from react;
import Link from next/link;
import { usePathname } from next/navigation;
import { navigation, findNavItem } from @/data/navigation;

export const SubNav = () => {
  const pathname = usePathname();

  let parentSection: (typeof navigation)[number] | null = null;
  for (const section of navigation) {
    if (section.children && section.children.some((c) => c.href === pathname)) {
      parentSection = section;
      break;
    }
    if (section.children) {
      for (const child of section.children) {
        if (child.children && child.children.some((c) => c.href === pathname)) {
          parentSection = section;
          break;
        }
      }
      if (parentSection) break;
    }
  }

  if (!parentSection || !parentSection.children) return null;

  return (
    <aside className=hidden lg:flex lg:w-64 lg:flex-col lg:pr-8 aria-label=Navigation secondaire>
      <h2 className=text-sm font-semibold text-istm-900 mb-4 uppercase tracking-wider>
        {parentSection.label}
      </h2>
      <nav className=space-y-1>
        {parentSection.children.map((child) => {
          const isActive = pathname === child.href;
          return (
            <Link
              key={child.href}
              href={child.href}
              className=block px-4 py-2.5 rounded-xl text-sm transition-colors + (isActive ?  bg-red-50 text-red-600 border-r-2 border-red-600 :  text-istm-600 hover:bg-istm-50 hover:text-istm-900)
            >
              {child.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

// Mobile horizontal subnav selector
export const MobileSubNav = () => {
  const pathname = usePathname();

  let parentSection: (typeof navigation)[number] | null = null;
  for (const section of navigation) {
    if (section.children && section.children.some((c) => c.href === pathname)) {
      parentSection = section;
      break;
    }
    if (section.children) {
      for (const child of section.children) {
        if (child.children && child.children.some((c) => c.href === pathname)) {
          parentSection = section;
          break;
        }
      }
      if (parentSection) break;
    }
  }

  if (!parentSection || !parentSection.children) return null;

  return (
    <div className=lg:hidden overflow-x-auto pb-4>
      <div className=inline-flex space-x-2>
        {parentSection.children.map((child) => {
          const isActive = pathname === child.href;
          return (
            <Link
              key={child.href}
              href={child.href}
              className=whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors + (isActive ?  bg-red-600 text-white :  bg-istm-100 text-istm-700 hover:bg-istm-200)
            >
              {child.label}
            </Link>
          );
        })
      </div>
    </div>
  );
};
