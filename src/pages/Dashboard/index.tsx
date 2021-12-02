import { useAuth } from "../../hooks/useAuth";

export function Dashboard() {
  const { auth } = useAuth();

  return <h1>Dashboard, {auth.user} eu</h1>;
}
