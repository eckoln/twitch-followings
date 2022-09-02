import clsx from "clsx";

const Footer = () => {
  const linkStyle = clsx("transition-colors hover:text-blue-400");

  return (
    <footer className="mt-10 border-t-2 border-t-slate-800">
      <div className="container">
        <div className="flex flex-col items-center justify-center py-4 space-y-2 tablet:space-y-0 tablet:flex-row tablet:justify-between">
          <ul className="flex flex-col space-y-2 text-center tablet:flex-row tablet:space-x-6 tablet:space-y-0 tablet:text-left">
            <li>
              <a
                href="https://twitch.tv/eckoln"
                className={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                Made by @eckoln
              </a>
            </li>
            <li>
              <a
                href="https://www.buymeacoffee.com/eckoln"
                className={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                Buy Me a Coffee
              </a>
            </li>
            <li>
              <a
                href="https://github.com/eckoln/twitch-followings"
                className={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                Open-source on Github
              </a>
            </li>
          </ul>
          <p>We are not affiliated with Twitch.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
