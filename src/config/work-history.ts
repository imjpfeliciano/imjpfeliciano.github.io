import type { WorkHistoryItem } from "./types";

export const workHistoryItems: readonly WorkHistoryItem[] = [
  {
    id: "slalom",
    role: {
      en: "Architect",
      es: "Arquitecto",
    },
    company: {
      en: "Slalom",
      es: "Slalom",
    },
    period: {
      en: "2026 - Present",
      es: "2026 - Presente",
    },
    bullets: {
      en: [],
      es: [],
    }
  },
  {
    id: "cerby",
    role: {
      en: "Senior Full-Stack Consultant",
      es: "Consultor Full-Stack Senior",
    },
    company: {
      en: "Cerby Inc.",
      es: "Cerby Inc.",
    },
    period: {
      en: "2023 - 2025",
      es: "2023 - 2025",
    },
    bullets: {
      en: [
        "Led frontend architecture for identity and access management platform.",
        "Built reusable component systems with React, TypeScript, and Storybook.",
        "Improved performance and accessibility across core product workflows.",
      ],
      es: [
        "Lideré la arquitectura frontend para la plataforma de gestión de identidad y acceso.",
        "Construí sistemas de componentes reutilizables con React, TypeScript y Storybook.",
        "Mejoré el rendimiento y la accesibilidad en los flujos principales del producto.",
      ],
    },
  },
  {
    id: "humanapi",
    role: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
    },
    company: {
      en: "HumanAPI",
      es: "HumanAPI",
    },
    period: {
      en: "2021 - 2023",
      es: "2021 - 2023",
    },
    bullets: {
      en: [
        "Developed healthcare data integration features for enterprise clients.",
        "Collaborated on API design and frontend data visualization tools.",
        "Shipped features with strong unit and integration test coverage.",
      ],
      es: [
        "Desarrollé funcionalidades de integración de datos de salud para clientes empresariales.",
        "Colaboré en diseño de APIs y herramientas de visualización de datos frontend.",
        "Entregué funcionalidades con sólida cobertura de pruebas unitarias e integración.",
      ],
    },
  },
  {
    id: "wizeline",
    role: {
      en: "Software Engineer III",
      es: "Ingeniero de Software III",
    },
    company: {
      en: "Wizeline",
      es: "Wizeline",
    },
    period: {
      en: "2017 - 2021",
      es: "2017 - 2021",
    },
    bullets: {
      en: [
        "Delivered scalable web applications for global enterprise customers.",
        "Mentored junior engineers on React best practices and code quality.",
        "Contributed to design systems and cross-team frontend standards.",
      ],
      es: [
        "Entregué aplicaciones web escalables para clientes empresariales globales.",
        "Mentoricé a ingenieros junior en mejores prácticas de React y calidad de código.",
        "Contribuí a sistemas de diseño y estándares frontend entre equipos.",
      ],
    },
  },
];
