/* eslint-disable @next/next/no-img-element */

import { IUser } from "types";

type UserProfileCardProps = {
  user: IUser;
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="border-b border-slate-800">
      <div className="flex justify-center">
        <a
          href={`https://twitch.tv/${user.login}`}
          className="flex flex-col items-center pb-8 space-y-4 group"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="overflow-hidden w-28 h-28 bg-black rounded-full ring-2 ring-blue-400">
            <img
              src={user.profile_image_url || "/non-avatar-300x300.png"}
              alt={`${user.login}'s Profile Image`}
              width={112}
              height={112}
            />
          </figure>
          <div className="text-center">
            <h4 className="text-xl font-bold transition group-hover:text-blue-400">
              {user.display_name}
            </h4>
            <span className="text-gray-400">{`twitch.tv/${user.login}`}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserProfileCard;
