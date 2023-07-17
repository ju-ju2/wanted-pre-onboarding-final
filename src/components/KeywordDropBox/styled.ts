import { SearchOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 60px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`;

export const SearchTitle = styled.p`
  color: grey;
  margin: 10px 0;
`;

export const CommendedList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 10px 0;
  font-size: 18px;
  color: black;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const SearchIcon = styled(SearchOutlined)`
  color: black;
`;
export const RowList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const EmptyText = styled.p`
  color: black;
  margin-top: 10px;
`;
