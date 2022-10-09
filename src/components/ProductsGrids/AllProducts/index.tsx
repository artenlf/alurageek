import { Title } from "../../Title";
import Product from "../Product";
import GridContainer from "../style";
import product from "../Product/products.json";
import GreySection from "../../GreySection";
import FormContainer from "../../Containers/FormContainer";
import Button from "../../Button";
import { InlineWrapper } from "../../Wrapper";

const AllProductsGrid = () => {
  return (
    <GreySection>
      <FormContainer>
        <InlineWrapper>
          <Title>Todos os produtos</Title>
          <Button primary={false} formSubmit={true} fullWidth={false}>
            Adicionar produto
          </Button>
        </InlineWrapper>
        <GridContainer>
          {product.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              picture={item.picture}
              category={item.category}
              productsSection={true}
            />
          ))}
        </GridContainer>
      </FormContainer>
    </GreySection>
  );
};

export default AllProductsGrid;
