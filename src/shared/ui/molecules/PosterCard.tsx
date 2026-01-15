import React from "react";

type Props = {
  src: string;
  alt: string;
};

export const PosterCard: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="w-65 h-87 overflow-hidden">
      <img className="block h-auto w-full" src={src} alt={alt} loading="lazy" />
    </div>
  );
};
