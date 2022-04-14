import { IUserFollowingsFromApi } from "types";
import api from "lib/helix";

const formatFollowings = async (data: IUserFollowingsFromApi[]) => {
  if (data && data.length > 0) {
    return await Promise.all(
      data.map(async (item) => {
        if (!item.to_login) return;
        return {
          id: item.to_id,
          login: item.to_login,
          displayName: item.to_name,
          profileImageUrl: await api.getUserProfileImg(item.to_login),
          followedAt: item.followed_at,
        };
      })
    );
  }
};

export default formatFollowings;
