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
          className="flex flex-col items-center pb-8 space-y-6 group"
        >
          <figure className="overflow-hidden w-28 h-28 bg-black rounded-full ring-2 ring-blue-400">
            <img
              src={user.profileImageUrl ?? "/non-avatar-300x300.png"}
              alt=""
              width={112}
              height={112}
            />
          </figure>
          <div className="text-center">
            <h3 className="text-xl font-bold transition group-hover:text-blue-400">
              {user.displayName}
            </h3>
            <span className="text-gray-400">{`https://twitch.tv/${user.login}`}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserProfileCard;
