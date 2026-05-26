import type { ContractorServiceItem } from "./types";

export const contractorServices: readonly ContractorServiceItem[] = [
  {
    id: "uiux",
    icon: "layout",
    tags: ["React", "Tailwind", "Storybook"],
    title: {
      en: "UI/UX Architecture",
      es: "Arquitectura UI/UX",
    },
    description: {
      en: "Design systems, component libraries, and accessible interfaces that scale across teams and products.",
      es: "Sistemas de diseño, bibliotecas de componentes e interfaces accesibles que escalan entre equipos y productos.",
    },
  },
  {
    id: "backend",
    icon: "server",
    tags: ["Node.js", "TypeScript", "AWS"],
    title: {
      en: "Backend Engineering",
      es: "Ingeniería Backend",
    },
    description: {
      en: "API design, database modeling, and cloud infrastructure built for performance and maintainability.",
      es: "Diseño de APIs, modelado de bases de datos e infraestructura en la nube construida para rendimiento y mantenibilidad.",
    },
  },
  {
    id: "audits",
    icon: "search",
    tags: ["CI/CD", "Testing", "Docker"],
    title: {
      en: "Tech Audits",
      es: "Auditorías Técnicas",
    },
    description: {
      en: "Code reviews, architecture assessments, and performance optimization for existing codebases.",
      es: "Revisiones de código, evaluaciones de arquitectura y optimización de rendimiento para bases de código existentes.",
    },
  },
];
