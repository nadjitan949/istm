import * as React from "react";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { SubNav, MobileSubNav } from "./SubNav";
import { PageNav, CtaBanner } from "./PageNav";

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

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {showSubNav ? (
          <div className="flex gap-10">
            <aside className="hidden lg:block lg:w-64 lg:shrink-0 lg:self-start lg:sticky lg:top-28">
              <React.Suspense fallback={null}>
                <SubNav />
              </React.Suspense>
            </aside>
            <main className="min-w-0 flex-1">{children}</main>
          </div>
        ) : (
          <main>{children}</main>
        )}

        <div className="mt-10 lg:hidden">
          <React.Suspense fallback={null}>
            <MobileSubNav />
          </React.Suspense>
        </div>
      </div>

      {/* Ces deux composants ont déjà leur propre conteneur max-w-7xl */}
      <PageNav currentHref={href} />
      <CtaBanner />
    </div>
  );
};