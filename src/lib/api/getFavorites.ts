import { http } from "../axios/http";
import type { FavoriteMoviesResponse } from "../types/favorite";

export const getFavoriteMovies = (accountId: number) => {
  return http.get<FavoriteMoviesResponse>(`/account/${accountId}/favorite/movies`,
  );
};
