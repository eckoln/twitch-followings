const Footer = () => {
  return (
    <footer>
      <div className="py-6 mt-12 border-t border-slate-800">
        <div className="container">
          <div className="flex flex-row justify-between items-center text-slate-400">
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
