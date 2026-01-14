import React, { Suspense } from "react";
import { useGetPopularMovies } from "../lib/hook/useGetPolularMovies";
import { useGetTopRatedMovies } from "../lib/hook/useGetTopRatedMovies";
import { HeroSection } from "../shared/ui/organisms/HeroSection";
import { TrendingSection } from "../shared/ui/organisms/TrandingSection";
import { ErrorBoundary } from "../shared/ui/atoms/ErrorBoundary";
import { TrandingSectionSkeleton } from "../shared/ui/organisms/TrandingSkeleton";
import { HeroSkeleton } from "../shared/ui/organisms/HeroSkeleton";
import { useGetNowPlayingMovies } from "../lib/hook/useGetNowPlayingMovies";
import { NowPlayingSection } from "../shared/ui/organisms/NowPlayingSection";

function HeroBlock() {
  const { data } = useGetPopularMovies(1);
  return <HeroSection movies={data?.results ?? []} intervalMs={20_000} />;
}

function TopRatedBlock() {
  const { data } = useGetTopRatedMovies({ page: 1 });
  return <TrendingSection title="Top Rated" movies={data?.results ?? []} />;
}

function NowPlayingBlock() {
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

export const HomePage = () => {
  return (
    <div className="mx-auto">

      <ErrorBoundary fallback={<HeroSkeleton />}>
        <Suspense
          fallback={<HeroSkeleton />}
        >
          <HeroBlock />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<TrandingSectionSkeleton title="Top Rated" count={10} showLoadMore />}>
        <Suspense
          fallback={<TrandingSectionSkeleton title="Top Rated" count={10} showLoadMore />}
        >
          <TopRatedBlock />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div className="px-10 text-white">Now Playing Error</div>}>
        <Suspense
          fallback={<TrandingSectionSkeleton title="Now Playing" count={10} showLoadMore />}
        >
          <NowPlayingBlock />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
