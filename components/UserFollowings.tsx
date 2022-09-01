/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import SpinnerLoading from "./shared/ui/SpinnerLoading";
import UserFollowingItem from "./UserFollowingItem";
import { trpc } from "utils/trpc";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type UserFollowingsProps = {
  id: string;
};

const UserFollowings: React.FC<UserFollowingsProps> = ({ id }) => {
  const followings = trpc.proxy.users.followings.useInfiniteQuery(
    { id: id },
    {
      getNextPageParam: (lastPage) => lastPage.cursor,
    }
  );
  const isFollowing = followings.data?.pages?.[0].items?.length;
  const totalFollowings = followings.data?.pages?.[0].total;

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      if (!followings.hasNextPage) return;
      followings.fetchNextPage();
    }
  }, [inView]);

  if (!followings.data) {
    return <SpinnerLoading />;
  }

  if (!isFollowing) {
    return <p>User not following someone.</p>;
  }

  return (
    <div className="space-y-4">
      <p>
        User is followings <strong>{totalFollowings}</strong> channels:
      </p>
      <div className="grid grid-cols-1 gap-8 desktop:grid-cols-5 tablet:grid-cols-3">
        {followings.data.pages.map((group, index) => (
          <React.Fragment key={index}>
            {group.items?.map((item) => (
              <UserFollowingItem key={item?.id} data={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {followings.hasNextPage && ( //sonraki sayfa
        <div ref={ref} className="space-y-2">
          <p className="text-center">Keeping scroll for more...</p>
          {followings.isFetchingNextPage && <SpinnerLoading />}
        </div>
      )}
    </div>
  );
};

export default UserFollowings;
