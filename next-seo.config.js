const APP_SEO = {
  titleTemplate: `%s - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  defaultTitle: process.env.NEXT_PUBLIC_APP_NAME,
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
    url: process.env.NEXT_PUBLIC_APP_URL,
    site_name: process.env.NEXT_PUBLIC_APP_NAME,
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
