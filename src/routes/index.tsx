import { Switch } from "react-router-dom";
import { Router } from "./Route";

import { Auth } from "../pages/Auth";
import { Dashboard as DashComponent } from "../pages/Dashboard";

type IRouteProps = {
  toggleTheme: () => void;
};

export function Routes({ toggleTheme }: IRouteProps) {
  function Login() {
    return <Auth toggleTheme={toggleTheme} />;
  }

  function Dashboard() {
    return <DashComponent toggleTheme={toggleTheme} />;
  }

  return (
    <Switch>
      <Router path="/" exact component={Login} />
      <Router path="/login" exact component={Login} />
      <Router path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
}
