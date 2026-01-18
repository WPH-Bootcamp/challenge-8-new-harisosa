import { useMemo, useRef, useState, useEffect } from "react";
import { MoviePosterCard } from "../molecules/MoviePosterCard";
import type { Movie } from "../../../lib/types/movie";
import { Chip } from "../atoms/Chip";
import { Icon } from "../atoms/Icon";

type TopRatingProps = {
  title: string;
  movies: Movie[];
  maxItems?: number;
  onMovieClick?: (m: Movie) => void;
};

export const TopRatingSection: React.FC<TopRatingProps> = ({
  title,
  movies,
  maxItems = 10,
  onMovieClick,
}) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const items = useMemo(() => {
    return movies
      .filter((m) => !!m.poster_path || !!m.backdrop_path)
      .slice(0, maxItems);
  }, [movies, maxItems]);

  const updateScrollState = () => {
    const el = listRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollState();
  }, [items.length]);

  const scrollByCard = (dir: "left" | "right") => {
    const el = listRef.current;
    if (!el) return;
    const amount = 260;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="w-full px-10 py-10 lg:px-35">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2">
            <Chip onClick={() => scrollByCard("left")} aria-label="Previous">
              <Icon name='chevron-left' className="text-white"/>
            </Chip>
          </div>
        )}
        {canScrollRight && (
          <div className="absolute right-6 top-1/2 z-20 -translate-y-1/2">
            <Chip onClick={() => scrollByCard("right")} aria-label="Previous">
              <Icon name='chevron-right' className="text-white"/>
            </Chip>
          </div>
        )}

        <div
          ref={listRef}
          onScroll={updateScrollState}
          className="no-scrollbar flex gap-8 overflow-x-auto pb-4 pr-24 h-100"
        >
          {items.map((m, i) => (
            <MoviePosterCard
              key={m.id}
              movie={m}
              rank={i + 1}
              onClick={onMovieClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
