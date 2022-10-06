import styled from "styled-components";

const CategoryRowWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: span 6;
  justify-content: space-between;
  height: 38px;
  margin-top: 64px;
`;

const Link = styled.a`
  align-items: center;
  color: #2a7ae4;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  :hover {
    transform: scale(110%);
  }
`;

export { CategoryRowWrapper, Link };
