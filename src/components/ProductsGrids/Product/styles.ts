import styled from "styled-components";

const ProductWrapper = styled.div`
  margin-top: 16px;
`;

const ProductTitle = styled.h5`
  color: #464646;
  font-size: 14px;
  font-weight: 500;
  margin: 8px auto 0 auto;
`;

const ProductPrice = styled.p`
  color: #464646;
  font-size: 16px;
  font-weight: 700;
  margin: 8px auto 0 auto;
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

const ProductId = styled(ProductTitle)``;

export { ProductWrapper, ProductTitle, ProductPrice, ProductLink, ProductId };
