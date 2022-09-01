import { TRPCError } from "@trpc/server";
import { t } from "server/trpc";
import { z } from "zod";

export const userRouter = t.router({
  show: t.procedure
    .input(z.object({ login: z.string() }))
    .query(async ({ ctx, input }) => {
      const res = await ctx.twitchApi.getUsers(input.login);
      const user = res.data[0];

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User not found with login ${input.login}`,
        });
      }

      //console.log(user);

      return user;
    }),
  followings: t.procedure
    .input(
      z.object({
        id: z.string(),
        cursor: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const followings = await ctx.twitchApi.getFollows({
        from_id: input.id,
        first: 100,
        after: input.cursor,
      });

      const userPIU = async (login: string): Promise<string | null> => {
        const res = await ctx.twitchApi.getUsers(login);
        const user = res.data[0];

        if (!user) return null;

        const piu = user.profile_image_url as string;
        return piu;
      };

      const formatFollowings = async () => {
        if (!followings.data) return null;

        return await Promise.all(
          followings.data.map(async (item) => {
            if (!item.to_name) return;
            return {
              id: item.to_id,
              login: item.to_name.toLowerCase(),
              display_name: item.to_name,
              profile_image_url: await userPIU(item.to_id),
              followed_at: item.followed_at,
            };
          })
        );
      };
      const formattedList = await formatFollowings();
      const fixedList = formattedList?.filter((i) => i);

      return {
        items: fixedList,
        total: followings.total,
        cursor: followings.pagination?.cursor ?? null,
      };

      //return null;
    }),
});
