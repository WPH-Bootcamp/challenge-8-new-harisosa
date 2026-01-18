import { useSuspenseQuery } from "@tanstack/react-query";
import { movieQueryKeys } from "../queries/queryKeys";
import { getTrandingMovie } from "../api/getTrandingMovie";

export const useGetTrandingMovies = () => {
  return useSuspenseQuery({
    queryKey: movieQueryKeys.trending,
    queryFn: () => getTrandingMovie(),
    staleTime: 1000 * 60 * 10,
  });
};
