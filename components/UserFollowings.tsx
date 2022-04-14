import useSWR, { Fetcher } from "swr";

import { IUserFollowings } from "types";
import UserFollowingItem from "./UserFollowingItem";

type UserFollowingsProps = {
  id: string;
};

type DataProps = {
  data: {
    items: IUserFollowings[];
    total: number;
    cursor: string;
  };
};

const fetcher = (args: string) => fetch(args).then((res) => res.json());

const UserFollowings: React.FC<UserFollowingsProps> = ({ id }) => {
  const { data: followings } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users/follows?id=${id}`,
    fetcher,
    {
      suspense: true,
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  );

  if (!followings?.data)
    return (
      <span className="block text-center">User not following someone!</span>
    );

  return (
    <div className="space-y-6">
      <>
        <span>
          User is followings <strong>{followings.data.total}</strong> channels:
        </span>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 md:grid-cols-3">
          {followings.data.items.map((item: any, index: number) => (
            <UserFollowingItem key={index} data={item} />
          ))}
        </div>
      </>
    </div>
  );
};

export default UserFollowings;
