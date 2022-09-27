import styled from "styled-components";
import Wrapper from "../Wrapper";
import TitleRow from "./TitleRow";

const GridContainer = styled.div`
  background-color: white; //delete this line
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 0 auto;
  height: 306px;
  width: 1136px;
`;

const Grid = () => {
  return (
    <Wrapper>
      <GridContainer>
        <TitleRow />
      </GridContainer>
    </Wrapper>
  );
};

export default Grid;
