import { en } from "./en";
import { es } from "./es";
import type { TranslationKeys } from "./types";

/**
 * All translations grouped by language code.
 * TypeScript will ensure both languages have the same keys.
 */
export const translations: Record<string, TranslationKeys> = {
  en,
  es,
};

export type { TranslationKeys };
