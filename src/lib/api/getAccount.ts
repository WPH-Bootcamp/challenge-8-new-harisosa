import { http } from "../axios/http";
import type { Account } from "../types/account";

export const getAccount = async () => {
     const res = await http.get<Account>("/account");
      return res.data;
}