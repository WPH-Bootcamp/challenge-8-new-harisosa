import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../api/getMovies";
import { movieQueryKeys } from "../queries/queryKeys";

export const useGetNowPlayingMovies = () => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const params = {
    sort_by: "release_date.desc",
    "release_date.lte": today,
  } satisfies Parameters<typeof getMovies>[0];

  return useSuspenseInfiniteQuery({
    queryKey: movieQueryKeys.infinite(params),
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getMovies({
        ...params,
        page: pageParam as number,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};