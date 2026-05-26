export const supportedLanguages = ["en", "es"] as const;

export type Language = (typeof supportedLanguages)[number];

export const defaultLanguage: Language = "en";
