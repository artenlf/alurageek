import styled from "styled-components";

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

const ProductId = styled(ProductPrice)`
  font-size: 14px;
  font-weight: 500;
`;

export { ProductWrapper, ProductTitle, ProductPrice, ProductLink, ProductId };
