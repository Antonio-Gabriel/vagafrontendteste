import { ComponentType } from "react";
import { useAuth } from "../hooks/useAuth";

import { Redirect, Route, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  isPrivate?: Boolean;
  component: ComponentType;
}

export function Router({
  isPrivate = false,
  component: Component,
  ...rest
}: IProps) {
  const { auth } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === (auth !== undefined) ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
