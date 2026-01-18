import type { GetMoviesParams } from "../api/getMovies"
import type { SearchMoviesParams } from "../api/getSearchMovie";

const MOVIE_ROOT = ["movie"] as const;
const ACCOUNT_ROOT = ["account"] as const;
const FAVORITES_ROOT = ["favorites"] as const;

export const movieQueryKeys = {
  account: {
    all: ACCOUNT_ROOT,
  },
  root: MOVIE_ROOT,

  list: (params: GetMoviesParams) =>
    [...MOVIE_ROOT, "list", params] as const,
  trending: [...MOVIE_ROOT, "trending"] as const,

  infinite: (params: Omit<GetMoviesParams, "page">) =>
    [...MOVIE_ROOT, "infinite", params] as const,

  search: {
    all: [...MOVIE_ROOT, "search"] as const,

    infinite: (params: Omit<SearchMoviesParams, "page">) =>
      [...MOVIE_ROOT, "search", "infinite", params] as const,
  },

  detail: (movieId: number) =>
    [...MOVIE_ROOT, "detail", movieId] as const,


  creditByMovieId: (movieId: number) =>
    [...MOVIE_ROOT, "credit", movieId] as const,

  trailer: {
    all: [...MOVIE_ROOT, "trailer"] as const,
    byMovieId: (movieId: number) =>
      [...MOVIE_ROOT, "trailer", movieId] as const,
  },
  
  favorites: {
    all: FAVORITES_ROOT,

    movies: (accountId: number) =>
      [...FAVORITES_ROOT, "movies", accountId] as const,

    moviesByPage: (accountId: number, page: number) =>
      [...FAVORITES_ROOT, "movies", accountId, page] as const,
  },
} as const;
