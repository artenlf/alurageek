import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import Title from "../../Title";
import product from "../Product/products.json";

type Props = typeof product[0];

const TitleRowWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: span 6;
  justify-content: space-between;
  height: 38px;
  margin-top: 64px;
`;

const Link = styled.a`
  align-items: center;
  color: #2a7ae4;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  :hover {
    transform: scale(110%);
  }
`;

const TitleRow = (props: Props) => {
  const { category } = props;
  return (
    <TitleRowWrapper>
      <Title>{category}</Title>
      <Link href="#">
        Ver Tudo <FiArrowRight size={24} style={{ marginLeft: "8px" }} />
      </Link>
    </TitleRowWrapper>
  );
};

export default TitleRow;
