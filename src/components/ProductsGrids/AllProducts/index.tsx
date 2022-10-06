import FormContainer from "../../Containers/FormContainer";
import { Title } from "../../Title";
import Product from "../Product";
import GridContainer from "../style";
import product from "../Product/products.json";
import GreySection from "../../GreySection";

const AllProductsGrid = () => {
  return (
    <FormContainer>
      <GreySection>
        <div>
          <Title>Todos os produtos</Title>
          <GridContainer>
            {product.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                picture={item.picture}
                category={item.category}
              />
            ))}
          </GridContainer>
        </div>
      </GreySection>
    </FormContainer>
  );
};

export default AllProductsGrid;
