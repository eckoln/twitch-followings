import { GetServerSideProps, NextPage } from "next";
import { Suspense, useEffect, useState } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { IUser } from "types";
import Layout from "components/layouts/Layout";
import Loading from "components/shared/Loading";
import Spinner from "components/shared/ui/Spinner";
import SpinnerLoading from "components/shared/ui/SpinnerLoading";
import dynamic from "next/dynamic";

const UserProfileSection = dynamic(
  () => import("components/UserProfileSection"),
  { suspense: true }
);

type UserProfileProps = {
  login: string;
};

const UserProfile: NextPage<UserProfileProps> = ({ login }) => {
  /*   const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
 */
  /* useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/users?login=${login}`
        );
        const user = await res.json();

        setUser(user.data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [login]); */

  return (
    <Layout>
      <div className="mt-12">
        <div className="container">
          <ErrorBoundary fallback={<span>Error</span>}>
            <Suspense fallback={<SpinnerLoading />}>
              <UserProfileSection login={login} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { login } = ctx.query;

  return { props: { login: login } };
};

export default UserProfile;
