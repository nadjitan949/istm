"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "@/components/ui/Button";

export interface CounterProps {
  value: number;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  (
    {
      value,
      label,
      className,
      valueClassName,
      labelClassName,
      suffix = "",
      prefix = "",
      duration = 1.5,
    },
    ref
  ) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      const start = performance.now();
      let frame: number;

      const step = (now: number) => {
        const elapsed = (now - start) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * value);
        setCount(current);
        if (progress < 1) {
          frame = requestAnimationFrame(step);
        }
      };

      frame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(frame);
    }, [value, duration]);

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "text-4xl font-semibold tracking-tight text-istm-600",
            valueClassName
          )}
        >
          {prefix}
          {new Intl.NumberFormat("fr-FR").format(count)}
          {suffix}
        </div>
        <div className={cn("mt-2 text-sm text-istm-500", labelClassName)}>{label}</div>
      </motion.div>
    );
  }
);
Counter.displayName = "Counter";