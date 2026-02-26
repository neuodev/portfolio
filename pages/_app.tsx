import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../utils/mixpanel";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
