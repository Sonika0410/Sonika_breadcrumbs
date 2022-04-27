import React from "react";
import { useBreadcrumb } from "../hooks/useBreadcrumb";

export const Features = () => {
  useBreadcrumb({
    to: "/features",
    text: "Features"
  });

  return (
    <>
      <h1>Features</h1>
    </>
  );
};
