// import { useSession, signIn } from "next-auth/react";
import { Layout } from "@/src/components";
import Home from "@/src/containers/home";

export default function HomePage() {
  return (
    <Layout title="Home Page">
      <Home />
    </Layout>
  );
}
