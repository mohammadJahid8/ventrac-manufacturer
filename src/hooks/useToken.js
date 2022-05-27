import { useEffect, useState } from "react";
import fetcher from "../Pages/Shared/api/axios.config";
// import auth from "../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";

const useToken = (user) => {
  const [token, setToken] = useState("");
  // const [user1] = useAuthState(auth);

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      const res = fetcher.put(`/user/${email}`, currentUser);
      res.then((response) => {
        const accessToken = response.data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
    }
  }, [user, setToken]);
  return [token];
};

export default useToken;
