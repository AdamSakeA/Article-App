import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

const AboutPage: NextPage = (): JSX.Element => {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "loading") return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Hello {data?.user?.name}</h1>
    </div>
  );
};

export default AboutPage;
