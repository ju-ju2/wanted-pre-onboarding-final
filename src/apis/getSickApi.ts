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
    if (cache[keyword]) {
      console.log("캐싱된 데이터");
      return cache[keyword];
    }
    const res = await axios.get(`http://localhost:4000/sick?q=${keyword}`);
    const data = res.data;
    console.log("캐싱이 안된 새 데이터");
    cache[keyword] = data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
