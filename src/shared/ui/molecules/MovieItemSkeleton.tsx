import React from "react";

export const MovieItemSkeleton: React.FC = () => {
  return (
    <div className="py-6 animate-pulse">
      {/* Row utama */}
      <div className="flex items-start gap-4 sm:gap-6">
        {/* Poster */}
        <div className="shrink-0 w-26 sm:w-35">
          <div className="aspect-2/3 w-full rounded-lg bg-white/10" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-2">
              {/* Title */}
              <div className="h-5 w-40 sm:w-56 rounded bg-white/15" />
              {/* Rating */}
              <div className="h-4 w-24 rounded bg-white/10" />
            </div>

            {/* Favorite button (desktop) */}
            <div className="hidden sm:block shrink-0">
              <div className="h-10 w-10 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Overview */}
          <div className="mt-3 space-y-2">
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
          </div>

          {/* Trailer button (desktop) */}
          <div className="hidden sm:block mt-4">
            <div className="h-10 w-36 rounded-full bg-white/15" />
          </div>
        </div>
      </div>

      {/* Mobile actions */}
      <div className="mt-4 flex items-center gap-3 sm:hidden">
        <div className="min-w-0 flex-1">
          <div className="h-10 w-full rounded-full bg-white/15" />
        </div>

        <div className="shrink-0">
          <div className="h-10 w-10 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-white/10" />
    </div>
  );
};
