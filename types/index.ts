import type { inferProcedureInput, inferProcedureOutput } from "@trpc/server";

import type { AppRouter } from "server/routers/_app";

export type User = inferProcedureOutput<AppRouter["users"]["show"]>;
export type Followings = inferProcedureOutput<AppRouter["users"]["followings"]>;
