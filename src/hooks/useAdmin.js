import { useEffect, useState } from "react";
import fetcher from "../Pages/Shared/api/axios.config";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;

    if (email) {
      const res = fetcher.get(`/admin/${email}`);
      res.then((response) => {
        setAdmin(response.data.admin);
        setAdminLoading(false);
      });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
