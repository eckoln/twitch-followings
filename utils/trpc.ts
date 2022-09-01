import { httpBatchLink, loggerLink } from "@trpc/client";

import type { AppRouter } from "server/routers/_app";
import { setupTRPC } from "@trpc/next";
import superjson from "superjson";

const getBaseUrl = () => {
  // browser should use relative path
  if (typeof window !== "undefined") return "";

  // reference for vercel.com
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = setupTRPC<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
    };
  },
  ssr: true,
});
