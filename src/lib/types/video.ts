export type Video = {
  id: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
  name: string;
};

export type VideosResponse = {
  id: number;
  results: Video[];
};