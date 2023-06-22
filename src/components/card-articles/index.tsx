import { Articles } from "@/src/interfaces/Article";
import Image from "next/image";
// import React, { useState } from "react";
import truncateText from "@/src/utils/truncateText";

interface CardArticleProps {
  article: Articles;
}

export default function CardArticle({ article }: CardArticleProps) {
  const dataArticle = article.data;

  const author = article.author.map((item) => {
    return item.name;
  });

  return (
    <div className="flex gap-4 mb-[50px]">
      <div className="">
        <p className="font-light text-gray-900">{author}</p>
        <h1 className="font-bold text-lg">{dataArticle.title}</h1>
        <p className="font-semibold text-md text-gray-500">
          {truncateText(dataArticle.articleDescription)}
        </p>
      </div>
      <div className="w-[200px] h-[150px] relative">
        <Image
          src={dataArticle.img.banner}
          alt="Image Banner"
          fill
          className=" object-cover"
        />
      </div>
    </div>
  );
}
