/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="mt-6">
      <div className="container">
        <div className="p-6 rounded-3xl bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between space-x-4 tablet:space-x-0">
            {/* Brand */}
            <Link className="inline-flex w-12 h-12 shrink-0" href="/">
              <img
                src="/logo.png"
                alt="Twitch Followings Logo"
                width="48"
                height="48"
              />
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
