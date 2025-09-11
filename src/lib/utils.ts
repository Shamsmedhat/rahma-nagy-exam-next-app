import { rtlLocales } from "./constants";
import { Locale } from "next-intl";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocaleDir(locale: Locale) {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}
