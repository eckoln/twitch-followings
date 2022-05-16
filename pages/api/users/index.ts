/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

import api from "lib/helix";
import formatUser from "utils/formatUser";

//özel karakterleri sil
const fixedLogin = (login: string) => {
  return login.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { login } = req.query;

  // querys eksikse hata döndür
  if (!login) {
    return res
      .status(404)
      .json({ error: { code: 404, message: "login query is missing" } });
  }

  try {
    const user = await api.getUserByLogin(fixedLogin(login.toString()));
    const formattedUser = formatUser(user); //twitchten gelen veriyi formatla

    //response
    return res.status(200).json({ data: formattedUser });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: { code: 500, message: "server internal error" } });
  }
};
