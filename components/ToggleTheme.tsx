import { THEME, ThemeContext } from "@/context";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface IToggleThemeProps {}
export const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export const ToggleTheme: React.FunctionComponent<IToggleThemeProps> = (
  props
) => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          currentTheme === THEME.light ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          toggleTheme(THEME.light);
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm dark:text-white" />
        <span className="relative z-10 text-sm font-semibold dark:text-white">
          Light
        </span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          currentTheme === THEME.dark ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          toggleTheme(THEME.dark);
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm dark:text-white" />
        <span className="relative z-10 text-sm font-semibold dark:text-white">
          Dark
        </span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          currentTheme === THEME.dark ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};
