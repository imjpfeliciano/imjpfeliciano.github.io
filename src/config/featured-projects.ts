import type { FeaturedProjectItem } from "./types";

export const featuredProjects: readonly FeaturedProjectItem[] = [
  {
    id: "omi-qroo",
    icon: "globe",
    badge: {
      en: "Web App",
      es: "App Web",
    },
    title: {
      en: "OMI-QROO",
      es: "OMI-QROO",
    },
    description: {
      en: "Information platform for the Quintana Roo Olympiad in Informatics team on the Mexican Olympiad in Informatics.",
      es: "Plataforma informativa del equipo de la Olimpiada Mexicana de Informática en Quintana Roo.",
    },
    tags: ["Astro", "Tailwind", "TypeScript"],
    demoUrl: "https://www.omi-qroo.com/",
    githubUrl: null,
  },
  {
    id: "alpha-finance",
    icon: "terminal",
    badge: {
      en: "Web App",
      es: "App Web",
    },
    title: {
      en: "Alpha Finance",
      es: "Alpha Finance",
    },
    description: {
      en: "A platform that helps users manage accountability and financial goals with intuitive dashboards.",
      es: "Plataforma que ayuda a los usuarios a gestionar responsabilidades financieras y metas con paneles intuitivos.",
    },
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "https://www.alpha-finance.app/",
    githubUrl: null,
  },
  {
    id: "opportunity-tracker",
    icon: "externalLink",
    badge: {
      en: "Web App",
      es: "App Web",
    },
    title: {
      en: "Opportunity Tracker",
      es: "Opportunity Tracker",
    },
    description: {
      en: "Track job opportunities, applications, interview stages, notes, and outcomes in one place.",
      es: "Rastrea oportunidades laborales, aplicaciones, etapas de entrevista, notas y resultados en un solo lugar.",
    },
    tags: ["Next.js", "TypeScript", "Prisma"],
    demoUrl: "https://www.opportunity-tracker.app/",
    githubUrl: null,
  },
];
