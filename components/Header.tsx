import * as React from "react";
import { ToggleTheme } from "./ToggleTheme";
import { RxDividerVertical } from "react-icons/rx";
import { THEME, ThemeContext } from "@/context";
import { LuMenu } from "react-icons/lu";
import { Drawer } from "./Drawer";

interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { currentTheme } = React.useContext(ThemeContext);

  const [isShowDrawer, setIsShowDrawer] = React.useState(false);
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleBlur = () => {
    setIsShowDrawer(false);
  };

  React.useEffect(() => {
    if (isShowDrawer) {
      divRef.current?.focus();
    }
  }, [isShowDrawer]);

  return (
    <>
      <div className="bg-white dark:bg-black z-10 min-h-[64px] w-full py-3 px-6 flex items-center justify-between sticky top-0 left-0 right-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <h1 className="font-semibold text-3xl dark:text-white">{`<Q.Pham />`}</h1>
        <div className="lg:flex items-center gap-5 hidden ">
          {["My CV", "Contact", "About Me"].map((item, index) => (
            <span
              key={index}
              className="font-semibold text-gray-600 dark:text-white dark:hover:text-blue-800 text-sm cursor-pointer hover:text-blue-800"
            >
              {item}
            </span>
          ))}
          <RxDividerVertical
            color={currentTheme === THEME.dark ? "white" : "black"}
          />
          <ToggleTheme />
        </div>
        <div
          className="block lg:hidden cursor-pointer dark:text-white"
          onClick={() => setIsShowDrawer(true)}
        >
          <LuMenu />
        </div>
      </div>
      {isShowDrawer && <Drawer ref={divRef} onBlur={handleBlur} />}
    </>
  );
};
