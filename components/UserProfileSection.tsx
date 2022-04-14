import SpinnerLoading from "./shared/ui/SpinnerLoading";
import { Suspense } from "react";
import UserProfileCard from "./UserProfileCard";
import dynamic from "next/dynamic";
import useSWR from "swr";

//import UserFollowings from "./UserFollowings";

const UserFollowings = dynamic(() => import("./UserFollowings"), {
  suspense: true,
});

type UserProps = {
  login: string;
};

const fetcher = (args: string) => fetch(args).then((res) => res.json());
const UserProfileSection: React.FC<UserProps> = ({ login }) => {
  const { data: user, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users?login=${login}`,
    fetcher,
    {
      suspense: true,
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  );

  if (!user.data)
    return <span className="block text-center">User not found!</span>;

  return (
    <div className="space-y-6">
      <UserProfileCard user={user.data} />
      <Suspense fallback={<SpinnerLoading />}>
        <UserFollowings id={user.data.id} />
      </Suspense>
    </div>
  );
};

export default UserProfileSection;
