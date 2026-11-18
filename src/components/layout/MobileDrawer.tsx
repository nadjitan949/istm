"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { navigation, NavItem } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavItem = React.forwardRef<HTMLLIElement, { item: NavItem }>(
  ({ item, isOpen = false }, ref) => {
    const [subOpen, setSubOpen] = React.useState(false);
    const Icon = item.icon;

    if (!item.children || item.children.length === 0) {
      return (
        <li key={item.href} ref={ref}>
          <Link
            href={item.href}
            className="flex items-center gap-3 px-6 py-4 rounded-xl text-istm-700 font-medium hover:bg-istm-50 hover:text-istm-900 transition-colors block"
          >
            {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
            {item.label}
          </Link>
        </li>
      );
    }

    return (
      <li key={item.href} ref={ref}>
        <div className="flex items-center justify-between px-6 py-3 bg-istm-50 rounded-xl mb-1">
          <button
            onClick={() => setSubOpen((prev) => !prev)}
            className="flex items-center gap-3 w-full text-left text-istm-700 font-medium hover:text-istm-900"
            aria-expanded={subOpen}
          >
            {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
            {item.label}
            {subOpen ? (
              <ChevronUp className="h-4 w-4 text-istm-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-istm-500" />
            )}
          </button>
        </div>
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={subOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-1"
        >
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="flex items-center gap-3 px-8 py-3 rounded-xl text-sm text-istm-600 hover:bg-istm-100 hover:text-istm-900 transition-colors block"
              >
                <ChevronRight className="h-3 w-3 text-istm-400" aria-hidden="true" />
                {child.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      </li>
    );
  }
);
MobileNavItem.displayName = "MobileNavItem";

export const MobileDrawer = React.forwardRef<HTMLDivElement, MobileDrawerProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"} flex-col lg:hidden`}
      >
        <div className="flex-1 bg-white overflow-y-auto border-l border-istm-200 shadow-2xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-istm-100">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.jpeg" alt="Logo ISTM" className="h-8 w-auto" />
              <span className="font-bold text-xl text-istm-900 tracking-tight">ISTM</span>
            </Link>
            <button onClick={onClose} className="p-2 text-istm-500 hover:text-istm-900">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-3" aria-label="Navigation mobile">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <MobileNavItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>
          <div className="px-6 py-6 border-t border-istm-100">
            <Button variant="red" className="w-full" asChild href="/admissions/pre-inscription">
              S'inscrire
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);
MobileDrawer.displayName = "MobileDrawer";