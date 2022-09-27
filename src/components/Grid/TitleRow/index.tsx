import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import Wrapper from "../../Wrapper";

const TitleRowWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: span 6;
  justify-content: space-between;
  height: 38px;
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

const TitleRow = () => {
  return (
    <TitleRowWrapper>
      <Title>StarWars</Title>
      <Link>
        Ver Tudo <FiArrowRight size={24} style={{ marginLeft: "8px" }} />
      </Link>
    </TitleRowWrapper>
  );
};

export default TitleRow;
