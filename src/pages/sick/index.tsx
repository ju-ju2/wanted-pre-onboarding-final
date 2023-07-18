import {
  BackgroundContainer,
  BackgroundImg,
  SearchInput,
  SearchContainer,
  Title,
} from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import { ChangeEvent } from "react";
import { useList } from "../../hooks/useList";
import KeywordDropBox from "../../components/KeywordDropBox";
import { useDebounce } from "../../hooks/useDebounce";

export default function Sick() {
  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const { keyword, setKeyword, debouncedKeyword } = useDebounce();

  const list = useList(debouncedKeyword);

  return (
    <>
      <BackgroundContainer>
        <Title>임상시험 찾기</Title>
        <SearchContainer>
          <SearchInput onChange={changeKeyword} />
          <SearchOutlined />
          <KeywordDropBox list={list} keyword={keyword} />
        </SearchContainer>
      </BackgroundContainer>
      <BackgroundImg></BackgroundImg>
    </>
  );
}
