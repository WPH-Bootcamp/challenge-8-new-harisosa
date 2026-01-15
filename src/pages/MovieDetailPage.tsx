import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../lib/hook/useGetMovieDetail";
import { useMovieCredits } from "../lib/hook/useGetMovieCredit";
import { getImageUrl } from "../lib/api/getImage";
import { MovieHero } from "../shared/ui/organisms/MovieHero";
import { Divider } from "../shared/ui/atoms/Devider";
import { CastCrewSection } from "../shared/ui/organisms/CastCrew";
import { useMovieTrailer } from "../lib/hook/useGetMovieTrailer";
import { useAuth } from "../lib/hook/useAuth";
import { useFavoriteIds } from "../lib/hook/useGetFavoriteById";
import { useToggleFavorite } from "../lib/hook/useToogleFavorite";

function formatDateId(dateStr: string) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}

export const MovieDetailPage: React.FC = () => {
  const params = useParams();
  const { accountId } = useAuth();
  const movieId = Number(params.movieId);

  const detailQ = useMovieDetail(movieId);
  const creditsQ = useMovieCredits(movieId);
  const trailer = useMovieTrailer(movieId);
  const { favoriteIds } = useFavoriteIds(accountId ?? 0);
  const toggleFav = useToggleFavorite();

  const isLoading = detailQ.isLoading || creditsQ.isLoading || trailer.isLoading;
  const isError = detailQ.isError || creditsQ.isError || trailer.isError;

  const view = useMemo(() => {
    const detail = detailQ.data;
    const credits = creditsQ.data;
    const trailerUrl = trailer.data;
    if (!detail || !credits) return null;

    const genreText = detail.genres?.[0]?.name ?? "-";
    const ratingText = `${detail.vote_average.toFixed(1)}/10`;
    const ageLimitText = detail.adult ? "18+" : "13";
    const isFavorite = favoriteIds.includes(movieId);

    const hero = {
      backdropUrl: getImageUrl(detail.backdrop_path ?? ''),
      posterUrl: getImageUrl(detail.poster_path ?? ''),
      title: detail.title,
      releaseDateText: formatDateId(detail.release_date),
      ratingText,
      genreText,
      ageLimitText,
      onWatchTrailer: () => trailerUrl && window.open(trailerUrl, "_blank"),
      onToggleFavorite: () => toggleFav.mutate({ movieId: movieId, nextFavorite: !isFavorite }),
      trailer: trailerUrl,
      isFavorite
    };

    const people = credits.cast.slice(0, 20).map((c) => ({
      id: c.credit_id,
      name: c.name,
      role: c.character,
      photoUrl: c.profile_path ? getImageUrl(c.profile_path) : undefined,
    }));

    return {
      hero,
      overview: detail.overview ?? "",
      people,
    };
  }, [detailQ.data, creditsQ.data, movieId, trailer.data,favoriteIds, toggleFav]);

  if (!Number.isFinite(movieId) || movieId <= 0) {
    return <div className="p-6 text-white/80">Invalid movie id</div>;
  }

  if (isLoading) return <div className="p-6 text-white/80">Loading...</div>;
  if (isError) return <div className="p-6 text-white/80">Failed to load</div>;
  if (!view) return <div className="p-6 text-white/80">No data</div>;

  return (
    <>
      <MovieHero {...view.hero} />

      <div className="pb-2 pt-7 px-35">
        <section>
          <h2 className="m-0 text-4xl font-bold text-white">Overview</h2>
          <p className="mt-2 text-lg max-w-245 leading-[1.6] text-white/75">{view.overview}</p>
        </section>

        <div className="my-6">
          <Divider />
        </div>

        <CastCrewSection people={view.people} />
      </div>
    </>
  )
};
