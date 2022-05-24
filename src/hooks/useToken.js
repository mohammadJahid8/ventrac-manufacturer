import { useEffect, useState } from "react";
import fetcher from "../Pages/Shared/api/axios.config";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      const res = fetcher.put(`/user/${email}`, currentUser);
      console.log(res);
    }
  }, [user]);
  return [token];
};

export default useToken;
