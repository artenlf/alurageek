import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
  margin: 64px auto;
  z-index: 2;
`;

export default GridContainer;
