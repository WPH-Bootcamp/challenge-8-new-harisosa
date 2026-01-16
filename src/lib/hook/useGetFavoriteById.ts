import { useMemo } from "react";
import { useFavoriteMovies } from "./useGetFavoritesMovie";

export function useFavoriteIds(accountId: number) {
  const favQuery = useFavoriteMovies(accountId,1);

  const favoriteIds = useMemo(() => {
    return favQuery.data?.results?.map((m) => m.id) ?? [];
  }, [favQuery.data]);

  return { favQuery, favoriteIds };
}