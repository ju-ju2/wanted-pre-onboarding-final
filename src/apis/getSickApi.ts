import axios from "axios";

interface CacheData {
  sickCd: string;
  sickNm: string;
}

interface CacheType {
  [key: string]: CacheData[];
}

const cache: CacheType = {};

export const getSickApi = async (keyword: string) => {
  try {
    const res = await axios.get(`http://localhost:4000/sick?q=${keyword}`);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
