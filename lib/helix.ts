import { IUserFromApi } from "types";

class Helix {
  clientId: string | null;
  clientSecret: string | null;
  accessToken: string | null;

  constructor() {
    this.clientId = process.env.CLIENT_ID || null;
    this.clientSecret = process.env.CLIENT_SECRET || null;
    this.accessToken = null;
  }

  handleError(error: any) {
    throw new Error(error);
  }

  /* TOKEN */
  async getAccessToken() {
    try {
      const res = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        body: JSON.stringify({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: "client_credentials",
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      const token = data.access_token ?? null;

      return token;
    } catch (error) {
      this.handleError(error);
    }
  }

  async refreshAccessToken() {
    const refreshedToken = await this.getAccessToken();
    this.accessToken = refreshedToken;
    console.log("token refreshed:", refreshedToken);
  }

  /* FETCH */
  async fetcher(endpoint: string): Promise<any> {
    if (!this.accessToken) await this.refreshAccessToken();

    try {
      const res = await fetch("https://api.twitch.tv/helix" + endpoint, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Client-Id": `${this.clientId}`,
        },
      });
      const data = await res.json();

      if (res.status === 401) {
        console.log("Code: 401 Unauthorized Request!");

        await this.refreshAccessToken();
        return await this.fetcher(endpoint);
      }

      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getUserByLogin(login: string | string[]) {
    const res = await this.fetcher(`/users?login=${login}`);
    const user = res.data[0] ?? null;

    return user;
  }

  async getUserFollowings(id: string | string[], cursor?: string | string[]) {
    const res = await this.fetcher(
      `/users/follows?from_id=${id}&first=90&after=${cursor}`
    );
    const followings = res.data.length > 0 ? res : null;

    return followings;
  }

  async getUserProfileImg(login: string | string[]) {
    const user: IUserFromApi = await this.getUserByLogin(login);
    const profileImgUrl = user?.profile_image_url ?? "";

    return profileImgUrl;
  }
}

const api = new Helix();
export default api;
