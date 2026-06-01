import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";
import { type ThemeOverride } from "../tokens";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  overrides?: ThemeOverride;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  overrides,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!overrides) return;
    const root = document.documentElement;
    const map: Record<keyof ThemeOverride, string> = {
      primary: "--color-primary",
      primaryHover: "--color-primary-hover",
      secondary: "--color-secondary",
      secondaryHover: "--color-secondary-hover",
      danger: "--color-danger",
      bg: "--color-bg",
      surface: "--color-surface",
      border: "--color-border",
      textPrimary: "--color-text-primary",
      textSecondary: "--color-text-secondary",
    };
    Object.entries(overrides).forEach(([key, value]) => {
      const cssVar = map[key as keyof ThemeOverride];
      if (cssVar && value) root.style.setProperty(cssVar, value);
    });
  }, [overrides]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
