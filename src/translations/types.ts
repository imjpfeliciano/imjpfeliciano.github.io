/**
 * Type definition for translation keys.
 * This ensures all translation files have the same structure.
 */
export type TranslationKeys = {
  // Navbar
  "nav.home": string;
  "nav.about": string;

  // Welcome component
  "welcome.greeting": string;
  "welcome.description": string;
  "welcome.role.fullstack": string;
  "welcome.role.fullstack.desc": string;
  "welcome.role.mentor": string;
  "welcome.role.mentor.desc": string;
  "welcome.role.interviewer": string;
  "welcome.role.interviewer.desc": string;

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

  // Home Selected Work Section
  "home.selectedWork.title": string;
  "home.selectedWork.description": string;
  "home.selectedWork.viewAll": string;
  "home.selectedWork.visitWebsite": string;

  // Home Mentions Section
  "home.mentions.title": string;
  "home.mentions.description": string;

  // Footer
  "footer.workTogether": string;
  "footer.sendMessage": string;
  "footer.madeWith": string;
};

/**
 * Helper type to ensure a translation object has all required keys.
 * This will cause a TypeScript error if any keys are missing.
 */
export type EnsureAllKeys<T extends TranslationKeys> = T;
