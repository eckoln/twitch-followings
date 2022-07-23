import Layout from "components/layouts/Layout";
import SearchBar from "components/shared/SearchBar";
import Heading from "components/shared/ui/Heading";

const Home = () => {
  return (
    <Layout>
      <div className="m-auto">
        <div className="container">
          <div className="flex flex-col items-center max-w-lg space-y-6 text-center">
            <Heading variant="h1">
              Enter a Twitch.tv user and to see who they&apos;re following:
            </Heading>
            <SearchBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
