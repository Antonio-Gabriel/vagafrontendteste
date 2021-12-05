import { createContext, ReactNode, useState } from "react";
import { AuthService } from "../services/AuthService";
import { IAuthentication } from "../types/IAuthentication";
import { IRequestCardProps } from "../types/ICardProps";

type IUser = {
  user: string;
  created_at: Date;
};

interface IAuthContextState {
  auth: IUser;
  item: IRequestCardProps;
  setItem: (item: IRequestCardProps) => void;
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

  const [item, setItem] = useState<IRequestCardProps>({} as IRequestCardProps);  

  function signInUser(data: IAuthentication) {
    const response = AuthService(data);

    const { user, created_at } = JSON.parse(
      localStorage.getItem("auth") || "{}"
    );

    if (response) {
      setData({
        auth: {
          user,
          created_at,
        },
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
    <AuthContext.Provider
      value={{ signInUser, auth: data.auth, signOut, item, setItem }}
    >
      {children}
    </AuthContext.Provider>
  );
}
