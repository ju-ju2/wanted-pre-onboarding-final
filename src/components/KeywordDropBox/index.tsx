import {
  CommendedList,
  EmptyText,
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
}
export default function KeywordDropBox({ list, keyword }: SickDataProps) {
  return (
    <>
      {keyword && (
        <Wrapper>
          <SearchTitle>추천 검색어</SearchTitle>
          {list.length !== 0 ? (
            <CommendedList>
              {list.map((el) => (
                <RowList key={el.sickCd}>
                  <SearchIcon />
                  <ListItem>{el.sickNm}</ListItem>
                </RowList>
              ))}
            </CommendedList>
          ) : (
            <EmptyText>추천 검색어가 없습니다.</EmptyText>
          )}
        </Wrapper>
      )}
    </>
  );
}
