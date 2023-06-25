import React, { ReactElement, JSXElementConstructor } from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import Button from "../button";
import { UserInterface } from "@/src/interfaces/User";
import formatNumber from "@/src/utils/formatNumber";
import Link from "next/link";

interface TooltipProps {
  payload?: UserInterface;
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function Tooltip({ payload, children }: TooltipProps) {
  const Content = () => {
    return (
      <div className="p-2">
        <div className="flex gap-3 mb-4">
          {payload?.data.profile_img.user ? (
            <Image
              src={payload?.data.profile_img.user}
              alt="test"
              width={40}
              height={40}
              className=" object-cover rounded-full"
            />
          ) : null}
          <div>
            <Link href={`/${payload?.username}`} className=" font-bold text-lg">
              {payload?.data.name}
            </Link>
            <p className=" font-light text-xs text-gray-600">
              {payload?.data.bio}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-2">
          <h2 className=" text-sm text-gray-400">
            Followers {formatNumber(payload?.data.followers || 0)}
          </h2>
          <Button className="px-4 text-xs font-light bg-yellow-500">
            Follow
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Tippy
        content={<Content />}
        animation="fade"
        theme="light"
        placement="right"
        interactive
        interactiveBorder={10}
      >
        {children}
      </Tippy>
    </>
  );
}
