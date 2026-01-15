import type { ListResponse } from "./response";

export type FavoriteMovieItem = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
};

export type FavoriteMoviesResponse = ListResponse<FavoriteMovieItem>;

export type SetFavoriteBody = {
  media_type: "movie";
  media_id: number;
  favorite: boolean;
};

export type SetFavoriteResponse = {
  status_code: number;
  status_message: string;
};