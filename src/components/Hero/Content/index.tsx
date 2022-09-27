import Image from "next/image";
import styled from "styled-components";
import Button from "../../Button";

const BannerWrapper = styled.div`
  width: 1136px;
`;

const BannerTitle = styled.h2`
  font-size: 52px;
`;
const BannerSubtitle = styled.h3`
  font-size: 22px;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerTitle>Dezembro promocional</BannerTitle>
      <BannerSubtitle>Produtos selcionados com 33% de desconto</BannerSubtitle>
      <Button primary={false}>Ver Consoles</Button>
    </BannerWrapper>
  );
};

export default Banner;
