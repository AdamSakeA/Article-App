import React from "react";
import { Article } from "@/src/interfaces/Article";
import { useRouter } from "next/router";
import { Button } from "@/src/components";
import truncateText from "@/src/utils/truncateText";
import Image from "next/image";

interface CardArticleMainProps {
  article?: Article;
}

export default function CardArticleMain({ article }: CardArticleMainProps) {
  const router = useRouter();

  const navigateTo = (tag: string) => {
    const url = `/topic/${tag}`;
    router.push(url);
  };

  const topics = article?.topic.map((item, i) => {
    return (
      <>
        <Button
          key={i}
          variant="secondary"
          className="hidden px-[10px] py-1 text-xs font-light hover:bg-gray-400 hover:text-white lg:block"
          onClick={() => navigateTo(item)}
        >
          {item}
        </Button>
      </>
    );
  });

  return (
    <div className="flex gap-4 mb-[50px]">
      <div>
        <h1 className="font-bold text-md md:text-lg">{truncateText(article?.title || "", 45)}</h1>
        <p className="hidden font-light text-md text-gray-500 md:block md:text-sm">
          {truncateText(article?.articleDescription || "", 80)}
        </p>
        <div className="flex items-center mt-[20px] gap-5">
          <p className="text-xs font-light">{article?.createdAt}</p>
          <div className="flex flex-wrap gap-2">{topics}</div>
        </div>
      </div>
      <div className="w-[200px] h-[100px] relative md:h-[150px]">
        <Image src={article?.img.banner || ""} alt="Image Banner" fill className=" object-cover" />
      </div>
    </div>
  );
}
