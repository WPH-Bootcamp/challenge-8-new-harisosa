import React from "react";
import type { Movie } from "../../../lib/types/movie";
import { MovieItem } from "./MovieItem";

type MovieItemListProps = {
  items: Movie[];
  getPosterUrl: (m: Movie) => string;

  onWatchTrailer: (movieId: number) => void;
  onToggleFavorite: (movie: Movie) => void;
};

export const MovieItemList: React.FC<MovieItemListProps> = ({
  items,
  getPosterUrl,
  onWatchTrailer,
  onToggleFavorite,
}) => {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
      {items.map((m) => (
        <MovieItem
          key={m.id}
          posterUrl={getPosterUrl(m)}
          title={m.title}
          ratingText={`${(m.vote_average ?? 0).toFixed(1)}/10`}
          overview={m.overview ?? ""}
          isFavorite={m.isFavorite}
          onToggleFavorite={() => onToggleFavorite(m)}
          onWatchTrailer={() => onWatchTrailer(m.id)}
        />
      ))}
    </div>
  );
};
