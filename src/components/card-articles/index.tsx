import { Articles } from "@/src/interfaces/Article";
import Image from "next/image";
import truncateText from "@/src/utils/truncateText";
import Button from "../button";
import Tooltip from "../tooltip";
import { USER } from "@/config";
import Link from "next/link";
import { useRouter } from "next/router";

interface CardArticleProps {
  article: Articles;
}

export default function CardArticle({ article }: CardArticleProps) {
  const router = useRouter();
  const dataArticle = article.data;
  const authorId = article.author.map((item) => item.id);
  const dataUser = USER.find((user) => authorId.includes(user.id));

  const navigateTo = (tag: string) => {
    const url = `/topic/${tag}`;
    router.push(url);
  };

  const topics = dataArticle.topic.map((item, i) => {
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
        <Tooltip payload={dataUser}>
          <div className="flex w-fit items-center gap-2 cursor-pointer">
            <Image
              src={dataUser?.data.profile_img.user || ""}
              alt={dataUser?.username || ""}
              width={20}
              height={20}
              className=" object-cover rounded-full"
            />
            <Link
              href={`/${dataUser?.username}`}
              className="font-semibold text-gray-500 text-sm w-fit"
            >
              {dataUser?.data.name}
            </Link>
          </div>
        </Tooltip>
        <div>
          <h1 className="font-bold text-md md:text-lg">
            {truncateText(dataArticle.title, 45)}
          </h1>
        </div>
        <p className="hidden font-light text-md text-gray-500 md:block md:text-sm">
          {truncateText(dataArticle.articleDescription, 80)}
        </p>
        <div className="flex items-center mt-[20px] gap-5">
          <p className="text-xs font-light">{dataArticle.createdAt}</p>
          <div className="flex flex-wrap gap-2">{topics}</div>
        </div>
      </div>
      <div className="w-[200px] h-[100px] relative md:h-[150px]">
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
