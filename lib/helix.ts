import { IFollows, IUser } from "types";

class Helix {
  clientId: string | null;
  clientSecret: string | null;
  accessToken: string | null;

  constructor() {
    this.clientId = process.env.CLIENT_ID || null;
    this.clientSecret = process.env.CLIENT_SECRET || null;
    this.accessToken = null;
  }

  // TOKEN
  async getAccessToken(): Promise<string | null> {
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
      const token = data.access_token || null; //access token alınamamışsa <null> döndür
      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async refreshAccessToken(): Promise<undefined> {
    const refreshedToken = await this.getAccessToken(); //access tokenı al
    this.accessToken = refreshedToken; //yeni tokenı setle
    console.log("token refreshed:", refreshedToken);
    return;
  }

  // FETCH
  async fetcher(endpoint: string): Promise<any> {
    //access token <null> ise yeni token al
    if (!this.accessToken) {
      await this.refreshAccessToken();
    }

    try {
      const res = await fetch("https://api.twitch.tv/helix" + endpoint, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Client-Id": `${this.clientId}`,
        },
      });
      const data = await res.json();

      //respons status <unauthorized = 401> ise
      if (res.status === 401) {
        console.log("Code: 401 Unauthorized Request!");

        await this.refreshAccessToken(); //yeni access token al
        return await this.fetcher(endpoint); //devam eden işlemi tekrarla
      }

      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getUserByLogin(login: string): Promise<IUser | null> {
    const res = await this.fetcher(`/users?login=${login}`);
    const user = res.data[0] || null; //kullanıcı varsa birinci<[0]> itemi al veya yoksa <null> döndür
    return user;
  }

  async getUserFollowings(
    id: string,
    cursor?: string
  ): Promise<IFollows | null> {
    const res = await this.fetcher(
      `/users/follows?from_id=${id}&first=90${cursor && `&after=${cursor}`}`
    );
    const followings = res.data.length > 0 ? res : null; //kullanıcı birini takip ediyorsa response döndür veya etmiyorsa <null> döndür
    return followings;
  }

  async getUserProfileImageUrl(login: string): Promise<string | null> {
    const user = await this.getUserByLogin(login);
    const profileImageUrl = user?.profile_image_url || null; //kullanıcının profil resmi varsa url veya yoksa <null> döndür
    return profileImageUrl;
  }
}

const api = new Helix();
export default api;
