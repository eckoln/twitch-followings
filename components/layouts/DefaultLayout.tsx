import BuyMeACoffee from "components/shared/BuyMeACoffee";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
      <BuyMeACoffee />
    </div>
  );
};

export default DefaultLayout;
