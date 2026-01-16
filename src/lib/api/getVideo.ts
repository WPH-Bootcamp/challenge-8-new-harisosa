import { http } from "../axios/http";
import type { VideosResponse } from "../types/video";

export async function getVideo(movieId: number): Promise<VideosResponse> {
  const res = await http.get<VideosResponse>(`/movie/${movieId}/videos`);
  return res.data;
}