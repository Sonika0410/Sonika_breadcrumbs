import React from "react";
import { Route, Switch } from "react-router-dom";
import { Features } from "./pages/Features";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/features" component={Features} />
      <Route path={["/pricing", "/pricing/checkout"]} component={Pricing} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
