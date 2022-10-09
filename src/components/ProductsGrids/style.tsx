import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  gap: 64px 16px;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
  z-index: 2;
`;

export default GridContainer;
