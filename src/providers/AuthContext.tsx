import { createContext } from "react";
import type { Account } from "../lib/types/account";

export type AuthContextValue = {
  accountId?: number;
  account?: Account;
  isLoading: boolean;
  isError: boolean;
};

export const AuthContext = createContext<AuthContextValue | null>(null);