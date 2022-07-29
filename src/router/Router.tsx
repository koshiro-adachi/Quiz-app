import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router: FC = memo(() => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </>
  );
});
