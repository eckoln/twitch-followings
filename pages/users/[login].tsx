import { GetServerSideProps, NextPage } from "next";

import { ErrorBoundary } from "react-error-boundary";
import Layout from "components/layouts/Layout";
import { NextSeo } from "next-seo";
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
  //console.log(login);
  return (
    <>
      <Layout>
        <div className="mt-12">
          <div className="container">
            <Suspense fallback={<SpinnerLoading />}>
              <UserProfileContainer login={login} />
            </Suspense>
          </div>
        </div>
      </Layout>
    </>
  );
};

/* export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { login } = ctx.query;

  return { props: { login: login?.toString().toLocaleLowerCase() } };
}; */

export default UserProfile;
