import styled from "styled-components";
import Image from "next/image";
import product from "./product.json";

type Props = typeof product[0];

const ProductWrapper = styled.div`
  margin-top: 16px;
`;

const ProductTitle = styled.h5`
  color: #464646;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const ProductPrice = styled.p`
  color: #464646;
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0;
`;

const ProductLink = styled.a`
  color: #2a7ae4;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  :hover {
    opacity: 0.6;
  }
`;

const Product = (props: Props) => {
  const { picture, name, price } = props;
  return (
    <ProductWrapper>
      <Image src={picture} alt={name} height={"176px"} width={"174px"} />
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>R$ {price}</ProductPrice>
      <ProductLink href="#">Ver produto</ProductLink>
    </ProductWrapper>
  );
};

export default Product;
