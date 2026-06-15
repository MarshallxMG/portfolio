import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Round to a fixed number of decimals using a value that's stable across
 * server/client renders. Avoids hydration mismatches where the browser
 * re-normalizes long floats (e.g. in `calc()` or time values) differently
 * than the raw JS-computed string.
 */
export function roundTo(n: number, decimals: number) {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}
