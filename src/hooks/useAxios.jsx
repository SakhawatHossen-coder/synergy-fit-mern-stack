import axios from "axios";

export let axiosCommon = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const useAxios = () => {
  return axiosCommon;
};

export default useAxios;
