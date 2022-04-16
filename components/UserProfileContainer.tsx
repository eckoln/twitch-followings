import useSWR, { Fetcher } from "swr";

import { IUser } from "types";
import { NextSeo } from "next-seo";
import SpinnerLoading from "./shared/ui/SpinnerLoading";
import { Suspense } from "react";
import UserProfileCard from "./UserProfileCard";
import dynamic from "next/dynamic";

const UserFollowings = dynamic(() => import("components/UserFollowings"), {
  ssr: false,
});

type UserProfileSectionProps = {
  login: string | string[] | undefined;
};

interface IData {
  data: IUser;
}

const fetcher: Fetcher<IData, string> = (args) =>
  fetch(args).then((res) => res.json());

const UserProfileSection: React.FC<UserProfileSectionProps> = ({ login }) => {
  const { data: user } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users?login=${login}`,
    fetcher,
    {
      suspense: true,
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  );

  if (!user?.data)
    return <span className="block text-center">User not found!</span>;

  return (
    <>
      <NextSeo title={`${login}'s following list`} />
      <div className="space-y-10">
        <UserProfileCard user={user.data} />
        {
          <Suspense fallback={<SpinnerLoading />}>
            <UserFollowings id={user.data.id} />
          </Suspense>
        }
      </div>
    </>
  );
};

export default UserProfileSection;