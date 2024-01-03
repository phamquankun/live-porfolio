import { createContext, ReactNode, useState } from "react";

interface OverlayState {
  isShowOverlay: boolean;
  setIsShowOverlay: (isShow: boolean) => void;
}

interface ThemeProps {
  children: ReactNode;
}

export const OverlayContext = createContext<OverlayState>({
  isShowOverlay: true,
  setIsShowOverlay: () => {},
});

export const OverlayProvider: React.FC<ThemeProps> = ({ children }) => {
  const [isShowOverlay, setIsShowOverlay] = useState(true);
  return (
    <OverlayContext.Provider value={{ isShowOverlay, setIsShowOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
