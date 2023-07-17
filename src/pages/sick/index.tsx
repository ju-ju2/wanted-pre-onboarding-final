import {
  BackgroundContainer,
  BackgroundImg,
  SearchInput,
  SearchContainer,
  Title,
} from "./styled";
import { SearchOutlined } from "@ant-design/icons";

export default function Sick() {
  return (
    <>
      <BackgroundContainer>
        <Title>임상시험 찾기</Title>
        <SearchContainer>
          <SearchInput />
          <SearchOutlined />
        </SearchContainer>
      </BackgroundContainer>
      <BackgroundImg></BackgroundImg>
    </>
  );
}
