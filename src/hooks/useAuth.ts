import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}
