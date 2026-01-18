
import { getImageUrl } from "../../../lib/api/getImage";
import type { Movie } from "../../../lib/types/movie";
import { RankBadge } from "../atoms/RankBadge";
import { Rating } from "../atoms/Rating";

type MoviePosterCardProps = {
  movie: Movie;
  rank?: number; // 1-based
  onClick?: (movie: Movie) => void;
};

export const MoviePosterCard: React.FC<MoviePosterCardProps> = ({ movie, rank, onClick }) => {
  return (
    <div className={`w-54 min-h-78 shrink-0`} >
      <button
        type="button"
        onClick={() => onClick && onClick(movie)}
        className="group w-full text-left"
      >
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
              <img
                src={getImageUrl(movie.poster_path ?? '')}
                alt={movie.title}
                className="h-72.5 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
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
