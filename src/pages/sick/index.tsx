import {
  BackgroundContainer,
  BackgroundImg,
  SearchInput,
  SearchContainer,
  Title,
} from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import { ChangeEvent, useEffect, useState } from "react";
import { useList } from "../../hooks/useList";

export default function Sick() {
  const [sickKeyword, setSickKeyword] = useState("");
  const [changeKeyword, setChangeKeyword] = useState("");
  const changeSickApi = (e: ChangeEvent<HTMLInputElement>) => {
    setChangeKeyword(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSickKeyword(changeKeyword);
    }, 300);
    return () => clearTimeout(timer);
  }, [changeKeyword]);

  const list = useList(sickKeyword);
  useEffect(() => {
    if (list.length > 0) console.log(list);
  }, [list]);
  return (
    <>
      <BackgroundContainer>
        <Title>임상시험 찾기</Title>
        <SearchContainer>
          <SearchInput onChange={changeSickApi} />
          <SearchOutlined />
        </SearchContainer>
      </BackgroundContainer>
      <BackgroundImg></BackgroundImg>
    </>
  );
}
