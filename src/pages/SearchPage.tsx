import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useInfiniteSearchMovies } from "../lib/hook/useInfiniteSearchMovie";
import { EmptyState } from "../shared/ui/molecules/EmptyState";
import { MovieItemList } from "../shared/ui/organisms/MovieItemList";
import { getImageUrl } from "../lib/api/getImage";
import { TrailerModal } from "../shared/ui/organisms/TrailerModel";
import { useMovieTrailer } from "../lib/hook/useGetMovieTrailer";
import { useToggleFavorite } from "../lib/hook/useToogleFavorite";
import { useAuth } from "../lib/hook/useAuth";
import { useFavoriteMovies } from "../lib/hook/useGetFavoritesMovie";
import type { Movie } from "../lib/types/movie";
import { MovieListSkeleton } from "../shared/ui/organisms/MovieItemListSkeleton";
import { ErrorBoundary } from "../shared/ui/atoms/ErrorBoundary";

export const SearchPage: React.FC = () => {
  const { accountId } = useAuth();
  const favMovies = useFavoriteMovies(accountId ?? 0);

  const [searchParams] = useSearchParams();
  const query = (searchParams.get("query") ?? "").trim();

  const [openTrailer, setOpenTrailer] = useState(false);
  const [trailerMovieId, setTrailerMovieId] = useState<number | null>(null);
  const trailerQ = useMovieTrailer(trailerMovieId ?? 0);

  const toggleFav = useToggleFavorite();

  const ResultsBlock = () => {
    const {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    } = useInfiniteSearchMovies({
      query,
      language: "en-US",
      region: "ID",
    });

    const movies = useMemo(() => {
      return data?.pages.flatMap((p) => p.results) ?? [];
    }, [data]);

    const favoriteIds = useMemo(() => {
      return new Set((favMovies.data?.results ?? []).map((m) => m.id));
    }, [favMovies.data]);

    const mappedMovies = useMemo(() => {
      return movies.map((m) => ({
        ...m,
        isFavorite: favoriteIds.has(m.id),
      }));
    }, [movies, favoriteIds]);

    const onWatchTrailer = (movieId: number) => {
      setTrailerMovieId(movieId);
      setOpenTrailer(true);
    };

    const onToggleFavorite = (movie: Movie) => {
      toggleFav.mutate({ movieId: movie.id, nextFavorite: !movie.isFavorite });
    };

    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = sentinelRef.current;
      if (!el) return;

      const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      io.observe(el);
      return () => io.disconnect();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    if (movies.length === 0) {
      return (
        <EmptyState
          icon={<img src="/not-found-search.svg" alt="not-found" className="luminosity w-38.5 h-42.5" />}
          title="Data Empty"
          description="Try other keywords"
        />
      );
    }

    return (
      <>
        <MovieItemList
          items={mappedMovies}
          getPosterUrl={(m) => getImageUrl(m.poster_path ?? "")}
          onWatchTrailer={onWatchTrailer}
          onToggleFavorite={onToggleFavorite}
        />
        <div ref={sentinelRef} />
      </>
    );
  };

  return (
    <div className="min-h-dvh lg:pt-38.5 lg:px-35 pt-16">
      <ErrorBoundary
        fallback={
          <div className="max-w-5xl px-4 sm:px-6 md:px-8 py-10 text-white/60">
            Failed to load.
          </div>
        }
      >
        <Suspense fallback={<MovieListSkeleton count={10} />}>
          <ResultsBlock />
        </Suspense>
      </ErrorBoundary>

      <TrailerModal
        open={openTrailer}
        onClose={() => setOpenTrailer(false)}
        videoId={trailerQ.data ?? null}
        isLoading={trailerQ.isLoading}
      />
    </div>
  );
};
