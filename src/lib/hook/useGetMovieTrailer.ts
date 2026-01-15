import { useQuery } from "@tanstack/react-query";
import { getVideo } from "../api/getVideo";
import { movieQueryKeys } from "../queries/queryKeys";

export function useMovieTrailer(movieId: number) {
  return useQuery({
    queryKey: movieQueryKeys.trailer.all,
    queryFn: async () => {
      const data = await getVideo(movieId);

      const trailer = data.results
        .filter(v => v.site === "YouTube")
        .sort((a, b) => {
          if (a.type === "Trailer" && b.type !== "Trailer") return -1;
          if (a.type !== "Trailer" && b.type === "Trailer") return 1;
          return Number(b.official) - Number(a.official);
        })[0];

      return trailer
        ? `https://www.youtube.com/watch?v=${trailer.key}`
        : null;
    },
    enabled: !!movieId,
  });
}