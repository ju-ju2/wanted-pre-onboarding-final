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
import { useFocusIndex } from "../../hooks/useFocusIndex";

export default function Sick() {
  const { keyword, setKeyword, debouncedKeyword } = useDebounce();

  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setFocusIndex(-1);
  };

  const list = useList(debouncedKeyword);

  const { changeFocusIndex, focusIndex, setFocusIndex } = useFocusIndex(
    list.length
  );
  return (
    <>
      <BackgroundContainer>
        <Title>임상시험 찾기</Title>
        <SearchContainer>
          <SearchInput onChange={changeKeyword} onKeyDown={changeFocusIndex} />
          <SearchOutlined />
          <KeywordDropBox
            list={list}
            keyword={keyword}
            focusIndex={focusIndex}
          />
        </SearchContainer>
      </BackgroundContainer>
      <BackgroundImg></BackgroundImg>
    </>
  );
}
