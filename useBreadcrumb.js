import { useContext, useRef } from "react";
import { BreadcrumbContext } from "../providers/BreadcrumbProvider";
import { useImmediateEffect } from "./useImmediateEffect";
import { useWillUnmount } from "./useWillUnmount";

export const useBreadcrumb = (item) => {
  const itemRef = useRef(item);
  const { addItem, removeItem } = useContext(BreadcrumbContext);

  useImmediateEffect(() => {
    addItem(itemRef.current);
  }, []);

  useWillUnmount(() => {
    removeItem(itemRef.current);
  });
};
