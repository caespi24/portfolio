import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/*
 * Runs a GSAP setup function scoped to the returned ref. Selector strings
 * inside `fn` only match descendants of the scope element, and everything is
 * reverted on unmount (StrictMode-safe). Skipped entirely for users who
 * prefer reduced motion — elements then simply render in their final state.
 */
export function useGsap(fn) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const ctx = gsap.context(fn, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scope;
}
