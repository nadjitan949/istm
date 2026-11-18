"use client";

import { motion } from "framer-motion";
import * as React from "react";

export interface CounterProps {
  value: number;
  label: string;
  className?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ value, label, className, suffix = "", prefix = "", duration = 1.5 }, ref) => {
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
        <div className="text-3xl font-bold text-istm-600">
          {prefix}{count}{suffix}
        </div>
        <div className="text-sm text-istm-500">{label}</div>
      </motion.div>
    );
  }
);
Counter.displayName = "Counter";