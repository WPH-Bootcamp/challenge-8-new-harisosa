import { useQuery } from "@tanstack/react-query";
import { getLastMonthsRangeYmd } from "../dateRange";
import { getMovies } from "../api/getMovies";
import { movieQueryKeys } from "../queries/queryKeys";

export const useGetPopularMovies = (page = 1, months = 6) => {
  const { min_date, max_date } = getLastMonthsRangeYmd(months);

  const params = {
    page,
    sort_by: "popularity.desc",
    with_release_type: "2|3",
    "release_date.gte": min_date,
    "release_date.lte": max_date,
  } satisfies Parameters<typeof getMovies>[0];

  return useQuery({
    queryKey: movieQueryKeys.list(params),
    queryFn: () => getMovies(params),
    staleTime: 1000 * 60 * 10,
  });
};
