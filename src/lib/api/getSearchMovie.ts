import { http } from "../axios/http";
import type { Movie } from "../types/movie";
import type { ListResponse } from "../types/response";

export type SearchMoviesParams = {
  query: string;
  page?: number;
  include_adult?: boolean;
  language?: string;
  region?: string;
};

export const getSearchMovies = async (params: SearchMoviesParams): Promise<ListResponse<Movie>>  => {
  const {
    query,
    page = 1,
    include_adult = false,
    language = "en-US",
    region,
  } = params;

  const res = await http.get<ListResponse<Movie>>("/search/movie", {
    params: {
      query,
      page,
      include_adult,
      language,
      ...(region ? { region } : {}),
    },
  });

  return res.data;
}
