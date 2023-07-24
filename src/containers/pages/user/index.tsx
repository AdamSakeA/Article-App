import React from "react";
import { UserInterface } from "@/src/interfaces/User";
import { useState } from "react";
import Image from "next/image";
import Main from "./main";
import Profile from "./profile";

interface UserProps {
  payload: UserInterface;
}

export default function User({ payload }: UserProps) {
  const [mainType, setMainType] = useState<string>("Home");

  return (
    <div className="flex flex-col-reverse md:grid grid-cols-8 gap-x-3 px-[20px]">
      <div className=" col-span-5 mr-4 mb-[100px]">
        {payload.data.profile_img.background === "" ? null : (
          <div className="w-full h-[200px] relative mb-[30px] hidden md:block">
            <Image
              src={payload?.data.profile_img?.background || ""}
              alt={payload.data.name}
              fill
              className=" object-cover"
            />
          </div>
        )}
        <Main payload={payload} setMainType={setMainType} mainType={mainType} />
      </div>
      <aside className="col-span-3">
        <Profile payload={payload} />
      </aside>
    </div>
  );
}
