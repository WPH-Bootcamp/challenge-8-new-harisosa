import React, { Suspense } from "react";
import { useGetPopularMovies } from "../lib/hook/useGetPolularMovies";
import { HeroSection } from "../shared/ui/organisms/HeroSection";
import { TopRatingSection } from "../shared/ui/organisms/TopRatingSection";
import { ErrorBoundary } from "../shared/ui/atoms/ErrorBoundary";
import { TopRatingSectionSkeleton } from "../shared/ui/organisms/TopRatingSkeleton";
import { HeroSkeleton } from "../shared/ui/organisms/HeroSkeleton";
import { useGetNowPlayingMovies } from "../lib/hook/useGetNowPlayingMovies";
import { NowPlayingSection } from "../shared/ui/organisms/NowPlayingSection";
import { useNavigate } from "react-router-dom";
import type { Movie } from "../lib/types/movie";
import { useGetTrandingMovies } from "../lib/hook/useGetTrandingMovies";


export const HomePage : React.FC = () => {

   const navigate = useNavigate();

  const openMovieDetail = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const HeroBlock = () => {
  const { data } = useGetPopularMovies(1);
  return <HeroSection onSeeDetail={(id: number) => {openMovieDetail(id)}} movies={data?.results ?? []} intervalMs={20_000} />;
}

const TopRatedBlock = () => {
  const { data } = useGetTrandingMovies();
  return <TopRatingSection onMovieClick={(movie: Movie) => openMovieDetail(movie.id)} title="Top Rated" movies={data?.results ?? []} />;
}

const NowPlayingBlock = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetNowPlayingMovies();

  const all = data.pages.flatMap((p) => p.results);

  const movies = Array.from(
    new Map(
      all
        .filter((m) => m.poster_path)
        .map((m) => [m.id, m])
    ).values()
  );
  return (
    <NowPlayingSection
      movies={movies}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
      onLoadMore={() => fetchNextPage()}
    />
  );
}
  return (
    <div className="mx-auto">

      <ErrorBoundary fallback={<HeroSkeleton />}>
        <Suspense
          fallback={<HeroSkeleton />}
        >
          <HeroBlock />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<TopRatingSectionSkeleton title="Top Rated" count={10} showLoadMore />}>
        <Suspense
          fallback={<TopRatingSectionSkeleton title="Top Rated" count={10} showLoadMore />}
        >
          <TopRatedBlock />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<TopRatingSectionSkeleton title="Now Playing" count={10} showLoadMore />}>
        <Suspense
          fallback={<TopRatingSectionSkeleton title="Now Playing" count={10} showLoadMore />}
        >
          <NowPlayingBlock />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
