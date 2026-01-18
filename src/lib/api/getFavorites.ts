import { http } from "../axios/http";
import type { Movie } from "../types/movie";
import type { ListResponse } from "../types/response";

export const getFavoriteMovies = (accountId: number) => {
  return http.get<ListResponse<Movie>>(`/account/${accountId}/favorite/movies`,
  );
};
