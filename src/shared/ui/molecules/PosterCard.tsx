import React from "react";

type PosterCardProps = {
  src: string;
  alt: string;
};

export const PosterCard: React.FC<PosterCardProps> = ({ src, alt }) => {
  return (
    <div className="lg:w-65 lg:h-87 w-29 h-42.75 overflow-hidden">
      <img className="block h-full w-full" src={src} alt={alt} loading="lazy" />
    </div>
  );
};
