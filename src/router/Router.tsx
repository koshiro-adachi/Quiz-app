import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";

import { questionRoutes } from "./questionRoutes";

export const Router: FC = memo(() => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/question"
          render={({ match: { url } }) => (
            <Switch>
              {questionRoutes.map((route) => (
                <Route path={`${url}${route.path}`} exact={route.exact}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </>
  );
});
