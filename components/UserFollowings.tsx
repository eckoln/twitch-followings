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
  const followings = trpc.users.followings.useInfiniteQuery(
    { id: id },
    {
      getNextPageParam: (lastPage) => lastPage.cursor,
    }
  );
  const isFollowing = followings.data?.pages?.[0].items?.length;
  const totalFollowings = followings.data?.pages?.[0].total;

  // infinite scroll event
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      if (!followings.hasNextPage) return; // don't work if is no next page
      followings.fetchNextPage();
    }
  }, [inView]);

  // if loading the page
  if (!followings.data) {
    return <SpinnerLoading />;
  }

  // if user is not following someone
  if (!isFollowing) {
    return <p>User is not following someone.</p>;
  }

  return (
    <div className="space-y-4">
      <p>
        User is following <strong>{totalFollowings}</strong> channels:
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
      {followings.hasNextPage && ( // next page
        <div ref={ref} className="space-y-2">
          <p className="text-center">Keeping scroll for more...</p>
          {followings.isFetchingNextPage && <SpinnerLoading />}
        </div>
      )}
    </div>
  );
};

export default UserFollowings;
