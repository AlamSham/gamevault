export interface InstallStep {
  title: string;
  desc: string;
}

export interface VersionHistory {
  version: string;
  date: string;
  size: string;
  downloadUrl?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Game {
  id: string;
  name: string;
  developer: string;
  category: string;
  version: string;
  size: string;
  androidReq: string;
  rating: number;
  downloads: string;
  lastUpdated: string;
  icon: string;
  iconColor: string;
  description: string;
  features: string[];
  review: string;
  whatsNew: string;
  pros: string[];
  cons: string[];
  installSteps: InstallStep[];
  olderVersions: VersionHistory[];
  faq: FAQ[];
  relatedGames: string[];
  screenshots: string[];
  playStoreUrl: string;
  downloadUrl?: string;
  packageName?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  icon: string;
  date: string;
  readTime: string;
  content: string;
}