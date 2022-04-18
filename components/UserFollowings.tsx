/* eslint-disable react-hooks/exhaustive-deps */

import { useInfiniteQuery } from "react-query";

import { IUserFollowings } from "types";
import UserFollowingItem from "./UserFollowingItem";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type UserFollowingsProps = {
  id: string;
};

interface IData {
  data: {
    items: IUserFollowings[];
    total: number;
    cursor: string;
  };
}

const fetcher = async (id: string, cursor?: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_APP_URL +
      `/api/users/follows?id=${id}&cursor=${cursor || ""}`
  );
  return res.json();
};

const UserFollowings: React.FC<UserFollowingsProps> = ({ id }) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["followings", id],
      ({ pageParam }) => fetcher(id, pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.data.cursor,
      }
    );
  const isFollowing = data?.pages?.[0].data.items.length;
  const totalFollowings = data?.pages?.[0].data.total;

  useEffect(() => {
    if (inView) {
      if (!hasNextPage) return;
      fetchNextPage();
    }
  }, [inView]);

  if (!isFollowing)
    return <p className="text-center">User not following someone!</p>;

  return (
    <div className="space-y-6">
      <>
        <span>
          User is followings <strong>{totalFollowings}</strong> channels:
        </span>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 md:grid-cols-3">
          {data.pages.map((group) =>
            group.data.items.map((item: IUserFollowings, index: number) => (
              <UserFollowingItem key={index} data={item} />
            ))
          )}
        </div>
        {hasNextPage && (
          <div ref={ref}>
            <p className="text-center">Keeping scroll for more...</p>
          </div>
        )}
      </>
    </div>
  );
};

export default UserFollowings;
