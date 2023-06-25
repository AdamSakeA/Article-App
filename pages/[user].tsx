import { USER } from "@/config";
import React from "react";
import { ServerResponse } from "http";
import { UserInterface } from "@/src/interfaces/User";
import { Layout } from "@/src/components";
import Profile from "@/src/containers/user/profile";

interface UserProps {
  payload: UserInterface;
}

export default function UserPage({ payload }: UserProps) {
  return (
    <Layout title={payload.username}>
      <div className="container mx-auto pt-[150px]">
        <div className="flex flex-col-reverse md:grid grid-cols-8 gap-x-3">
          <div className=" col-span-5">
            <ul></ul>
            {/* <h1 className=" text-3xl font-semibold">{payload.data.name}</h1> */}
          </div>
          <aside className="col-span-3">
            <Profile payload={payload} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: {
  params: { [key: string]: string };
  res: ServerResponse;
}) {
  const { params, res } = context;
  const username = params.user;
  const user = USER;

  const payload = user.find((user) => user.username === username);

  if (!payload) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }
  return {
    props: { payload },
  };
}
