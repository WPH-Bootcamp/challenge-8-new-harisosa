import { useQuery } from "@tanstack/react-query";
import { movieQueryKeys } from "../queries/queryKeys";
import { getFavoriteMovies } from "../api/getFavorites";


export const useFavoriteMovies = (accountId: number) => {
  return useQuery({
    queryKey: [...movieQueryKeys.favorites.movies(accountId)] as const,
    queryFn: async () => {
      const res = await getFavoriteMovies(accountId);
      return res.data;
    },
    enabled: !!accountId,
    staleTime: 60_000,
  });
}
