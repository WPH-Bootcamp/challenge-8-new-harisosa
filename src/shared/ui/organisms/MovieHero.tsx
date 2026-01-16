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
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_40%,rgba(0,0,0,0.25),rgba(0,0,0,0.85))]" />
      <div
        className="
    relative z-10
    px-4 sm:px-6 md:px-10
    pb-4
    pt-[clamp(2.5rem,10vh,6.5rem)]
  "
      >
        <div
          className="
      grid gap-x-6 gap-y-4
      grid-cols-[auto_1fr]
      md:grid-cols-[clamp(10rem,18vw,16rem)_minmax(0,1fr)]
      md:items-start
    "
        >
          <div className="md:row-span-3">
            <PosterCard src={posterUrl} alt={title} />
          </div>

          <div className="min-w-0">
            <h1 className="m-0 lg:text-2xl text-lg font-extrabold leading-[1.05] text-white">
              {title}
            </h1>

            <div className="mt-2 inline-flex items-center gap-2 text-white/80">
              <Icon name="calendar" className="w-6" />
              <span className="text-[clamp(0.95rem,1.6vw,1.125rem)]">
                {releaseDateText}
              </span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <PrimaryActions
              trailer={trailer}
              onWatchTrailer={onWatchTrailer}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <MovieMetaCards
              ratingText={ratingText}
              genreText={genreText}
              ageLimitText={ageLimitText}
            />
          </div>
        </div>
      </div>


    </section>
  );
};
