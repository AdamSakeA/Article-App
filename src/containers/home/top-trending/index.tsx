import React from "react";
import CardTopTrending from "@/src/components/card-top-trending";

type Article = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
};

interface TopTrendingSectionProps {
  payload: Article[];
}

export default function TopTrendingSection(props: TopTrendingSectionProps) {
  const { payload } = props;

  const showTopTrending = payload.map((item, i) => (
    <CardTopTrending key={i} payload={item} />
  ));

  return (
    <div className="container mx-auto m-[100px]">
      <h1 className="mb-[10px] font-bold text-xl px-[20px]">
        Hot Trending on Adam
      </h1>
      <hr />
      <div className="mt-[20px] flex flex-col gap-5 px-[20px] md:flex-row flex-wrap justify-center">
        {showTopTrending}
      </div>
    </div>
  );
}
