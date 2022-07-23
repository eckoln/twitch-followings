/* eslint-disable react-hooks/exhaustive-deps */

import { IUserFollowings } from "types";
import React from "react";
import UserFollowingItem from "./UserFollowingItem";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

type UserFollowingsProps = {
  id: string;
};

//react-query fetcher
const fetcher = async (id: string, cursor?: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_APP_URL +
      `/api/users/follows?id=${id}&cursor=${cursor ?? ""}`
  );
  const data = res.json();
  return data;
};

const UserFollowings: React.FC<UserFollowingsProps> = ({ id }) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["followings", id],
    ({ pageParam }) => fetcher(id, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.data?.cursor,
    }
  );
  const isFollowing = data?.pages?.[0].data?.items?.length;
  const totalFollowings = data?.pages?.[0].data?.total;

  //sonraki sayfayı çekmek için referansı izlemeye al
  useEffect(() => {
    if (inView) {
      if (!hasNextPage) return;
      fetchNextPage();
    }
  }, [inView]);

  //kimseyi takip etmiyorsa
  if (!isFollowing) {
    return <p className="text-center">User not following someone!</p>;
  }

  return (
    <div className="space-y-6">
      <span>
        User is followings <strong>{totalFollowings}</strong> channels:
      </span>
      <div className="grid grid-cols-1 gap-8 desktop:grid-cols-5 tablet:grid-cols-3">
        {data.pages.map((group, index) => (
          <React.Fragment key={index}>
            {group.data.items.map((item: IUserFollowings, index: number) => (
              <UserFollowingItem key={index} data={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && ( //sonraki sayfa
        <div ref={ref}>
          <p className="text-center">Keeping scroll for more...</p>
        </div>
      )}
    </div>
  );
};

export default UserFollowings;
