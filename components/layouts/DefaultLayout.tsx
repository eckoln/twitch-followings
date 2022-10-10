import BuyMeACoffee from "components/shared/BuyMeACoffee";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-2.5 px-1.5 bg-red-900 text-white text-sm text-center font-bold">
        <span>
          The Twitch endpoint we&apos;re using will not be public soon.
        </span>
      </div>
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
      <BuyMeACoffee />
    </div>
  );
};

export default DefaultLayout;
