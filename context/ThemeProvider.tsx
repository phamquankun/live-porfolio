import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeState {
  currentTheme: THEME;
  toggleTheme: (theme: THEME) => void;
}

export enum THEME {
  light = "light",
  dark = "dark",
}

interface ThemeProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeState>({
  currentTheme: THEME.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<THEME>(THEME.light);
  useEffect(() => {
    if (typeof window !== undefined) {
      setCurrentTheme(localStorage.getItem("theme") as THEME);
      document.body.classList.add(localStorage.getItem("theme") as THEME);
    }
  }, []);
  const toggleTheme = (theme: THEME) => {
    document.body.classList.remove(currentTheme);
    document.body.classList.add(theme);
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
