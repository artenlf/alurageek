import { Title } from "../../Title";
import Product from "../Product";
import GridContainer from "../styles";
import product from "../Product/products.json";
import GreySection from "../../GreySection";
import Button from "../../Button";
import { CategoryRowWrapper } from "../../Wrapper";

const AllProductsGrid = () => {
  return (
    <GreySection>
      <GridContainer>
        <CategoryRowWrapper>
          <Title>Todos os produtos</Title>
          <Button primary={false} formSubmit={true} fullWidth={false}>
            Adicionar produto
          </Button>
        </CategoryRowWrapper>

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
    </GreySection>
  );
};

export default AllProductsGrid;
