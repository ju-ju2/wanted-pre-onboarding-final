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
import KeywordDropBox from "../../components/KeywordDropBox";

export default function Sick() {
  const [sickKeyword, setSickKeyword] = useState("");
  const [keyword, setKeyword] = useState("");
  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSickKeyword(keyword);
    }, 300);
    return () => clearTimeout(timer);
  }, [keyword]);

  const list = useList(sickKeyword);
  useEffect(() => {
    if (list.length > 0) console.log(list);
  }, [list]);

  const [isFocus, setFocus] = useState(false);

  return (
    <>
      <BackgroundContainer>
        <Title>임상시험 찾기</Title>
        <SearchContainer>
          <SearchInput
            onChange={changeKeyword}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <SearchOutlined />
          <KeywordDropBox list={list} isFocus={isFocus} />
        </SearchContainer>
      </BackgroundContainer>
      <BackgroundImg></BackgroundImg>
    </>
  );
}
