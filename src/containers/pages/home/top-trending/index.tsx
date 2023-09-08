import CardTopTrending from "@/src/components/pages/home/card-top-trending";
import { TopTrendingInterface } from "@/src/interfaces/TopTrending";

interface TopTrendingSectionProps {
  payload: TopTrendingInterface[];
}

export default function TopTrendingSection(props: TopTrendingSectionProps) {
  const { payload } = props;

  const showTopTrending = payload.map((item, i) => (
    <CardTopTrending key={i} payload={item} />
  ));

  return (
    <>
      <h1 className=" mb-[10px] font-bold text-xl  font-serif ">
        Hot Trending on Favs
      </h1>
      <hr />
      <div className="mt-[20px] flex flex-col gap-5 flex-wrap md:flex-row  lg:justify-center ">
        {showTopTrending}
      </div>
    </>
  );
}
