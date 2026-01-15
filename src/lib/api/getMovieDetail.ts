import { http } from "../axios/http";
import type { MovieDetail } from "../types/movieDetail";

export async function getMovieDetail(movieId: number): Promise<MovieDetail> {
  const res = await http.get<MovieDetail>(`/movie/${movieId}`);
  return res.data;
}