import { useInfiniteQuery } from "react-query";

import { IUserFollowings } from "types";
import Button from "./shared/ui/Button";
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

const fetcher = async (id: string, cursor = "") => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_APP_URL +
      `/api/users/follows?id=${id}&cursor=${cursor}`
  );
  const data = await res.json();

  return data;
};

const UserFollowings: React.FC<UserFollowingsProps> = ({ id }) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["followings", id],
      ({ pageParam }) => fetcher(id, pageParam),
      {
        suspense: true,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => lastPage.data.cursor,
      }
    );
  const isFollowing = data?.pages?.[0].data.items.length;
  const total = data?.pages?.[0].data.total;

  useEffect(() => {
    if (inView) {
      if (!hasNextPage) return;

      fetchNextPage();
    }
  }, [inView]);

  if (!isFollowing) return <p>user not following someone.</p>;

  return (
    <div className="space-y-6">
      <>
        <span>
          User is followings <strong>{total}</strong> channels:
        </span>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 md:grid-cols-3">
          {data.pages.map((group, i) =>
            group.data.items.map((item) => (
              <UserFollowingItem key={i} data={item} />
            ))
          )}
        </div>
        {hasNextPage && (
          <div ref={ref}>
            <p>Keeping scroll for more...</p>
          </div>
        )}
        {/* <Button
          ref={ref}
          variant="primary"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage}
        >
          Load More
        </Button> */}
      </>
    </div>
  );
};

export default UserFollowings;
