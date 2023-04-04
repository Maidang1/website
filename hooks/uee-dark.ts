import { useEffect } from "react";
import { atom, useSetAtom } from "jotai";

export const themeAtom = atom(false);

export const useDarkMode = () => {
  const setTheme = useSetAtom(themeAtom);
  const handleThemeChange = ({ matches }: { matches: boolean }) => {
    setTheme(matches);
    if (matches) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      return;
    }
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
  };
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const { matches } = matchMedia;
    handleThemeChange({ matches });
    matchMedia.addEventListener("change", handleThemeChange);
    return () => matchMedia.removeEventListener("change", handleThemeChange);
  }, []);
};
