import * as React from "react";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge();

function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "red";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const buttonVariants: Record<string, string> = {
  default: "bg-istm-600 text-white shadow-sm hover:bg-istm-700",
  destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
  outline: "border border-istm-200 bg-white text-istm-900 shadow-sm hover:bg-istm-50",
  secondary: "bg-istm-50 text-istm-700 shadow-sm hover:bg-istm-100",
  ghost: "text-istm-600 hover:bg-istm-50",
  link: "text-istm-600 underline-offset-4 hover:underline",
  red: "bg-red-600 text-white shadow-sm hover:bg-red-700",
};

const buttonSizes: Record<string, string> = {
  default: "h-11 px-6 py-3 text-sm font-medium",
  sm: "h-9 px-4 py-2 text-sm font-medium",
  lg: "h-12 px-8 py-3 text-sm font-medium",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "a" : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, cn };