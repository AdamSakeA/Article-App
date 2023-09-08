import React from "react";
import { Articles } from "@/src/interfaces/Article";
import { CardArticle } from "@/src/components/pages/home/";

interface ListArticleProps {
  payload: Articles[];
}

export default function ListArticle({ payload }: ListArticleProps) {
  const showArticles = payload.map((item, i) => <CardArticle key={i} article={item} />);

  return <div className="container mx-auto">{showArticles}</div>;
}
