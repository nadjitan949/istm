"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

export interface StaggerProps {
  children?: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export const Stagger = React.forwardRef<HTMLDivElement, StaggerProps>(
  ({ children, className, delayChildren = 0, staggerChildren = 0.1 }, ref) => {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren,
          staggerChildren,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {React.Children.map(children, (child) => (
          <motion.div
            variants={itemVariants}
            className="inline-block"
            key={React.isValidElement(child) ? child.key : undefined}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }
);
Stagger.displayName = "Stagger";