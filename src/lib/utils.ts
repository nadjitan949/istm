import { clsx } from "clsx";
import { tailwindMerge } from "tailwind-merge";

export function cn(...inputs: unknown[]) {
  return tailwindMerge(clsx(inputs));
}