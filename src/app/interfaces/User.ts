export interface User {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  profile_image_url: string;
}

export interface Response<T> {
  data?: T;
}

export interface IndexResponse<T> {
  data: T[];
}
