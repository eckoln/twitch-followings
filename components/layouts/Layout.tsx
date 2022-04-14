import BuyMeACoffee from "components/shared/BuyMeACoffee";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div id="wrapper" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1">{props.children}</main>
      <Footer />
      <BuyMeACoffee />
    </div>
  );
};

export default Layout;
