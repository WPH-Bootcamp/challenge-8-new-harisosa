export type SetFavoriteBody = {
  media_type: "movie";
  media_id: number;
  favorite: boolean;
};

export type SetFavoriteResponse = {
  status_code: number;
  status_message: string;
};