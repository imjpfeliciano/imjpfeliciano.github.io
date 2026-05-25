import type { Language } from "./languages";
import { defaultLanguage } from "./languages";
import type { LocalizedList, LocalizedText } from "./types";
import { contractorServices } from "./contractor-services";
import { featuredProjects } from "./featured-projects";
import { techStackItems, techStackMeta } from "./tech-stack";
import { workHistoryItems } from "./work-history";

export const configTranslationKeys = {
  services: {
    title: (id: string) => `config.services.${id}.title`,
    description: (id: string) => `config.services.${id}.description`,
  },
  work: {
    role: (id: string) => `config.work.${id}.role`,
    company: (id: string) => `config.work.${id}.company`,
    period: (id: string) => `config.work.${id}.period`,
    bullet: (id: string, index: number) => `config.work.${id}.bullets.${index}`,
  },
  projects: {
    badge: (id: string) => `config.projects.${id}.badge`,
    title: (id: string) => `config.projects.${id}.title`,
    description: (id: string) => `config.projects.${id}.description`,
  },
  tech: {
    name: (id: string) => `config.tech.${id}.name`,
    updatedDate: "config.tech.updatedDate",
  },
} as const;

export function pickLocalized(
  text: LocalizedText,
  language: Language = defaultLanguage,
): string {
  return text[language];
}

export function pickLocalizedList(
  list: LocalizedList,
  language: Language = defaultLanguage,
): readonly string[] {
  return list[language];
}

export function getConfigTranslations(
  language: Language,
): Record<string, string> {
  const translations: Record<string, string> = {};

  for (const item of contractorServices) {
    translations[configTranslationKeys.services.title(item.id)] =
      item.title[language];
    translations[configTranslationKeys.services.description(item.id)] =
      item.description[language];
  }

  for (const item of workHistoryItems) {
    translations[configTranslationKeys.work.role(item.id)] =
      item.role[language];
    translations[configTranslationKeys.work.company(item.id)] =
      item.company[language];
    translations[configTranslationKeys.work.period(item.id)] =
      item.period[language];

    item.bullets[language].forEach((bullet, index) => {
      translations[configTranslationKeys.work.bullet(item.id, index)] = bullet;
    });
  }

  for (const item of featuredProjects) {
    translations[configTranslationKeys.projects.badge(item.id)] =
      item.badge[language];
    translations[configTranslationKeys.projects.title(item.id)] =
      item.title[language];
    translations[configTranslationKeys.projects.description(item.id)] =
      item.description[language];
  }

  for (const item of techStackItems) {
    translations[configTranslationKeys.tech.name(item.id)] =
      item.name[language];
  }

  translations[configTranslationKeys.tech.updatedDate] =
    techStackMeta.updatedDate[language];

  return translations;
}
