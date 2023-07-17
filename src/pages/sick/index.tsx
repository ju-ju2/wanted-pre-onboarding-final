import {
  BackgroundContainer,
  BackgroundImg,
  SearchInput,
  SearchContainer,
  Title,
} from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import { ChangeEvent, useState } from "react";
import { useList } from "../../hooks/useList";
import KeywordDropBox from "../../components/KeywordDropBox";
import { useDebounce } from "../../hooks/useDebounce";

export default function Sick() {
  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const { setKeyword, debouncedKeyword } = useDebounce();

  const list = useList(debouncedKeyword);

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
