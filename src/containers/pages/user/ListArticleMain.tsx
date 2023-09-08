import { Article } from "@/src/interfaces/Article";
import { CardArticleMain } from "@/src/components/pages/user";
import React from "react";

interface ListArticleMainProps {
  payload?: Article[];
}

export default function ListArticleMain({ payload }: ListArticleMainProps) {
  const showCard = payload?.map((item, i) => <CardArticleMain article={item} key={i} />);

  if (!payload)
    return (
      <>
        <h1>Article is not found</h1>
      </>
    );

  return <>{showCard}</>;
}
