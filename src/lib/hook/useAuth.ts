// src/features/auth/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";


export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
