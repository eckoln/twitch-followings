const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Website";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const APP_SEO = {
  titleTemplate: `%s - ${APP_NAME}`,
  defaultTitle: APP_NAME,
  description: `Twitch Followings, see list of all channels a Twitch user is following on Twitch.`,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "twitch following,twitch followings,twitch,following list,follows",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    site_name: APP_NAME,
  },
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      color: "#5bbad5",
      href: "/safari-pinned-tab.svg",
    },
  ],
};

export default APP_SEO;
