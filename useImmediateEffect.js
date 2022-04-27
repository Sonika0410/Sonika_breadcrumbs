import { useRef } from "react";
import { compareArrays } from "../helpers/compareArrays";

export const useImmediateEffect = (effectFn, deps) => {
  const previousDeps = useRef();

  if (
    typeof deps === "undefined" ||
    !previousDeps.current ||
    !compareArrays(previousDeps.current, deps)
  ) {
    effectFn();
    previousDeps.current = deps;
  }
};
