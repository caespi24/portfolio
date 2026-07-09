import { useCallback, useEffect, useState } from "react";

/*
 * The inline script in index.html applies the initial class before first
 * paint (stored choice, else system preference). This hook reads that state,
 * keeps <html> in sync, and only persists to localStorage on an explicit
 * toggle so untouched visitors keep following their OS preference.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme")) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theming");
    window.setTimeout(() => root.classList.remove("theming"), 400);
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
