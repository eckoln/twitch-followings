import { useState } from "react";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

import { IUserFollowings } from "types";
import Button from "./shared/ui/Button";
import UserFollowingItem from "./UserFollowingItem";

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

const fetcher = (args: string) => fetch(args).then((res) => res.json());

const UserFollowings: React.FC<UserFollowingsProps> = ({ id }) => {
  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    // reached the end
    if (previousPageData && !previousPageData.data) return null;

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `/api/users/follows?id=${id}`;

    // add the cursor to the API endpoint
    return `/api/users/follows?id=${id}&cursor=${previousPageData.data.cursor}`;
  };

  const { data, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      suspense: true,
      revalidateOnFocus: false,
    }
  );
  console.log(data);

  return (
    <div className="space-y-6">
      <>
        <span>
          User is followings <strong>x</strong> channels:
        </span>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 md:grid-cols-3">
          {data?.map((followings) =>
            followings.data.items.map((item, index) => (
              <UserFollowingItem key={index} data={item} />
            ))
          )}
        </div>
        <Button
          variant="primary"
          onClick={() => setSize(size + 1)}
          disabled={isValidating}
        >
          Load More
        </Button>
      </>
    </div>
  );
};

export default UserFollowings;
