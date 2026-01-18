import { Skeleton } from "../atoms/Skeleton";
import { MoviePosterCardSkeleton } from "../molecules/MoviePosterCardSkeleton";

type Props = {
  title: string;
  count?: number;
  showRank?: boolean;
  showLoadMore?: boolean;
};

export const TopRatingSectionSkeleton: React.FC<Props> = ({
  title,
  count = 10,
  showRank = false,
  showLoadMore = false,
}) => {
  return (
    <section className="px-10 lg:px-35">
      <h2 className="mb-6 text-4xl font-extrabold text-white">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: count }).map((_, i) => (
          <MoviePosterCardSkeleton key={i} showRank={showRank} />
        ))}
      </div>

      {showLoadMore && (
        <div className="mt-10 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/5 px-10 py-3">
            <Skeleton className="h-5 w-24 rounded-md bg-white/10" />
          </div>
        </div>
      )}
    </section>
  );
};
