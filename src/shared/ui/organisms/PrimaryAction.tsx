import React from "react";
import { FavoriteToggleButton } from "../molecules/FavoriteToggleButton";
import { TrailerButton } from "../molecules/TrailerButton";


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
          <TrailerButton onClick={onWatchTrailer}/>
        )
      }

    <FavoriteToggleButton onToggle={onToggleFavorite} isFavorite={isFavorite}/>
    </div>
  );
};
