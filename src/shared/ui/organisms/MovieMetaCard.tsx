import React from "react";
import { MetaCard } from "../molecules/MetaCard";

type Props = {
  ratingText: string;
  genreText: string;
  ageLimitText: string;
};

export const MovieMetaCards: React.FC<Props> = ({ ratingText, genreText, ageLimitText }) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-3.5">
      <MetaCard iconName="star" label="Rating" value={ratingText} iconClassName="text-yellow-400" />
      <MetaCard iconName="video" label="Genre" value={genreText} />
      <MetaCard iconName="face" label="Age limit" value={ageLimitText} />
    </div>
  );
};
