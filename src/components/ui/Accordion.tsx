"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export const Accordion = ({ items, defaultOpenId }: AccordionProps) => {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-istm-200 overflow-hidden rounded-lg border border-istm-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-button`;

        return (
          <div key={item.id} className="relative">
            <span
              className={`absolute inset-y-0 left-0 w-0.5 bg-red-600 transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-istm-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-istm-600"
              >
                <span className="w-6 shrink-0 text-sm font-medium tabular-nums text-istm-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-istm-900 md:text-base">
                  {item.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-red-600" : "text-istm-400"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-15 text-sm leading-7 text-istm-600">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};