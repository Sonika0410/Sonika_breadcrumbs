import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import { useBreadcrumb } from "../hooks/useBreadcrumb";
import { Checkout } from "./Pricing/Checkout";
import { Plans } from "./Pricing/Plans";

export const Pricing = () => {
  useBreadcrumb({
    to: "/pricing",
    text: "Sign up"
  });

  return (
    <>
      <h1>Sign Up</h1>
      <p></p>

      <Switch>
        <Route path="/pricing/checkout" component={Checkout} />
        <Route exact path="/pricing" component={Plans} />
      </Switch>
    </>
  );
};
