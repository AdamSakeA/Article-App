import { Button } from "@/src/components";
import { UserInterface } from "@/src/interfaces/User";
import formatNumber from "@/src/utils/formatNumber";
import Image from "next/image";
import React from "react";
import { TbMessages } from "react-icons/tb";

interface ProfileProps {
  payload: UserInterface;
}

export default function Profile({ payload }: ProfileProps) {
  const user = payload.data;

  return (
    <div className="sticky z-[-99] top-[100px] my-[50px] md:mx-[20px]">
      <Image
        src={user.profile_img.user}
        alt={user.name}
        width={100}
        height={50}
        className="rounded-full object-cover"
      />
      <h1 className=" text-lg font-semibold mt-4">{user.name}</h1>
      <h2 className=" text-gray-500 mb-4">
        {formatNumber(user.followers)} Followers
      </h2>
      <p className=" text-sm text-gray-500">{user.bio}</p>
      <div className=" flex gap-4 mt-[20px]">
        <Button className=" bg-yellow-600 px-5 text-sm">Follow</Button>
        <Button className=" bg-yellow-600 px-3 text-lg">
          <TbMessages />
        </Button>
      </div>
    </div>
  );
}
