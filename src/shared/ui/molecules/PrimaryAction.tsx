import React from "react";
import { Button } from "../../ui/atoms/Button";
import { Icon } from "../../ui/atoms/Icon";


type PrimaryActionsProps = {
  trailer?: string | null | undefined,
  onWatchTrailer?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
};

export const PrimaryActions: React.FC<PrimaryActionsProps> = ({
  trailer,
  onWatchTrailer,
  isFavorite = false,
  onToggleFavorite,
}) => {
  return (
    <div className="mt-3 flex items-center gap-3">
      {
        trailer && (
              <Button
                variant="primary"
                onClick={onWatchTrailer}
                className="
                  h-13 w-full rounded-full text-md
                  md:w-57.5 md:rounded-full
                "
              >
                Watch Trailer
                <span className="ml-2 grid h-6 w-6 place-items-center rounded-full bg-(--color-primary)">
                  <Icon name="play" className="h-6 w-6 text-(--button-primary)" />
                </span>
              </Button>
        )
      }

      <Button
        variant="custom"
        onClick={onToggleFavorite}
        className="h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-black/35"
        aria-label="Toggle favorite"
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Icon name="fav" className={`${isFavorite ? "text-red-500 fill-current" : "text-gray-400"} w-5`}/>
      </Button>
    </div>
  );
};
