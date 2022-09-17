import type { AppRouter } from "server/routers/_app";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";

const getBaseUrl = () => {
  // browser should use relative path
  if (typeof window !== "undefined") return "";

  // reference for vercel.com
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = createTRPCNext<AppRouter>({
  config: ({ ctx }) => {
    return {
      transformer: superjson,
      url: `${getBaseUrl()}/api/trpc`,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       **/
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
    };
  },
  /**
   * If you want to use SSR, you need to use the server's full URL
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});
