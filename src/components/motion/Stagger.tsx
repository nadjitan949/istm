"use client";

import { motion } from "framer-motion";
import * as React from "react";

export interface StaggerProps {
  children?: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export const Stagger = React.forwardRef<HTMLDivElement, StaggerProps>(
  ({ children, className, delayChildren = 0, staggerChildren = 0.1 }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren,
          staggerChildren,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
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