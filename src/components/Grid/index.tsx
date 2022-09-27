import styled from "styled-components";
import Wrapper from "../Wrapper";
import Product from "./Product";
import TitleRow from "./TitleRow";

const GridContainer = styled.div`
  background-color: white; //delete this line
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 64px auto;
  height: 306px;
  width: 1136px;
`;

const Grid = () => {
  return (
    <Wrapper>
      <GridContainer>
        <TitleRow />
        <Product />
      </GridContainer>
    </Wrapper>
  );
};

export default Grid;
