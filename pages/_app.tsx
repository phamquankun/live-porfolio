import { Layout, Social } from "@/components";
import { ThemeProvider } from "@/context";
import { OverlayProvider } from "@/context/OverlayProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <OverlayProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OverlayProvider>
    </ThemeProvider>
  );
}
