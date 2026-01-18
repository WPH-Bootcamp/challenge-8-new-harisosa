import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { http } from "../axios/http";
import { movieQueryKeys } from "../queries/queryKeys";
import { toast } from "sonner";


type FavoriteMovieList = {
  page: number;
  results: Array<{ id: number }>;
  total_pages: number;
  total_results: number;
};

export function useToggleFavorite() {
  const qc = useQueryClient();
  const { accountId } = useAuth();

  return useMutation({
    mutationFn: async (args: { movieId: number; nextFavorite: boolean }) => {
      if (!accountId) throw new Error("Missing accountId");

      await http.post(`/account/${accountId}/favorite`, {
        media_type: "movie",
        media_id: args.movieId,
        favorite: args.nextFavorite,
      });

      return args;
    },

    onMutate: async ({ movieId, nextFavorite }) => {
      if (!accountId) return;

      await qc.cancelQueries({
        queryKey: movieQueryKeys.favorites.movies(accountId),
      });

      const previous = qc.getQueriesData<FavoriteMovieList>({
        queryKey: movieQueryKeys.favorites.movies(accountId),
      });

      // Update semua cache favorites per page
      previous.forEach(([key, data]) => {
        if (!data) return;

        const exists = data.results.some((m) => m.id === movieId);

        const nextResults = nextFavorite
          ? exists
            ? data.results
            : [{ id: movieId }, ...data.results] 
          : data.results.filter((m) => m.id !== movieId);

        qc.setQueryData<FavoriteMovieList>(key, {
          ...data,
          results: nextResults,
          total_results: Math.max(
            0,
            (data.total_results ?? nextResults.length) +
              (nextFavorite ? (exists ? 0 : 1) : exists ? -1 : 0)
          ),
        });
      });

      return { previous };
    },

    onError: (_err, _vars, ctx) => {
      ctx?.previous?.forEach(([key, data]) => {
        qc.setQueryData(key, data);
      });
      toast.error("Gagal update favorite");
    },

    onSuccess: ({ nextFavorite }) => {
      toast.success(nextFavorite ? "Added to favorites" : "Removed from favorites");
    },

    onSettled: async () => {
      if (!accountId) return;
      await qc.invalidateQueries({
        queryKey: movieQueryKeys.favorites.movies(accountId),
      });
    },
  });
}
