import { USER } from "@/config";
import { ServerResponse } from "http";
import { UserInterface } from "@/src/interfaces/User";
import { Layout } from "@/src/components";
import User from "@/src/containers/pages/user";

interface UserProps {
  payload: UserInterface;
}

export default function UserPage({ payload }: UserProps) {
  return (
    <Layout title={payload.username}>
      <div className="container mx-auto">
        <User payload={payload} />
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
