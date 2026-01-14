import type { Movie } from "../../../lib/types/movie";
import { MoviePosterCard } from "../molecules/MoviePosterCard";

type MoviePosterGridProps = {
  movies: Movie[];
  title?: string;
  onMovieClick?: (movie: Movie) => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
};

export const MoviePosterGrid: React.FC<MoviePosterGridProps> = ({
  movies,
  title,
  onMovieClick,
  hasMore,
  isLoadingMore,
  onLoadMore,
}) => {
  return (
    <section className="px-6">
      {title && (
        <h2 className="mb-4 text-2xl font-bold text-white">
          {title}
        </h2>
      )}

      <div className="flex gap-6 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <MoviePosterCard
            key={movie.id}
            movie={movie}
            onClick={onMovieClick}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};
