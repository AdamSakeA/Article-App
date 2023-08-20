import { USER } from "@/config";
import Image from "next/image";
import { TopTrendingInterface } from "@/src/interfaces/TopTrending";

// type TopTrending = {
//   id: number;
//   user_id: number;
//   title: string;
//   author: string;
//   createdAt: string;
// };

interface CardTopTrendingProps {
  payload: TopTrendingInterface;
}

export default function CardTopTrending(props: CardTopTrendingProps) {
  const { payload } = props;

  const user = USER.find((item) => payload.user_id === item.id);
  const dataUser = user?.data;

  return (
    <div className="w-full lg:w-[400px] p-[20px] bg-white shadow-md md:w-[300px] ">
      <div className=" flex items-center gap-2 mb-2">
        <Image
          src={dataUser?.profile_img.user || ""}
          alt={dataUser?.name || ""}
          className=" rounded-full"
          width={20}
          height={20}
        />
        <p className="text-sm font-medium">{user?.data.name}</p>
      </div>
      <h1 className="font-bold truncate">{payload.title}</h1>
      <p className="text-sm font-light text-gray-500 mt-3">
        {payload.createdAt}
      </p>
    </div>
  );
}
