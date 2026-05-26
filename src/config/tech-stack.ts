import type { TechStackItem, TechStackMeta } from "./types";

export const techStackItems: readonly TechStackItem[] = [
  {
    id: "typescript",
    icon: "layers",
    name: { en: "TypeScript", es: "TypeScript" },
  },
  {
    id: "react",
    icon: "gitBranch",
    name: { en: "React", es: "React" },
  },
  {
    id: "nodejs",
    icon: "server",
    name: { en: "Node.js", es: "Node.js" },
  },
  {
    id: "aws",
    icon: "cloud",
    name: { en: "AWS", es: "AWS" },
  },
  {
    id: "docker",
    icon: "container",
    name: { en: "Docker", es: "Docker" },
  },
  {
    id: "postgresql",
    icon: "database",
    name: { en: "PostgreSQL", es: "PostgreSQL" },
  },
];

export const techStackMeta: TechStackMeta = {
  updatedDate: {
    en: "May 2026",
    es: "Mayo 2026",
  },
};
