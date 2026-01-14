import type { GetMoviesParams } from "../api/getMovies";


export const movieQueryKeys = {
  root: ["movie"] as const,

  /**
   * Untuk useQuery biasa (page ikut cache key)
   * Contoh: page 1 vs page 2 beda cache.
   */
  list: (params: GetMoviesParams) => [...movieQueryKeys.root, "list", params] as const,

  /**
   * Untuk useInfiniteQuery (page JANGAN ikut key)
   * Karena pagination di-handle sama pageParam.
   */
  infinite: (params: Omit<GetMoviesParams, "page">) =>
    [...movieQueryKeys.root, "infinite", params] as const,
};
