import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  axiosSecure.interceptors.request.use(
  function  (config)  {
      const token = localStorage.getItem("accessToken");
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  //intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
   function (response)  {
      return response;
    },
    async (error) => {
      let status = error.response?.status;
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
