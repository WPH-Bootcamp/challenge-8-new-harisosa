import type { GetMoviesParams } from "../api/getMovies";

const MOVIE_ROOT = ["movie"] as const;
const ACCOUNT_ROOT = ["account"] as const;

export const movieQueryKeys = {
  // ===== ACCOUNT =====
  account: {
    all: ACCOUNT_ROOT,
  },

  // ===== MOVIE ROOT =====
  root: MOVIE_ROOT,

  // ===== MOVIE LIST =====
  list: (params: GetMoviesParams) =>
    [...MOVIE_ROOT, "list", params] as const,

  tranding: [...MOVIE_ROOT, "tranding"] as const,

  infinite: (params: Omit<GetMoviesParams, "page">) =>
    [...MOVIE_ROOT, "infinite", params] as const,

  // ===== MOVIE DETAIL =====
  detail: (movieId: number) =>
    [...MOVIE_ROOT, "detail", movieId] as const,

  // ===== CREDITS =====
  creditByMovieId: (movieId: number) =>
    [...MOVIE_ROOT, "credit", movieId] as const,

  // ===== TRAILER =====
  trailer: {
    all: [...MOVIE_ROOT, "trailer"] as const,
    byMovieId: (movieId: number) =>
      [...MOVIE_ROOT, "trailer", movieId] as const,
  },

  // ===== FAVORITES =====
  favorite: {
    all: [...MOVIE_ROOT, "favorite"] as const,

    movies: (accountId: number) =>
      [...movieQueryKeys.favorites.all, accountId] as const,

    moviesByPage: (accountId: number, page: number) =>
      [...movieQueryKeys.favorites.all,  accountId, page] as const,
  },

    favorites: {
    all: ["favorites"] as const,
    
  },
} as const;
