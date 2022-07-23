const Footer = () => {
  return (
    <footer>
      <div className="py-4 mt-12 border-t-2 border-t-slate-800">
        <div className="container">
          <div className="flex text-sm text-gray-400 tablet:flex-row tablet:items-center tablet:justify-between">
            <div>
              <a
                href="https://twitch.tv/waithzer"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-blue-400"
              >
                Made by @waithzer
              </a>
            </div>

            <div>
              <a
                href="https://github.com/armedo/twitch-followings"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-blue-400"
              >
                Open source on Github.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
