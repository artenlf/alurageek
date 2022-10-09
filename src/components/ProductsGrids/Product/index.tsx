import Image from "next/image";
import {
  ProductId,
  ProductLink,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from "./styles";

interface Props {
  id: number;
  name: string;
  price: number;
  picture: string;
  category: string;
  productsSection: boolean;
}

const Product = (props: Props) => {
  const { id, name, picture, price, productsSection } = props;
  return (
    <ProductWrapper>
      <Image src={picture} alt={name} height={"174px"} width={"176px"} />
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>R$ {price}</ProductPrice>
      {productsSection ? (
        <ProductId>#{id}</ProductId>
      ) : (
        <ProductLink href="#">Ver produto</ProductLink>
      )}
    </ProductWrapper>
  );
};

export default Product;
