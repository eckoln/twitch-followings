import Heading from "components/shared/ui/Heading";
import Layout from "components/layouts/DefaultLayout";
import SearchBar from "components/shared/SearchBar";

const Home = () => {
  return (
    <Layout>
      <div className="m-auto">
        <div className="container">
          <div className="flex flex-col items-center max-w-lg space-y-6 text-center">
            <Heading variant="h1">
              👀 Enter a Twitch.tv user and to see who they are following.
            </Heading>
            <p>
              Twitch Followings, allows you to view who twitch.tv users are
              following with a nicer interface. It uses Twitch&apos;s official
              API.
            </p>
            <SearchBar />
            <p className="text-sm font-medium">
              Please do not use this service to be toxic to people.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
