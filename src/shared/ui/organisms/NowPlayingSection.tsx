import React from "react";
import type { Movie } from "../../../lib/types/movie";
import { MoviePosterCard } from "../molecules/MoviePosterCard";

type Props = {
  title?: string;
  movies: Movie[];

  hasMore?: boolean;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
  onClickMovie? : (m:Movie) => void;
};

export const NowPlayingSection: React.FC<Props> = ({
  title = "Now Playing",
  movies,
  hasMore,
  isLoadingMore,
  onLoadMore,
  onClickMovie
}) => {
  return (
    <section className="px-10 lg:px-35 ">
      <h2 className="mb-6 text-4xl font-extrabold text-white">{title}</h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MoviePosterCard key={movie.id} movie={movie} onClick={onClickMovie} />
        ))}
      </div>

      {isLoadingMore && (
        <div className="mt-4 text-center text-white/60">Loading more…</div>
      )}

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="rounded-full border border-white/10 bg-white/5 px-10 py-3 font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};
