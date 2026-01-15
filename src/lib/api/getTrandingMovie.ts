
import { http } from "../axios/http";
import type { Movie } from "../types/movie";
import type { ListResponse } from "../types/response";

export async function getTrandingMovie(): Promise<ListResponse<Movie>> {
  const res = await http.get<ListResponse<Movie>>(`trending/movie/week`);
  return res.data;
}