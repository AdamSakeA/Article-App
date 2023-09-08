import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";

const Http = axios.create({
  baseURL: "http://localhost:7000/",
  headers: {
    "Content-Type": "application/json",
  },
});

interface AuthInterface {
  id: string;
  email: string;
  token: string;
}

Http.interceptors.request.use(
  async (req: AxiosRequestConfig) => {
    const autHeader = req.headers?.Authorization;
    const currentToken = autHeader && autHeader.toString().split(" ")[1];
    const decode: any = currentToken && jwtDecode(currentToken);
    const expired = decode?.exp;

    const currentDate = new Date();

    if (expired * 1000 < currentDate.getTime()) {
      const resData = await Http.get("http://localhost:7000/admin/refresh-token", {
        withCredentials: true,
      });

      const response: AuthInterface = {
        id: resData.data.data.id,
        email: resData.data.data.email,
        token: resData.data.data.token,
      };

      req!.headers!.Authorization = `Bearer ${resData.data.data.token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default Http;
