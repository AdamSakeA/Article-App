type Articles = {
  id: number;
  title: string;
  articleDescription: string;
  topic: string | string[];
  createdAt: string;
  img: {
    banner: string;
    img1: string;
    img2: string;
  };
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
  article?: Articles[];
};

export interface UserInterface {
  id: number;
  username: string;
  password: string;
  data: DataUser;
}
