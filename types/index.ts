export interface IUserFromApi {
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
  followed_at: string;
}

export interface IUser {
  id: string;
  login: string;
  displayName: string;
  broadcasterType: string;
  description: string;
  profileImageUrl: string;
  createdAt: string;
}

export interface IUserFollowings {
  id: string;
  login: string;
  displayName: string;
  profileImageUrl: string;
  followedAt: string;
}
