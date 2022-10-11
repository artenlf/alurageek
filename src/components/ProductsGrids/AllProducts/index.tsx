import { Title } from "../../Title";
import Product from "../Product";
import GridContainer from "../styles";
import product from "../Product/products.json";
import GreySection from "../../GreySection";
import Button from "../../Button/styles";
import { CategoryRowWrapper } from "../../Wrapper";
import Link from "next/link";

const AllProductsGrid = () => {
  return (
    <GreySection>
      <GridContainer>
        <CategoryRowWrapper>
          <Title>Todos os produtos</Title>
          <Link href="/admin">
            <Button className="add-product">Adicionar produto</Button>
          </Link>
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
