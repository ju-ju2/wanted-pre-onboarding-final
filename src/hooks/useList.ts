import { useEffect, useState } from "react";
import { getSickApi } from "../apis/getSickApi";

export const useList = (keyword: string) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getSickList = async () => {
      try {
        await getSickApi(keyword).then((res) => setList(res));
      } catch (err) {
        console.log(err);
      }
    };
    getSickList();
  }, [keyword]);
  return list;
};
