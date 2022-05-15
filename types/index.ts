export interface IUser {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: Date;
}

export interface IUserFollowingsFromApi {
  to_id: string;
  to_login: string;
  to_name: string;
  followed_at: Date;
}

export interface IUserFollowings {
  id: string;
  login: string;
  display_name: string;
  profile_İmage_url: string;
  followed_at: Date;
}

export interface IFollows {
  total: number;
  data: IUserFollowingsFromApi[];
  pagination: {
    cursor: string;
  };
}
