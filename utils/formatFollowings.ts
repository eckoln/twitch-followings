/* 
  #DEFAULT RESPONSE
  {
    "from_id": "171003792",
    "from_login": "iiisutha067iii",
    "from_name": "IIIsutha067III",
    "to_id": "23161357",
    "to_name": "LIRIK",
    "followed_at": "2017-08-22T22:55:24Z"
  },  
*/

import { IFollows } from "types";
import api from "lib/helix";

const formatFollowings = async (data: IFollows | null) => {
  if (!data) return null;

  return await Promise.all(
    data.data.map(async (item) => {
      if (!item.to_login) return;
      return {
        id: item.to_id,
        login: item.to_login,
        display_name: item.to_name,
        profile_image_url: await api.getUserProfileImageUrl(item.to_login),
        followed_at: item.followed_at,
      };
    })
  );
};

export default formatFollowings;
