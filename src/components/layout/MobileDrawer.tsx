"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, ChevronUp, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { navigation, type NavItem } from "@/data/navigation";

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const hasChildren = Boolean(item.children?.length);
  const active = isActiveRoute(pathname, item.href);
  const [subOpen, setSubOpen] = React.useState(active);
  const Icon = item.icon;

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onClose}
          className={[
            "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
            active
              ? "bg-istm-900 text-white"
              : "bg-istm-50 text-istm-700 hover:bg-istm-100 hover:text-istm-900",
          ].join(" ")}
          aria-current={active ? "page" : undefined}
        >
          {Icon ? <Icon className="h-4 w-4" /> : null}
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="rounded-2xl bg-istm-50 p-2">
      <button
        type="button"
        onClick={() => setSubOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-istm-800"
        aria-expanded={subOpen}
      >
        <span className="flex items-center gap-3">
          {Icon ? <Icon className="h-4 w-4 text-istm-600" /> : null}
          <span>{item.label}</span>
        </span>
        {subOpen ? (
          <ChevronUp className="h-4 w-4 text-istm-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-istm-500" />
        )}
      </button>

      {subOpen ? (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="mt-2 overflow-hidden"
        >
          <div className="space-y-1 px-2 pb-2">
            {item.children?.map((child) => {
              const childActive = isActiveRoute(pathname, child.href);

              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onClose}
                    className={[
                      "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                      childActive
                        ? "bg-white text-red-600"
                        : "text-istm-700 hover:bg-white hover:text-istm-900",
                    ].join(" ")}
                    aria-current={childActive ? "page" : undefined}
                  >
                    <span>{child.label}</span>
                    <ChevronRight className="h-4 w-4 text-istm-400" />
                  </Link>
                </li>
              );
            })}
          </div>
        </motion.ul>
      ) : null}
    </li>
  );
}

export const MobileDrawer = React.forwardRef<HTMLDivElement, MobileDrawerProps>(
  ({ isOpen, onClose, pathname }, ref) => {
    if (!isOpen) {
      return null;
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex md:hidden"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute inset-0 bg-istm-900/35"
          aria-label="Fermer le menu"
        />

        <div className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-istm-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-istm-100 px-6 py-5">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Image
                src={images.logo}
                alt="Logo ISTM"
                width={96}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl tracking-tight text-istm-900">ISTM</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-istm-500 transition hover:bg-istm-50 hover:text-istm-900"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-4 py-6" aria-label="Navigation mobile">
            <ul className="space-y-3">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onClose={onClose}
                />
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-istm-100 px-6 py-6">
            <Button variant="red" className="w-full" href="/admissions/pre-inscription">
              S'inscrire
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);
MobileDrawer.displayName = "MobileDrawer";