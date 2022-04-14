import { GetServerSideProps, NextPage } from "next";

import { ErrorBoundary } from "react-error-boundary";
import Layout from "components/layouts/Layout";
import { NextSeo } from "next-seo";
import SpinnerLoading from "components/shared/ui/SpinnerLoading";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const UserProfileSection = dynamic(
  () => import("components/UserProfileSection"),
  { ssr: false }
);

type UserProfileProps = {
  login: string;
};

const UserProfile: NextPage<UserProfileProps> = ({ login }) => {
  return (
    <>
      <NextSeo title={`login's following list`} />
      <Layout>
        <div className="mt-12">
          <div className="container">
            <Suspense fallback={<SpinnerLoading />}>
              <UserProfileSection login={login} />
            </Suspense>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { login } = ctx.query;

  return { props: { login: login?.toString().toLocaleLowerCase() } };
};

export default UserProfile;
