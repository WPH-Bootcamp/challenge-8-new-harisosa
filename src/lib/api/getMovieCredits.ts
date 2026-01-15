import { http } from "../axios/http";
import type { CreditsResponse } from "../types/credit";

export async function getMovieCredits(movieId: number): Promise<CreditsResponse> {
  const res = await http.get<CreditsResponse>(`/movie/${movieId}/credits`);
  return res.data;
}