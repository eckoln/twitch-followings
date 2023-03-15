/* eslint-disable @next/next/no-img-element */

import Heading from "components/shared/ui/Heading";
import Link from "next/link";
import { User } from "types";

type UserProfileCardProps = {
  user: User;
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="pb-6 border-b-2 border-slate-800">
      <div className="flex justify-center">
        <Link
          href={`https://twitch.tv/${user?.login}`}
          className="flex flex-col items-center space-y-4 group"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="overflow-hidden bg-black rounded-full w-28 h-28 ring-1 ring-blue-400">
            <img
              src={user?.profile_image_url ?? "/non-avatar-300x300.png"}
              alt={`${user?.login}'s Profile Image`}
              width={112}
              height={112}
            />
          </figure>
          <div className="text-center">
            <Heading
              variant="h4"
              className="transition-colors group-hover:text-blue-400"
            >
              {user?.display_name}
            </Heading>
            <span className="text-gray-400">{`twitch.tv/${user?.login}`}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserProfileCard;
