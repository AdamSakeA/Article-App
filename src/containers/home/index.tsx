import Button from "@/src/components/button";
import DiscoverTopics from "./discover-topics";
import TopTrendingSection from "./top-trending";
import { ARTICLES, TOP_TRENDING, TOPICS } from "@/config";
import ListArticle from "./list-article";

export default function Home() {
  return (
    <>
      <div className="py-[100px] px-[20px] w-full h-full bg-stone-100 lg:px-[100px]">
        <div className="">
          <h1 className="font-bold text-4xl mb-5">
            Article Publish for our networks
          </h1>
          <p className="w-full md:w-[500px] lg:w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            neque quae ex molestiae repellendus delectus temporibus autem rerum
            vitae labore?
          </p>
          <Button className="mt-[20px] hover:shadow-yellow-300 ">
            Get Started
          </Button>
        </div>
      </div>
      <TopTrendingSection payload={TOP_TRENDING} />
      <div className="flex container mx-auto gap-4">
        <ListArticle payload={ARTICLES} />
        <DiscoverTopics payload={TOPICS} />
      </div>
    </>
  );
}
