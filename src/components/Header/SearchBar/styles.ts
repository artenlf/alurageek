import styled from "styled-components";

const SearchBarWrapper = styled.div`
  align-items: center;
  background: #f5f5f5;
  border-radius: 20px;
  display: flex;
  height: 40px;
  padding: 0 16px;
  width: 393px;
`;

const SearchBarInput = styled.input`
  background: none;
  border: none;
  height: 40px;
  outline: none;
  width: 100%;
  ::placeholder {
    color: #a2a2a2;
    font-family: Raleway, sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;

export { SearchBarWrapper, SearchBarInput };
