import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: "1",
    name: "J Smith",
    email: "jsmith@example.com",
    username: "jsmith",
    password: "password1",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe",
    password: "password2",
  },
];

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const data = users.find(
          (user) => user.email === email && user.password === password
        );

        if (email !== data?.email || password !== data?.password) {
          throw new Error("Invalid email or password");
        }

        return data;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
