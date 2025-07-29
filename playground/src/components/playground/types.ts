export type SearchType = "region" | "prefecture" | "neighborhood";

export interface SearchResult {
  success: boolean;
  type?: SearchType;
  data?: {
    name: string;
    population?: number;
    area?: number;
    prefectures?: string[];
    region?: string;
    subPrefectures?: string[];
  };
  error?: string;
  suggestions?: string[];
}

export interface StatCard {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  color: {
    bg: string;
    text: string;
  };
  footer: string;
}
