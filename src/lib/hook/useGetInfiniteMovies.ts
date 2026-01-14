import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies, type GetMoviesParams } from "../api/getMovies";
import { movieQueryKeys } from "../queries/queryKeys";


type UseInfiniteMoviesOptions = {
  params: Omit<GetMoviesParams, "page">; // page di-handle infinite query
  enabled?: boolean;
};

export const useGetInfiniteMovies = ({ params, enabled = true }: UseInfiniteMoviesOptions) => {
  return useInfiniteQuery({
    queryKey: movieQueryKeys.infinite(params),
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getMovies({
        ...params,
        page: pageParam as number,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
    enabled,
    staleTime: 1000 * 60 * 10,
  });
};
