import styled from "styled-components";
import Wrapper from "../Wrapper";
import Product from "./Product";
import TitleRow from "./TitleRow";
import product from "./Product/product.json";

type Props = typeof product[0];

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
  margin: 0 auto 64px;
  width: 1136px;
  z-index: 2;
`;

let listOfCategories = product.map((item) => item.category);
listOfCategories = listOfCategories.filter((v, i) => listOfCategories.indexOf(v) === i);

const Grid = () => {
  return (
    <GridContainer>
      <>
        {listOfCategories.map((cat, index) => (
          <>
            <TitleRow key={index} category={cat} name={""} price={0} picture={""} id={0} />
            <>
              {product
                .filter((item) => item.category === cat)
                .map((item, index) => (
                  <Product key={index} id={item.id} name={item.name} price={item.price} picture={item.picture} category={item.category} />
                ))}
            </>
          </>
        ))}
      </>
    </GridContainer>
  );
};

export default Grid;
