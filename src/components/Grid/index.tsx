import styled from "styled-components";
import Wrapper from "../Wrapper";
import Product from "./Product";
import TitleRow from "./TitleRow";
import product from "./Product/product.json";

type Props = typeof product[0];

const GridContainer = styled.div`
  background-color: white; //delete this line
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 64px auto;
  height: 306px;
  width: 1136px;
`;

const Grid = (props: Props) => {
  return (
    <Wrapper>
      <GridContainer>
        <TitleRow />
        {product.map((item, index) => (
          <Product key={item.id} title={item.title} price={item.price} picture={item.picture} id={item.id} category={item.category} />
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default Grid;
