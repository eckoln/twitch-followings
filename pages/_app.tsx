import "styles/tailwind.css";

import APP_SEO from "next-seo.config";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import GoogleAnalytics from "components/shared/GoogleAnalytics";
import { trpc } from "utils/trpc";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      <DefaultSeo {...APP_SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
