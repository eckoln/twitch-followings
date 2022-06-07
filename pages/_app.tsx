import "styles/main.css";

import { QueryClient, QueryClientProvider } from "react-query";

import APP_SEO from "next-seo.config";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import GoogleAnalytics from "lib/analytics";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics
        measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      />
      <DefaultSeo {...APP_SEO} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
