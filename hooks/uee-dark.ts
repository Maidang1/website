import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const handleThemeChange = ({ matches }: { matches: boolean }) => {
    if (matches) {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const { matches } = matchMedia;
    handleThemeChange({ matches });
    matchMedia.addEventListener("change", handleThemeChange);
    return () => matchMedia.removeEventListener("change", handleThemeChange);
  }, []);
};
