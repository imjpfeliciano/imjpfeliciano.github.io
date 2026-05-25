/**
 * Static UI translation keys (nav, section headers, forms, about page).
 * Config-driven content translations are generated from src/config/.
 */
export type TranslationKeys = {
  // Navbar
  "nav.brand": string;
  "nav.services": string;
  "nav.experience": string;
  "nav.projects": string;
  "nav.contact": string;
  "nav.hireMe": string;
  "nav.about": string;

  // Hero
  "hero.label": string;
  "hero.headline": string;
  "hero.description": string;
  "hero.cta.hireMe": string;
  "hero.cta.portfolio": string;

  // Section headers
  "services.label": string;
  "services.title": string;
  "work.label": string;
  "work.title": string;
  "projects.label": string;
  "projects.title": string;
  "projects.liveDemo": string;
  "projects.github": string;
  "tech.label": string;
  "tech.title": string;
  "tech.updatedLabel": string;

  // Contact
  "contact.heading": string;
  "contact.subtext": string;
  "contact.email": string;
  "contact.location": string;
  "contact.form.name": string;
  "contact.form.email": string;
  "contact.form.details": string;
  "contact.form.submit": string;

  // Footer
  "footer.brand": string;
  "footer.copyright": string;

  // About page
  "about.title": string;
  "about.thankYou": string;
  "about.readMore": string;
  "about.section.background": string;
  "about.section.experience": string;
  "about.section.education": string;
  "about.section.skills": string;
  "about.section.interests": string;
  "about.background.p1": string;
  "about.background.p2": string;
  "about.background.p3": string;
  "about.background.p4": string;
  "about.background.p5": string;
  "about.education.degree": string;
  "about.education.university": string;
  "about.education.years": string;
  "about.interests.competitive": string;
  "about.interests.competitive.years": string;
  "about.interests.competitive.desc": string;
  "about.interests.teaching": string;
  "about.interests.teaching.years": string;
};

/** Merged static + config-driven translations used at runtime. */
export type FullTranslationKeys = TranslationKeys & Record<string, string>;

/**
 * Helper type to ensure a translation object has all required keys.
 * This will cause a TypeScript error if any keys are missing.
 */
export type EnsureAllKeys<T extends TranslationKeys> = T;
