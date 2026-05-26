import { getConfigTranslations } from "../config/i18n";
import { supportedLanguages } from "../config/languages";
import type { Language } from "../config/languages";
import { en } from "./en";
import { es } from "./es";
import type { FullTranslationKeys, TranslationKeys } from "./types";

function buildTranslations(
  staticTranslations: TranslationKeys,
  language: Language,
): FullTranslationKeys {
  return {
    ...staticTranslations,
    ...getConfigTranslations(language),
  };
}

/**
 * All translations grouped by language code.
 * Static UI strings live in en.ts / es.ts; list content is merged from src/config/.
 */
export const translations: Record<Language, FullTranslationKeys> = {
  en: buildTranslations(en, "en"),
  es: buildTranslations(es, "es"),
};

export type { FullTranslationKeys, TranslationKeys };
export { en, es, supportedLanguages };
