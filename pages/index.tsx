import Heading from "components/shared/ui/Heading";
import Layout from "components/layouts/DefaultLayout";
import SearchBar from "components/shared/SearchBar";

const Home = () => {
  return (
    <Layout>
      <div className="mt-10 desktop:m-auto">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6 text-center desktop:max-w-lg">
            <Heading variant="h1">
              👀 Enter a Twitch.tv user and to see who they are following.
            </Heading>
            <p>
              Twitch Followings, allows you to view who twitch.tv users are
              following with a nicer interface. It uses Twitch&apos;s official
              API and is an open-source project.
            </p>
            <SearchBar />
            <p className="text-sm font-medium">
              Notice: Please do not use this service to be harassment to people.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
