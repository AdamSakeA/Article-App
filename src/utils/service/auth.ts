import { AuthInterface } from "@/src/interfaces/AuthInterface";

const GetAuth = (): AuthInterface | null => {
  if (typeof window !== "undefined") {
    const adminString = localStorage.getItem("adminData_apps");
    if (adminString) {
      const admin: AuthInterface = JSON.parse(adminString);
      return admin;
    }
  }
  return null;
};

const SetAuth = (data: AuthInterface) => {
  const adminString = JSON.stringify(data);

  localStorage.setItem("adminData_apps", adminString);
};

const RemoveAuth = () => {
  const adminString = localStorage.getItem("adminData_apps");

  if (adminString) {
    localStorage.removeItem("adminData_apps");
  }
};

export { GetAuth, SetAuth, RemoveAuth };
