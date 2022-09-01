import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

import twitchApi from "utils/twitchApi";

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  return { twitchApi };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
