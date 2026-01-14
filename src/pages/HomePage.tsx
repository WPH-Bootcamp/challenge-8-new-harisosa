
import { useGetPopularMovies } from "../lib/hook/useGetPolularMovies";
import { useGetTopRatedMovies } from "../lib/hook/useGetTopRatedMovies";
import { HeroSection } from "../shared/ui/organisms/HeroSection";
import { TrendingSection } from "../shared/ui/organisms/TrandingSection";

export const HomePage = () => {
  const {
    data: popularData,
    isLoading: isPopularLoading,
    isError: isPopularError,
  } = useGetPopularMovies(1);

  const {
    data: topRatedData,
    isLoading: isTopRatedLoading,
    isError: isTopRatedError,
  } = useGetTopRatedMovies({ page: 1 });

  const isLoading = isPopularLoading || isTopRatedLoading;
  const isError = isPopularError || isTopRatedError;

  if (isLoading) return <div className="text-white px-10">Loading...</div>;
  if (isError) return <div className="text-white px-10">Error</div>;
  return (

    <div className="mx-auto">

      {popularData && (
        <HeroSection movies={popularData?.results ?? []} intervalMs={20_000} />
      )}

      {topRatedData && (
        <TrendingSection title="Top Rated" movies={topRatedData.results} />
      )}
    </div>
  );
};
