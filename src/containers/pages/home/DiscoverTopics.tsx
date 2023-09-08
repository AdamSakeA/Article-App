import { Button } from "@/src/components";

type Topic = {
  id: number;
  topicName: string;
};

interface DiscoverTopicsProps {
  payload: Topic[];
}

export default function DiscoverTopics({ payload }: DiscoverTopicsProps) {
  const showTopics = payload.map((item, i) => (
    <Button
      key={i}
      variant="secondary"
      className="hover:bg-slate-800 hover:text-white transition-colors w-fit text-sm px-[15px]"
    >
      {item.topicName}
    </Button>
  ));

  return (
    <div className="sticky top-[110px] mb-[100px]">
      <h1 className="mb-[10px] font-bold text-xl px-[20px]">
        Discover more topics of matters to you
      </h1>
      <hr />
      <div className="mt-[20px] flex gap-5 px-[20px] md:flex-row flex-wrap justify-start">
        {showTopics}
      </div>
      <p className="text-gray-600 text-sm font-light w-fit my-[20px] px-[20px] cursor-pointer hover:text-black transition-colors">
        Discover more topics
      </p>
    </div>
  );
}
