import Layout from "components/layouts/Layout";
import SearchBar from "components/shared/SearchBar";

const Home = () => {
  return (
    <Layout>
      <div className="m-auto">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 max-w-lg text-center">
            <h1 className="text-3xl font-bold">
              Enter a Twitch.tv user and to see who they&apos;re following:
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
