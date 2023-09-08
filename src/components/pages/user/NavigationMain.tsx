import { EnumMainType } from "@/src/interfaces/EnumMainType";
import { Dispatch, SetStateAction } from "react";
import { UserInterface } from "@/src/interfaces/User";

interface NavigateMainProps {
  payload?: UserInterface;
  setMainType: Dispatch<SetStateAction<string>>;
}

export default function NavigationMain({ setMainType, payload }: NavigateMainProps) {
  const changeFieldMain = (name: string) => {
    setMainType(name);
  };

  return (
    <>
      <ul className="flex items-center gap-5 mx-[0px] md:mx-[20px]">
        <li
          className="cursor-pointer p-3 bg-slate-500"
          onClick={() => changeFieldMain(EnumMainType.Home)}
        >
          {EnumMainType.Home}
        </li>
        <li className="cursor-pointer" onClick={() => changeFieldMain(EnumMainType.About)}>
          {EnumMainType.About}
        </li>
        <li
          className={` cursor-pointer ${payload?.data?.books?.length !== 0 ? "block" : "hidden"}`}
          onClick={() => changeFieldMain(EnumMainType.Books)}
        >
          {EnumMainType.Books}
        </li>
        <li
          className={` cursor-pointer ${payload?.data?.lists?.length !== 0 ? "block" : "hidden"}`}
          onClick={() => changeFieldMain(EnumMainType.Lists)}
        >
          {EnumMainType.Lists}
        </li>
      </ul>
    </>
  );
}
