import BuyMeACoffee from "components/shared/BuyMeACoffee";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
import Link from "next/link";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DeprecationNotice />
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
      <BuyMeACoffee />
    </div>
  );
};

const DeprecationNotice = () => {
  return (
    <div className="py-2.5 px-1.5 bg-red-900 text-white text-sm text-center font-bold">
      <span>
        Important: Due to Twitch&apos;s termination of the endpoint we&apos;re
        using, Twitch Followings will no longer be available as of{" "}
        <Link
          className="underline"
          href="https://discuss.dev.twitch.tv/t/follows-endpoints-and-eventsub-subscription-type-are-now-available-in-open-beta/43322"
          target="_blank"
          rel="noreferrer"
        >
          August 3, 2023
        </Link>
        .
      </span>
    </div>
  );
};

export default DefaultLayout;
