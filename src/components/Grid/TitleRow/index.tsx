import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import product from "../Product/product.json";

type Props = typeof product[0];

const TitleRowWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: span 6;
  justify-content: space-between;
  height: 38px;
  margin-top: 64px;
`;

const Title = styled.h3`
  color: #464646;
  font-size: 32px;
  font-weight: 700;
`;

const Link = styled.a`
  align-items: center;
  color: #2a7ae4;
  display: flex;
  font-size: 16px;
  font-weight: 700;
`;

const TitleRow = (props: Props) => {
  const { category } = props;
  return (
    <TitleRowWrapper>
      <Title>{category}</Title>
      <Link>
        Ver Tudo <FiArrowRight size={24} style={{ marginLeft: "8px" }} />
      </Link>
    </TitleRowWrapper>
  );
};

export default TitleRow;
