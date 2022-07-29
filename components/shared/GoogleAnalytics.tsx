import Script from "next/script";

type GoogleAnalyticsProps = {
  id: string | undefined;
};

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ id }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="analytic-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
