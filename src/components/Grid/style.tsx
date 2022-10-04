import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
  margin: 0 auto 64px;
  width: 1136px;
  z-index: 2;
`;

export default GridContainer;
