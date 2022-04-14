import "styles/main.css";

import APP_SEO from "next-seo.config";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...APP_SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
