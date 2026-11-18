import * as React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "red";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonStyleProps {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButtonProps = ButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonStyleProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const buttonVariants: Record<ButtonVariant, string> = {
  default: "bg-istm-600 text-white shadow-sm hover:bg-istm-700",
  destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
  outline: "border border-istm-200 bg-white text-istm-900 shadow-sm hover:bg-istm-50",
  secondary: "bg-istm-50 text-istm-700 shadow-sm hover:bg-istm-100",
  ghost: "text-istm-600 hover:bg-istm-50",
  link: "text-istm-600 underline-offset-4 hover:underline",
  red: "bg-red-600 text-white shadow-sm hover:bg-red-700",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "h-11 px-6 py-3 text-sm font-medium",
  sm: "h-9 px-4 py-2 text-sm font-medium",
  lg: "h-12 px-8 py-3 text-sm font-medium",
};

export function getButtonClassName({
  className,
  variant = "default",
  size = "default",
}: Pick<ButtonStyleProps, "className" | "variant" | "size">) {
  return cn(
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );
}

function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "default",
    size = "default",
    ...rest
  } = props;

  const buttonClassName = getButtonClassName({ className, variant, size });

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkProps } = rest;

    return (
      <Link href={href} className={buttonClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest;

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}

export { Button, cn };