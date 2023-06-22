import React, { useState } from "react";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { status } = useSession();
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.ok) {
      // Redirect to the About page
      router.push("/about");
    } else {
      // Handle login error
      console.log(res?.error);
    }
  };

  if (status === "authenticated") {
    router.replace("/about");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="me@gmail.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="******"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
// export default function signinPage() {
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });
//   return (
//     <div>
//       <form>
//         <h1>Login</h1>
//         <input value={userInfo.email} type="email" placeholder="me@gmail.com" />
//         <input type="password" placeholder="******" />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// }
