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
        Important: Twitch Followings will no longer be supported in September/2023 due to Twitch's endpoint shutdown.{" "}
        <Link
          className="underline"
          href="https://discuss.dev.twitch.tv/t/legacy-follows-api-and-eventsub-shutdown-timeline-updated/46769#september-12-2023-5"
          target="_blank"
          rel="noreferrer"
        >
         More details.
        </Link>
      </span>
    </div>
  );
};

export default DefaultLayout;
