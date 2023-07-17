import axios from "axios";
import { useCache } from "../hooks/useCache";

export const SickApi = () => {
  const { cache, put } = useCache();
  const getSickApi = async (keyword: string) => {
    try {
      if (cache[keyword]) {
        return cache[keyword];
      }
      const res = await axios.get(`http://localhost:4000/sick?q=${keyword}`);
      const data = res.data;
      console.info("calling api");
      put(keyword, data);

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return getSickApi;
};
