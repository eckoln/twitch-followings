/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next";

import api from "lib/helix";
import formatFollowings from "utils/formatFollowings";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, cursor = "" } = req.query;

  if (!id)
    return res
      .status(400)
      .json({ error: { code: 400, message: "id query is missing" } });

  try {
    const followings = await api.getUserFollowings(id, cursor);
    const formattedList = (await formatFollowings(followings?.data)) ?? [];
    const fixedList = formattedList.filter((n) => n);

    return res.status(200).json({
      data: {
        items: fixedList,
        total: followings?.total ?? 0,
        cursor: followings?.pagination.cursor ?? null,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: { code: 500, message: "server internal error" } });
  }
};
