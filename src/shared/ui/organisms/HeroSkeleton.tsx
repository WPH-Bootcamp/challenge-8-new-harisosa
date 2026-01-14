import { Skeleton } from "../atoms/Skeleton";

export const HeroSkeleton: React.FC = () => {
  return (
    <section className="relative px-10 pt-10">
      {/* Background / Poster besar */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-white/5">
        <Skeleton className="absolute inset-0" />

        {/* Gradient overlay (biar kelihatan cinematic seperti hero kamu) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content (judul, deskripsi, tombol) */}
      <div className="relative -mt-40 max-w-2xl">
        {/* Title */}
        <Skeleton className="h-10 w-3/4 rounded-md" />

        {/* Description lines */}
        <Skeleton className="mt-4 h-4 w-full rounded-md" />
        <Skeleton className="mt-2 h-4 w-5/6 rounded-md" />
        <Skeleton className="mt-2 h-4 w-2/3 rounded-md" />

        {/* Action buttons */}
        <div className="mt-6 flex gap-4">
          <Skeleton className="h-12 w-36 rounded-full bg-white/10" />
          <Skeleton className="h-12 w-44 rounded-full bg-white/10" />
        </div>
      </div>
    </section>
  );
};
