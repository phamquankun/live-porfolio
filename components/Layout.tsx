import * as React from "react";
import { Header } from "./Header";
import Content from "./Content";
import { Social } from "./Social";
import { Footer } from "./Footer";
import { OverlayContext } from "@/context/OverlayProvider";
import { Overlay } from "./Overlay";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const { isShowOverlay } = React.useContext(OverlayContext);

  return (
    <>
      {isShowOverlay ? (
        <Overlay />
      ) : (
        <>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </>
      )}
    </>
  );
};
