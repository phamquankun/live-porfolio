import { THEME, ThemeContext } from "@/context";
import * as React from "react";
import { forwardRef } from "react";

export const Drawer = forwardRef<HTMLDivElement, { onBlur: () => void }>(
  function Drawer(props, ref) {
    const { onBlur } = props;
    const { toggleTheme } = React.useContext(ThemeContext);

    return (
      <div
        className="w-3/4 fixed top-0 right-0 bottom-0 bg-white dark:bg-black overflow-y-auto z-50 p-4"
        tabIndex={0}
        ref={ref}
        onBlur={onBlur}
      >
        <div className="flex flex-col gap-4 text-center">
          {["My CV", "Contact", "About Me"].map((item, index) => (
            <span
              key={index}
              className="pb-2 border-b border-b-gray-200 block font-semibold text-gray-600 dark:text-white dark:hover:text-blue-800 cursor-pointer hover:text-blue-800 text-xl"
            >
              {item}
            </span>
          ))}
          <div className="pb-2 border-b border-b-gray-200 flex items-center gap-2 justify-center">
            <span
              onClick={() => {
                toggleTheme(THEME.light);
                onBlur();
              }}
              className="font-semibold text-gray-600 dark:text-white dark:hover:text-blue-800 cursor-pointer hover:text-blue-800 text-xl"
            >
              Light
            </span>
            <span className="dark:text-white"> | </span>
            <span
              onClick={() => {
                toggleTheme(THEME.dark);
                onBlur();
              }}
              className="font-semibold text-gray-600 dark:text-white dark:hover:text-blue-800 cursor-pointer hover:text-blue-800 text-xl"
            >
              Dark
            </span>
          </div>
        </div>
      </div>
    );
  }
);
