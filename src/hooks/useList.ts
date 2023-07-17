import { useEffect, useState } from "react";
import { getSickApi } from "../apis/getSickApi";

export const useList = (keyword: string) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getSickList = async () => {
      try {
        const res = await getSickApi(keyword);
        if (res.length > 10) {
          setList(res.slice(0, 10));
        } else {
          setList(res);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (keyword.length > 0) {
      getSickList();
    } else {
      setList([]);
    }
  }, [keyword]);
  return list;
};
