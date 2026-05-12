"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_THEME, STORAGE_KEY, THEMES, type ThemeId } from "@/lib/themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const isValidTheme = (id: string | null): id is ThemeId =>
  !!id && THEMES.some((t) => t.id === id);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  // Hydrate from localStorage on first client render.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isValidTheme(stored)) setThemeState(stored);
  }, []);

  // Apply to <html data-theme> so CSS picks up the active palette.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setTheme = (id: ThemeId) => {
    setThemeState(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore — private browsing, etc. */
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider />");
  return ctx;
}
