import { useState, ChangeEvent } from "react";
import { CustomInput } from "@/src/components/input";
import { Button } from "@/src/components";
import Link from "next/link";

interface DataRegister {
  fullName?: string | null;
  username?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

export default function RegisterPages() {
  const [dataUser, setDataUser] = useState<DataRegister>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<DataRegister>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

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
      <p>Registration</p>
      <div className="container">
        <div className="mb-5">
          <CustomInput
            name="fullName"
            placeholder="FullName"
            required={true}
            type="text"
            error={error.fullName}
            value={dataUser.fullName!}
            onChange={onChangeData}
          />
        </div>
        <div className="mb-5">
          <CustomInput
            name="username"
            placeholder="@Username"
            required={true}
            type="text"
            error={error.username}
            value={dataUser.username!}
            onChange={onChangeData}
          />
        </div>
        <div className="mb-5">
          <CustomInput
            name="email"
            placeholder="Email Address"
            required={true}
            type="text"
            error={error.email}
            value={dataUser.email!}
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
        <div className="mb-5">
          <CustomInput
            name="confirmPassword"
            placeholder="Confirm Password"
            required={true}
            type="password"
            error={error.confirmPassword}
            value={dataUser.confirmPassword!}
            onChange={onChangeData}
          />
        </div>
        <div className="flex gap-4 items-center my-3">
          <Button className="px-10" onClick={onSubmit}>
            Sign Up
          </Button>
          <p>
            Have an account ?
            <Link href="/auth/login" className=" ml-2 text-secondary  cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
