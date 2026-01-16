import { useQuery } from "@tanstack/react-query";
import { getVideo } from "../api/getVideo";
import { movieQueryKeys } from "../queries/queryKeys";
import type { Video } from "../types/video";

export const useMovieTrailer = (movieId: number) => {
  return useQuery({
    queryKey: [...movieQueryKeys.trailer.all, movieId],
    enabled: movieId > 0,
    queryFn: async () => {
      const data = await getVideo(movieId);

      const youtube = data.results.filter(
        (v: Video) => v.site === "YouTube" && !!v.key
      );

      const picked = youtube
        .sort((a, b) => {
          const score = (v: Video) =>
            (v.type === "Trailer" ? 100 : 0) +
            (v.official ? 10 : 0) +
            (v.name?.toLowerCase().includes("official") ? 5 : 0);
          return score(b) - score(a);
        })[0];

      return picked?.key?.trim() ?? null;
    },
  });
};
