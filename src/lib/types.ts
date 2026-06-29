export interface BlogData {
  title: string;
  date: string;
  description?: string;
  [key: string]: unknown;
}

export interface Post {
  meta: BlogData;
  path: string;
}
