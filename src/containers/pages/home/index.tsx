import Button from "@/src/components/button";
import DiscoverTopics from "./discover-topics";
import TopTrendingSection from "./top-trending";
import { ARTICLES, TOP_TRENDING, TOPICS } from "@/config";
import ListArticle from "./list-article";

export default function Home() {
  return (
    <>
      <div className="py-[200px] px-[20px] w-full h-full bg-stone-100 lg:px-[100px]">
        <div className="">
          <h1 className="font-bold text-4xl mb-5">
            Article Publish for our networks
          </h1>
          <p className="w-full md:w-[500px] lg:w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            neque quae ex molestiae repellendus delectus temporibus autem rerum
            vitae labore?
          </p>
          <Button className="px-[40px] mt-[20px] hover:shadow-yellow-300 ">
            Get Started
          </Button>
        </div>
      </div>
      <div className="mx-[20px] my-[100px] lg:mx-[100px]">
        <TopTrendingSection payload={TOP_TRENDING} />
      </div>
      <div className="container mx-auto px-[20px] lg:px-[100px]">
        <div className="flex flex-col-reverse md:grid grid-cols-8 gap-x-4">
          <div className=" col-span-5">
            <ListArticle payload={ARTICLES} />
          </div>
          <aside className="col-span-3">
            <DiscoverTopics payload={TOPICS} />
          </aside>
        </div>
      </div>
    </>
  );
}
