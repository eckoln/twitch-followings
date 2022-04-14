import { IUserFromApi } from "types";

const formatUser = (data: IUserFromApi) => {
  if (data) {
    return {
      id: data.id,
      login: data.login,
      displayName: data.display_name,
      broadcasterType: data.broadcaster_type,
      description: data.description,
      profileImageUrl: data.profile_image_url,
      createdAt: data.created_at,
    };
  }
};

export default formatUser;
