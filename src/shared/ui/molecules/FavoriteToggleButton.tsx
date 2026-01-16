import React from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

export const FavoriteToggleButton: React.FC<{
  isFavorite: boolean;
  onToggle?: () => void;
}> = ({ isFavorite, onToggle }) => {
  return (
    <Button
      variant="custom"
      onClick={onToggle}
      className="h-11 w-11 rounded-full border border-white/10 bg-black/35"
      aria-label="Toggle favorite"
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Icon
        name="fav"
        className={`${isFavorite ? "text-red-500 fill-current" : "text-white/60"} w-5`}
      />
    </Button>
  );
};
