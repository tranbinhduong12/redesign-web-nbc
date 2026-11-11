export interface Banner {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  thumbnail: string;
  summary: string;
  content: string;
}

export interface NewsData {
  featured: NewsArticle;
  items: NewsArticle[];
}

export function isNewsData(data: unknown): data is NewsData {
  return typeof data === 'object' && data !== null && 'featured' in data && 'items' in data;
}

export interface StatItem {
  id: string;
  value: number;
  label: string;
  icon: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
