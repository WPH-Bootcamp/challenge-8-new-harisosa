  import { http } from "../axios/http";
  import type { SetFavoriteBody, SetFavoriteResponse } from "../types/favorite";
  
  
  export const setFavorite = (params: { accountId: number; body: SetFavoriteBody }) => {
    const { accountId, body } = params;
    return http.post<SetFavoriteResponse>(
      `/account/${accountId}/favorite`,
      body
    );
  }