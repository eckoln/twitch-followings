import clsx from "clsx";

const Footer = () => {
  const linkStyle = clsx("transition-colors hover:text-blue-400");
  return (
    <footer className="mt-10 border-t-2 border-t-slate-800">
      <div className="container">
        <div className="flex flex-col items-center justify-center py-4 space-y-2 desktop:space-y-0 desktop:flex-row desktop:justify-between">
          <ul className="flex flex-row space-x-6">
            <li>
              <a
                href="https://twitch.tv/waithzer"
                className={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                Made by @waithzer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/armedo/twitch-followings"
                className={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                Github
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
