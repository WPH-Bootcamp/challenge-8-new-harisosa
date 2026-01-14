
import { getImageUrl } from "../../../lib/api/getImage";
import type { Movie } from "../../../lib/types/movie";
import { RankBadge } from "../atoms/RankBadge";
import { Rating } from "../atoms/Rating";

type Props = {
  movie: Movie;
  rank?: number; // 1-based
  onClick?: (movie: Movie) => void;
};

export const MoviePosterCard: React.FC<Props> = ({ movie, rank, onClick }) => {
  const imgPath = movie.poster_path ?? movie.backdrop_path;
  const imgUrl = imgPath ? getImageUrl(imgPath) : "";

  return (
    <div className="w-54 h-78 shrink-0">
      <button
        type="button"
        onClick={() => onClick?.(movie)}
        className="group w-full text-left"
      >
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt={movie.title}
                className="h-72.5 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            ) : (
              <div className="h-72.5 w-full rounded-2xl bg-white/5" />
            )}
          </div>
            {
              rank && (<RankBadge value={rank} />)
            }
          
        </div>

        <h3 className="mt-4 line-clamp-1 text-lg font-semibold text-white">
          {movie.title}
        </h3>

        <Rating value={movie.vote_average} />
      </button>
    </div>
  );
};
