import React from "react";

type PosterCardProps = {
  src: string;
  alt: string;
};

export const PosterCard: React.FC<PosterCardProps> = ({ src, alt }) => {
  return (
    <div className="w-full overflow-hidden">
      <img className="block h-full w-full" src={src} alt={alt} loading="lazy" />
    </div>
  );
};
