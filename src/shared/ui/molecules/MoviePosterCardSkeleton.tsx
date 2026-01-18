import { Skeleton } from "../atoms/Skeleton";

type Props = {
  showRank?: boolean;
};

export const MoviePosterCardSkeleton: React.FC<Props> = ({ showRank }) => {
  return (
    <div className="w-54 h-78 shrink-0">
      <div className="w-full text-left">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <Skeleton className="h-72.5 w-full rounded-2xl" />
          </div>

          {showRank && (
            <div className="absolute left-3 top-3">
              <Skeleton className="h-8 w-10 rounded-xl" />
            </div>
          )}
        </div>

        <div className="mt-4">
          <Skeleton className="h-5 w-40 rounded-md" />
          <div className="mt-2 flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-14 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
