// src/providers/AuthProvider.tsx
import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { http } from "../lib/axios/http";
import { movieQueryKeys } from "../lib/queries/queryKeys";
import { AuthContext, type AuthContextValue } from "./AuthContext";


type Account = {
  id: number;
  username: string;
  name?: string;
};




export function AuthProvider({ children }: { children: React.ReactNode }) {
  const q = useQuery({
    queryKey: movieQueryKeys.account.all,
    queryFn: async () => {
      const res = await http.get<Account>("/account");
      return res.data;
    },
    staleTime: 30 * 60_000,
    gcTime: 6 * 60 * 60_000,
  });

  const value = useMemo<AuthContextValue>(() => {
    return {
      accountId: q.data?.id,
      account: q.data,
      isLoading: q.isLoading,
      isError: q.isError,
    };
  }, [q.data, q.isLoading, q.isError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
