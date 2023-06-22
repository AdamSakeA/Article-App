import React from "react";

type TopTrending = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
};

interface CardTopTrendingProps {
  payload: TopTrending;
}

export default function CardTopTrending(props: CardTopTrendingProps) {
  const { payload } = props;
  return (
      <div className="w-full lg:w-[400px] p-[20px] bg-white shadow-md md:w-[300px] ">
        <p className="text-sm font-medium mb-2">Profile: {payload.author}</p>
        <h1 className="font-bold truncate">{payload.title}</h1>
        <p className="text-sm font-light text-gray-500 mt-3">
          {payload.createdAt}
        </p>
      </div>
  );
}
