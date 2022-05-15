/* eslint-disable @next/next/no-img-element */

import { IUserFollowings } from "types";
import formatDate from "utils/formatDate";

type UserFollowingItemProps = {
  data: IUserFollowings;
};

const UserFollowingItem: React.FC<UserFollowingItemProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-md ring-1 ring-transparent transition bg-slate-800 hover:ring-blue-400">
      <a
        href={`https://twitch.tv/${data.login}`}
        className="block w-full h-full"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="w-full h-auto">
          <img
            src={data.profile_image_url || "/non-avatar-300x300.png"}
            alt={`${data.login}'s Profile Image`}
            width="100%"
            height="100%"
          />
        </figure>
        <div className="p-4 text-center">
          <h5 className="text-lg font-bold truncate">{data.display_name}</h5>
          <time className="text-gray-400">{formatDate(data.followed_at)}</time>
        </div>
      </a>
    </div>
  );
};

export default UserFollowingItem;
