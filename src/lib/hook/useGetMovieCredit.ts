// src/lib/tmdb/queries/useMovieCredits.ts
import { useSuspenseQuery } from "@tanstack/react-query";
import { movieQueryKeys } from "../queries/queryKeys";
import { getMovieCredits } from "../api/getMovieCredits";


export function useMovieCredits(movieId: number) {
  return useSuspenseQuery({
    queryKey: movieQueryKeys.creditByMovieId(movieId),
    queryFn: () => getMovieCredits(movieId),
    staleTime: 30 * 60 * 1000, 
  });
}
