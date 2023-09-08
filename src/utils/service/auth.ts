import { AuthInterface } from "@/src/interfaces/AuthInterface";
import { serialize, parse } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

// const GetAuth = (): AuthInterface | null => {
//   if (typeof window !== "undefined") {
//     const adminString = localStorage.getItem("adminData_apps");
//     if (adminString) {
//       const admin: AuthInterface = JSON.parse(adminString);
//       return admin;
//     }
//   }
//   return null;
// };

const getAuthCookie = (req: NextApiRequest) => {
  const cookies = parse(req.headers.cookie || "");
  const adminString = cookies.adminData_apps || null;

  if (adminString) {
    try {
      const adminData = JSON.parse(adminString);
      return adminData;
    } catch (error) {
      console.error("Gagal mengurai data autentikasi dari cookie:", error);
    }
  }

  return null;
};

const setAuthCookie = (data: AuthInterface) => {
  const adminString = JSON.stringify(data);

  // Mengatur cookie dengan nama "adminData_apps"
  const authCookie = serialize("adminData_apps", adminString, {
    maxAge: 3600, // Durasi cookie dalam detik (contoh: 1 jam)
    httpOnly: true, // Cookie hanya dapat diakses melalui HTTP
    path: "/", // Sesuaikan dengan path yang sesuai
  });

  // Menyertakan cookie dalam respons HTTP
  return authCookie;
  // res.setHeader("Set-Cookie", authCookie);
};

// const SetAuth = (data: AuthInterface) => {
//   const adminString = JSON.stringify(data);
//   localStorage.setItem("adminData_apps", adminString);
// };

const RemoveAuth = () => {
  const adminString = localStorage.getItem("adminData_apps");
  if (adminString) {
    localStorage.removeItem("adminData_apps");
  }
};

export { getAuthCookie, RemoveAuth, setAuthCookie };
