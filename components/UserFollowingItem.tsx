/* eslint-disable @next/next/no-img-element */

import { Followings } from "types";
import Heading from "components/shared/ui/Heading";
import formatDate from "utils/formatDate";

type UserFollowingItemProps = {
  data:
    | {
        id: string;
        login: string;
        display_name: string;
        profile_image_url: string | null;
        followed_at: Date | string;
      }
    | undefined;
};

const UserFollowingItem: React.FC<UserFollowingItemProps> = ({ data }) => {
  return (
    <article>
      <div className="overflow-hidden transition rounded-md ring-1 ring-transparent bg-slate-800 hover:ring-blue-400">
        <a
          href={`https://twitch.tv/${data?.login}`}
          className="block w-full h-full"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="w-full h-auto">
            <img
              src={data?.profile_image_url ?? "/non-avatar-300x300.png"}
              alt={`${data?.login}'s Profile Image`}
              width="100%"
              height="100%"
            />
          </figure>
          <div className="p-4 text-center">
            <Heading variant="h5" className="truncate">
              {data?.display_name}
            </Heading>
            <time className="text-gray-400">
              {formatDate(data?.followed_at as string)}
            </time>
          </div>
        </a>
      </div>
    </article>
  );
};

export default UserFollowingItem;
