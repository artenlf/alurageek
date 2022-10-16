import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const CategoryRowWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: span 6;
  justify-content: space-between;
  height: 38px;
`;

const TextFieldWrapper = styled.div`
  margin: 8px auto;
  width: 560px;
`;

export { Wrapper, CategoryRowWrapper, TextFieldWrapper };
