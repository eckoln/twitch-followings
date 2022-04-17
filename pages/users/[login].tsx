import Layout from "components/layouts/Layout";
import { NextPage } from "next";
import SpinnerLoading from "components/shared/ui/SpinnerLoading";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const UserProfileContainer = dynamic(
  () => import("components/UserProfileContainer"),
  { ssr: false }
);

type UserProfileProps = {
  login: string;
};

const UserProfile: NextPage<UserProfileProps> = () => {
  const router = useRouter();
  const { login } = router.query;

  return (
    <>
      <Layout>
        <div className="mt-12">
          <div className="container">
            <Suspense fallback={<SpinnerLoading />}>
              <UserProfileContainer login={login?.toString().toLowerCase()} />
            </Suspense>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserProfile;
