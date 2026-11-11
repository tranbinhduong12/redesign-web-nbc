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
  summary: string;
  image: string;
  publishedAt: string;
}

export interface NewsData {
  featured: NewsArticle;
  items: NewsArticle[];
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
