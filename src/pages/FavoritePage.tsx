import React, { useState } from "react";
import { useFavoriteMovies } from "../lib/hook/useGetFavoritesMovie";
import { useAuth } from "../lib/hook/useAuth";
import { useToggleFavorite } from "../lib/hook/useToogleFavorite";
import { useMovieTrailer } from "../lib/hook/useGetMovieTrailer";
import { MovieItemList } from "../shared/ui/organisms/MovieItemList";
import { TrailerModal } from "../shared/ui/organisms/TrailerModel";
import { getImageUrl } from "../lib/api/getImage";
import { EmptyState } from "../shared/ui/molecules/EmptyState";
import { useNavigate } from "react-router-dom";
import type { Movie } from "../lib/types/movie";
import { MovieListSkeleton } from "../shared/ui/organisms/MovieItemListSkeleton";

export const FavoritesPage: React.FC = () => {
    const navigate = useNavigate();
    const { accountId } = useAuth();
    const favQ = useFavoriteMovies(accountId ?? 0);
    const toggleFav = useToggleFavorite();

    const movies: Movie[] =
    favQ.data?.results.map((mov) => ({
        ...mov,
        isFavorite: true,
    })) ?? [];

    
    const [openTrailer, setOpenTrailer] = useState(false);
    const [trailerMovieId, setTrailerMovieId] = useState<number | null>(null);

    const trailerQ = useMovieTrailer(trailerMovieId ?? 0);

    const onWatchTrailer = (movieId: number) => {
        setTrailerMovieId(movieId);
        setOpenTrailer(true);
    };

    const onToggleFavorite = (movieId: number) => {
        toggleFav.mutate({ movieId, nextFavorite: false });
    };
    const onExplore =() => {
        navigate(`/`);
    }
    return (
        <div className="min-h-dvh lg:pt-38.5 lg:px-35 pt-16">
            <div className="w-full max-w-5xl px-4 py-6 sm:px-6 md:px-8">
                <h1 className="text-2xl font-extrabold text-white">Favorites</h1>
            </div>

            {favQ.isLoading ? (
                 <MovieListSkeleton count={10} />
            ) : favQ.isError ? (
                <div className="max-w-5xl px-4 sm:px-6 md:px-8 py-10 text-white/60">
                    Failed to load favorites.
                </div>
            ) : !favQ.data?.results.length ? (
                <EmptyState
                    icon={<img src="/not-found-favorite.svg" className="luminosity w-38.5 h-42.5" />}
                    title="Data Empty"
                    description="You don't have a favorite movie yet"
                    action={{ label: "Explore Movie", onClick: onExplore }}
                />
            ) : (
                <MovieItemList
                    items={movies}
                    getPosterUrl={(m) => getImageUrl(m.poster_path ?? '')}
                    onWatchTrailer={onWatchTrailer}
                    onToggleFavorite={(m: Movie) => {onToggleFavorite(m.id)}}
                />
            )}

            <TrailerModal
                open={openTrailer}
                onClose={() => setOpenTrailer(false)}
                videoId={trailerQ.data ?? null}
                isLoading={trailerQ.isLoading}
            />
        </div>
    );
};
