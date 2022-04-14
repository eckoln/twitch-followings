const Footer = () => {
  return (
    <footer>
      <div className="py-6 mt-12 border-t border-slate-800">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center text-gray-400 md:flex-row md:justify-between md:space-y-0">
            <span>
              Not affiliated, authorized or in any way officially connected to
              Twitch.
            </span>
            <span>
              Made by{" "}
              <a href="#" className="transition hover:text-blue-400">
                <strong>Waithzer</strong>
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
