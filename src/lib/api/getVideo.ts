import { http } from "../axios/http";
import type { VideosResponse } from "../types/video";

export const getVideo = async (movieId: number): Promise<VideosResponse> =>  {
  const res = await http.get<VideosResponse>(`/movie/${movieId}/videos`);
  return res.data;
}