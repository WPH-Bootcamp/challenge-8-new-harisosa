import React from "react";
import { Icon } from "../atoms/Icon";
import { PosterCard } from "../molecules/PosterCard";
import { PrimaryActions } from "../molecules/PrimaryAction";
import { MovieMetaCards } from "./MovieMetaCard";


type MovieHeroProps = {
  backdropUrl: string;
  posterUrl: string;
  title: string;
  releaseDateText: string;

  ratingText: string;
  genreText: string;
  ageLimitText: string;

  onWatchTrailer?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  trailer: string | undefined | null;
};

export const MovieHero: React.FC<MovieHeroProps> = ({
  backdropUrl,
  posterUrl,
  title,
  releaseDateText,
  ratingText,
  genreText,
  ageLimitText,
  onWatchTrailer,
  isFavorite,
  onToggleFavorite,
  trailer,
}) => {
  return (
    <section className="relative overflow-hidden rounded-[18px]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_40%,rgba(0,0,0,0.25),rgba(0,0,0,0.85))]" />

      {/* Content */}
      <div className="pt-103 relative z-1 flex min-h-130 gap-7 px-35 max-[980px]:grid-cols-1  pb-3">
        <div className="max-[980px]:flex max-[980px]:justify-start">
          <PosterCard src={posterUrl} alt={title} />
        </div>

        <div>
          <h1 className="m-0 text-4xl font-extrabold leading-[1.05] text-white">
            {title}
          </h1>

          <div className="mt-2 w-full inline-flex items-center gap-2 text-white/80">
            <Icon name="calendar" className="w-6" />
            <span className="text-lg">{releaseDateText}</span>
          </div>

          <PrimaryActions
          trailer={trailer}
            onWatchTrailer={onWatchTrailer}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />

          <MovieMetaCards
            ratingText={ratingText}
            genreText={genreText}
            ageLimitText={ageLimitText}
          />
        </div>
      </div>
    </section>
  );
};
