import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { getSearchMovies } from "../api/getSearchMovie";
import type { Movie } from "../types/movie";
import { movieQueryKeys } from "../queries/queryKeys";

export type UseInfiniteSearchMoviesOptions = {
  query: string;
  language?: string;
  region?: string;
  includeAdult?: boolean;
  minQueryLength?: number;
};

export function useInfiniteSearchMovies(opts: UseInfiniteSearchMoviesOptions) {
  const {
    query,
    language = "en-US",
    region,
    includeAdult = false,
  } = opts;

  const trimmed = query.trim();

  const q = useSuspenseInfiniteQuery({
    queryKey:  movieQueryKeys.search.infinite({
    query,
    language,
    region,
    include_adult: includeAdult,
  }),
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getSearchMovies({
        query: trimmed,
        page: pageParam,
        language,
        region,
        include_adult: includeAdult,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
    staleTime: 30_000,
    gcTime: 5 * 60_000,
    retry: 1,
  });

  const movies: Movie[] =
    q.data?.pages.flatMap((p) => p.results) ?? [];

  const totalResults = q.data?.pages?.[0]?.total_results ?? 0;

  return {
    ...q,
    movies,
    totalResults,
  };
}
