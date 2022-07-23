/* eslint-disable @next/next/no-img-element */

const BuyMeACoffee = () => {
  return (
    <div className="fixed z-50 transition bg-blue-400 rounded-full cursor-pointer bottom-7 right-8 tablet:bottom-14 tablet:right-16 hover:bg-blue-500">
      <a
        href="https://www.buymeacoffee.com/waithzer"
        className="flex items-center justify-center w-14 h-14"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/bmc-logo.svg"
          alt="Buy Me a Coffee"
          width="30"
          height="auto"
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;
