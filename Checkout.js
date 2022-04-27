import React from "react";
import { useBreadcrumb } from "../../hooks/useBreadcrumb";

export const Checkout = () => {
  useBreadcrumb({
    to: "/pricing/checkout",
    text: "Checkout"
  });

  return (
    <>
      <h1 className="text-center">Congratulations!</h1>
      <p className="text-center">Thank you for signing up</p>
    </>
  );
};
