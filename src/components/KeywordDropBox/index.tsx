import {
  CommendedList,
  ListItem,
  RowList,
  SearchIcon,
  SearchTitle,
  Wrapper,
} from "./styled";

interface SickData {
  sickCd: string;
  sickNm: string;
}
interface SickDataProps {
  list: SickData[];
  keyword: string;
  focusIndex: number;
}
export default function KeywordDropBox({
  list,
  keyword,
  focusIndex,
}: SickDataProps) {
  return (
    <>
      {keyword && (
        <Wrapper>
          <SearchTitle>추천 검색어</SearchTitle>
          <CommendedList>
            <RowList focus={focusIndex === -1}>
              <SearchIcon />
              <ListItem style={{ color: "gray" }}>{keyword} 검색</ListItem>
            </RowList>
            {list.length !== 0 &&
              list.map((el, index) => (
                <RowList key={el.sickCd} focus={focusIndex === index}>
                  <SearchIcon />
                  <ListItem>{el.sickNm}</ListItem>
                </RowList>
              ))}
          </CommendedList>
        </Wrapper>
      )}
    </>
  );
}
