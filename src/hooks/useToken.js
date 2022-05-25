import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import fetcher from "../Pages/Shared/api/axios.config";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      const res = fetcher.put(`/user/${email}`, currentUser);
      res.then((response) => {
        console.log(response);
        const accessToken = response.data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
    }
  }, [user]);
  return [token];
};

export default useToken;
