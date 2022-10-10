import Product from "./Product";
import TitleRow from "./CategoryRow";
import product from "./Product/products.json";
import GridContainer from "./styles";
import { Fragment } from "react";
import WhiteSection from "../../WhiteSection/styles";
import { GridWrapper } from "../Wrapper";

type Props = typeof product[0];

export let listOfCategories = product.map((item) => item.category);
listOfCategories = listOfCategories.filter(
  (v, i) => listOfCategories.indexOf(v) === i
);

const Grid = () => {
  return (
    <WhiteSection>
      <GridWrapper>
        <GridContainer>
          {listOfCategories.map((cat, index) => (
            <Fragment key={index}>
              <TitleRow category={cat} />
              {product
                .filter((item) => item.category === cat)
                .map((item) => (
                  <Product
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    picture={item.picture}
                    category={item.category}
                    productsSection={false}
                  />
                ))}
            </Fragment>
          ))}
        </GridContainer>
      </GridWrapper>
    </WhiteSection>
  );
};

export default Grid;
