import React from "react";
import { PosterCard } from "../molecules/PosterCard";
import { FavoriteToggleButton } from "../molecules/FavoriteToggleButton";
import { TrailerButton } from "../molecules/TrailerButton";
import { RatingInline } from "../molecules/RatingInline";

type FavoriteMovieProps = {
  posterUrl: string;
  title: string;
  ratingText: string;
  overview: string;

  isFavorite: boolean;
  onToggleFavorite?: () => void;
  onWatchTrailer?: () => void;
  disableTrailer?: boolean;
};

export const FavoriteMovie: React.FC<FavoriteMovieProps> = ({
  posterUrl,
  title,
  ratingText,
  overview,
  isFavorite,
  onToggleFavorite,
  onWatchTrailer,
  disableTrailer,
}) => {
  return (
    <div className="py-6">
      {/* Row utama */}
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="shrink-0 w-26 sm:w-35">
          <PosterCard src={posterUrl} alt={title} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base sm:text-lg font-extrabold text-white">
                {title}
              </h3>
              <RatingInline text={ratingText} />
            </div>

            <div className="hidden sm:block shrink-0">
              <FavoriteToggleButton
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
              />
            </div>
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-white/60">
            {overview}
          </p>

          <div className="hidden sm:block mt-4">
            <TrailerButton onClick={onWatchTrailer} disabled={disableTrailer} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 sm:hidden">
        <div className="min-w-0 flex-1">
          <TrailerButton
            onClick={onWatchTrailer}
            disabled={disableTrailer}
            className="w-full"
          />
        </div>

        <div className="shrink-0">
          <FavoriteToggleButton
            isFavorite={isFavorite}
            onToggle={onToggleFavorite}
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-white/10" />
    </div>
  );
};
