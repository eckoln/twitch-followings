import { httpBatchLink, loggerLink } from "@trpc/client";

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
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        /* loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }), */
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
      /**
       * @link https://trpc.io/docs/ssr
       */
      ssr: false,
    };
  },
});
