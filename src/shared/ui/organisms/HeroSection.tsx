import { useEffect, useMemo, useState } from "react";
import type { Movie } from "../../../lib/types/movie";
import { getImageUrl } from "../../../lib/api/getImage";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

type Props = {
  movies: Movie[];
  intervalMs?: number; // default 20s
  onWatchTrailer?: () => void;
  onSeeDetail?: () => void;
};

export const HeroSection: React.FC<Props> = ({
  movies,
  intervalMs = 20_000,
  onWatchTrailer,
  onSeeDetail,
}) => {
  const items = useMemo(() => {
    return movies
      .filter((m) => !!m.backdrop_path || !!m.poster_path)
      .map((m) => {
        const imgPath = m.backdrop_path ?? m.poster_path!;
        return { ...m, heroUrl: getImageUrl(imgPath) };
      });
  }, [movies]);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [items.length, intervalMs]);

  useEffect(() => {
    if (items.length <= 1) return;
    const nextUrl = items[(idx + 1) % items.length]?.heroUrl;
    if (!nextUrl) return;
    const img = new Image();
    img.src = nextUrl;
  }, [idx, items]);

  const current = items[idx];
  if (!current) return null;

  return (
    <section
      className="
        relative w-full overflow-hidden
        rounded-none
        h-160 md:h-200
      "
    >
      <img
        src={current.heroUrl}
        alt={current.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* overlays */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/85 via-black/35 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

      {/* MOBILE: bottom content | DESKTOP: top-left content */}
      <div
        className="
          relative z-10 flex h-full
          items-end md:items-start
          px-6 md:px-0
          pb-10 md:pb-0
          pt-0 md:pt-74.5
          md:ps-35
        "
      >
        {/* enable clicks even if you later add pointer-events-none wrapper */}
        <div className="pointer-events-auto w-full md:w-auto">
          <div className="max-w-xl">
            <h1
              className="
                font-bold tracking-tight text-(--text-primary)
                text-3xl md:text-2xl
              "
            >
              {current.title}
            </h1>

            <p
              className="
                mt-4 text-(--text-secondary)
                text-base md:text-md
                leading-6
                line-clamp-4 md:line-clamp-none
              "
            >
              {current.overview}
            </p>

            {/* BUTTONS: mobile stack full-width, desktop inline fixed width */}
            <div
              className="
                mt-8 flex w-full
                flex-col gap-3
                md:w-auto md:flex-row md:items-center md:gap-4
              "
            >
              <Button
                variant="primary"
                onClick={onWatchTrailer}
                className="
                  h-13 w-full rounded-full text-md
                  md:w-57.5 md:rounded-full
                "
              >
                Watch Trailer
                <span className="ml-2 grid h-6 w-6 place-items-center rounded-full bg-(--color-primary)">
                  <Icon name="play" className="h-6 w-6 text-(--button-primary)" />
                </span>
              </Button>

              <Button
                variant="ghost"
                onClick={onSeeDetail}
                className="
                  h-13 w-full rounded-full
                  md:w-57.5 md:rounded-full
                "
              >
                See Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
