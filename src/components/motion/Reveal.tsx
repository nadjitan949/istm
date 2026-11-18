"use client";

import { motion } from "framer-motion";
import * as React from "react";

export interface RevealProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  ({ children, className, delay = 0, once = true }, ref) => {
    const variants = {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }
);
Reveal.displayName = "Reveal";