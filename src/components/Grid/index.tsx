import styled from "styled-components";
import Wrapper from "../Wrapper";
import Product from "./Product";
import TitleRow from "./TitleRow";
import product from "./Product/product.json";

type Props = typeof product[0];

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 64px auto;
  height: 306px;
  width: 1136px;
`;

let listOfCategories = product.map((item) => item.category);
listOfCategories = listOfCategories.filter((v, i) => listOfCategories.indexOf(v) === i);

const Grid = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Grid;
