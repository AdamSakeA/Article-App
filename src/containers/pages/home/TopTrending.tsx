import { CardTopTrending } from "@/src/components/pages/home/";
import { TopTrendingInterface } from "@/src/interfaces/TopTrending";

interface TopTrendingProps {
  payload: TopTrendingInterface[];
}

export default function TopTrending(props: TopTrendingProps) {
  const { payload } = props;

  const showTopTrending = payload.map((item, i) => <CardTopTrending key={i} payload={item} />);

  return (
    <>
      <h1 className=" mb-[10px] font-bold text-xl  font-serif ">Hot Trending on Favs</h1>
      <hr />
      <div className="mt-[20px] flex flex-col gap-5 flex-wrap md:flex-row  lg:justify-center ">
        {showTopTrending}
      </div>
    </>
  );
}
