import React from "react";
import { FavoriteMovie } from "./FavoriteMovie";
import type { FavoriteMovieItem } from "../../../lib/types/favorite";

type FavoritesListProps = {
  items: FavoriteMovieItem[];
  getPosterUrl: (m: FavoriteMovieItem) => string;

  onWatchTrailer: (movieId: number) => void;
  onToggleFavorite: (movieId: number) => void;
};

export const FavoritesList: React.FC<FavoritesListProps> = ({
  items,
  getPosterUrl,
  onWatchTrailer,
  onToggleFavorite,
}) => {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
      {items.map((m) => (
        <FavoriteMovie
          key={m.id}
          posterUrl={getPosterUrl(m)}
          title={m.title}
          ratingText={`${(m.vote_average ?? 0).toFixed(1)}/10`}
          overview={m.overview ?? ""}
          isFavorite={true}
          onToggleFavorite={() => onToggleFavorite(m.id)}
          onWatchTrailer={() => onWatchTrailer(m.id)}
        />
      ))}
    </div>
  );
};
