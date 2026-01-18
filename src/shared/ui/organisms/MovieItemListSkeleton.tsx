import React from "react";
import { MovieItemSkeleton } from "../molecules/MovieItemSkeleton";


type MovieListSkeletonProps = {
  count?: number;
  className?: string;
};

export const MovieListSkeleton: React.FC<MovieListSkeletonProps> = ({
  count = 6,
  className,
}) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <MovieItemSkeleton key={i} />
      ))}
    </div>
  );
};
