import { http } from "../axios/http";
import type { Movie } from "../types/movie";
import type { ListResponse } from "../types/response";

export type GetMoviesParams = {
  page?: number;
  language?: string;
  include_adult?: boolean;
  include_video?: boolean;
  sort_by?: string;
  with_release_type?: string;
  without_genres?: string;
  "release_date.gte"?: string;
  "release_date.lte"?: string;
  "vote_count.gte"?: number;

  // allow extra params anytime
  [key: string]: string | number | boolean | undefined;
};

export async function getMovies(params: GetMoviesParams = {}) {
  const {
    page = 1,
    language = "en-US",
    include_adult = false,
    include_video = false,
    ...rest
  } = params;

  const res = await http.get<ListResponse<Movie>>("/discover/movie", {
    params: {
      include_adult,
      include_video,
      language,
      page,
      ...rest,
    },
  });

  return res.data;
}
