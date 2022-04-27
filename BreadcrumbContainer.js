import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { BreadcrumbItem } from "../components/BreadcrumbItem";
import { useBreadcrumbItems } from "../hooks/useBreadcrumbItems";

export const BreadcrumbContainer = () => {
  const items = useBreadcrumbItems();

  return (
    <Breadcrumb>
      {items.map((item) => (
        <BreadcrumbItem key={item.to} linkProps={{ to: item.to }}>
          {item.text}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
