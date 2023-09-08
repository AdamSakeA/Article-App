import { useState, ChangeEvent } from "react";
import { CustomInput } from "@/src/components/input";
import { Button } from "@/src/components";
import { TextValidation, PasswordValidation, EmailValidation } from "@/src/utils/inputValidation";
import Link from "next/link";

interface DataRegister {
  username?: string | null;
  email?: string | null;
  password?: string | null;
}

export default function RegisterPages() {
  const [dataUser, setDataUser] = useState<DataRegister>({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<DataRegister>({
    username: "",
    email: "",
    password: "",
  });

  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    if(name === "email") {
      
    }
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log(dataUser);
  };

  return (
    <div className="">
      <p>Login</p>
      <div className="container">
        <div className="mb-5">
          <CustomInput
            name="username"
            placeholder="@Username or e-mail"
            required={true}
            type="text"
            error={error.username}
            value={dataUser.username!}
            onChange={onChangeData}
          />
        </div>
        <div className="mb-5">
          <CustomInput
            name="password"
            placeholder="Password"
            required={true}
            type="password"
            error={error.password}
            value={dataUser.password!}
            onChange={onChangeData}
          />
        </div>
        <div className="flex gap-4 items-center my-3">
          <Button className="px-10" onClick={onSubmit}>
            Login
          </Button>
          <p>
            Don&lsquo;t Have an account ?
            <Link href="/auth/register" className=" ml-2 text-secondary  cursor-pointer">
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import { NextPage } from "next";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// const LoginPages: NextPage = (props): JSX.Element => {
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });
//   const { status } = useSession();
//   const router = useRouter();

//   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();

//     const res = await signIn("credentials", {
//       email: userInfo.email,
//       password: userInfo.password,
//       redirect: false,
//     });
//     if (res?.ok) {
//       // Redirect to the About page
//       router.push("/about");
//     } else {
//       // Handle login error
//       console.log(res?.error);
//     }
//   };

//   if (status === "authenticated") {
//     router.replace("/about");
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input
//           value={userInfo.email}
//           onChange={({ target }) =>
//             setUserInfo({ ...userInfo, email: target.value })
//           }
//           type="email"
//           placeholder="me@gmail.com"
//         />
//         <input
//           value={userInfo.password}
//           onChange={({ target }) =>
//             setUserInfo({ ...userInfo, password: target.value })
//           }
//           type="password"
//           placeholder="******"
//         />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// export default LoginPages;
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
