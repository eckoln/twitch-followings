import { t } from "server/trpc";
import { userRouter } from "server/routers/users";

export const appRouter = t.router({
  users: userRouter,
});

export type AppRouter = typeof appRouter;
