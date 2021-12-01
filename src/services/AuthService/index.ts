import { IAuthentication } from "../../types/IAuthentication";

export function AuthService(data: IAuthentication) {
  if (data.username === "Admin" && data.password === "admin") {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user: data.username,
        created_at: new Date(Date.now()),
      })
    );

    return true;
  }

  return false;
}
