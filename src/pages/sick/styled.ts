import { styled } from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(50%);
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;

export const SearchContainer = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
  position: relative;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 16px;
  color: white;
  &:focus {
    outline: none;
  }
`;
