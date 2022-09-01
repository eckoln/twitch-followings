import TwitchApi from "node-twitch";

const twitchApi = new TwitchApi({
  client_id: process.env.CLIENT_ID as string,
  client_secret: process.env.CLIENT_SECRET as string,
});

export default twitchApi;
