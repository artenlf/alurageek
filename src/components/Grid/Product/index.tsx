import styled from "styled-components";
import Image from "next/image";

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
`;

const ProductLink = styled.a`
  color: #2a7ae4;
  font-size: 16px;
  font-weight: 700;
`;

const Product = () => {
  return (
    <div>
      <Image src="/grogu.png" alt="" height={"176px"} width={"174px"} />
      <ProductTitle>Grogu</ProductTitle>
      <ProductPrice>R$ 99,90</ProductPrice>
      <ProductLink href="#">Ver produto</ProductLink>
    </div>
  );
};

export default Product;
