import { useSuspenseQuery } from "@tanstack/react-query";
import { getMovies } from "../api/getMovies";
import { movieQueryKeys } from "../queries/queryKeys";
export type UseGetTopRatedMoviesOptions = {
  page?: number;
  without_genres?: string;   // default "99,10755"
  vote_count_gte?: number;   // default 200
  language?: string;
  include_adult?: boolean;
  include_video?: boolean;
};

export const useGetTopRatedMovies = (opts: UseGetTopRatedMoviesOptions = {}) => {
  const {
    page = 1,
    without_genres = "99,10755",
    vote_count_gte = 200,
    language = "en-US",
    include_adult = false,
    include_video = false,
  } = opts;

  const params = {
    page,
    sort_by: "vote_average.desc",
    without_genres,
    "vote_count.gte": vote_count_gte,
    language,
    include_adult,
    include_video,
  } satisfies Parameters<typeof getMovies>[0];

  return useSuspenseQuery({
    queryKey: movieQueryKeys.list(params),
    queryFn: () => getMovies(params),
    staleTime: 1000 * 60 * 10,
  });
};
