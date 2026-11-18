import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
  children?: React.ReactNode;
}

const badgeVariants: Record<string, string> = {
  default: "bg-istm-600 text-white px-2.5 py-0.5 rounded text-xs font-medium",
  secondary: "bg-istm-100 text-istm-700 px-2.5 py-0.5 rounded text-xs font-medium",
  destructive: "bg-red-600 text-white px-2.5 py-0.5 rounded text-xs font-medium",
  outline: "border border-istm-200 bg-white text-istm-900 px-2.5 py-0.5 rounded text-xs font-medium",
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["inline-flex items-center rounded-full border", badgeVariants[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
Badge.displayName = "Badge";

export { Badge };