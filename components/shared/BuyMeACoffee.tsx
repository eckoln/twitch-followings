/* eslint-disable @next/next/no-img-element */

const BuyMeACoffee = () => {
  return (
    <div className="fixed bottom-7 right-8 z-50 bg-blue-400 rounded-full transition cursor-pointer md:bottom-14 md:right-16 hover:bg-blue-500">
      <a
        href="https://www.buymeacoffee.com/waithzer"
        className="flex justify-center items-center w-14 h-14"
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
