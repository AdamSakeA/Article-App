import { UserInterface } from "@/src/interfaces/User";
import formatNumber from "@/src/utils/formatNumber";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  payload: UserInterface;
}

export default function Profile({ payload }: ProfileProps) {
  const user = payload.data;

  return (
    <div>
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
    </div>
  );
}
