import type { Language } from "./languages";
import { supportedLanguages } from "./languages";

/** A string value provided for every supported language. */
export type LocalizedText = Record<Language, string>;

/** A list of strings provided for every supported language. */
export type LocalizedList = Record<Language, readonly string[]>;

export type IconName =
  | "layout"
  | "server"
  | "search"
  | "globe"
  | "terminal"
  | "externalLink"
  | "cloud"
  | "container"
  | "database"
  | "gitBranch"
  | "layers";

export interface ContractorServiceItem {
  id: string;
  icon: IconName;
  tags: readonly string[];
  title: LocalizedText;
  description: LocalizedText;
}

export interface WorkHistoryItem {
  id: string;
  role: LocalizedText;
  company: LocalizedText;
  period: LocalizedText;
  bullets: LocalizedList;
}

export interface FeaturedProjectItem {
  id: string;
  icon: IconName;
  badge: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  tags: readonly string[];
  demoUrl: string | null;
  githubUrl: string | null;
}

export interface TechStackItem {
  id: string;
  icon: IconName;
  name: LocalizedText;
}

export interface TechStackMeta {
  updatedDate: LocalizedText;
}

/** Ensures every supported language key is present on localized fields. */
export function defineLocalizedText(
  text: Record<Language, string>,
): LocalizedText {
  for (const lang of supportedLanguages) {
    if (!(lang in text)) {
      throw new Error(`Missing translation for language "${lang}"`);
    }
  }
  return text;
}

export function defineLocalizedList(
  list: Record<Language, readonly string[]>,
): LocalizedList {
  for (const lang of supportedLanguages) {
    if (!(lang in list)) {
      throw new Error(`Missing bullet list for language "${lang}"`);
    }
  }
  return list;
}
