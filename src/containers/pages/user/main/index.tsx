import { EnumMainType } from "@/src/interfaces/EnumMainType";
import { Dispatch, SetStateAction } from "react";
import { NavigationMain } from "@/src/components/pages/user";
import { UserInterface } from "@/src/interfaces/User";
import { CardArticleMain, AboutMain } from "@/src/components/pages/user/";
import ListArticleMain from "../list-article-main";

interface MainProps {
  payload?: UserInterface;
  setMainType: Dispatch<SetStateAction<string>>;
  mainType: string;
}

export default function Main({ payload, setMainType, mainType }: MainProps) {
  let showUserMain;
  if (mainType === EnumMainType.Home) {
    showUserMain = <ListArticleMain payload={payload?.data.article} />;
  }
  if (mainType === EnumMainType.About) {
    showUserMain = <AboutMain />;
  }

  return (
    <>
      <NavigationMain payload={payload} setMainType={setMainType} />
      <hr />
      {payload?.data?.books?.length !== 0 ? <h1>punya buku</h1> : null}
      <div className="px-[20px] my-[50px]">{showUserMain}</div>
    </>
  );
}
