import {
  Cloud,
  Container,
  Database,
  ExternalLink,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Search,
  Server,
  Terminal,
} from "@lucide/astro";
import type { IconName } from "./types";

export const iconMap = {
  layout: Layout,
  server: Server,
  search: Search,
  globe: Globe,
  terminal: Terminal,
  externalLink: ExternalLink,
  cloud: Cloud,
  container: Container,
  database: Database,
  gitBranch: GitBranch,
  layers: Layers,
} satisfies Record<IconName, typeof Layout>;

export function getIcon(name: IconName) {
  return iconMap[name];
}
