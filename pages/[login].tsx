import Layout from "components/layouts/DefaultLayout";
import NextError from "next/error";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import SpinnerLoading from "components/shared/ui/SpinnerLoading";
import UserFollowings from "components/UserFollowings";
import UserProfileCard from "components/UserProfileCard";
import { trpc } from "utils/trpc";
import { useRouter } from "next/router";
import blacklist from "blacklist.json";

const UserProfile: NextPage = () => {
  const router = useRouter();
  const login = router.query.login as string;

  if (blacklist.data.includes(login)) {
    return (
      <NextError
        statusCode={400}
        title="The ability to search for this user on this tool has been blocked"
      />
    );
  }

  const user = trpc.users.show.useQuery({ login });

  if (user.error) {
    return <NextError statusCode={user.error.data?.httpStatus ?? 500} />;
  }

  return (
    <>
      <NextSeo title={`${login}'s following list`} />
      <Layout>
        <div className="mt-12">
          <div className="container">
            {user.data ? (
              <div className="space-y-12">
                <UserProfileCard user={user.data} />
                <UserFollowings id={user.data.id} />
              </div>
            ) : (
              <SpinnerLoading />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserProfile;
