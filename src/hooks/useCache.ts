import { useState } from "react";

interface CacheData {
  sickCd: string;
  sickNm: string;
}

interface CacheType {
  [key: string]: CacheData[];
}

export const useCache = () => {
  const [cache, setCache] = useState<CacheType>({});

  const put = (keyword: string, data: CacheData[]) => {
    setCache((prev) => ({ ...prev, [keyword]: data }));

    if (Object.keys(cache).length >= 10) {
      const oldestKey = Object.keys(cache)[0];
      const { [oldestKey]: _, ...newCache } = cache;
      setCache(newCache);
    }
  };
  return { cache, put };
};
