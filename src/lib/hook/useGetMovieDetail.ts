// src/lib/tmdb/queries/useMovieDetail.ts
import {  useSuspenseQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../api/getMovieDetail";
import { movieQueryKeys } from "../queries/queryKeys";


export function useMovieDetail(movieId: number) {
  return useSuspenseQuery({
    queryKey: movieQueryKeys.detail(movieId),
    queryFn: () => getMovieDetail(movieId),
    staleTime: 5 * 60 * 1000, 
  });
}
