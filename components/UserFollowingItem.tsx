/* eslint-disable @next/next/no-img-element */

import { IUserFollowings } from "types";
import Image from "next/image";
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
      >
        <figure className="w-full h-auto">
          {/* <img
            src={data.profileImageUrl ?? "non-avatar-300x300.png"}
            alt=""
            width={"100%"}
            height={"100%"}
          /> */}
          {data.profileImageUrl ? (
            <Image
              src={data.profileImageUrl}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
            />
          ) : (
            <Image
              src={"/non-avatar-300x300.png"}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
            />
          )}
        </figure>
        <div className="p-4 text-center">
          <h5 className="text-lg font-bold truncate">{data.displayName}</h5>
          <time className="text-gray-400">{formatDate(data.followedAt)}</time>
        </div>
      </a>
    </div>
  );
};

export default UserFollowingItem;
