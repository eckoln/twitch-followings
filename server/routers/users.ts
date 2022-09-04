import { TRPCError } from "@trpc/server";
import { t } from "server/trpc";
import twitchApi from "utils/twitchApi";
import { z } from "zod";

export const userRouter = t.router({
  show: t.procedure
    .input(z.object({ login: z.string() }))
    .query(async ({ input }) => {
      const res = await twitchApi.getUsers(input.login);
      const user = res.data[0];

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User not found with login ${input.login}`,
        });
      }

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
      // get user followings
      const followings = await twitchApi.getFollows({
        from_id: input.id,
        first: 100,
        after: input.cursor,
      });

      // get user profile_image_url
      const userPIU = async (login: string): Promise<string | null> => {
        const res = await twitchApi.getUsers(login);
        const user = res.data[0];

        if (!user) return null;

        const piu = user.profile_image_url as string;
        return piu;
      };

      // generate user following list with profile_image_url
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
      const formattedList = await formatFollowings(); // await list
      const fixedList = formattedList?.filter((i) => i); // avoid null items

      // return json
      return {
        items: fixedList,
        total: followings.total,
        cursor: followings.pagination?.cursor ?? null,
      };
    }),
});
