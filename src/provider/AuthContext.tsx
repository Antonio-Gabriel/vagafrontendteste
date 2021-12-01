import { createContext, ReactNode, useState } from "react";
import { AuthService } from "../services/AuthService";
import { IAuthentication } from "../types/IAuthentication";

interface IAuthContextState {
  auth: IAuthentication;
  signInUser(data: IAuthentication): boolean;
  signOut(): void;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextState);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const [data, setData] = useState(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      return { auth: JSON.parse(auth) };
    }

    return {};
  });

  function signInUser(data: IAuthentication) {
    const response = AuthService(data);

    const auth = JSON.parse(localStorage.getItem("auth") || "{}");

    if (response) {
      setData({
        auth,
      });

      return true;
    }    

    return false;
  }

  function signOut() {
    localStorage.removeItem("auth");
    localStorage.removeItem("auth");

    setData({});
  }

  return (
    <AuthContext.Provider value={{ signInUser, auth: data.auth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
