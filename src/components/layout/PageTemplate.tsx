"use client";

import * as React from "react";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { SubNav } from "./SubNav";
import { MobileSubNav } from "./SubNav";
import { PageNav } from "./PageNav";
import { CtaBanner } from "./PageNav";

interface PageTemplateProps {
  title: string;
  href: string;
  children: React.ReactNode;
  showSubNav?: boolean;
}

export const PageTemplate = ({
  title,
  href,
  children,
  showSubNav = true,
}: PageTemplateProps) => {
  return (
    <div className="flex-1">
      <PageHero title={title} href={href} />
      <React.Suspense fallback={null}>
        <Breadcrumbs />
      </React.Suspense>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {showSubNav ? (
          <div className="flex lg:flex-row gap-8">
            <aside className="hidden lg:flex lg:w-64 lg:shrink-0">
              <React.Suspense fallback={null}>
                <SubNav />
              </React.Suspense>
            </aside>
            <main className="flex-1">{children}</main>
          </div>
        ) : (
          <main>{children}</main>
        )}
        <React.Suspense fallback={null}>
          <MobileSubNav />
        </React.Suspense>
        <PageNav currentHref={href} />
        <CtaBanner />
      </div>
    </div>
  );
};