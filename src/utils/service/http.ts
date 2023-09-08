import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";

const Http = axios.create({
  baseURL: "http://localhost:7000/",
  headers: {
    "Content-Type": "application/json",
  },
});

Http.interceptors.request.use(async (req: AxiosRequestConfig) => {
  if (req?.headers?.Authorization) {
    return req.headers.Authorization;
  }
  return req;
});

Http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default Http;
