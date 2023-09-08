import { AuthInterface } from "@/src/interfaces/AuthInterface";
import Http from "@/src/utils/service/http";
import React, { useState, FormEvent } from "react";
import { setAuthCookie } from "@/src/utils/service/auth";

interface Login {
  email: string;
  password: string;
}

export default function Login() {
  const [data, setData] = useState<Login>({
    email: "" as string,
    password: "" as string,
  });

  const onChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await Http.post("/user/login", data, { withCredentials: true });

      const responseData: AuthInterface = {
        id: response.data.data.id,
        email: response.data.data.email,
        token: response.data.data.token,
      };

      //   setData({
      //     ...data,
      //     email: "",
      //     password: "",
      //   });

      setAuthCookie(responseData);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" onChange={onChange} value={data.email} />
        <input type="password" name="password" onChange={onChange} value={data.password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
