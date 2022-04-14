import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="py-6 border-b bg-slate-800 border-slate-700">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <Link href="/">
              <a className="inline shrink-0">
                <img src={"/logo.png"} width={48} height={48} />
              </a>
            </Link>

            {/* SearchBar */}
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
