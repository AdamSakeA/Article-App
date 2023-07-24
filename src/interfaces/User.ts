import { Article } from "./Article";

export type Books = {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
};

export type Lists = {
  id: number;
  title: string;
  list_saved: [];
  description: string;
};

type DataUser = {
  name: string;
  email: string;
  about: string;
  bio: string;
  followers: number;
  following: number;
  profile_img: {
    background: string;
    user: string;
  };
  article?: Article[];
  books?: Books[];
  lists?: Lists[];
};

export interface UserInterface {
  id: number;
  username: string;
  password: string;
  data: DataUser;
}
