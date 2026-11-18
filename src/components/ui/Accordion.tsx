"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionProps {
  items: { id: string; title: string; content: React.ReactNode }[];
  className?: string;
}

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ id, title, content, isOpen, onToggle }, ref) => (
    <div
      ref={ref}
      className="border-b border-istm-100 last:border-0"
    >
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between py-4 text-left text-istm-900 font-medium hover:text-istm-600 transition-colors focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
      >
        {title}
        <ChevronDown
          className={["ml-2 h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : ""].join(" ")}
          aria-hidden="true"
        />
      </button>
      <div
        id={`accordion-panel-${id}`}
        className={["overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-height-[500px] pb-4" : "max-height-0"].join(" ")}
      >
        <div className="pt-4 text-istm-600 leading-relaxed">{content}</div>
      </div>
    </div>
  )
);
AccordionItem.displayName = "AccordionItem";

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, className }, ref) => {
    const [openIds, setOpenIds] = React.useState<Set<string>>(new Set());

    const isOpen = (id: string) => openIds.has(id);
    const onToggle = (id: string) => {
      const next = new Set(openIds);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setOpenIds(next);
    };

    return (
      <div ref={ref} className={["space-y-1", className].filter(Boolean).join(" ")}>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isOpen={isOpen(item.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    );
  }
);
Accordion.displayName = "Accordion";