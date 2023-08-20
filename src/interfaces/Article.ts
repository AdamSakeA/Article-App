export interface Article {
  title: string;
  articleDescription: string;
  topic: string[];
  createdAt: string;
  img: {
    banner: string;
    img1: string;
    img2: string;
  };
}

export interface Articles {
  id: number;
  author_id: number;
  data: Article;
}
